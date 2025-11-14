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
    <div className="mt-3">
    <p><b>Total Assets:</b> {totalAssetCount}</p>
    <p><b>Assets available:</b> {availableAssets}</p>
    </div>


  <div className="md:grid-cols-2 grid  gap-5 mt-5">
        <InService assetCount={assetCount["in_service"]}/>
        <div className="flex flex-col gap-3">
        <Maintenance assetCount={assetCount["maintenance"]}/>
        <OutOfService assetCount={assetCount["tagged_out"]}/>
        </div>
  
      </div>
      </div>
}