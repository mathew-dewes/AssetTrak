import Asset from "./_components/Asset";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}){

const {id} = await params;

console.log(id);


    return (
        <div>
            <h1>Single Asset page</h1>
            <Asset/>
        </div>
    )
}