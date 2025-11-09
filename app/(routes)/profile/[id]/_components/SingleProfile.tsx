
import Avatar from "@/components/ui/Avatar";
import { getUserDetails } from "@/lib/db/queries/user";

export default async function SingleProfile({userId}:
    {userId: string}
){

      const userInfo = await getUserDetails(userId);
    if (!userInfo) return
    return (
        <div>
            <Avatar name={userInfo?.name}/>
            <div className="mt-5 flex flex-col gap-1">
                <p><b>Email:</b> {userInfo?.email}</p>
                <p><b>Phone number:</b> 0220199006</p>
                <p><b>Business Unit:</b> {userInfo?.businessUnit}</p>
                <p><b>Assigneed assets:</b> {userInfo.asset.length}</p>
            </div>
            
        </div>
    )
}