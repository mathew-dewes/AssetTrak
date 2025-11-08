import Button from "@/components/ui/Button";
import Link from "next/link";
import StatusDisplay from "./StatusDisplay";

import Avatar from "@/components/ui/Avatar";
import { AssetType, Category, Status } from "@/app/generated/prisma/client";


type Asset = {
    id: string;
    make: string;
    model: string;
    category: Category;
    assetType: AssetType;
    plantNumber: string;
    serialNumber: string;
    aisleLocation: string;
    assignee: {name: string} | null
    status: Status;
}


export default function AssetCard({ asset }: {
    asset: Asset
}) {
    return (
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
            <h2 className="uppercase">{asset.make} - <span className="font-normal text-gray-600">{asset.model}</span> </h2>
   {asset.assignee && 
    <div className="flex items-center gap-2">
                <Avatar name="Mathew Dewes" />
        
          
            </div>}
             <StatusDisplay status={asset.status} />

           
         
            <p>Plant: {asset.plantNumber}</p>
            <div className="flex lg:gap-10 my-2 flex-col lg:flex-row">
                <p>Category: {asset.category}</p>
                <p>Type: {asset.assetType}</p>
            </div>
            <p>Aisle: {asset.aisleLocation}</p>
            <p>Serial number: {asset.serialNumber}</p>

            <div className="mt-3">
                <Link href={'/assets/' + asset.id}><Button text="View asset" /></Link>

            </div>
        </div>
    )
}