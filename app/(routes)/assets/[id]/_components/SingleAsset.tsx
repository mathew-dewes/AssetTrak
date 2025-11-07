import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import { Asset } from "@/app/generated/prisma/client";
import StatusDisplay from "../../_components/StatusDisplay";


export default function SingleAsset({asset}:{asset: Asset}){
    return (
     
     <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                           <h2 className="uppercase">{asset.make} - <span className="font-normal text-gray-600">{asset.model}</span> </h2>
               <StatusDisplay status={asset.status}/>
                <p>Plant: {asset.plantNumber}</p>
                <div className="flex lg:gap-10 my-2 flex-col lg:flex-row">
                    <p>Category: {asset.category}</p>
                    <p>Type: {asset.assetType}</p>
                </div>
                <p>Aisle: {asset.aisleLocation}</p>
                <p>Serial number: {asset.serialNumber}</p>
                {asset.assignee && 
                        <div className="mt-5 flex items-center gap-2">
                        <p>Current Assignee -</p>
                    <Avatar name={asset.assignee}/>
                
                </div>
                }
        
                <div className="mt-5">
                    <Button text="Check out"/>
                </div>
          
            </div>
       
    )
}