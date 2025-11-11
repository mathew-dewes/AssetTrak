"use server";

import prisma from "@/lib/prisma";
import { delay } from "../utils";
import { getUserId } from "@/lib/auth/autheniticate";
import { revalidatePath } from "next/cache";

import z from "zod";
import { statusChangerSchema } from "@/lib/validation";
import { APIError } from "better-auth/api";
import { updateAssignment } from "./assignment";


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

export async function changeAssetStatus(values: z.infer<typeof statusChangerSchema>, assetId: string){
    await delay(1000)
    const validate = statusChangerSchema.safeParse(values);
    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const {status} = values;

    try {
        await prisma.asset.update({
            data:{
                status
            },
            where:{id: assetId}
        });

   

        revalidatePath('/assets/' + assetId);
    return { status: "success", message: "Account created succesfully!" };
    } catch (error) {
                if (error instanceof APIError) {
            console.log(error.message, error.status)
            return {
                status: "error", message: error.message
            }

        } else {
            console.log(error);

            return {
                status: "error", message: "There was an error"
            }
        }
    }


}