import LoadingSpinner from "@/components/ui/LoadingSpinner";
import SkeletonLarge from "@/components/ui/SkeletonLarge";

export default function LoadingAssignments(){
    return (
        <div className="mt-20 w-full">
                              <div className="flex">
                                <LoadingSpinner text="Loading assignments..." />
                              </div>
                              <div className="mt-5">
                                <SkeletonLarge />
                              </div>
                    
                            </div>
    )
}