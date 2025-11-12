import Button from "@/components/ui/Button";
import { authProtection } from "@/lib/auth/autheniticate"
import HomeAssignmentTable from "./(home)/_components/HomeAssignmentTable";
import HomeCommentsTable from "./(home)/_components/HomeCommentsTable";

export default async function page(){
  await authProtection();
  return (
    <div>
      <div className="mt-20 w-200 mx-auto text-center">
 <h1 className="text-2xl font-bold">Welcome to the Asset track App</h1>
 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores quas tenetur asperiores, assumenda vel repellat provident amet deleniti dignissimos.</p>
      </div>
      <div className="flex justify-center gap-10 mt-10">
        <Button text="View Assets"/>
        <Button text="View Profile"/>
      </div>
      <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5 mt-30">
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
          <h2>Asset overview:</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>

        </div>
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
          <h2>Asset overview:</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>

        </div>
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
          <h2>Asset overview:</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>

        </div>
      </div>
<div className="flex gap-5 mt-20">
    <HomeAssignmentTable/>
    <HomeCommentsTable/>
</div>
   
     
    </div>
  )
}