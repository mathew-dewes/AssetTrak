
import Avatar from "@/components/ui/Avatar";
import { getLoggedinUserDetails } from "@/lib/db/queries/user";

export default async function Profile(){

      const userInfo = await getLoggedinUserDetails();
    if (!userInfo) return
    return (
        <div>
            <Avatar name={userInfo?.name}/>
            <div className="mt-5 flex flex-col gap-1">
                <p><b>Email:</b> {userInfo?.email}</p>
                <p><b>Business unit:</b> {userInfo?.businessUnit}</p>
                <p><b>Assigneed assets:</b> {userInfo.asset.length}</p>
            </div>
            
        </div>
    )
}