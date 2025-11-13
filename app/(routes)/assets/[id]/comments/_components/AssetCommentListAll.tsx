import { getAssetCommentCount, getAssetCommentsAll } from "@/lib/db/queries/comments";
import Comment from "../../_components/Comment";
import Pagination from "@/components/ui/Pagination";

export default async function AssetCommentListAll({plantNumber, currentPage}:
    {plantNumber: string, currentPage: number}
){
    const comments = await getAssetCommentsAll(plantNumber, currentPage);
    const commentCount = await getAssetCommentCount(plantNumber);
    const totalPages = Math.ceil(commentCount / 5);
    
    
    if (!comments || comments.length === 0) return
    
    return (
            <div className="mt-5">
                       <div className="bg-gray-100 border-gray-200 md:w-1/2 shadow-xl border p-5 mt-2">
   {comments.map((comment)=>{
    return <Comment key={comment.id} comment={comment}/>
   })}
   {commentCount > 5 && <Pagination type="comments" id={plantNumber} currentPage={currentPage} totalPages={totalPages}/>}

        </div>
     

            </div>

    )
}