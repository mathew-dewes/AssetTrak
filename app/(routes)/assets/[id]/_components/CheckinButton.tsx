"use client";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { checkinAsset } from "@/lib/db/mutations/asset";
import { useState } from "react";


export default function CheckInButton({plantNumber}:
    {plantNumber: string}
){
    const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);

    async function handleCheckout():Promise<void>{
        setLoading(true);
        try {
            const result = await checkinAsset(plantNumber);
                      if (result?.status === "error"){
              setError(result.message || "Failed to delete comment.");
              return;
         }
        } catch (error) {
                  console.error(error);
        }

    }
    return (

    <button 
    onClick={handleCheckout} 
    disabled={loading}
    type="submit" 
    className={`text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
         {!error ? loading ? <div className="ml-0.5"><LoadingSpinner size={20} text="un-assigning"/></div> : "Check in" : error}
    </button>
    )
}