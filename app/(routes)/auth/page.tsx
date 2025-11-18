import Button from "@/components/ui/Button";
import Link from "next/link";
import AssetDetails from "../auth/_components/AssetDetails";
import { getSession } from "@/lib/auth/autheniticate";
import { redirect } from "next/navigation";

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
){

  const session = await getSession();

  if (session){
    redirect('/')
  }

    const params = await searchParams;
    const plantNumber = (params.asset);

    const href = (plantNumber: string | null, method: "login" | "register") =>{
      if (plantNumber){
        if(method === "login"){
          return "/auth/login?asset=" + plantNumber
        } else {
          return "/auth/register?asset=" + plantNumber
        }
        
      } else {
        return "/auth/" + method
      }
    }

    
    return (
        <div>
<div className="mt-20 max-w-200 mx-auto text-center">

        <h1 className="text-2xl font-bold">AssetTrak</h1>
        <p className="text-sm mt-1">Track, manage, and maintain your assets with confidence</p>
      </div>
              {plantNumber && <AssetDetails plantNumber={plantNumber}/>}



      <div className="flex justify-center gap-10 mt-10">
        <Link href={href(plantNumber, "login")}><Button text="Login" /></Link>
        <Link href={href(plantNumber, "register")}><Button text="Register" /></Link>
      </div> 
       
      
        </div>
        
    )
}