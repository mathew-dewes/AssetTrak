import Button from "@/components/ui/Button";
import { authProtection } from "@/lib/auth/autheniticate"
import HomeAssignmentTable from "./(home)/_components/HomeAssignmentTable";
import HomeCommentsTable from "./(home)/_components/HomeCommentsTable";
import Link from "next/link";
import OutOfService from "./(home)/_components/cards/OutOfService";
import InService from "./(home)/_components/cards/InService";
import Available from "./(home)/_components/cards/Available";
import Maintenance from "./(home)/_components/cards/Maintenance";

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


      <div className="mt-30">
  <h2>Asset Overview</h2>
  <p className="text-gray-500 capitalize font-medium">By type</p>
  <div className="md:grid-cols-2 grid xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-3">
        <InService/>
       <Available/>

       <Maintenance/>

       <OutOfService/>
      </div>
      </div>
      
    
<div className="flex gap-5 mt-20">
    <HomeAssignmentTable/>
    <HomeCommentsTable/>
</div>
   
     
    </div>
  )
}