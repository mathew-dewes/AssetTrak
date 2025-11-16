import { getAssignmentBusinessUnitCounts } from "@/lib/db/queries/assignments";
import BusinessUnitDropDown from "./dropdowns/BusinessUnitDropDown";

import UserDropDown from "./dropdowns/UserDropDown";
import { getUserNamesAndAssignmentCounts } from "@/lib/db/queries/user";
import DatePicker from "./DatePicker";
import BusinessUnitDropDownMobile from "./dropdowns/BusinessUnitDropDownMobile";
import UserDropDownMobile from "./dropdowns/UserDropDownMobile";
import DatePickerMobile from "./DatePickerMobile";

export default async function AssignmentFilters(){

    const businessUnits = await getAssignmentBusinessUnitCounts();
    const userData = await getUserNamesAndAssignmentCounts();

    console.log(userData);
    

    return (
        <div >
            <div className="my-5 md:flex gap-5 hidden ">
 <BusinessUnitDropDown results={businessUnits}/>
  <UserDropDown users={userData}/>
  <DatePicker/>
            </div>
 

  <div className="md:hidden">
    <div className="flex gap-2">
    <BusinessUnitDropDownMobile results={businessUnits}/>
    <UserDropDownMobile users={userData}/>
    </div>

<DatePickerMobile/>
  

    {/* Mobile */}

  </div>
  


        </div>
    )
}