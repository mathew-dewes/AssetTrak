import InService from "./cards/InService";
import Maintenance from "./cards/Maintenance";
import OutOfService from "./cards/OutOfService";
import { getAssetCountByStatus, getAssetTotalsByStatus, getOccupiedAssetCount, getTotalAssetCount } from "@/lib/db/queries/assets";


export default async function AssetOverview(){


    const [occupiedAssets, totalAssetCount, availableAssets, assetCount] = 
    await Promise.all(
        [getOccupiedAssetCount(), getTotalAssetCount(), getAssetCountByStatus("available"), getAssetTotalsByStatus()]
    )


if (occupiedAssets === 0) return

return   <div>
    <div className="mt-2">
    <p>Total Assets: {totalAssetCount}</p>
    <p>Assets available: {availableAssets}</p>
    </div>


  <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5 mt-3">
        <InService assetCount={assetCount["in_service"]}/>
        <Maintenance assetCount={assetCount["maintenance"]}/>
        <OutOfService assetCount={assetCount["tagged_out"]}/>
      </div>
      </div>
}