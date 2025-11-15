


import { getSession } from "@/lib/auth/autheniticate";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {

    const session = await getSession();


    return (

        <div>
       <NavbarClient session={!!session}/>
        </div>

    )
}

