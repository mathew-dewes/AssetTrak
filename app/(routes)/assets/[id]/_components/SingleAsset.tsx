import Avatar from "@/components/ui/Avatar";
import StatusDisplay from "../../_components/StatusDisplay";

import CheckOutButton from "./CheckOutButton";
import { getUserId } from "@/lib/auth/autheniticate";
import CheckInButton from "./CheckinButton";
import { getAsset } from "@/lib/db/queries/assets";

export default async function SingleAsset({assetId}:
    {assetId: string}
){
    const asset = await getAsset(assetId);
    const userId = await getUserId();

    if (!asset) return

    return (
     
     <div>
    <h2 className="uppercase">{asset.make} - <span className="font-normal text-gray-600">{asset.model}</span></h2>
               <StatusDisplay status={asset.status}/>
                <p>Plant: {asset.plantNumber}</p>
                <div className="flex md:gap-10 my-2 flex-col md:flex-row">
                    <p>Category: {asset.category}</p>
                    <p>Type: {asset.assetType}</p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-10">
                    <div>
 <p>Aisle: {asset.aisleLocation}</p>
                <p>Serial number: {asset.serialNumber}</p>
                    </div>

                        {asset.assignee && 
                        <div className="mt-5 flex items-center gap-2">
                        <p>Current Assignee -</p>
                    <Avatar name={asset.assignee.name}/>
                
                </div>
                }
                </div>
               
                <div className="mt-5">
                    {asset.assigneeId === userId ? <CheckInButton assetId={assetId}/> : <CheckOutButton assetId={assetId}/>}
                </div>
          
            </div>
       
    )
}