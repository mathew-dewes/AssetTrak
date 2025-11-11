"use server";

import prisma from "@/lib/prisma";
import { delay } from "../utils";
import { AssetType, Category, Status } from "@/app/generated/prisma/enums";
import { getUserId } from "@/lib/auth/autheniticate";


export async function getAssets(status: Status | null, category: Category | null, query: string | null, user: string | null){


    let matchedAssetType: AssetType | undefined = undefined;
  if (query) {
      const assetTypes = Object.values(AssetType);
        const cleanedQuery = query.toLowerCase();

    matchedAssetType = assetTypes.find(type => type.includes(cleanedQuery));
  }



  
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
        assigneeId: true,
        status:true,
        assignee:{
            select:{
                name: true,
          
            },
        
        }
       },
       where:{
        ...(status && {status:{equals: status}}),
        ...(category && {category:{equals: category}}),
        ...(user && {assignee:{name:{equals: user, mode: "insensitive"}}}),
        

          ...(query && {
        OR: [
          { make: { contains: query, mode: "insensitive" } },
          { model: { contains: query , mode: "insensitive" } },
          { plantNumber: { contains: query , mode: "insensitive" } },
          { serialNumber: { contains: query , mode: "insensitive" } },
          { serialNumber: { contains: query , mode: "insensitive" } },
          { assignee:{name: {contains: query, mode: "insensitive"}} },

          
     
        ],
      }),
          ...(matchedAssetType && {
        OR: [
           { assetType: { equals: matchedAssetType } }

          
     
        ],
      }),

        
       },
       
    
    });
}

export async function getLoggedInUserAssets(){
  const userId = await getUserId();
  if (!userId) return
  return await prisma.asset.findMany(
    {where:{assigneeId: userId},
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
       }}
  )
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

export async function getAssetNameAndPlant(id: string){
  return await prisma.asset.findUnique({
    where: {id},
    select:{
      make:true,
      model: true,
      plantNumber: true
    }

  })
}

export async function assetCount(){
    return prisma.asset.count();
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


