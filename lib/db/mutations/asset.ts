"use server";

import prisma from "@/lib/prisma";


export async function getAssets(){
    return await prisma.asset.findMany({
        take: 6,
        orderBy: {
            make: "asc"
        }
    });
}

export async function getAsset(id: string){
    return await prisma.asset.findUnique({
  where: {id}
    });
}