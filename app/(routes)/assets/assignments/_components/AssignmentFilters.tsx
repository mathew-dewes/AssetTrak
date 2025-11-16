import { getAssignmentStatusCounts, getAssignmentBusinessUnitCounts } from "@/lib/db/queries/assignments";
import BusinessUnitDropDown from "./dropdowns/BusinessUnitDropDown";
import StatusDropDown from "./dropdowns/StatusDropDown";

export default async function AssignmentFilters(){

    const businessUnits = await getAssignmentBusinessUnitCounts();
    const statuses = await getAssignmentStatusCounts();

    return (
        <div className="my-5 flex gap-5">
  <BusinessUnitDropDown results={businessUnits}/>
  <StatusDropDown results={statuses}/>


        </div>
    )
}