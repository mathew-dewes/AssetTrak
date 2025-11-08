import { authProtection } from "@/lib/auth/autheniticate";
import AssetList from "./_components/AssetList";
import AssetFilters from "./_components/AssetFilters";
import SearchBar from "./_components/SearchBar";
import { Suspense } from "react";
import AssetsLoadingSkeleton from "./_components/AssetsLoadingSkeleton";
import { Category, Status } from "@/app/generated/prisma/enums";

export default async function page({ searchParams }:
    { searchParams: Promise<{ status: Status, category?: Category, page?: string }> }
){

    
    const params = await searchParams;
    const status =  (params.status) as Status
    const category = (params.category) as Category


    

await authProtection()
    
    return (
    
            <div className="mt-5">
                <SearchBar/>
              
                <AssetFilters/>
                <Suspense fallback={<AssetsLoadingSkeleton/>}>
            <AssetList status={status} category={category}/>
                </Suspense>
            
            </div>
      
    )
}