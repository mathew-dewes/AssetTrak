

import { montserrat } from "@/app/fonts";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Navbar(){
 const session = await auth.api.getSession({
        headers: await headers()
    });
    return (
         <nav className="h-20 bg-primary-500 text-light-500 flex items-center px-10 justify-between">
            <Link href={'/assets'}><h1 className={`font-medium text-xl ${montserrat.className}`}>Asset<span className="font-bold">Trak</span></h1></Link>
     
        {session && <NavLinks/>}
         </nav>
    )
}