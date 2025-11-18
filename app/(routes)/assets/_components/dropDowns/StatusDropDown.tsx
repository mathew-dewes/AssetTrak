"use client"


import { Status } from "@/app/generated/prisma";
import { formatCasing } from "@/lib/helper";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function StatusDropDown({statusCounts}:
  {statusCounts:  {
    status: Status;
    count: number;
}[]}
){
      const [isOpen, setIsOpen] = useState(false);
        const router = useRouter();



  const updateParam = (status: Status) =>{
        router.push(`/assets?status=${status}`);
        setIsOpen(false)
}

const statusColors = (status:Status) =>{
    let color;
switch (status){
  case "available":
    color = "bg-blue-300"
    break;
  case "in_service":
    color = "bg-green-300"
    break;
  case "maintenance":
  color = "bg-orange-300"
  break;
  default :
  color = "bg-red-300"
  
}

return color;
}


    return (
        <div className="relative md:inline-block hidden"
          onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      
      >
        
            
<button id="dropdownHoverButton" 
className="text-white bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-1" 
type="button">Status <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{isOpen && <div id="dropdownHover" className="z-10 bg-white divide-y absolute  divide-gray-100 rounded-lg shadow-sm w-44 ">
    <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownHoverButton">
      <li onClick={()=> router.push('/assets')}>
        <div className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
               <div className="my-1 flex items-center gap-2 hover:font-semibold">
                    <div className={`w-3 h-3 rounded-full`}/>
                    <p>View all</p>
      
                </div>
        </div>
      </li>
      {statusCounts.map((item, key)=>{
        return  <li key={key} onClick={()=> {
          if (item.count === 0) return
          updateParam(item.status)}}>
        <div className={`block px-4 py-2 hover:bg-gray-100 ${item.count === 0 ? "pointer-events-none" : "cursor-pointer hover:font-semibold"}`}>
               <div className="my-1 flex items-center gap-2">
                    <div className={`${statusColors(item.status)} w-3 h-3 rounded-full`}/>
                    <p>{formatCasing(item.status)} ({item.count})</p>
      
                </div>
        </div>
      </li>
      })}
     
        
        
    </ul>
</div>}


        </div>
    )
}