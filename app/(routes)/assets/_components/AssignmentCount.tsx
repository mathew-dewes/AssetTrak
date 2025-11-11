import { ListCheck } from "lucide-react";


export default function AssignmentCount({count}:
    {count: number}
){
    return (
        <div className="mt-2 flex gap-1 items-center">
  <ListCheck size={20}/>
  <p>{count}</p>
            </div>
    )
}