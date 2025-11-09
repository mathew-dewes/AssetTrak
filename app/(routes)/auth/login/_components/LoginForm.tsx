"use client";

import ErrorMessage from "@/components/ui/ErrorMessage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { loginInUser } from "@/lib/auth/autheniticate";

import { loginUserSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";



type FormFields = z.infer<typeof loginUserSchema>;

export default function LoginForm({assetId}:
  {assetId: string | null}
) {
  const [serverError, setServerError] = useState("");


  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormFields>({ resolver: zodResolver(loginUserSchema) })
  const router = useRouter();
  
  const registerLink = () =>{
    if (assetId){
      return "/auth/register?asset=" + assetId
    } else {
      return "/auth/register"
    }
  }

  const onSubmit = async (values: FormFields) => {
    setServerError("");
    const result = await loginInUser(values, assetId)
    if (result.status === "error") {
      setServerError(result.message);
      reset({
        password:""
      });

} else if (assetId) {

      router.push("/assets/" + assetId);
      router.refresh()
    } else {
            router.push("/assets");
      router.refresh()
    }

  }

  return <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10">
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
      <input
        {...register("email")}
        type="text"
        className={`input-base ${errors.email ? "input-error" : "input-normal"} `}
        placeholder="name@email.com" />
      {errors.email && <ErrorMessage message={errors.email.message} />}
    </div>

    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
      <input
        {...register("password")}
        type="password"
    
        className={`input-base ${errors.email ? "input-error" : "input-normal"} `} />
      {errors.password && <ErrorMessage message={errors.password.message} />}
    </div>

    <p id="helper-text-explanation" className="my-2 text-sm text-gray-500 dark:text-gray-400">Don’t have an account? Click on Register to create one</p>
    {serverError && <ErrorMessage message={serverError} />}
    <div className="flex gap-5 mt-5">
      <button type="submit" className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-violet-300 font-medium rounded-lg text-sm w-full py-2.5 text-center">
        {isSubmitting ? <LoadingSpinner size={20} text="Logging in"/> : "Login"}</button>
      <Link 
      className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-violet-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" 
      href={registerLink()}>Register</Link>

    </div>

  </form>

}