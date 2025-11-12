"use server"

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma"


export async function getComments(plantNumber: string){
    return await prisma.comment.findMany({
        where: {
            asset:
            {plantNumber}
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

export async function getCommentsAll(plantNumber: string, page: number){

    const pageSize = 5
        return await prisma.comment.findMany({
        where: {
            asset:{
                plantNumber
            }
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

export async function getCommentCount(plantNumber: string){
    return await prisma.comment.count({
        where:{asset:{
            plantNumber
        }}
    })
}

export async function checkCommentAuthor(id: string){
        const userId = await getUserId();
    return await prisma.comment.findFirst(
      {where:{id, userId}}
    );

}