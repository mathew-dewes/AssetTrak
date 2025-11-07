import CategoryDropDown from "./dropDowns/CategoryDropDown";
import StatusDropDown from "./dropDowns/StatusDropDown";

export default function AssetFilters(){
    return (
        <div className="my-5 flex gap-5">
            <StatusDropDown/>
            <CategoryDropDown/>
        </div>
    )
}