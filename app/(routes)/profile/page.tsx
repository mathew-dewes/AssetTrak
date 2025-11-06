import { authProtection } from "@/lib/auth/autheniticate"



export default async function page(){
    await authProtection()
    return (
        <p>Page</p>
    )
}