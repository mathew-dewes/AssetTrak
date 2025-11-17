"use client"

import { montserrat } from "@/app/fonts";
import { logoutOutUser } from "@/lib/auth/autheniticate";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";


export default function NavbarClient({session}: {
    session: boolean
}){
     const [openMenu, setOpenMenu] = useState(false)
      const router = useRouter();
  
  const closeMenu = () =>{
          setOpenMenu((prev) => !prev)
      }
  
      const path = usePathname();
      async function handleSignOut() {
          await logoutOutUser();
          closeMenu()
          router.push("/auth/login")
  
   
        }
    return (
              <nav className="h-20 bg-primary-500 text-light-500 flex items-center px-10 justify-between">
                <Link href={'/'}><h1 className={`font-medium text-xl ${montserrat.className}`}>Asset<span className="font-bold">Trak</span></h1></Link>
                <ul style={{display: session ? "" : "none"}} id="primary-navigation" className="gap-10 text-gray-200 mr-30 hidden md:flex z-1000">
                    <Link className={`hover:scale-105 hover:text-light-500 hover:font-semibold transition-all duration-200 ease-in ${path === "/" ? "font-semibold text-light-500 scale-105" : ""}`} href={'/'}>Home</Link>
                    <Link className={`hover:scale-105 hover:text-light-500 hover:font-semibold transition-all duration-400 ease-in  ${path.startsWith("/assets") ? "font-semibold text-light-500 scale-105" : ""}`} href={'/assets'}>Assets</Link>
                    <Link className={`hover:scale-105 hover:text-light-500 hover:font-semibold transition-all duration-400 ease-in ${path.startsWith("/profile") ? "font-semibold text-light-500 scale-105" : ""}`} href={'/profile'}>Profile</Link>
                    <button className="hover:scale-105 hover:text-light-500 hover:font-semibold transition-all duration-400 ease-in cursor-pointer" onClick={handleSignOut}>Logout</button>

                </ul>
                <button
                style={{display: session ? "" : "none"}}
                    aria-controls="primary-navigation"
                    aria-expanded="false"
                    onClick={closeMenu}
                    className={`z-9999 md:hidden
            ${openMenu ? "hidden" : ""}`}><span className="sr-only">Menu</span>
                    <Menu size={35} color="white" /></button>
                <button
                style={{display: session ? "" : "none"}}
                    aria-controls="primary-navigation"
                    aria-expanded="false"
                    onClick={() => setOpenMenu((prev) => !prev)}
                    className={`top-6 right-10 z-9999 md:hidden fixed
            ${openMenu ? "" : "hidden"}`}><span className="sr-only">Menu</span>
                    <X size={35} color="white" /></button>


                <ul style={{display: session ? "" : "none"}} className={`gap-10 flex md:hidden fixed bg-violet-500/95 inset-0 ml-[40%] flex-col items-start px-20 py-30 transform z-20 transition ease-out duration-500
                ${openMenu ? "translate-x-0" : "translate-x-full"}`}>
                    <Link onClick={closeMenu} className={`${path === "/" ? "font-semibold  scale-105" : "font-light"}`} href={'/'}>Home</Link>
                    <Link onClick={closeMenu} className={`${path.startsWith("/assets") ? "font-semibold  scale-105" : "font-light"}`} href={'/assets'}>Assets</Link>
                    <Link onClick={closeMenu} className={`${path.startsWith("/profile") ? "font-semibold  scale-105" : "font-light"}`} href={'/profile'}>Profile</Link>
                    <button className="cursor-pointer font-light flex" onClick={handleSignOut}>Logout</button>

                </ul>
            </nav>
    )
}