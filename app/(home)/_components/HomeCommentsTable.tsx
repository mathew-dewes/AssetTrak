import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

export default function HomeCommentsTable(){
    return (
    
        <div className="mt-5 w-full">
            <p className="font-semibold">Recent comments:</p>
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
                            
                                      <tr className="hover:bg-gray-50">
                                          <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">11/11/25</td>
                                          <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">P2.107</td>
              
                                          <td className="px-6 py-4 text-sm text-dark-500">
                                           <Avatar name={"fefef"} />
              
                                          </td>
                                          <td className="px-6 py-4 text-sm text-dark-500">
                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti placeat dignissimos esse assumenda quae, quo suscipit. Dolores, placeat alias?
              
                                          </td>
              
                                      </tr>
                           
              
              
                          </tbody>
              
                      </table>
                          <div className="mt-3">
                            <Button text="View All"/>
                          </div>
        </div>
)
}