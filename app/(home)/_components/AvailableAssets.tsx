import { AssetType } from "@/app/generated/prisma/enums"
import AvailableCard from "./cards/AvailableCard"
import { getAvaiableAssetsByType } from "@/lib/db/queries/assets"
const assetTypes = Object.values(AssetType)



export default async function AvailableAssets(){

  const assetsByType = await getAvaiableAssetsByType();
  
    return <div className="md:grid-cols-2 grid xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-8">
            {assetTypes.map((type, key)=>{
                return     <AvailableCard key={key} assetType={type} assets={assetsByType[type] ?? []}/>
            })}
 

       
        </div>
    
}