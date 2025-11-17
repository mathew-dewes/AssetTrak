import { AssetType } from "@/app/generated/prisma/enums"
import AvailableCard from "./cards/AvailableCard"
import { getAssetCountByStatus, getAvaiableAssetsByType } from "@/lib/db/queries/assets"
const assetTypes = Object.values(AssetType)



export default async function AvailableAssets(){

    const [assetsByType, assetCount] = await Promise.all([
        getAvaiableAssetsByType(), getAssetCountByStatus("available")
    ])

  
    return(
    <div className="mt-3 p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
       <div className="flex gap-2 items-center">
            <h2>Available</h2>
            <div className="h-3 w-3 rounded-full bg-blue-300" />
        </div>
                 <p>{assetCount} units</p>
    <div className="md:grid-cols-2 grid xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-3">
            {assetTypes.map((type, key)=>{
                return     <AvailableCard key={key} assetType={type} assets={assetsByType[type] ?? []}/>
            })}
 

       
        </div>
    
    </div>)

}

