import { authProtection } from "@/lib/auth/autheniticate";





export default async function page() {
    await authProtection();


    return (
        <div>
            <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
              
            </div>

     

        </div>

    )
}