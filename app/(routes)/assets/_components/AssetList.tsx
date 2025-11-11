
import {Category, Status } from "@/app/generated/prisma/enums";
import AssetCard from "./AssetCard"
import { getAssets } from "@/lib/db/queries/assets";


export default async function AssetList({status, category, query, user}:
    {status: Status | null, category: Category | null, query: string | null, user: string | null}
) {


    const assets = await getAssets(status, category, query, user);

    
    if (!assets || assets.length === 0) return
    

    
    return (
        <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5">
            {assets.map((asset)=>{
                return <AssetCard key={asset.id} asset={asset}/>
            })}
      
    
  
        </div>
    )
}