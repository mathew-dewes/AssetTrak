import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import { getRecentComments } from "@/lib/db/queries/comments";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function HomeCommentsTable(){

    const comments = await getRecentComments();
    const commentCount = await prisma.assignment.count();

    if (!comments) return

    
    return (
    
        <div className="w-full">
    <table className="w-full mt-3 hidden md:table">
                          <thead className="bg-gray-100 border-gray-200 shadow-xl border">
                              <tr>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Date</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">User</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Comment</th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200 border border-gray-200 shadow-lg">
                            {comments.map((comment)=>{
                                return (
                    <tr key={comment.id} className="hover:bg-gray-50">
                                          <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">{comment.createdAt.toLocaleDateString("en-NZ")}</td>
                                          <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">{comment.asset.plantNumber}</td>
              
                                          <td className="px-6 py-4 text-sm text-dark-500">
                                           <Avatar name={comment.user.name} />
              
                                          </td>
                                          <td className="px-6 py-4 text-sm text-dark-500 max-w-100">
                                            {comment.content}
                                          </td>
              
                                      </tr>
                                )
                            })}
              
                          </tbody>
              
                      </table>
                      {commentCount > 3 &&
                        <div className="mt-3">
                            <Link href={'/assets/comments'}><Button text="View All"/></Link>
                    
                          </div>
                      }
                        
        </div>
)
}