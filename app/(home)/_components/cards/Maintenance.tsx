import Button from "@/components/ui/Button";
import prisma from "@/lib/prisma";
import { Wrench } from "lucide-react";
import Link from "next/link";

export default async function Maintenance(){


       const assets = await prisma.asset.findMany({
        where:{
          status:"maintenance"
        },
        select:{
          id: true,
          plantNumber: true,
          make: true,
          model: true,
          assetType: true
        }
       });

       
       
       

     if (assets.length === 0) return


    return (
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
          <div className="flex flex-col h-full justify-between">
            <div>
      <div className="flex gap-2 items-center">
                   <h2>Maintenance</h2>
                <div className="h-3 w-3 rounded-full bg-orange-300"/>
               
            </div>
            <div>

          <div className="flex flex-col gap-2 mt-3">
            {assets.map((asset)=>{
              return (
                 <div key={asset.id} className="rounded-xl flex items-center gap-1">
  <Wrench size={20}/>
            <p><b>{asset.plantNumber}</b> - {asset.make} - {asset.model} ({asset.assetType})</p>
          </div>
              )
            })}


          </div>
         
            </div>
            </div>
             <div className="mt-5">
              <Link href={'/assets?status=maintenance'}><Button text="View"/></Link>
                              
                                  </div>

          </div>
           

           
             

          
    

        </div>
    )
}