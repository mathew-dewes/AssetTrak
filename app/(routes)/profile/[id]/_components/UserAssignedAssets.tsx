import { getLoggedInUserAssets } from "@/lib/db/queries/assets";
import UserAssetCard from "../../_components/UserAssetCard";


export default async function UserAssignedAssets(){
    const assets = await getLoggedInUserAssets();

        if (!assets || assets.length === 0) return <p className="mt-5">This user has no assigned assets at this time</p>

    


    
    return (

         <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border mt-5">
             <div>
    <p className="font-semibold">Assigned assets:</p>
<div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5 mt-3">
            {assets.map((asset)=>{
                return <UserAssetCard key={asset.id} asset={asset}/>
            })}
       
        </div>
        </div>
            </div>

        
    )
}