import CategoryDropDown from "./dropDowns/CategoryDropDown";
import StatusDropDown from "./dropDowns/StatusDropDown";
import { getCategoryCounts, getStatusCounts } from "@/lib/db/queries/assets";
import StatusDropDownMobile from "./dropDowns/StatusDropDownMobile";
import CategoryDropDownMobile from "./dropDowns/CategoryDropDownMobile";
import UserSelectDropDown from "./dropDowns/UserSelectDropDown";
import { getUserNamesAndAssetCounts } from "@/lib/db/queries/user";



export default async function AssetFilters(){

const [statusCounts, categoryCounts, userData] = await Promise.all([
    getStatusCounts(), getCategoryCounts(), getUserNamesAndAssetCounts()
    ]);

    
    return (
        <div className="my-5 flex gap-5">
            <StatusDropDown statusCounts={statusCounts}/>
            <CategoryDropDown categoryCounts={categoryCounts}  />
            <StatusDropDownMobile statusCounts={statusCounts}/>
            <CategoryDropDownMobile categoryCounts={categoryCounts}  />
            <UserSelectDropDown users={userData} />
          
        </div>
    )
}