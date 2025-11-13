import CommentListAll from "./_components/CommentListAll";


export default async function page({ searchParams }:
    { searchParams: Promise<{ page?: string }> }
){
    
        const params = await searchParams;
        const page = Math.max(1, Number(params.page ?? 1));
 
        
    return (
        <div>
<CommentListAll currentPage={page}/>
        </div>
    )
}