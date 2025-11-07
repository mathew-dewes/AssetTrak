"use client"

import { useState } from "react";


export default function CategoryDropDown(){
      const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative inline-block"
          onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(false)}>
            
<button id="dropdownHoverButton" 
className="text-white bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-1" 
type="button">Category <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{isOpen && <div id="dropdownHover" className="z-10 bg-white divide-y absolute  divide-gray-100 rounded-lg shadow-sm w-44">
    <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
    
                
                    <p>Mobile testing (112)</p>
      
             
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
    
                
                    <p>Fibre testing (112)</p>
      
             
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
    
                
                    <p>Lifiting equipment (112)</p>
      
             
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
    
                
                    <p>Power tooling (112)</p>
      
             
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
    
                
                    <p>Machinery (112)</p>
      
             
        </a>
      </li>
     
    </ul>
</div>}


        </div>
    )
}