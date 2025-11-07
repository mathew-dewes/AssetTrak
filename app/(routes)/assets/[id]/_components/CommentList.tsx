import getComments from "@/lib/db/queries/comments";
import Comment from "./Comment";

export default async function CommentList({assetId}:{assetId: string}){

    const comments = await getComments(assetId);
    
    if (!comments || comments.length === 0) return
    
    return (
            <div className="mt-5">
                       <div className="bg-gray-100 border-gray-200 shadow-xl border p-5 mt-2">
   {comments.map((comment)=>{
    return <Comment key={comment.id} comment={comment}/>
   })}


 

        </div>
            </div>

    )
}