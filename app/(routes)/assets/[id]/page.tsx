
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";
import SingleAsset from "./_components/SingleAsset";
import { Suspense } from "react";
import SkeletonLarge from "@/components/ui/SkeletonLarge";
import AssetAssignmentList from "./_components/AssetAssignmentList";
import CommentCount from "../_components/CommentCount";
import { getAssetCommentCount } from "@/lib/db/queries/comments";
export default async function page({ params }: {
    params: Promise<{ id: string }>
}) {
    const { id: plantNumber } = await params;
    const commentCount = await getAssetCommentCount(plantNumber)


    return (
        <div>
            <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
        <Suspense fallback={<SkeletonLarge />}>
            <SingleAsset plantNumber={plantNumber} />
        </Suspense>
            </div>

            <div className="mt-5">
                <p className="font-semibold">Write a comment:</p>
                         {commentCount !== 0 &&
    <div className="my-2">
           
     <CommentCount plantNumber={plantNumber}/>
                </div>}
  
           
                <CommentForm plantNumber={plantNumber} />
            </div>

            <CommentList plantNumber={plantNumber} />
        
            <AssetAssignmentList plantNumber={plantNumber} />
            
            

        </div>
    )
}