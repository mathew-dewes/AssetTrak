import { Status } from "@/app/generated/prisma";


export function formatCasing(value: string): string {
  return value
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/^./, c => c.toUpperCase());
}


export const convertTime = (time: Date) =>{
        return new Date(time).toLocaleTimeString("en-NZ", {
                                timeZone: "Pacific/Auckland",
                                hour12: false,
                                hour: "2-digit",
                                minute: "2-digit",

                            })
                        
    }



export function statusCircle(status: Status){

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