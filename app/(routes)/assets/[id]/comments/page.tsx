import SkeletonLarge from "@/components/ui/SkeletonLarge";
import { Suspense } from "react";
import AssetPreview from "../_components/AssetPreview";
import CommentCount from "../../_components/CommentCount";
import CommentForm from "../_components/CommentForm";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { getAssetCommentCount } from "@/lib/db/queries/comments";
import AssetCommentListAll from "./_components/AssetCommentListAll";

export default async function page({ params, searchParams }: {
    params: Promise<{ id: string, page?: string }>, 
    searchParams:Promise<{page?: string}>
}){

        const { id: plantNumber } = await params;
        const paramValues = await searchParams;
        const page = Math.max(1, Number(paramValues.page ?? 1))
        const commentCount = await getAssetCommentCount(plantNumber)


    
    return (
        <div>
                  <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                    <Suspense fallback={<SkeletonLarge />}>
                        <AssetPreview plantNumber={plantNumber} />
                    </Suspense>
                        </div>
                            <div className="mt-5">
                                        <p className="font-semibold">Write a comment:</p>
                                                
                          
                                   
                                        <CommentForm plantNumber={plantNumber} />
                                         {commentCount !== 0 &&
                            <div className="mt-5">
                                   
                             <CommentCount plantNumber={plantNumber}/>
                                        </div>}
                                    </div>
                                    <Suspense fallback={
                                        <div className="flex mt-5"><LoadingSpinner size={30} text="Loading comments..."/></div>
              }>
           <AssetCommentListAll plantNumber={plantNumber} currentPage={page}/>
                                    </Suspense>
 
        </div>
    )
}