"use client"

import ErrorMessage from "@/components/ui/ErrorMessage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { assignUser } from "@/lib/db/mutations/assignment";
import { changeAssigneeSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

type FormFields = z.infer<typeof changeAssigneeSchema>

export default function AssignUserDropDown({ users, plantNumber }:
    { users: { name: string, id: string }[], plantNumber: string }
) {
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormFields>
        ({
            resolver: zodResolver(changeAssigneeSchema),

        });

    const onSubmit = async (values: FormFields) => {
        console.log(values);
        const result = await assignUser(values, plantNumber);
        if (!result) return

        if (result.status === "error") {
            setServerError(result.message);
            console.log(result.message);

        } else {

            setSuccessMessage("Assignment updated");

        }


    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-fit mt-2">
                <select {...register("user")} onChange={(e) => {
                    setValue("user", e.target.value)
                    handleSubmit(onSubmit)()
                }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">

                    <option value="" hidden>
                        Click to select
                    </option>

                    {users.map((user) => {
                        return <option value={user.id} key={user.id}>{user.name}</option>
                    })}





                </select>
                       {errors.user && <ErrorMessage message={errors.user.message}/>}





            </form>
               {serverError && <ErrorMessage message={serverError}/>}

            {isSubmitting && <div className="w-fit mt-3">
                <LoadingSpinner size={20} text="Assigning" />
            </div>}
            <p className="mt-4 text-sm text-green-600">{successMessage}</p>




        </div>
    )
}