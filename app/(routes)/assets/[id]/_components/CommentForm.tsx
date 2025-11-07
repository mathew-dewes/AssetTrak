import Button from "@/components/ui/Button";

export default function CommentForm(){
    return (
               <form className="p-5 rounded md:w-2/3 bg-gray-100 border-gray-200 shadow-xl border mt-2">
            <textarea
       
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Write a comment..."
                rows={5}
            />
            <div className="mt-3">
    <Button text="Submit" />
            </div>
        
          {/* Add error messages here */}
        </form>
    )
}