"use server"

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma"


export async function getRecentComments(){
    return await prisma.comment.findMany({
        select:{
            id: true,
            createdAt: true,
            content: true,
            user:{
                select:{
                    name: true
                }
            },
            asset:{
                select:{
                    plantNumber: true
                }
            }
        },
        take: 3
    })
}

export async function getAllComments(page: number){
    const pageSize = 6
    return await prisma.comment.findMany({
        select:{
            id: true,
            createdAt: true,
            content: true,
            user:{
                select:{
                    name: true
                }
            },
            asset:{
                select:{
                    plantNumber: true
                }
            }
        },
        orderBy:{
            createdAt:"desc"
        },
        skip: (page -1) * pageSize,
        take: 6
    
    })
}

export async function getAssetComments(plantNumber: string){
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

export async function getAssetCommentsAll(plantNumber: string, page: number){

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

export async function getAssetCommentCount(plantNumber: string){
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