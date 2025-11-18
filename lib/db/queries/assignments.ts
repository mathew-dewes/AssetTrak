"use server";


import { AssignmentStatus, BusinessUnit } from "@/app/generated/prisma";
import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";



export async function getAssignments(businessUnit: BusinessUnit | null, action: AssignmentStatus | null, user: string | null, date: Date | null , page: number) {
    const pageSize = 6
    return await prisma.assignment.findMany({
      select: {
            createdAt: true,
            status: true,
            id: true,
            asset:{
                select:{
                    plantNumber: true,
                    make: true,
                    model: true,
                    status: true
                }
            },
            assignee: {
                select: {
                    name: true,
                    businessUnit: true
                }
            }
        },
        where: {
            ...businessUnit && {
                assignee: {
                    businessUnit: { equals: businessUnit }
                }
            },
            ...action && { status: { equals: action } },
            ...user && { assignee: { name: { equals: user } } },
            ...date && {createdAt:{lt: new Date(date)}}
        }
        ,
        orderBy: {
            createdAt: "desc"
        },
        skip: (page - 1) * pageSize,
        take: 6
    });
}

export async function getFilteredAssignmentCount(businessUnit: BusinessUnit | null, action: AssignmentStatus | null, user: string | null, date: Date | null){
    return await prisma.assignment.count({
        where: {
            ...businessUnit && {
                assignee: {
                    businessUnit: { equals: businessUnit }
                }
            },
            ...action && { status: { equals: action } },
            ...user && { assignee: { name: { equals: user } } },
            ...date && {createdAt:{lt: new Date(date)}}
        }
    })
}

export async function getRecentAssignments() {
    return await prisma.assignment.findMany({
        select: {
            createdAt: true,
            status: true,
            id: true,
            asset:{
                select:{
                    plantNumber: true,
                    make: true,
                    model: true,
                    status: true
                }
            },
            assignee: {
                select: {
                    name: true,
                    businessUnit: true
                }
            }
        },
        take: 3,
        orderBy:{
            createdAt:"desc"
        }
    });
}

export async function getRecentAssetAssignments(plantNumber: string) {
    return await prisma.assignment.findMany({
        where: {
            asset: {
                plantNumber
            }
        },
         select: {
            createdAt: true,
            status: true,
            id: true,
            asset:{
                select:{
                    plantNumber: true,
                    make: true,
                    model: true,
                    status: true
                }
            },
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

export async function getAssetAssignmentsAll(plantNumber: string, page: number) {
    const pageSize = 5
    return await prisma.assignment.findMany({
        where: {
            asset: {
                plantNumber
            }
        },
         select: {
            createdAt: true,
            status: true,
            id: true,
            asset:{
                select:{
                    plantNumber: true,
                    make: true,
                    model: true,
                    status: true
                }
            },
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
        skip: (page - 1) * pageSize,
        take: 5

    })
}

export async function getAssignmentCount(plantNumber: string) {
    return await prisma.assignment.count({
        where: {
            asset: {
                plantNumber
            }
        }
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
            asset: {
                select: {
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
            asset: {
                select: {
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

export async function getAssignmentBusinessUnitCounts() {

    const businessUnits = Object.values(BusinessUnit);

    const assignments = await prisma.assignment.findMany({
        select: {
            id: true,
            assignee: {
                select: { businessUnit: true }
            }
        }
    });


    const counts: Record<BusinessUnit, number> = {
        mobile: 0,
        civil: 0,
        platforms: 0,
    };


    for (const a of assignments) {
        const bu = a.assignee?.businessUnit;
        if (bu) counts[bu] += 1;
    }

    return businessUnits.map(unit => ({
        unit,
        count: counts[unit] ?? 0
    }));

}




export async function getAssignmentStatusCounts() {
    const statues = Object.values(AssignmentStatus);

    const data = await prisma.assignment.groupBy({
        by: ["status"],

        _count: { _all: true },

    });

    return statues.map(status => {
        const found = data.find(item => item.status === status);
        return {
            status,
            count: found ? found._count._all : 0,
        };
    });
}

