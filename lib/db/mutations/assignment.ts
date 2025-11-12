"use server";

import { AssignmentStatus } from "@/app/generated/prisma/enums";
import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { delay } from "../utils";
import z from "zod";
import { changeAssigneeSchema } from "@/lib/validation";
import { APIError } from "better-auth/api";


export async function updateAssignment(plantNumber: string, status: AssignmentStatus) {
    const userId = await getUserId();
    if (!userId) return;

    await prisma.assignment.create(
        {
            data: {
                status,
                assignee: { connect: { id: userId } },
                asset: { connect: { plantNumber} }
            }
        }
    )
}

export async function removeAssignment(plantNumber: string) {
    await delay(500)
    const userId = await getUserId();
    if (!plantNumber) return;

    try {
        await prisma.asset.update({
            data: {
                assignee: { disconnect: true },
                status: "available"

            },
            where: { plantNumber }
        });

        await prisma.assignment.create(
            {
                data: {
                    status: "checkIn",
                    assignee: { connect: { id: userId } },
                    asset: { connect: { plantNumber } }
                }
            }

        )

        return { status: "success" };
    } catch (error) {
        console.log(error);
        return { status: "error", message: "Server Error - Please contact admin" }
    } finally {
        revalidatePath('/assets/' + plantNumber)
    }

}

export async function assignUser(values: z.infer<typeof changeAssigneeSchema>, plantNumber: string){
    await delay(500)
const validate = changeAssigneeSchema.safeParse(values);

 if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const {user} = values;

    try {
        await prisma.asset.update({
            data:{
                assignee:{
                    connect: {id: user },
                
                },
                status: "in_service"
            },
            where: {plantNumber}
        });

    revalidatePath('/assets/' + plantNumber);
       return { status: "success", message: "Assignment successful" };
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

