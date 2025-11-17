"use client";

import { Github, Lock, MessageCircleMore, NotebookPen, TrendingUp } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Features(){

        const pathname = usePathname();
              if ( !pathname.startsWith('/auth')) return
    return (
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
           
                <p>Ensure full traceability of your assets by allowing users to assign and checkout assets using their profile as well as marking and commenting on assets that may be under repairs and or out of service</p>
          
   
             

            </div>
             <div className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <MessageCircleMore/>
            <p className="font-bold">Business interaction</p>
              </div>

            <p>Rest assured that user credentials are securely stored and encrypted within our robust authentication system</p>
    
   
             

            </div>
             <div className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <TrendingUp/>
          <p className="font-bold">Asset utilization</p>
              </div>

          <p>Allow the entire business to communicate on asset locations, conditions and other pressing matters</p>
   
             

            </div>
        
      </div>

      <div className="md:mt-25 mt-15">
        <h1 className="text-center md:text-left">Inspiration</h1>
       <div className="m-auto mt-5 flex flex-col md:flex-row gap-5 md:gap-20 justify-between">
        <div className="max-w-150 h-fit sm:min-w-[300px] aspect-square relative">
    <Image className="rounded shadow-2xl" src={'/beach.JPG'}  fill alt="Hello"/>
        </div>
   
       <div>
       <div className="md:mt-3">
    <p className="my-2">Through working for a mobile company as an equipment specialist, I was responsible for managing asset tracking for the wider business. With my passion for web development, I wanted to develop an app that could assist and solve the many issues I faced on a daily basis. These issues included, manually having to write what asset a staff member needed and double checking the inventory to ensure the asset they requested was available. The app I have developed solves these issues by:</p>
          <ul className="pl-5">
            <li className="list-disc list-inside">Giving me the full picture of what assets are not only available but also what assets are tagged out due to maintenance purposes.</li>
            <li className="list-disc list-inside">Allowing me to filter through assignments using key informations to investigate an assets where whereabouts</li>
            <li className="list-disc list-inside">Giving the staff members a change to engage through the comments to flag any concerns of the assets they have in their possession</li>
          </ul>
       </div>
      
          <div className="mt-5">
            <div className="flex items-center">
                <Github/>
                 <p>Github: Lorem ipsum dolor sit amet.</p>
            </div>

          </div>
       </div>
   
        </div>
      </div>

      
      </div>
    )
}
