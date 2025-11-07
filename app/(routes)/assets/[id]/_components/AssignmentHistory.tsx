import Avatar from "@/components/ui/Avatar";





export default function AssignmentHistoryTable() {

    return (
        <table className="w-full mt-5 hidden md:table">
            <thead className="bg-gray-100 border-gray-200 shadow-xl border">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">ACTION</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">User</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 border border-gray-200 shadow-lg">
                <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-dark-500">07/11/2025</td>
                <td className="px-6 py-4 h-20 text-sm text-dark-500 font-medium">07:01</td>

                    <td className="px-6 py-4 text-sm text-dark-500">Checkout</td>
                    <td className="px-6 py-4 text-sm text-dark-500">
                           <Avatar name="Mathew Dewes"/>
                    </td>
        
                </tr>

            </tbody>

        </table>
   
    )
}