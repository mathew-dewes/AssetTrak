import Asset from "./_components/Asset";
import AssignmentHistoryTable from "./_components/AssignmentHistory";
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}){

const {id} = await params;

    return (
        <div>
            <Asset/>
            <div className="mt-5">
                <p>Comment form goes here:</p>
                <CommentForm/>
            </div>
            <div className="mt-5">
                <p className="font-semibold">Comments for asset {id}:</p>
                       <CommentList/>
            </div>
            <div className="mt-5">
                <p className="font-semibold">Assignment history:</p>
                       <AssignmentHistoryTable/>
            </div>
     
        </div>
    )
}