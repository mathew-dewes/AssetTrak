import { AssetType, Category, Status } from "@/app/generated/prisma/enums";
import Button from "@/components/ui/Button";
import Link from "next/link";
import StatusDisplay from "./StatusDisplay";



type AssetProps =  {
    model: string;
    id: string;
    make: string;
    category: Category;
    assetType: AssetType;
    plantNumber: string;
    serialNumber: string;
    aisleLocation: string;
    assignee: string | null;
    status: Status;
}

export default function AssetCard({asset}:{
    asset: AssetProps
}){
    return (
         <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                <h2 className="uppercase">{asset.make} - <span className="font-normal text-gray-600">{asset.model}</span> </h2>
           <StatusDisplay status={asset.status}/>
                <p>Plant: {asset.plantNumber}</p>
                <div className="flex lg:gap-10 my-2 flex-col lg:flex-row">
                    <p>Category: {asset.category}</p>
                    <p>Type: {asset.assetType}</p>
                </div>
                <p>Aisle: {asset.aisleLocation}</p>
                <p>Serial number: {asset.serialNumber}</p>
                {asset.assignee && 
                 <div className="mt-2">
                    <p>Current Assignee: {asset.assignee}</p>
                </div>}
               
                <div className="mt-3">
                    <Link href={'/assets/123'}><Button text="View asset"/></Link>
           
                </div>
            </div>
    )
}