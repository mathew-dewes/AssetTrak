import Button from "@/components/ui/Button";
import Link from "next/link";
import StatusDisplay from "./StatusDisplay";
import Avatar from "@/components/ui/Avatar";
import { formatCasing } from "@/lib/helper";
import { Asset } from "@/lib/db/types";
import CommentCount from "./CommentCount";
import AssignmentCount from "./AssignmentCount";





export default function AssetCard({ asset }: {
    asset: Asset
}) {

    return (
        <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
            <h2 className="uppercase">{asset.make} - <span className="font-normal text-gray-600">{asset.model}</span> </h2>
   {asset.assignee && 
   <Link href={'/profile/' + asset.assignee.name}><div className="flex items-center gap-2">
                <Avatar name={asset.assignee.name} />
        
          
            </div></Link>
    }
             <StatusDisplay status={asset.status} />

           
         
            <div className="mt-2">
      <p><b>Plant:</b> {asset.plantNumber}</p>
            <div className="flex lg:gap-10 mb-2 flex-col lg:flex-row">
                <p><b>Category:</b> {formatCasing(asset.category)}</p>
                <p><b>Type:</b> {formatCasing(asset.assetType)}</p>
            </div>
            <p><b>Aisle:</b> {asset.aisleLocation}</p>
            <p><b>Serial number:</b> {asset.serialNumber}</p>
            <div className="flex gap-3">
      {asset._count.comments != 0 &&  <CommentCount plantNumber={asset.plantNumber}/>}
      {asset._count.assignment != 0 &&  <AssignmentCount count={asset._count.assignment}/>}
            </div>
      
  
          
            </div>
      

            <div className="mt-3">
                <Link href={'/assets/' + asset.plantNumber}><Button text="View asset" /></Link>

            </div>
        </div>
    )
}