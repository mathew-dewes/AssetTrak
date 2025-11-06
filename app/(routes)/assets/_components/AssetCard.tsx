import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AssetCard(){
    return (
         <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                <h2>Morrison Kobra</h2>
                  <div className="my-1 flex items-center gap-2">
                    <div className="bg-green-300 w-3 h-3 rounded-full"/>
                    <p>In service</p>
      
                </div>
                <p>Plant: P2.111</p>
                <div className="flex lg:gap-10 my-2 flex-col lg:flex-row">
                    <p>Category: Machinery</p>
                    <p>Type: Lawn mower</p>
                </div>
                <p>Aisle: BBG</p>
                <p>Serial number: GHGJ335</p>
                <div className="mt-2">
                    <p>Current Assignee: Bob Marley</p>
                </div>
                <div className="mt-3">
                    <Link href={'/assets/123'}><Button text="View asset"/></Link>
           
                </div>
            </div>
    )
}