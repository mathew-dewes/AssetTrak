"use server";

import prisma from "@/lib/prisma";
import { delay } from "../utils";
import { getUserId } from "@/lib/auth/autheniticate";
import { revalidatePath } from "next/cache";
import updateAssignment from "./assignment";


export async function getAssets(){
       await delay(500)
    return await prisma.asset.findMany({
        take: 9,
        orderBy: {
            make: "asc"
        }
    });
}

export async function assetCount(){
    return prisma.asset.count();
}

export async function getAsset(id: string){
           await delay(500)
    return await prisma.asset.findUnique({
  where: {id},
  include:{
    assignee: true
  }
    });
}

export async function checkoutAsset(id: string){
           await delay(500)
              const userId = await getUserId();
        if (!userId) return;

        try {
            await prisma.asset.update({
                data:{
                    assignee:{connect:{id: userId}},
                    status:"in_service"
                
                },
                where:{id}
            });
        
await updateAssignment(id ,"checkOut")
            
    return { status: "success"};
        } catch (error) {
            console.log(error);
              return { status: "error", message: "Server Error - Please contact admin"}
        } finally {
        
                    revalidatePath('/assets/' + id)
                }

}

export async function checkinAsset(id: string){
           await delay(500)
              const userId = await getUserId();
        if (!userId) return;

        try {
            await prisma.asset.update({
                data:{
                    assignee:{disconnect:true},
                    status:"available"
                
                },
                where:{id, assigneeId: userId}
            });

            await updateAssignment(id ,"checkIn")
                   return { status: "success"};
        } catch (error) {
            console.log(error);
              return { status: "error", message: "Server Error - Please contact admin"}
        } finally {
        
                    revalidatePath('/assets/' + id)
                }

}