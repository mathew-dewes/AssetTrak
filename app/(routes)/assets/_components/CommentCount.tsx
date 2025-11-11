import prisma from "@/lib/prisma";
import { MessageSquareText } from "lucide-react";

export default async function CommentCount({assetId}:
    {assetId: string}
){

              const commentCount = await prisma.comment.count({
        where:{
            assetId
        }
    });
    return (
        <div className="mt-2 flex gap-1 items-center">
  <MessageSquareText size={20}/>
  <p>{commentCount}</p>
            </div>
    )
}