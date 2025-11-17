import Avatar from "@/components/ui/Avatar";
import { getAssignmentCount, getAssetAssignmentsAll } from "@/lib/db/queries/assignments";
import AssignmentCount from "../../../_components/AssignmentCount";
import Pagination from "@/components/ui/Pagination";
import StatusCircle from "@/components/ui/StatusCircle";
import { convertTime } from "@/lib/helper";


export default async function AssignmentListAll({ plantNumber, currentPage }:
    { plantNumber: string, currentPage: number }
) {

    const assignments = await getAssetAssignmentsAll(plantNumber, currentPage);
    const assignmentCount = await getAssignmentCount(plantNumber);
    const totalPages = Math.ceil(assignmentCount / 5)

    
    if (assignments.length === 0) return 
    return (
            <div className="mt-10">
                <p className="font-semibold">Assignment history:</p>
                         <AssignmentCount count={assignmentCount}/>
                           <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border mt-3 flex flex-col gap-5 md:hidden">
                                                              {/* Mobile */}
                                                         {assignments.map((assignment)=>{
                                                             return <div key={assignment.id} className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm">
                                                             <div className="flex gap-5">
                                                                 <p className="text-sm"><b>Date:</b> {assignment.createdAt.toLocaleDateString("en-NZ")}</p>
                                                                 <p className="text-sm"><b>Time:</b> {convertTime(assignment.createdAt)}</p>
                                                             </div>
                                                         <p className="mt-2"><b>Action:</b> {assignment.status}</p>
                                                         {assignment.assignee &&
                                                          <div className="flex items-center gap-2 my-2">
                                                                 <Avatar name={assignment.assignee?.name} />
                                                                 <p className="text-sm capitalize">- {assignment.assignee?.businessUnit}</p>
                                                             </div>}
                                                            
                                                             <div className="flex mt-3 items-center gap-1.5">
                                                                <StatusCircle status={assignment.asset!.status!}/>
                                                             <p><span className="font-semibold">{assignment.asset?.make} {assignment.asset?.model}</span> - {assignment.asset?.plantNumber}</p>
                                                             </div>
                                         
                                                        
                                         
                                         
                                                         </div>
                                                         })}
                                               
                                               
                                                    
                                         
                                                     </div>
            <table className="w-full mt-5 hidden md:table">
            <thead className="bg-gray-100 border-gray-200 shadow-xl border">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">ACTION</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Assignee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Business unit</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 border border-gray-200 shadow-lg">
                {assignments.map((assignment) => {
                    const nzTime = new Date(assignment.createdAt).toLocaleTimeString("en-NZ", {
                        timeZone: "Pacific/Auckland",
                        hour12: false, 
                        hour: "2-digit",
                        minute: "2-digit",
              
                    });

                    return (
                        <tr key={assignment.id} className="hover:bg-gray-50">

                            <td className="px-6 py-4 text-sm text-dark-500">{assignment.createdAt.toLocaleDateString("en-NZ")}</td>
                            <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">{nzTime}</td>

                            <td className="px-6 py-4 text-sm text-dark-500 uppercase">{assignment.status}</td>
                            <td className="px-6 py-4 text-sm text-dark-500">
                                {assignment.assignee && <Avatar name={assignment.assignee.name} />}

                            </td>
                            <td className="px-6 py-4 text-sm text-dark-500">
                                {assignment.assignee?.businessUnit}

                            </td>

                        </tr>
                    )
                })}


            </tbody>

        </table>
        {assignmentCount > 5 && <Pagination type="assignments" id={plantNumber} currentPage={currentPage} totalPages={totalPages}/>}

        
    

            </div>
    

    )
}