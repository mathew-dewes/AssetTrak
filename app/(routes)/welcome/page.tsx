import Button from "@/components/ui/Button";
import Link from "next/link";
import AssetDetails from "../auth/_components/AssetDetails";
import { Lock, MessageCircleMore, NotebookPen, TrendingUp } from "lucide-react";

export default async function page({searchParams}:
    {searchParams: Promise<{asset: string | null}>}
){

      const params = await searchParams;
    const plantNumber = (params.asset);

    
    return (
        <div>
<div className="mt-20 max-w-200 mx-auto text-center">

        <h1 className="text-2xl font-bold">Welcome to Asset Trak</h1>
        <p>Track, manage, and maintain your company assets with confidence.</p>
      </div>
              {plantNumber && <AssetDetails plantNumber={plantNumber}/>}



      <div className="flex justify-center gap-10 mt-10">
        <Link href={'/auth/login'}><Button text="Login" /></Link>
        <Link href={'/auth/register'}><Button text="Register" /></Link>
      </div> 


      <div className="mt-20">
       <h2 className="text-center">Features</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 mt-5">

             <div className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <NotebookPen/>
         <p className="font-bold">Asset Tracking</p>
              </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique deserunt aliquid voluptate quas quo ipsum rerum doloremque nesciunt aliquam.</p>
          
   
             

            </div>
             <div className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <Lock/>
     <p className="font-bold mt-1">Authenitication</p>
              </div>
           
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, saepe.</p>
          
   
             

            </div>
             <div className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <MessageCircleMore/>
            <p className="font-bold">Business interaction</p>
              </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quis.</p>
    
   
             

            </div>
             <div className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <TrendingUp/>
          <p className="font-bold">Asset utilization</p>
              </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eligendi.</p>
   
             

            </div>
        
      </div>
      </div>
       
      
        </div>
        
    )
}