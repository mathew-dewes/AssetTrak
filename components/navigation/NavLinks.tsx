"use client"

import { logoutOutUser } from "@/lib/auth/autheniticate";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavLinks(){
        const router = useRouter();


    const path = usePathname();
            async function handleSignOut(){
            await logoutOutUser();
            router.push("/auth/login")
   
        }
    return (
         <ul className="hidden md:flex gap-10 text-gray-200 mr-30">
             <Link className={`${path === "/" ? "font-semibold text-light-500 scale-105" : ""}`}   href={'/'}>Home</Link>
            <Link className={`${path.startsWith("/assets") ? "font-semibold text-light-500 scale-105" : ""}`}   href={'/assets'}>Assets</Link>
            <Link className={`${path.startsWith("/profile") ? "font-semibold text-light-500 scale-105" : ""}`}  href={'/profile'}>Profile</Link>
                 <button className="cursor-pointer" onClick={handleSignOut}>Logout</button>
          
            </ul>
    )
}