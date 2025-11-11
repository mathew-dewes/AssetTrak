"use server";

import { AssignmentStatus } from "@/app/generated/prisma/enums";
import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { delay } from "../utils";


export async function updateAssignment(assetId: string, status: AssignmentStatus) {
    const userId = await getUserId();
    if (!userId) return;

    await prisma.assignment.create(
        {
            data: {
                status,
                assignee: { connect: { id: userId } },
                asset: { connect: { id: assetId } }
            }
        }
    )
}

export async function removeAssignment(assetId: string) {
    await delay(500)
    const userId = await getUserId();
    if (!assetId) return;

    try {
        await prisma.asset.update({
            data: {
                assignee: { disconnect: true },
                status: "available"

            },
            where: { id: assetId }
        });

        await prisma.assignment.create(
            {
                data: {
                    status: "checkIn",
                    assignee: { connect: { id: userId } },
                    asset: { connect: { id: assetId } }
                }
            }

        )

        return { status: "success" };
    } catch (error) {
        console.log(error);
        return { status: "error", message: "Server Error - Please contact admin" }
    } finally {
        revalidatePath('/assets/' + assetId)
    }

}

