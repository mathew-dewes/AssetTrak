import { authProtection } from "@/lib/auth/autheniticate";
import { Suspense } from "react";
import SingleProfile from "./_components/SingleProfile";
import SkeletonLarge from "@/components/ui/SkeletonLarge";
import UserAssignedAssets from "./_components/UserAssignedAssets";
import UserAssignments from "./_components/UserAssignment";





export default async function page({ params }: {
    params: Promise<{ id: string }>
}) {
    await authProtection();
    const { id } = await params;
      const userName = decodeURIComponent(id);


    return (
        <div>
            <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
              <Suspense fallback={<SkeletonLarge/>}>
                <SingleProfile userName={userName} />
              </Suspense>
            </div>
            <UserAssignedAssets/>
            <UserAssignments userName={userName}/>

     

        </div>

    )
}