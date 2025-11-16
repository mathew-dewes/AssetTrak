import { Suspense } from "react";
import AssignmentList from "./_components/AssignmentList";
import LoadingAssignments from "./_components/LoadingAssignment";
import AssignmentFilters from "./_components/AssignmentFilters";
import { AssignmentStatus, BusinessUnit } from "@/app/generated/prisma/enums";

export default async function page({ searchParams }:
    { searchParams: Promise<{ page?: string, bu?: BusinessUnit, action?: AssignmentStatus, user? : string, date?: Date }> }
){

        const params = await searchParams;
        const {bu, action, user, date} = await searchParams;
        const page = Math.max(1, Number(params.page ?? 1));
    return (
        <div>
            <Suspense fallback={<LoadingAssignments/>}>
            <AssignmentFilters/>
       <AssignmentList businessUnit={bu || null} action={action || null} user={user || null} date={date || null} currentPage={page}/>
            </Suspense>
     
        </div>
    )
}