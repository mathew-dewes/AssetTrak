"use server";

import prisma from "@/lib/prisma";
import { delay } from "../utils";
import { Category, Status } from "@/app/generated/prisma/enums";

export async function getAssets(status: Status | null, category: Category | null){
       await delay(500)
    return await prisma.asset.findMany({
        take: 9,
        orderBy: {
            make: "asc"
        },
       select:{
        id:true,
        make: true,
        model: true,
        plantNumber: true,
        category: true,
        assetType:true,
        aisleLocation:true,
        serialNumber:true,
        status:true,
        assignee:{
            select:{
                name: true
            },
        
        }
       },
       where:{
        ...(status && {status:{equals: status}}),
        ...(category && {category:{equals: category}})
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


export async function getStatusCounts(){
    const statuses = Object.values(Status)

    const statusData = await prisma.asset.groupBy({
        by:["status"],
        _count:{_all: true}
    });


return statuses.map(status => {
  const found = statusData.find(item => item.status === status);
  return {
    status,
    count: found ? found._count._all : 0,
  };
});

}


export async function getCategoryCounts(){
        const statuses = Object.values(Category)

    const categoryData = await prisma.asset.groupBy({
        by:["category"],
        _count:{_all: true}
    });


return statuses.map(category => {
  const found = categoryData.find(item => item.category === category);
  return {
    category,
    count: found ? found._count._all : 0,
  };
});
}


