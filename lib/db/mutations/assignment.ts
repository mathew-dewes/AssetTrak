"use server";

import { AssignmentStatus } from "@/app/generated/prisma/enums";
import { getUserId } from "@/lib/auth/autheniticate";
import prisma from "@/lib/prisma";


export default async function updateAssignment(assetId: string ,status: AssignmentStatus){
            const userId = await getUserId();
            if (!userId) return;
            
    await prisma.assignment.create(
        {data:{
            status,
            assignee:{connect:{id: userId}},
            asset:{connect:{id: assetId}}
        }}
    )
}