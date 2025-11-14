import Button from "@/components/ui/Button";
import Link from "next/link";

export default function page(){
    return (
        <div>
<div className="mt-20 max-w-200 mx-auto text-center">
        <h1 className="text-2xl font-bold">Welcome to the Asset track App</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores quas tenetur asperiores, assumenda vel repellat provident amet deleniti dignissimos.</p>
      </div>


      <div className="flex justify-center gap-10 mt-10">
        <Link href={'/auth/login'}><Button text="Login" /></Link>
        <Link href={'/auth/register'}><Button text="Register" /></Link>
      </div> 
        </div>
        
    )
}