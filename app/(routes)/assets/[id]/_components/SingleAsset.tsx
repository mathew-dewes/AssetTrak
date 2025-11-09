import Avatar from "@/components/ui/Avatar";
import StatusDisplay from "../../_components/StatusDisplay";

import CheckOutButton from "./CheckOutButton";
import { getUserId } from "@/lib/auth/autheniticate";
import CheckInButton from "./CheckinButton";
import { getAsset } from "@/lib/db/queries/assets";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default async function SingleAsset({ assetId }:
    { assetId: string }
) {
    const asset = await getAsset(assetId);
    const userId = await getUserId();

    if (!asset) return

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

            <div className="mt-5">
    
                {!asset.assignee || asset.assigneeId === userId ?  (!userId ?
                    <div>
                        <p>You must login or register to check out this asset</p>
                        <div className="flex gap-3 mt-3">
                            <Link href={'/auth/login?asset=' + asset.id}><Button text="Login" /></Link>
                            <Link href={'/auth/register?asset=' + asset.id}><Button text="Register" /></Link>
                        </div>
                    </div>
                    : asset.assigneeId === userId ? <CheckInButton assetId={assetId} /> : <CheckOutButton assetId={assetId} />):
                    ""}

           

            </div>

        </div>

    )
}