"use client"


import { BusinessUnit } from "@/app/generated/prisma";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function BusinessUnitDropDownMobile({ results }:
  {
    results: {
      unit: BusinessUnit;
      count: number;
    }[]
  }
){
      const [isOpen, setIsOpen] = useState(false);
              const router = useRouter();
  
                const updateParam = (unit: BusinessUnit) =>{
                router.push(`/assets/assignments?bu=${unit}`);
                   setIsOpen(false)
              }


    return (
        <div className="relative">
            
<button
onClick={()=> setIsOpen(!isOpen)}
className="text-white bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mb-1" 
type="button">Business unit <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{isOpen && <div id="dropdownHover" className="z-10 bg-white divide-y absolute  divide-gray-100 rounded-lg shadow-sm w-44">
    <ul className="py-2 text-sm text-gray-700">
      {results.map((item, key)=>{
        return  <li key={key} onClick={()=>updateParam(item.unit)}>
       <div className={`block px-4 py-2 hover:bg-gray-100 ${item.count === 0 ? "pointer-events-none" : "cursor-pointer"}`}>
           
                    <p>{item.unit} ({item.count})</p>
      
               
        </div>
      </li>
      })}
     

  
 
     
    </ul>
</div>}


        </div>
    )
}