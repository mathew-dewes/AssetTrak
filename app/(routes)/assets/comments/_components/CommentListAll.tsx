import Avatar from "@/components/ui/Avatar";
import { getAllComments } from "@/lib/db/queries/comments"
import prisma from "@/lib/prisma";
import CommentPagination from "./CommentPagination";
import StatusCircle from "@/components/ui/StatusCircle";


export default async function CommentListAll({currentPage}:
    {currentPage: number}
){

    const comments = await getAllComments(currentPage);
    const commentCount = await prisma.comment.count();
    const totalPages = Math.ceil(commentCount / 6);
    
    if (!comments) return
    return (
           <div className="mt-5 w-full">
            <p className="font-semibold">All comments:</p>
                     <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border mt-3 flex flex-col gap-5 md:hidden">
                                             {/* Mobile */}
                                        {comments.map((comment)=>{
                                            return <div key={comment.id} className="bg-white border rounded border-gray-200 shadow-lg p-3 text-sm">
                                    
                                                <p className="text-sm"><b>Date:</b> {comment.createdAt.toLocaleDateString("en-NZ")}</p>
            
                                                <div className="flex items-center mt-2 gap-1.5">
                                                  <StatusCircle status={comment.asset.status}/>
                <p><b>{comment.asset.make} {comment.asset.model}</b> - {comment.asset.plantNumber}</p>
                                                </div>
                                        
                                    
                                        {comment.user &&
                                         <div className="flex items-center gap-2 my-2">
                                                <Avatar name={comment.user?.name} />
                                                <p className="text-sm capitalize">- {comment.user?.businessUnit}</p>
                                            </div>}
                                            <p>{comment.content}</p>
                                    
                        
                                       
                        
                        
                                        </div>
                                        })}
                              
                              
                                   
                        
                                    </div>
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

                      {commentCount > 6 &&  <CommentPagination currentPage={currentPage} totalPages={totalPages}/>}
                 
        </div>
    )
}