"use client"


import { Status } from "@/app/generated/prisma";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { markAllAvaiable } from "@/lib/db/mutations/asset";
import { useState } from "react";


export default function MarkAllAvaiableButton({status}:
    {status: Status}
){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

        async function handleSubmit():Promise<void>{
            setLoading(true);
            try {
                const result = await markAllAvaiable(status);
                          if (result?.status === "error"){
                  setError(result.message || "Failed to delete comment.");
                  return;
             }
            } catch (error) {
                      console.error(error);
            }
    
        }

    return  (
    <button
    onClick={handleSubmit} 
    className="text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none cursor-pointer font-medium rounded text-sm px-3 py-1 text-center">
         {!error ? loading ? <div className="ml-0.5"><LoadingSpinner size={20} text="Updating..."/></div> : "Mark all avaiable" : error}
        </button>)

}