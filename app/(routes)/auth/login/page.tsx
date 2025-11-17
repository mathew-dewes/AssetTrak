import LoginForm from "./_components/LoginForm";
import AssetDetails from "../_components/AssetDetails";
import { getSession } from "@/lib/auth/autheniticate";
import { redirect } from "next/navigation";

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
) {

      const session = await getSession();
    
      if (session){
        redirect('/')
      }
    
    const params = await searchParams;
    const plantNumber = (params.asset);


    
    return (
        <div>
{plantNumber && <AssetDetails plantNumber={plantNumber}/>}
       
            <div className="mt-10">
     <h1 className="text-center font-bold">Login</h1>
            <LoginForm plantNumber={plantNumber} />
            </div>
       
        </div>

    )
}