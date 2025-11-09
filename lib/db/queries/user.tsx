"use server";

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";
import { delay } from "../utils";

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

export async function getUserDetails(userId: string){
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