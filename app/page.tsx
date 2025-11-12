import { authProtection } from "@/lib/auth/autheniticate"

export default async function page(){
  await authProtection()
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Hello! Welcome to the Asset track App</h1>
    </div>
  )
}