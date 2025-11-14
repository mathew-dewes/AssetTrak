import Button from "@/components/ui/Button";
import { authProtection } from "@/lib/auth/autheniticate"
import HomeAssignmentTable from "./(home)/_components/HomeAssignmentTable";
import HomeCommentsTable from "./(home)/_components/HomeCommentsTable";
import Link from "next/link";
import AvailableAssets from "./(home)/_components/AvailableAssets";
import AssetOverview from "./(home)/_components/AssetOverview";

export default async function page(){
  await authProtection();
  return (
    <div>
      <div className="mt-20 max-w-200 mx-auto text-center">
 <h1 className="text-2xl font-bold">Welcome to the Asset track App</h1>
 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores quas tenetur asperiores, assumenda vel repellat provident amet deleniti dignissimos.</p>
      </div>

    
      <div className="flex justify-center gap-10 mt-10">
        <Link href={'/assets'}><Button text="View Assets"/></Link>
        <Link href={'/profile'}><Button text="View Profile"/></Link>
      </div>

    <AssetOverview/>
              <AvailableAssets/>
      
    
<div className="flex gap-5 mt-20">
    <HomeAssignmentTable/>
    <HomeCommentsTable/>
</div>
   
     
    </div>
  )
}