"use server";

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";
import { delay } from "../utils";


export async function getUserNamesAndAssetCounts(){
    return await prisma.user.findMany({
        select:{
            name: true,
            _count:{
                select:{
                    asset: true
                }
            }
        },
        where:{
            asset: {some: {}}
        }
    })
}

export async function getUserNamesAndAssignmentCounts(){
    return await prisma.user.findMany({
        select:{
            name: true,
            _count:{
                select:{
                    assignment:true
                }
            }
        },
     
    })
}





export async function getUserNames(){
    return await prisma.user.findMany({
        select:{
            name:true,
            id: true
        }
    })
}


export async function getLoggedinUserDetails(){
    await delay(500)
const userId = await getUserId();
if (!userId) return

return await prisma.user.findUnique({
    where:{id: userId},
    select:{
        id: true,
        name: true,
        email: true,
        businessUnit: true,
        asset:{
            select:{
                id: true
            }
        }
    }
})
}

export async function getUserDetails(userName: string){

    
    return await prisma.user.findUnique({
    where:{name: userName},
    select:{
        id: true,
        name: true,
        email: true,
        businessUnit: true,
        asset:{
            select:{
                id: true
            }
        }
    }
})
}