"use server";

import prisma from "@/lib/prisma";


export async function getAssignments(assetId: string){
    return await prisma.assignment.findMany({
        where:{
            assetId
        },
        select:{
            id: true,
            createdAt: true,
            status: true,
            assignee:{
                select:{
                    name: true,
                    businessUnit: true
                }
            }
        },
        orderBy:{
            createdAt:"desc"
        }
    })
}