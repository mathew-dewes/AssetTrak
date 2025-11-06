import { BusinessUnit } from "@/app/generated/prisma/enums";
import RegisterForm from "./_components/RegisterForm";
const businessUnits = Object.values(BusinessUnit)

export default function page(){

    return (
        <div>
            <h1 className="text-center font-bold">Register</h1>
        <RegisterForm businessUnits={businessUnits}/>
        </div>

    )
}