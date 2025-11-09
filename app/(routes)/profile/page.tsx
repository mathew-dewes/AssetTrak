import { authProtection } from "@/lib/auth/autheniticate"
import Profile from "./_components/Profile";
import AssignedAssets from "./_components/AssigneedAssets";
import { Suspense } from "react";
import SkeletonLarge from "@/components/ui/SkeletonLarge";
import UserAssignments from "./_components/UserAssignment";



export default async function page() {
    await authProtection();


    return (
        <div>
            <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
                <Suspense fallback={<SkeletonLarge />}>
                    <Profile />
                </Suspense>

            </div>

            <AssignedAssets />

            <UserAssignments />

        </div>

    )
}