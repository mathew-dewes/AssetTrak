import prisma from "@/lib/prisma";
import InService from "./cards/InService";
import Maintenance from "./cards/Maintenance";
import OutOfService from "./cards/OutOfService";

export default async function AssetOverview(){

const occupiedAssets = await prisma.asset.count({
    where:{
        NOT:{
            status:"available"
        }
    }
});

if (occupiedAssets === 0) return

return   <div className="mt-30">
  <h2>Asset Overview</h2>
  <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5 mt-3">
        <InService/>
        <Maintenance/>
        <OutOfService/>
      </div>
      </div>
}