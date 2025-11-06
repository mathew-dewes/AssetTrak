import AssetCard from "./AssetCard"

export default function AssetList() {
    return (
        <div className="md:grid-cols-2 grid xl:grid-cols-3 gap-5">
           <AssetCard/>
           <AssetCard/>
           <AssetCard/>
           <AssetCard/>
           <AssetCard/>
  
        </div>
    )
}