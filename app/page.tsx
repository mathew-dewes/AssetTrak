import { authProtection } from "@/lib/auth/autheniticate"

export default async function page(){
  await authProtection()
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  )
}