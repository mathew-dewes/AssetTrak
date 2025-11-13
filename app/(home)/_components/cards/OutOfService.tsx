import Button from "@/components/ui/Button";
import { formatCasing } from "@/lib/helper";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function OutOfService(){

      const assets = await prisma.asset.findMany({
        where:{status: "tagged_out"},
        select:{
            assetType: true
        }
    });

    if (assets.length === 0) return
    

    const assetTypes = assets.reduce((acc, { assetType }) => {
  acc[assetType] = (acc[assetType] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

   const assetArray = Object.entries(assetTypes).map(([assetType, count]) => ({
  assetType,
  count
}));
    return (
           <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                  <div className="flex flex-col h-full justify-between">
                    <div>
              <div className="flex gap-2 items-center">
                           <h2>Out of service</h2>
                        <div className="h-3 w-3 rounded-full bg-red-300"/>
                       
                    </div>
                    <div>
         {assetArray.length === 0 ? <p className="mt-1">No assets, well done</p> :
                    
                    <div className="mt-1 grid grid-cols-2 gap-2">
                    {assetArray.map((type, key)=>{
                        return  <p key={key}><span className="font-semibold text-gray-700">{formatCasing(type.assetType)}</span>:  {type.count}</p>
                    })}
        
                  </div>}
                    </div>
                    </div>
                     <div className="mt-5">
                      <Link href={'/assets?status=tagged_out'}><Button text="View"/></Link>
                             
                                          </div>
        
                  </div>
                   
        
                   
                     
        
                  
            
        
                </div>
    )
}