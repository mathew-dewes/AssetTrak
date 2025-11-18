import Button from "@/components/ui/Button";
import Link from "next/link";
import MarkAllAvaiableButton from "../MarkAllAvaiableButton";
import { getAssetOverviewByStatus } from "@/lib/db/queries/assets";
import { formatCasing } from "@/lib/helper";

export default async function Maintenance({assetCount}:
  {assetCount: number}
){


    const assets = await getAssetOverviewByStatus("maintenance")

     if (assets.length === 0) return


    return (
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
          <div className="flex flex-col h-full justify-between">
            <div>
      <div className="flex gap-2 items-center">
                   <h2>Maintenance</h2>
                <div className="h-3 w-3 rounded-full bg-orange-300"/>
               
            </div>
                     <p>{assetCount} units</p>
            <div>

          <div className="mt-3">
            {assets.map((asset)=>{
              return (
                 <div key={asset.id} className="bg-white border rounded border-gray-200 shadow-lg p-2" >
            <p><b>{asset.plantNumber}</b> - {asset.make} - {asset.model} ({formatCasing(asset.assetType)})</p>
          </div>
              )
            })}


          </div>
         
            </div>
            </div>
             <div className="mt-5 flex justify-between">
              <Link href={'/assets?status=maintenance'}><Button text="View"/></Link>
           <MarkAllAvaiableButton status={assets[0].status}/>
                              
                                  </div>

          </div>
           

           
             

          
    

        </div>
    )
}