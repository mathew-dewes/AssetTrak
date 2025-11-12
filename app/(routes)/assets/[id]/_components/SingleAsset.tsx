import Avatar from "@/components/ui/Avatar";
import StatusDisplay from "../../_components/StatusDisplay";

import CheckOutButton from "./CheckOutButton";
import { getUserId, isUserAdmin } from "@/lib/auth/autheniticate";
import CheckInButton from "./CheckinButton";
import { getAsset } from "@/lib/db/queries/assets";
import Button from "@/components/ui/Button";
import Link from "next/link";
import StatusDropDown from "./StatusDropDown";
import UnassignAssetButton from "./UnassignAssetButton";
import AssignUserDropDown from "./AssignUserDropDown";
import { getUserNames } from "@/lib/db/queries/user";

export default async function SingleAsset({ plantNumber }:
    { plantNumber: string }
) {
    const asset = await getAsset(plantNumber);
    const userId = await getUserId();
    if (!asset || !userId) return

    const admin = await isUserAdmin(userId);
    const users = await getUserNames();
    
    



    return (

        <div>
            <h2 className="uppercase">{asset.make} - <span className="font-normal text-gray-600">{asset.model}</span></h2>
            {asset.assignee &&
                <div className="mt-2 flex items-center gap-2">
                    <p className="uppercase text-sm font-medium">Assignee:</p>
                    <Avatar name={asset.assignee.name} />

                </div>
            }
            <StatusDisplay status={asset.status} />
            <p>Plant: {asset.plantNumber}</p>
            <div className="flex md:gap-10 my-2 flex-col md:flex-row">
                <p>Category: {asset.category}</p>
                <p>Type: {asset.assetType}</p>

            </div>
            <div className="flex md:gap-10 my-2 flex-col md:flex-row">
                <p>Serial number: {asset.serialNumber}</p>
                <p>Aisle: {asset.aisleLocation}</p>

            </div>
            <div className="flex flex-col md:flex-row md:gap-10">
                <div>
                    <p>Aisle: {asset.aisleLocation}</p>
                    <p>Serial number: {asset.serialNumber}</p>
                </div>


            </div>

            <div className="mt-2">
    
                {asset.assigneeId === userId || asset.status == "available" ? 
                (!userId ?
                    <div>
                        <p>You must login or register to check out this asset</p>
                        <div className="flex gap-3 mt-3">
                            <Link href={'/auth/login?asset=' + asset.id}><Button text="Login" /></Link>
                            <Link href={'/auth/register?asset=' + asset.id}><Button text="Register" /></Link>
                        </div>
                    </div>
                    : asset.assigneeId === userId ? <CheckInButton plantNumber={plantNumber} /> : <CheckOutButton plantNumber={plantNumber} />):
                    ""}
                    {asset.status === "maintenance" && <p className="mt-3 text-sm text-orange-600">This asset is under repairs and cannot be checked out</p>}
                    {asset.status === "tagged_out" &&  <p className="mt-3 text-sm text-red-600">This asset has been tagged out. Use of this asset is stritly permited</p>}
                    {asset.status === "in_service" && asset.assigneeId != userId && <p className="mt-3 text-sm text-green-600">This asset has been checked out by {asset.assignee?.name} from {asset.assignee?.businessUnit}</p>}
                    {admin && asset.status === "in_service" && asset.assigneeId !== userId && <div className="mt-5"><UnassignAssetButton plantNumber={plantNumber}/></div>}

              

                    {admin && asset.status !=="in_service"  && <div className="mt-5 flex gap-5">
                        <div>
         <p className="text-sm uppercase font-semibold">Asset Status:</p>
                    <StatusDropDown plantNumber={plantNumber} initialStatus={asset.status}/>
                        </div>
                        <div>
         <p className="text-sm uppercase font-semibold">Assign asset to:</p>
                    <AssignUserDropDown users={users} plantNumber={plantNumber}/>
                        </div>
           
                    </div>}
                    <div>
                  
                    </div>
               
           

           

            </div>

        </div>

    )
}