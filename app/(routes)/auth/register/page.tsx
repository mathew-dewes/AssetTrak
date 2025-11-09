import { BusinessUnit } from "@/app/generated/prisma/enums";
import RegisterForm from "./_components/RegisterForm";
import AssetDetails from "../_components/AssetDetails";
const businessUnits = Object.values(BusinessUnit)

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
){
        const params = await searchParams;
    const assetId = (params.asset);

    return (
        <div>
            {assetId && <AssetDetails assetId={assetId}/>}
            <div>

            </div>
            <div className="mt-5">
  <h1 className="text-center font-bold">Register</h1>
        <RegisterForm businessUnits={businessUnits} assetId={assetId}/>
            </div>
          
        </div>

    )
}