import LoginForm from "./_components/LoginForm";

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
) {

    const params = await searchParams;
    const asset = (params.asset);

    
    return (
        <div>
{asset && <div className="text-center">
                <p>You have been redirected to the login page. Please login to checkout asset</p>
                <div className="mt-3">

                    <h3 className="font-semibold">Selected asset:</h3>
                    <p>P4.144 - Honda Generator</p>
                </div>

            </div>}
       
            <div className="mt-5">
     <h1 className="text-center font-bold">Login</h1>
            <LoginForm assetId={asset} />
            </div>
       
        </div>

    )
}