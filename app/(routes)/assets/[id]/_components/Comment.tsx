import Avatar from "@/components/ui/Avatar";
import DeleteCommentButton from "../DeleteCommentButton";
import { checkCommentAuthor } from "@/lib/db/queries/comments";



export default async function Comment({comment}:
  {comment:{id: string, content: string, user:{name: string}, createdAt: Date}}){


    const check = await checkCommentAuthor(comment.id);
    
    const nzTime = new Date(comment.createdAt).toLocaleTimeString("en-NZ", {
                        timeZone: "Pacific/Auckland",
                        hour12: false, 
                        hour: "2-digit",
                        minute: "2-digit",
              
                    });

    return (
           <div className="pb-3 md:w-3/4">
          <Avatar name={comment.user.name}/>
        
            <p className="mt-2">{comment.createdAt.toLocaleDateString("en-NZ")} - {nzTime}</p>
            <p className="mt-2">{comment.content}</p>
            {check && <DeleteCommentButton id={comment.id}/>}
    
        
            <hr className="mt-5 w-7/8 xl:w-1/4 text-gray-400" />
            </div>
    )
}