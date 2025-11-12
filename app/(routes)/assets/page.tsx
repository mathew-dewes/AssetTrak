import { authProtection } from "@/lib/auth/autheniticate";
import AssetList from "./_components/AssetList";
import AssetFilters from "./_components/AssetFilters";
import SearchBar from "./_components/SearchBar";
import { Suspense } from "react";
import AssetsLoadingSkeleton from "./_components/AssetsLoadingSkeleton";
import { Category, Status } from "@/app/generated/prisma/enums";


export default async function page({ searchParams }:
    { searchParams: Promise<{ status: Status, category?: Category, page?: string, query?: string, user?: string }> }
){
await authProtection()
    
    const params = await searchParams;
    const query = (params.query ?? "").trim();
    const page = Math.max(1, Number(params.page ?? 1));
    const {status, category, user} = params;
    
    return (
    
            <div className="mt-5">
                <SearchBar/>
                <AssetFilters/>
                <Suspense fallback={<AssetsLoadingSkeleton/>}>
            <AssetList status={status || null} category={category || null} query={query || null} user={user || null} currentPage={page}/>
                </Suspense>
          
                
            
            </div>
      
    )
}