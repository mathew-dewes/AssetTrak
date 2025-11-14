import { AssetType } from "@/app/generated/prisma/enums";
import ButtonSmall from "@/components/ui/ButtonSmall";

import { getAvaiableAssetNamesByType } from "@/lib/db/queries/assets";
import { formatCasing } from "@/lib/helper";


export default async function AvailableCard({assetType}:
  {assetType: AssetType}) {

  const assets = await getAvaiableAssetNamesByType(assetType)

  return (
    <div className="rounded bg-gray-100 border-gray-200 shadow-xl p-6 text-center md:text-left">
      <h2 className="uppercase">{formatCasing(assetType)}</h2>
      <div className="flex flex-col gap-1 mt-3 items-center md:items-start">
        {assets.map((asset) => {
          return <div className="flex items-center gap-1" key={asset.id}>
            <div className="bg-blue-300 h-3 w-3 rounded-full"/>
            <p className="uppercase text-sm" key={asset.id}><span className="uppercase font-medium">{asset.make}</span> - {asset.model}</p>
          </div>

        })}
        <div className="mt-3">
<ButtonSmall text="View"/>   </div>
  

      </div>
    </div>
  )
}
