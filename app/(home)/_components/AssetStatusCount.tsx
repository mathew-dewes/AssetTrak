import { getAssetCountByStatus, getAssetTotalsByStatus, getTotalAssetCount } from "@/lib/db/queries/assets"

export default async function AssetStatusCount(){
       const [ totalAssetCount, availableAssets, assetCount] =
            await Promise.all(
                [ getTotalAssetCount(), getAssetCountByStatus("available"), getAssetTotalsByStatus()]
            );
            
    return (
             <div className="my-3">
            <p><b>Total Assets:</b> {totalAssetCount}</p>
            <div className={`mt-2 grid grid-cols-2 w-fit gap-x-10 gap-y-5 bg-white p-3
                ${totalAssetCount === availableAssets ? "hidden" : ""}`}>
                {availableAssets !== 0 && totalAssetCount !== availableAssets && 
                <div className="flex items-center gap-2">
                    <div className="h-3 rounded-full aspect-square bg-blue-300"/>
                    <p><b>Available:</b> {availableAssets}</p>
                </div>}
              
                {assetCount["in_service"] && 
                 <div className="flex items-center gap-2">
                    <div className="h-3 rounded-full aspect-square bg-green-300"/>
                    <p><b>In service:</b> {assetCount["in_service"]}</p>
                </div>
                }
               
                {assetCount["maintenance"] &&
                   <div className="flex items-center gap-2">
                    <div className="h-3 rounded-full aspect-square bg-orange-300"/>
                    <p><b>Maintenance:</b> {assetCount["maintenance"]}</p>
                </div>
                }
             
                {assetCount["tagged_out"] && 
                   <div className="flex items-center gap-2">
                    <div className="h-3 rounded-full aspect-square bg-red-300"/>
                    <p><b>Out of service:</b> {assetCount["tagged_out"]}</p>
                </div>
                }
             
             

            </div>

        </div>
    )
}