import { AssetType } from "@/app/generated/prisma/enums"
import AvailableCard from "./cards/AvailableCard"


const assetTypes = Object.values(AssetType)
export default function AvailableAssets(){
    return <div className="mt-20">
        <h2>Avaiable assets</h2>
          <p className="text-gray-500 capitalize font-medium">By type</p>
        <div className="md:grid-cols-2 grid xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-8">
            {assetTypes.map((type, key)=>{
                return     <AvailableCard key={key} assetType={type}/>
            })}
 

       
        </div>
      </div>
}