import { authProtection } from "@/lib/auth/autheniticate"
import HomeAssignmentTable from "./(home)/_components/HomeAssignmentTable";
import HomeCommentsTable from "./(home)/_components/HomeCommentsTable";
import AvailableAssets from "./(home)/_components/AvailableAssets";
import AssetStatusOverview from "./(home)/_components/AssetStatusOverview";
import { Suspense } from "react";
import AvaiableAssetsSkeleton from "./(home)/_components/AvaiableAssetsSkeleton";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import LoadingRecentAssignments from "./(home)/_components/LoadingRecentAssignments";
import LoadingRecentComments from "./(home)/_components/LoadingRecentComments";
import AssetStatusCount from "./(home)/_components/AssetStatusCount";
import SkeletonLarge from "@/components/ui/SkeletonLarge";

export default async function page() {
  await authProtection();
  return (
    <div>
      <div className="mt-5">

        <Suspense fallback={<div className="mt-5 mb-9.5">
          <SkeletonLarge />
          </div>}>
          <AssetStatusCount />
</Suspense>

      </div>
      <div className="mt-10">
        <Suspense fallback={<AvaiableAssetsSkeleton />}>
          <AvailableAssets />
        </Suspense>
      </div>

      <div className="mt-10">
        <Suspense fallback={<div className="flex h-10 mt-5">
          <LoadingSpinner size={30} text="Loading data..." />
        </div>}>
          <AssetStatusOverview />
        </Suspense>
      </div>

<div className="flex flex-col xl:flex-row gap-5 md:mt-10">
        <div className="mt-5 w-full">
          <p className="font-semibold">Recent Assignments:</p>
          <Suspense fallback={<LoadingRecentAssignments />}>
            <HomeAssignmentTable />
          </Suspense>
        </div>
        <div className="mt-5 w-full">
          <p className="font-semibold">Recent Comments:</p>
          <Suspense fallback={<LoadingRecentComments />}>
            <HomeCommentsTable />
          </Suspense>
        </div>




      </div>







    </div>
  )
}