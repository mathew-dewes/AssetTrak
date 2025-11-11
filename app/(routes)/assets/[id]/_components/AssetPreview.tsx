import Avatar from "@/components/ui/Avatar";
import StatusDisplay from "../../_components/StatusDisplay";
import { getAsset } from "@/lib/db/queries/assets";


export default async function AssetPreview({ assetId }:
    { assetId: string }
) {
    const asset = await getAsset(assetId);

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
            <p><b>Plant:</b> {asset.plantNumber}</p>
            <div className="flex md:gap-10 my-2 flex-col md:flex-row">
                <p><b>Category:</b> {asset.category}</p>
                <p><b>Type:</b> {asset.assetType}</p>

            </div>
            <div className="flex md:gap-10 my-2 flex-col md:flex-row">
                <p><b>Serial number:</b> {asset.serialNumber}</p>
                <p><b>Aisle:</b> {asset.aisleLocation}</p>

            </div>
            <div className="flex flex-col md:flex-row md:gap-10">
                <div>
                    <p><b>Aisle:</b> {asset.aisleLocation}</p>
                    <p><b>Serial number:</b> {asset.serialNumber}</p>
                </div>


            </div>


        </div>

    )
}