"use client"

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { deleteComment } from "@/lib/db/mutations/comment";
import { Trash2 } from "lucide-react";
import { useState } from "react";


export default function DeleteCommentButton({id}:
    {id: string}
){
    const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);

    async function handleDelete():Promise<void>{
        setLoading(true);
        try {
            const result = await deleteComment(id);
              if (result?.status === "error"){
              setError(result.message || "Failed to delete comment.");
              return;
         }

        } catch (error) {
                 console.error(error);
        } 
    }

    return  <div className="flex items-center gap-1 mt-6">
        {!loading && <Trash2 size={18}/>}

    <button 
    onClick={handleDelete} 
    disabled={loading}
    className={` ${error ? "text-red-400" : "text-violet-400"} cursor-pointer`}>
        {!error ? loading ? <div className="ml-0.5"><LoadingSpinner size={20} text="Deleting"/></div> : "Delete" : error}</button>
            </div>
}