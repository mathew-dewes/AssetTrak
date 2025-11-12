
import {Category, Status } from "@/app/generated/prisma/enums";
import AssetCard from "./AssetCard"
import { assetCount, getAssets } from "@/lib/db/queries/assets";
import AssetPagination from "./AssetPagination";


export default async function AssetList({status, category, query, user, currentPage}:
    {status: Status | null, category: Category | null, query: string | null, user: string | null, currentPage: number}
) {



    const [assets, numberOfAssets] = await Promise.all([
        getAssets(status, category, query, user, currentPage),
        assetCount(status, category, query, user)
    ])

    const totalPages = Math.ceil(numberOfAssets / 6);
    if (!assets || assets.length === 0) return
    

    
    return (
        <div>
<div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5">
            {assets.map((asset)=>{
                return <AssetCard key={asset.id} asset={asset}/>
            })}
       
    
  
        </div>
        {numberOfAssets > 6 &&  <AssetPagination currentPage={currentPage} totalPages={totalPages} /> }
    
        </div>
        
    )
}