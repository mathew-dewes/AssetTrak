

import { montserrat } from "@/app/fonts";
import NavLinks from "./NavLinks";

export default function Navbar(){
    return (
         <nav className="h-20 bg-primary-500 text-light-500 flex items-center px-10 justify-between">
            <h1 className={`font-medium text-xl ${montserrat.className}`}>Asset<span className="font-bold">Trak</span></h1>
        <NavLinks/>
         </nav>
    )
}