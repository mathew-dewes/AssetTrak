import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import StatusCircle from "@/components/ui/StatusCircle";
import { getRecentAssignments } from "@/lib/db/queries/assignments";
import { convertTime } from "@/lib/helper";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function HomeAssignmentTable() {

    const [assignments, assignmentCount] = await Promise.all([
        getRecentAssignments(), prisma.assignment.count()
    ])

    if (!assignments) return


    return (
        <div className="w-full">
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
            <div>
                {/* Desktop */}
                <table className="w-full mt-3 hidden md:table">
                    <thead className="bg-gray-100 border-gray-200 shadow-xl border">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Date / Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset / plant</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">ACTION</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Assignee</th>
             
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 border border-gray-200 shadow-lg">
                        {assignments.map((assignment) => {
                             return (
                                <tr key={assignment.id} className="hover:bg-gray-50">


                                    <td className="px-6 py-4 text-sm text-dark-500">
                                        <div className="flex flex-col gap-1">
                                            <p>{assignment.createdAt.toLocaleDateString("en-NZ")}</p>
                                            <p>{convertTime(assignment.createdAt)}</p>
                                       
                                        </div>
                                </td>
                                    <td className="px-6 py-4 h-20 text-sm text-dark-500"><span className="font-semibold">{assignment.asset?.make} {assignment.asset?.model}</span> - {assignment.asset?.plantNumber}</td>
                        

                                    <td className="px-6 py-4 text-sm text-dark-500 uppercase">{assignment.status}</td>
                                    <td className="px-6 py-4 text-sm text-dark-500">
                                        <Avatar name={assignment.assignee?.name || ""} />

                                    </td>
                        

                                </tr>
                            )
                        })}





                    </tbody>

                </table>
            </div>

            {assignmentCount > 3 &&
                <div className="mt-3">
                    <Link href={'/assets/assignments'}><Button text="View All" /></Link>

                </div>
            }

        </div>
    )
}