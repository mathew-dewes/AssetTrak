
import { AssetType } from "@/app/generated/prisma";
import ButtonSmall from "@/components/ui/ButtonSmall";
import { formatCasing } from "@/lib/helper";
import Link from "next/link";


export default async function AvailableCard({
  assetType,
  assets
}: {
  assetType: AssetType,
  assets: { id: string; make: string; model: string }[]
}) {

if (assets.length === 0) return



  return (
    <div className="rounded bg-white border-gray-200 border shadow-xl p-6 text-center md:text-left">
      <h2 className="uppercase">{formatCasing(assetType)}</h2>
      <div className="flex flex-col gap-1 mt-3 items-center md:items-start">
        {assets.map((asset) => {
          
          return <div className="flex items-center gap-1" key={asset.id}>
            <div className="bg-blue-300 h-3 w-3 rounded-full"/>
            <p className="uppercase text-sm truncate" key={asset.id}><span className="uppercase font-medium">{asset.make}</span> - {asset.model}</p>
          </div>

        })}
        <div className="mt-3">
          <Link href={`/assets?type=${assetType}&status=available`}><ButtonSmall text="View"/></Link>
          </div>

  

      </div>
    </div>
  )
}
