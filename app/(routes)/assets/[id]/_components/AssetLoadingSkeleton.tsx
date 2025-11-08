import Skeleton from "@/components/ui/Skeleton";
import { assetCount } from "@/lib/db/mutations/asset";

export default async function AssetLoadingSkeleton(){

    const count = await assetCount();
    let skeletonCount;

    if (count > 9){
        skeletonCount = 9
    } else {
        skeletonCount = count
    }

    
    return (
          <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5">

            
                  {Array.from({ length: skeletonCount }).map((_, i) => (
        <Skeleton key={i} />
      ))}
              
            
          
                </div>
    )
}