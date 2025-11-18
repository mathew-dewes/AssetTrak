import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import ButtonSmall from "@/components/ui/ButtonSmall";
import { getRecentInServiceAssets } from "@/lib/db/queries/assets";
import { formatCasing } from "@/lib/helper";
import Link from "next/link";

export default async function InService({ assetCount }:
  { assetCount: number }
) {

  const assets = await getRecentInServiceAssets()


  if (assets.length === 0) return


  return (
    <div className="p-5 rounded bg-gray-100 border-gray-200 shadow-xl border">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <h2>In service</h2>
            <div className="h-3 w-3 rounded-full bg-green-300" />

          </div>
          <p>{assetCount} units</p>
          <div>

            <div className="mt-3">
              {assets.map((asset) => {
                return (
                  <div key={asset.id} className="bg-white border rounded border-gray-200 shadow-lg p-3" >
                    <p className="uppercase"><b>{asset.plantNumber}</b> - {asset.make} - {asset.model} ({formatCasing(asset.assetType)})</p>
                    {asset.assignee &&
                      <div className="flex items-center gap-1 mt-1">
                        <p>Assignee:</p>
                        <Avatar name={asset.assignee.name} />
                      </div>

                    }
                    <div className="mt-3">
                      <Link href={'/assets/' + asset.plantNumber}><ButtonSmall text="View"/></Link>
   
                    </div>
                

                  </div>
                )
              })}


            </div>

          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Link href={'/assets?status=in_service'}><Button text="View All" /></Link>

        </div>

      </div>








    </div>
  )
}