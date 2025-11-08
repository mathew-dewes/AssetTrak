
import { getCategoryCounts, getStatusCounts } from "@/lib/db/queries/assets";
import StatusDropDownMobile from "./dropDowns/StatusDropDownMobile";
import CategoryDropDownMobile from "./dropDowns/CategoryDropDownMobile";


export default async function AssetFiltersMobile(){

    const statusCounts = await getStatusCounts();
    const categoryCounts = await getCategoryCounts();

    


    
    
    return (
        <div className="my-5 flex gap-5">
            <StatusDropDownMobile statusCounts={statusCounts}/>
            <CategoryDropDownMobile categoryCounts={categoryCounts}  />
        </div>
    )
}