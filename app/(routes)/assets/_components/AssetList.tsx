
import {Category, Status } from "@/app/generated/prisma/enums";
import AssetCard from "./AssetCard"
import { getAssets } from "@/lib/db/queries/assets";


export default async function AssetList({status, category}:
    {status: Status, category: Category}
) {

    const assets = await getAssets(status, category);
    

    
    return (
        <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5">
            {assets.map((asset)=>{
                return <AssetCard key={asset.id} asset={asset}/>
            })}
      
    
  
        </div>
    )
}