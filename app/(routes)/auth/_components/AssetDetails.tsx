import { getAssetNameAndPlant } from "@/lib/db/queries/assets"

export default async function AssetDetails({plantNumber}:
    {plantNumber: string | null}
){

    if (!plantNumber) return
     const assetDetails = await getAssetNameAndPlant(plantNumber);


    return (
        <div className="text-center">
                <p>You have been redirected to the login page.</p>
                <p>Please login or register to checkout the asset</p>
                <div className="mt-5">

                    <h3 className="font-semibold uppercase">asset</h3>
                    <p>{assetDetails?.plantNumber} - {assetDetails?.make} {assetDetails?.model}</p>
                </div>

            </div>
    )
}