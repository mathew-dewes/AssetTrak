import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

export default function HomeAssignmentTable(){
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
                        
                                  <tr className="hover:bg-gray-50">
          
                                      <td className="px-6 py-4 text-sm text-dark-500">htht</td>
                                      <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">htht</td>
          
                                      <td className="px-6 py-4 text-sm text-dark-500 uppercase">hth</td>
                                      <td className="px-6 py-4 text-sm text-dark-500">
                                       <Avatar name={"fefef"} />
          
                                      </td>
                                      <td className="px-6 py-4 text-sm text-dark-500">
                                         grgrg
          
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