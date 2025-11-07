import { Status } from "@/app/generated/prisma/enums";

export default function StatusDisplay({status}:{status: Status}){

    let style;

    switch(status){
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
    return  <div className="my-1 flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${style}`}/>
                    <p>{status}</p>
      
                </div>
}