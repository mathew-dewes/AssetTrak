import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import { getRecentAssignments } from "@/lib/db/queries/assignments";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function HomeAssignmentTable(){


    const assignments = await getRecentAssignments();
    const assignmentCount = await prisma.assignment.count();
    if (!assignments) return

    return    (
    <div className="mt-5 w-full">
                  <p className="font-semibold">Recent Assignments:</p>
  <table className="w-full mt-3 hidden md:table">
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
                          {assignments.map((assignment)=>{
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
                                       <Avatar name={assignment.assignee?.name || ""} />
          
                                      </td>
                                      <td className="px-6 py-4 text-sm text-dark-500">
                                         {assignment.assignee?.businessUnit}
          
                                      </td>
          
                                  </tr>
                                        )
                                    })}
                        
                       
                       
          
          
                      </tbody>
          
                  </table>
                  {assignmentCount > 3 &&
                         <div className="mt-3">
                            <Link href={'/assets/assignments'}><Button text="View All"/></Link>
                                  
                                            </div>
                  }
              
    </div>
  )
}