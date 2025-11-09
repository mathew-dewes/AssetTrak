import LoginForm from "./_components/LoginForm";
import AssetDetails from "../_components/AssetDetails";

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
) {

    const params = await searchParams;
    const assetId = (params.asset);


    
    return (
        <div>
{assetId && <AssetDetails assetId={assetId}/>}
       
            <div className="mt-5">
     <h1 className="text-center font-bold">Login</h1>
            <LoginForm assetId={assetId} />
            </div>
       
        </div>

    )
}