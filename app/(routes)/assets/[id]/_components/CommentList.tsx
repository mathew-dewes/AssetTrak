
import { getCommentCount, getComments } from "@/lib/db/queries/comments";
import Comment from "./Comment";
import Button from "@/components/ui/Button";
import Link from "next/link";


export default async function CommentList({assetId}:{assetId: string}){

    const comments = await getComments(assetId);
    const commentCount = await getCommentCount(assetId);

    
    
    if (!comments || comments.length === 0) return
    
    return (
            <div className="mt-5">
                       <div className="bg-gray-100 border-gray-200 md:w-1/2 shadow-xl border p-5 mt-2">
   {comments.map((comment)=>{
    return <Comment key={comment.id} comment={comment}/>
   })}


        </div>
          {commentCount > 3 && 
                    <div className="mt-4">
                        <Link href={`/assets/${assetId}/comments`}><Button text="View All"/></Link>
 
                </div>}
            </div>

    )
}