"use server";

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";


export async function getAssignments(plantNumber: string) {
    return await prisma.assignment.findMany({
        where: {
            asset:{
                plantNumber
            }
        },
        select: {
            id: true,
            createdAt: true,
            status: true,
            assignee: {
                select: {
                    name: true,
                    businessUnit: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 5
    })
}

export async function getAssignmentsAll(plantNumber: string, page: number){
        const pageSize = 5
        return await prisma.assignment.findMany({
        where: {
            asset:{
                plantNumber
            }
        },
        select: {
            id: true,
            createdAt: true,
            status: true,
            assignee: {
                select: {
                    name: true,
                    businessUnit: true
                }
            },
            
        },
        
        orderBy: {
            createdAt: "desc"
        },
        skip: (page - 1) * pageSize,
        take: 5
     
    })
}

export async function getAssignmentCount(plantNumber: string){
    return await prisma.assignment.count({
        where:{asset:{
            plantNumber
        }}
    })
}

export async function getLoggedInUserAssignments() {
    const userId = await getUserId();
    if (!userId) return

    return await prisma.assignment.findMany({
        where: {
            assigneeId: userId
        },
        select: {
            id: true,
            createdAt: true,
            status: true,
            assignee: {
                select: {
                    name: true,
                    businessUnit: true
                }
            },
            asset:{
                select:{
                    make: true,
                    model: true,
                    plantNumber: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        },
         take: 5
    })
}

export async function getUserAssignments(userId: string) {
    if (!userId) return

    return await prisma.assignment.findMany({
        where: {
            assigneeId: userId
        },
        select: {
            id: true,
            createdAt: true,
            status: true,
            assignee: {
                select: {
                    name: true,
                    businessUnit: true
                }
            },
            asset:{
                select:{
                    make: true,
                    model: true,
                    plantNumber: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        },
         take: 5
    })
}