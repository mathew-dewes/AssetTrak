"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserSelectDropDown({users}:
    {users:{name: string, _count:{asset: number}}[]}
){
      const [isOpen, setIsOpen] = useState(false);
        const router = useRouter();



  const updateParam = (name: string) =>{
        router.push(`/assets?user=${name}`);
        setIsOpen(false)
}


    return <div className="relative md:inline-block hidden"
              onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          
          >
            <button 
className="text-white bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-1" 
type="button">User <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
                {isOpen && <div id="dropdownHover" className="z-10 bg-white divide-y absolute  divide-gray-100 rounded-lg shadow-sm w-44 ">
        <ul className="py-2 text-sm text-gray-700">
          {users.map((user, key)=>{
            return  <li key={key} onClick={()=> {updateParam(user.name)}}>
            <div className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-semibold`}>
                   <div className="my-1 flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full`}/>
                        <p>{user.name} ({user._count.asset})</p>
          
                    </div>
            </div>
          </li>
          })}
         
            
            
        </ul>
    </div>}
    
            </div>
    
    
    

}