"use client";

import ErrorMessage from "@/components/ui/ErrorMessage";
import { RegisterUser } from "@/lib/auth/autheniticate";
import { registerUserSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

type FormFields = z.infer<typeof registerUserSchema>;

export default function RegisterForm({businessUnits, assetId}:
  {businessUnits: string[], assetId: string | null}
){
  
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const {register, handleSubmit, formState:{errors, isSubmitting}, reset} = 
  useForm<FormFields>({resolver: zodResolver(registerUserSchema)});
          const router = useRouter();

  const onSubmit = async (values: FormFields)=>{
  const result = await RegisterUser(values, assetId);

  if (result.status === "error"){
    setServerError(result.message);
    console.log(result.message);
        reset({
        password:""
      });
    
  } else {
    setSuccessMessage("Account created successfully!");
    router.push("/assets");
    router.refresh();
  }

  }

  
return <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10">
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900">First name</label>
    <input {...register("firstName")} 
    type="text" 
    className={`input-base ${errors.firstName ? "input-error" : "input-normal"} `} 
    placeholder="First name"/>
  {errors.firstName && <ErrorMessage message={errors.firstName.message}/>}

  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
    <input {...register("lastName")} type="text" 
    className={`input-base ${errors.lastName ? "input-error" : "input-normal"} `} 
    placeholder="Last name"/>
  {errors.lastName && <ErrorMessage message={errors.lastName.message}/>}
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
    <input {...register("email")} type="email" 
    className={`input-base ${errors.firstName ? "input-error" : "input-normal"}`}  
    placeholder="name@email.com"/>
      {errors.email && <ErrorMessage message={errors.email.message}/>}
  </div>
  <div className="mb-5">
  <label className="block mb-2 text-sm font-medium text-gray-900">Select your business unit</label>
  <select {...register("businessUnit")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
  {businessUnits.map((unit, key)=>{
    return  <option key={key}>{unit}</option>
  })}
  </select>
        {errors.businessUnit && <ErrorMessage message={errors.businessUnit.message}/>}
  </div>

  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900">Create password</label>
    <input {...register("password")}
    type="password" 
    placeholder="6 or characters required"
    className={`input-base ${errors.firstName ? "input-error" : "input-normal"}`}  />
          {errors.password && <ErrorMessage message={errors.password.message}/>}
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
    <input {...register("password")}  
    type="password"
    placeholder="Password must match"
    className={`input-base ${errors.firstName ? "input-error" : "input-normal"}`}/>
        {errors.password && <ErrorMessage message={errors.password.message}/>}
  </div>

    <p id="helper-text-explanation" className="my-2 text-sm text-gray-500 dark:text-gray-400">Already have have an account? Click on Login to navigate to the login page</p>
  {serverError && <ErrorMessage message={serverError}/>}
  {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
     <div className="flex gap-5 mt-5">
      <button type="submit" className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-violet-300 font-medium rounded-lg text-sm w-full py-2.5 text-center">
        {isSubmitting ? "Registering.." : "Register"}</button>
      <Link className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-violet-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" href={'/auth/login'}>Login</Link>

    </div>
 </form>

}