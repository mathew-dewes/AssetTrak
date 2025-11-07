
import AssetCard from "./AssetCard"
import { getAssets } from "@/lib/db/mutations/asset"

export default async function AssetList() {

    const assets = await getAssets()

    
    return (
        <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5">
            {assets.map((asset)=>{
                return <AssetCard key={asset.id} asset={asset}/>
            })}
      
    
  
        </div>
    )
}