import {getUserAssignments } from "@/lib/db/queries/assignments";

export default async function UserAssignments({userId}:{userId: string}) {

    const assignments = await getUserAssignments(userId);
    if (!assignments || assignments.length === 0) return 


    return (
                   <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border mt-5">
              <div>
                <p className="font-semibold">Assignment history:</p>
            <table className="w-full mt-5 hidden md:table">
            <thead className="bg-gray-100 border-gray-200 shadow-xl border">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">plant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">asset</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">ACTION</th>
          
    
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

                            <td className="px-6 py-4 text-sm text-dark-500">{assignment.createdAt.toLocaleDateString()}</td>
                            <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">{nzTime}</td>
                                  <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">{assignment.asset?.plantNumber}</td>
                            <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">{assignment.asset?.make} - {assignment.asset?.model}</td>
                      

                            <td className="px-6 py-4 text-sm text-dark-500 uppercase">{assignment.status}</td>
                     

                        </tr>
                    )
                })}


            </tbody>

        </table>
            </div>
            </div>
       
    

    )
}