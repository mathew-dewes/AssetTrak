"use server";

import prisma from "@/lib/prisma";
import { delay } from "../utils";
import { getUserId } from "@/lib/auth/autheniticate";
import { revalidatePath } from "next/cache";

import z from "zod";
import { statusChangerSchema } from "@/lib/validation";
import { APIError } from "better-auth/api";
import { updateAssignment } from "./assignment";
import { Status } from "@/app/generated/prisma/enums";


export async function checkoutAsset(plantNumber: string){
           await delay(500)
              const userId = await getUserId();
        if (!userId) return;

        try {
            await prisma.asset.update({
                data:{
                    assignee:{connect:{id: userId}},
                    status:"in_service"
                
                },
                where:{plantNumber}
            });
        
await updateAssignment(plantNumber ,"checkOut")
            
    return { status: "success"};
        } catch (error) {
            console.log(error);
              return { status: "error", message: "Server Error - Please contact admin"}
        } finally {
        
                    revalidatePath('/assets/' + plantNumber)
                }

}

export async function checkinAsset(plantNumber: string){
           await delay(500)
              const userId = await getUserId();
        if (!userId) return;

        try {
            await prisma.asset.update({
                data:{
                    assignee:{disconnect:true},
                    status:"available"
                
                },
                where:{plantNumber, assigneeId: userId}
            });

            await updateAssignment(plantNumber ,"checkIn")
                   return { status: "success"};
        } catch (error) {
            console.log(error);
              return { status: "error", message: "Server Error - Please contact admin"}
        } finally {
        
                    revalidatePath('/assets/' + plantNumber)
                }

}

export async function changeAssetStatus(values: z.infer<typeof statusChangerSchema>, plantNumber: string){
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
            where:{plantNumber}
        });

   

        revalidatePath('/assets/' + plantNumber);
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

export async function markAllAvaiable(status: Status){


    try {
        await prisma.asset.updateMany({
        where:{status},
        data:{
            status: "available"
        }
    });

    return { status: "success"};

    } catch (error) {
                    console.log(error);
              return { status: "error", message: "Server Error - Please contact admin"}
        
    } finally{
                            revalidatePath('/')
    }



}