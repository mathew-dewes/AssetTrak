import { AssetType, Category, Status } from "@/app/generated/prisma";


export type Asset = {
    id: string;
    make: string;
    model: string;
    category: Category;
    assetType: AssetType;
    plantNumber: string;
    serialNumber: string;
    aisleLocation: string;
    assigneeId: string | null;
    assignee: {name: string} | null
    _count:{comments: number, assignment: number}

    status: Status;
}