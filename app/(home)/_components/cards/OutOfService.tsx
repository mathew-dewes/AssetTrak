import Button from "@/components/ui/Button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function OutOfService({assetCount}:
  {assetCount: number}
){

         const assets = await prisma.asset.findMany({
        where:{
          status:"tagged_out"
        },
        select:{
          id: true,
          plantNumber: true,
          make: true,
          model: true,
          assetType: true,

        }, take: 5
       });

     if (assets.length === 0) return
    return (
              <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
          <div className="flex flex-col h-full justify-between">
            <div>
      <div className="flex gap-2 items-center">
                   <h2>Out of service</h2>
                <div className="h-3 w-3 rounded-full bg-red-300"/>
               
            </div>
                     <p>{assetCount} units</p>
            <div>

          <div className="mt-3">
            {assets.map((asset)=>{
              return (
                 <div key={asset.id} className="bg-white border rounded border-gray-200 shadow-lg p-2" >
            <p><b>{asset.plantNumber}</b> - {asset.make} - {asset.model} ({asset.assetType})</p>
          </div>
              )
            })}


          </div>
         
            </div>
            </div>
             <div className="mt-5">
              <Link href={'/assets?status=tagged_out'}><Button text="View"/></Link>
                              
                                  </div>

          </div>
           

           
             

          
    

        </div>
    )
}