import { authProtection } from "@/lib/auth/autheniticate"
import HomeAssignmentTable from "./(home)/_components/HomeAssignmentTable";
import HomeCommentsTable from "./(home)/_components/HomeCommentsTable";
import AvailableAssets from "./(home)/_components/AvailableAssets";
import AssetOverview from "./(home)/_components/AssetOverview";
import { Suspense } from "react";
import AvaiableAssetsSkeleton from "./(home)/_components/AvaiableAssetsSkeleton";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import LoadingRecentAssignments from "./(home)/_components/LoadingRecentAssignments";
import LoadingRecentComments from "./(home)/_components/LoadingRecentComments";

export default async function page() {
  await authProtection();
  return (
    <div>
<div className="mt-10">
        <h2 className="text-center md:text-left">Asset Overview</h2>
        <Suspense fallback={<div className="flex h-10 mt-5">
          <LoadingSpinner size={30} text="Loading data..." />
        </div>}>
          <AssetOverview />
        </Suspense>

      </div>

         <div className="mt-10">
        <h2 className="text-center md:text-left">Avaiable assets</h2>
        <p className="text-gray-500 text-center md:text-left capitalize font-medium">By type</p>
        <Suspense fallback={<AvaiableAssetsSkeleton />}>
          <AvailableAssets />
        </Suspense>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 mt-20">
             <div className="mt-5 w-full">
                 <p className="font-semibold">Recent Assignments:</p>
          <Suspense fallback={<LoadingRecentAssignments/>}>
          <HomeAssignmentTable />
          </Suspense>
                   </div>
             <div className="mt-5 w-full">
                 <p className="font-semibold">Recent Assignments:</p>
          <Suspense fallback={<LoadingRecentComments/>}>
          <HomeCommentsTable />
          </Suspense>
                   </div>

   

   
      </div>







    </div>
  )
}