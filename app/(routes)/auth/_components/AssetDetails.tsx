import { getAssetNameAndPlant } from "@/lib/db/queries/assets"

export default async function AssetDetails({plantNumber}:
    {plantNumber: string | null}
){

    if (!plantNumber) return
     const assetDetails = await getAssetNameAndPlant(plantNumber);

     if (!assetDetails) return

     


    return (
        <div className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm text-center sm:w-100 m-auto mt-5">
        <h3 className="font-semibold uppercase">Selected asset</h3>
        <p className="mt-1"><b>{assetDetails?.plantNumber}</b> - {assetDetails?.make} {assetDetails?.model}</p>
        <p className="mt-3">To checkout this asset, please login or register to proceed</p>
             

            </div>
    )
}