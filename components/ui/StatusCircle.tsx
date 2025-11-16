import { Status } from "@/app/generated/prisma/enums";

export default function StatusCircle({
    status} : {status: Status}){

    function statusColor(status: Status){
    
      let style;
      switch (status){
        case "available":
          style = "bg-blue-300"
          break;
        case "in_service":
          style = "bg-green-300"
          break;
        case "maintenance":
          style = "bg-orange-300"
          break;
          default:
            style = "bg-red-300"
      }
    
      return style
    }
    return (
        <div className={`h-2 aspect-square ${statusColor(status)} rounded-full`}/>
    )
}