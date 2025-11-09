"use server";

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";


export async function getAssignments(assetId: string) {
    return await prisma.assignment.findMany({
        where: {
            assetId
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