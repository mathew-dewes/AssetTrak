"use server"

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";
import { commentSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function postComment(values: z.infer<typeof commentSchema>, assetId: string) {
    console.log(values, assetId);
    const userId = await getUserId();
    if (!userId) return
    const { comment } = values;
    try {
        await prisma.comment.create({
            data: {
                content: comment, userId, assetId
            }
        });
        return {
            status: "success", message: "Post created successfully"
        }

    } catch (error) {
        console.log(error);

        return {
            status: "error", message: "There was an error"
        }
    } finally {
         revalidatePath(`/assets/${assetId}`)
    }


}

