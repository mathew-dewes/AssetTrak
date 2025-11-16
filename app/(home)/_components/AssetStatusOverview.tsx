
import InService from "./cards/InService";
import Maintenance from "./cards/Maintenance";
import OutOfService from "./cards/OutOfService";
import { getAssetTotalsByStatus, getOccupiedAssetCount } from "@/lib/db/queries/assets";


export default async function AssetStatusOverview() {


    const [occupiedAssets, assetCount] =
        await Promise.all(
            [getOccupiedAssetCount(), getAssetTotalsByStatus()]
        )


    if (occupiedAssets === 0) return

    return <div className="md:grid-cols-2 grid  gap-5">
            <InService assetCount={assetCount["in_service"]} />
            <div className="flex flex-col gap-3">
                <Maintenance assetCount={assetCount["maintenance"]} />
                <OutOfService assetCount={assetCount["tagged_out"]} />
            </div>

        </div>

}