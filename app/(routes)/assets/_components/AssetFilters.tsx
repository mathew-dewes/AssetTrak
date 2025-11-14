import CategoryDropDown from "./dropDowns/CategoryDropDown";
import StatusDropDown from "./dropDowns/StatusDropDown";
import { getAssetTypeCounts, getCategoryCounts, getStatusCounts } from "@/lib/db/queries/assets";
import StatusDropDownMobile from "./dropDowns/StatusDropDownMobile";
import CategoryDropDownMobile from "./dropDowns/CategoryDropDownMobile";
import UserSelectDropDown from "./dropDowns/UserSelectDropDown";
import { getUserNamesAndAssetCounts } from "@/lib/db/queries/user";
import AssetTypeDropDown from "./dropDowns/AssetTypeDropDown";
import AssetTypeDropDownMobile from "./dropDowns/AssetTypeDropDownMobile";



export default async function AssetFilters(){

const [statusCounts, categoryCounts, assetTypeCounts ,userData] = await Promise.all([
    getStatusCounts(), getCategoryCounts(), getAssetTypeCounts(), getUserNamesAndAssetCounts(), 
    ]);


    

    
    return (
        <div className="my-5 flex gap-5">
            <StatusDropDown statusCounts={statusCounts}/>
            <CategoryDropDown categoryCounts={categoryCounts}  />
            <AssetTypeDropDown assetTypeCounts={assetTypeCounts}/>
             {userData.length !== 0 &&  <UserSelectDropDown users={userData} />}
            <div>
<div className="flex gap-2 w-10">
            <StatusDropDownMobile statusCounts={statusCounts}/>
            <CategoryDropDownMobile categoryCounts={categoryCounts}  />
            <AssetTypeDropDownMobile typeCounts={assetTypeCounts}  />
            </div>
     
            </div>
            
        
      
           
   
          
        </div>
    )
}