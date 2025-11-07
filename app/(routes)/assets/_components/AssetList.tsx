import prisma from "@/lib/prisma"
import AssetCard from "./AssetCard"

export default async function AssetList() {

    const assets = await prisma.asset.findMany({
        take: 6,
        orderBy: {
            make: "asc"
        }
    });

    
    return (
        <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5">
            {assets.map((asset)=>{
                return <AssetCard key={asset.id} asset={asset}/>
            })}
      
    
  
        </div>
    )
}