import Button from "@/components/ui/Button";
import Link from "next/link";


import { AssetType, Category, Status } from "@/app/generated/prisma/client";
import { formatCasing } from "@/lib/helper";



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


export default function UserAssetCard({ asset }: {
    asset: Asset
}) {
    return (
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
            <h2 className="uppercase">{asset.make} - <span className="font-normal text-gray-600">{asset.model}</span> </h2>

            <p>Plant: {asset.plantNumber}</p>
            <div className="flex lg:gap-10 my-2 flex-col lg:flex-row">
                <p>Category: {formatCasing(asset.category)}</p>
                <p>Type: {formatCasing(asset.assetType)}</p>
            </div>
            <p>Aisle: {asset.aisleLocation}</p>
            <p>Serial number: {asset.serialNumber}</p>

            <div className="mt-3">
                <Link href={'/assets/' + asset.id}><Button text="View asset" /></Link>

            </div>
        </div>
    )
}