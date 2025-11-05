"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks(){

    const path = usePathname()
    return (
         <ul className="flex gap-10 text-gray-200 mr-30">
            <Link className={`${path === "/assets" ? "font-semibold text-light-500 scale-105" : ""}`}   href={'/assets'}>Assets</Link>
                <Link className={`${path === "/profile" ? "font-semibold text-light-500 scale-105" : ""}`}  href={'/profile'}>Profile</Link>
                <Link className={`${path === "/auth/login" ? "font-semibold text-light-500 scale-105" : ""}`}  href={'/auth/register'}>Auth</Link>
                <p>Logout</p>
            </ul>
    )
}