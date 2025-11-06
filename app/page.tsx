import prisma from "@/lib/prisma"

export default async function page(){
  const assets = await prisma.asset.findMany();

  console.log(assets);
  


  
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  )
}