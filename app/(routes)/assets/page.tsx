import { authProtection } from "@/lib/auth/autheniticate";
import AssetList from "./_components/AssetList";

export default async function page(){

await authProtection()
    
    return (
        <div>
            <h1>Assets</h1>
            <div className="mt-5">
                <AssetList/>
            </div>
        </div>
    )
}