import LoginForm from "./_components/LoginForm";
import AssetDetails from "../_components/AssetDetails";

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
) {

    const params = await searchParams;
    const plantNumber = (params.asset);


    
    return (
        <div>
{plantNumber && <AssetDetails plantNumber={plantNumber}/>}
       
            <div className="mt-15">
     <h1 className="text-center font-bold">Login</h1>
            <LoginForm plantNumber={plantNumber} />
            </div>
       
        </div>

    )
}