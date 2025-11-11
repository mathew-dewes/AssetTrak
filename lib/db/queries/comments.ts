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
        take: 3,
        orderBy:{
            createdAt:"desc"
        }
    })
}

export async function getCommentsAll(id: string, page: number){

    const pageSize = 5
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
        },
        skip: (page - 1) * pageSize,
        take: 5
    })
}

export async function getCommentCount(assetId: string){
    return await prisma.comment.count({
        where:{assetId}
    })
}

export async function checkCommentAuthor(id: string){
        const userId = await getUserId();
    return await prisma.comment.findFirst(
      {where:{id, userId}}
    );

}