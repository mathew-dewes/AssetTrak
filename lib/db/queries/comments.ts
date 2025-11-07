"use server"

import prisma from "@/lib/prisma"

export default async function getComments(id: string){
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