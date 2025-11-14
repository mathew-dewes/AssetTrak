import Skeleton from "@/components/ui/Skeleton";
import prisma from "@/lib/prisma";


export default async function AvaiableAssetsSkeleton(){

    const count = await prisma.asset.count()
    let skeletonCount;

    if (count > 9){
        skeletonCount = 9
    } else {
        skeletonCount = count
    }

    
    return (
          <div className="md:grid-cols-2 grid xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                  {Array.from({ length: skeletonCount }).map((_, i) => (
        <Skeleton key={i} />
      ))}
              
            
          
                </div>
    )
}