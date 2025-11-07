import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";


export default function Asset(){
    return (
     
     <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                <h2>Morrison Kobra</h2>
                  <div className="my-1 flex items-center gap-2">
                    <div className="bg-blue-300 w-3 h-3 rounded-full"/>
                    <p>available</p>
      
                </div>
                <p>Plant: P2.111</p>
                <div className="flex lg:gap-10 my-2 flex-col lg:flex-row">
                    <p>Category: Machinery</p>
                    <p>Type: Lawn mower</p>
                </div>
                <p>Aisle: BBG</p>
                <p>Serial number: GHGJ335</p>
                <div className="mt-5 flex items-center gap-2">
                        <p>Current Assignee -</p>
                    <Avatar name="Bob Marley"/>
                
                </div>
                <div className="mt-5">
                    <Button text="Check out"/>
                </div>
          
            </div>
       
    )
}