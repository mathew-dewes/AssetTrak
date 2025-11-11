
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";
import SingleAsset from "./_components/SingleAsset";
import { Suspense } from "react";
import SkeletonLarge from "@/components/ui/SkeletonLarge";
import AssignmentList from "./_components/AssignmentList";
import CommentCount from "../_components/CommentCount";
import prisma from "@/lib/prisma";
export default async function page({ params }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const commentCount = await prisma.comment.count({
        where:{
            assetId: id
        }
    });


    return (
        <div>
            <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
        <Suspense fallback={<SkeletonLarge />}>
            <SingleAsset assetId={id} />
        </Suspense>
            </div>

            <div className="mt-5">
                <p className="font-semibold">Write a comment:</p>
                         {commentCount !== 0 &&
    <div className="my-2">
           
     <CommentCount assetId={id}/>
                </div>}
  
           
                <CommentForm assetId={id} />
            </div>

            <CommentList assetId={id} />
        
            <AssignmentList assetId={id} />
            
            

        </div>
    )
}