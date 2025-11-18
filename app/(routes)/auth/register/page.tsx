
import RegisterForm from "./_components/RegisterForm";
import AssetDetails from "../_components/AssetDetails";
import { getSession } from "@/lib/auth/autheniticate";
import { redirect } from "next/navigation";
import { BusinessUnit } from "@/app/generated/prisma";
const businessUnits = Object.values(BusinessUnit)

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
){

    
          const session = await getSession();
        
          if (session){
            redirect('/')
          }
        
        const params = await searchParams;
    const plantNumber = (params.asset);

    return (
        <div>
            {plantNumber && <AssetDetails plantNumber={plantNumber}/>}
            <div>

            </div>
            <div className="mt-10">
  <h1 className="text-center font-bold">Register</h1>
        <RegisterForm businessUnits={businessUnits} plantNumber={plantNumber}/>
            </div>
          
        </div>

    )
}