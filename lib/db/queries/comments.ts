"use server"

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma"

export async function getComments(id: string){
    return await prisma.comment.findMany({
        where: {
            assetId: id
        },
        select:{
            id: true,
            content: true,
            createdAt: true,
            user:{
                select:{
                    name: true
                }
            }

        },
        orderBy:{
            createdAt:"desc"
        }
    })
}

export async function checkCommentAuthor(id: string){
        const userId = await getUserId();
    return await prisma.comment.findFirst(
      {where:{id, userId}}
    );

}