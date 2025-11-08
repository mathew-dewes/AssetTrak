"use server"

import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";
import { commentSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import z from "zod";
import { delay } from "../utils";

export async function postComment(values: z.infer<typeof commentSchema>, assetId: string) {
        await delay(500)
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

export async function deleteComment(id: string){
    await delay(500)
        const userId = await getUserId();
        if (!userId) return;

        try {
        await prisma.comment.delete({
        where:{ userId: userId, id}
    });

       return { status: "success"};
        } catch (error) {
            console.log(error);
              return { status: "error", message: "Server Error - Please contact admin"}
        } finally {

            revalidatePath('/assets/' + id)
        }
  
}

