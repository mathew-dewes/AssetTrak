"use client"

import { Status } from "@/app/generated/prisma/enums"
import ErrorMessage from "@/components/ui/ErrorMessage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { changeAssetStatus } from "@/lib/db/mutations/asset";
import { statusChangerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const statuses = Object.values(Status);
type FormFields = z.infer<typeof statusChangerSchema>;


export default function StatusDropDown({ assetId, initialStatus }:
    { assetId: string, initialStatus: Status }
) {

    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormFields>
        ({
            resolver: zodResolver(statusChangerSchema),
            defaultValues: {
                status: initialStatus
            }
        });

    const onSubmit = async (values: FormFields) => {
        console.log(values);
        const result = await changeAssetStatus(values, assetId);
        if (!result) return
        if (result.status === "error") {
            setServerError(result.message);
            console.log(result.message);

        } else {

            setSuccessMessage("Status updated");

        }


    }


    return (
        <div>
 <form onSubmit={handleSubmit(onSubmit)} className="w-fit mt-2">
            <select {...register("status")} onChange={(e) => {
                setValue("status", e.target.value as Status)
                handleSubmit(onSubmit)()
            }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                {statuses.map((status, key) => {
                    return <option key={key}>{status}</option>
                }

                )}
            </select>
             {errors.status && <ErrorMessage message={errors.status.message}/>}


        </form>
        {serverError && <ErrorMessage message={serverError}/>}
        {isSubmitting ?
        <div className="w-fit mt-3">
<LoadingSpinner size={20} text="Updating"/>
        </div> : 
        <p className="mt-4 text-sm text-green-600">{successMessage}</p>}
     
  
      
   
        </div>
       
    )
}