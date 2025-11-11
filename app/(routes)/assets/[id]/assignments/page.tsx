import { Suspense } from "react";
import AssignmentListAll from "./_components/AssignmentListAll";
import SkeletonLarge from "@/components/ui/SkeletonLarge";
import AssetPreview from "../_components/AssetPreview";
import { getAssignmentCount } from "@/lib/db/queries/assignments";

export default async function page({ params, searchParams }: {
    params: Promise<{ id: string, page?: string }>, 
    searchParams:Promise<{page?: string}>
}){

        const { id } = await params;
        const paramValues = await searchParams;
        const page = Math.max(1, Number(paramValues.page ?? 1));

        const assignmentCount = await getAssignmentCount(id)

        console.log(assignmentCount);
        
    return (
        <div>
             <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                                <Suspense fallback={<SkeletonLarge />}>
                                    <AssetPreview assetId={id} />
                                </Suspense>
                                    </div>
            <AssignmentListAll assetId={id} currentPage={page}/>
        </div>
    )
}