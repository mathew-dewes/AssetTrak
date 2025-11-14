import LoadingSpinner from "@/components/ui/LoadingSpinner";
import SkeletonLarge from "@/components/ui/SkeletonLarge";

export default function LoadingRecentComments(){
    return  <div className="mt-20 w-full">
          <div className="flex">
            <LoadingSpinner text="Loading comments..." />
          </div>

          <SkeletonLarge /></div>
}