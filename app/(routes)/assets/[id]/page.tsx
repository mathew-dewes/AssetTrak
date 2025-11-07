import { getAsset } from "@/lib/db/mutations/asset";
import AssignmentHistoryTable from "./_components/AssignmentHistory";
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";
import SingleAsset from "./_components/SingleAsset";
export default async function page({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;
    const asset = await getAsset(id);

    if (!asset) return (
        <p>Asset not found</p>
    )


    return (
        <div>
            <SingleAsset asset={asset} />

            <div className="mt-5">
                <p className="font-semibold">Write a comment:</p>
                <CommentForm assetId={id} />
            </div>

            <CommentList assetId={id} />

            <div className="mt-5">
                <p className="font-semibold">Assignment history:</p>
                <AssignmentHistoryTable />
            </div>

        </div>
    )
}