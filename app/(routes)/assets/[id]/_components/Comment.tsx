import Avatar from "@/components/ui/Avatar";
import { Trash2 } from "lucide-react";



export default function Comment({comment}:
  {comment:{content: string, user:{name: string}}}){
    return (
           <div className="pb-3 md:w-1/3">
          <Avatar name={comment.user.name}/>
        
            <p className="mt-2">Friday - 11/13/15 / 13:00</p>
            <p className="mt-2">{comment.content}</p>
            <div className="flex items-center gap-1 mt-3">
    <Trash2/>
            <p className="text-violet-400">Delete</p>
            </div>
        
            <hr className="mt-5 w-7/8 xl:w-1/4 text-gray-400" />
            </div>
    )
}