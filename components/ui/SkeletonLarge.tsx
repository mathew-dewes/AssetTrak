export default function SkeletonLarge(){
    return <div role="status" className="animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full w-3/4 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full max-w-[660px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full w-3/5 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full w-7/8"></div>
    <span className="sr-only">Loading...</span>
</div>
}