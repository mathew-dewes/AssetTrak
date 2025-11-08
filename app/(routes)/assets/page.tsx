import { authProtection } from "@/lib/auth/autheniticate";
import AssetList from "./_components/AssetList";
import AssetFilters from "./_components/AssetFilters";
import SearchBar from "./_components/SearchBar";
import { Suspense } from "react";
import AssetsLoadingSkeleton from "./_components/AssetsLoadingSkeleton";

export default async function page(){

await authProtection()
    
    return (
    
            <div className="mt-5">
                <SearchBar/>
              
                <AssetFilters/>
                <Suspense fallback={<AssetsLoadingSkeleton/>}>
            <AssetList/>
                </Suspense>
            
            </div>
      
    )
}