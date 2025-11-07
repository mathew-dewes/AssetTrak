"use client";

import Button from "@/components/ui/Button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { postComment } from "@/lib/db/mutations/comment";
import { commentSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


type FormFields = z.infer<typeof commentSchema>;

export default function CommentForm({assetId}:{assetId: string}) {

    const [serverError, setServerError] = useState("");

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(commentSchema)
    });


    const onSubmit = async (values: FormFields) => {
         const result = await postComment(values, assetId);

         if (result?.status === "error"){
            setServerError(result.message);
         }
         reset();
         setServerError("");

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 rounded md:w-2/3 bg-gray-100 border-gray-200 shadow-xl border mt-2">
            <textarea
                {...register("comment")}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Write a comment..."
                rows={5}
            />
            <div className="mt-3">
                <Button text={isSubmitting ? "Posting..." : "Post"} />
            </div>
            {errors.comment && <ErrorMessage message={errors.comment.message} />}
            <ErrorMessage message={serverError} />


        </form>
    )
}