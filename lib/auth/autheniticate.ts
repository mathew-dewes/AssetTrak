"use server"

import z from "zod";
import { loginUserSchema, registerUserSchema } from "../validation";
import { auth } from "../auth";
import { APIError } from "better-auth/api";
import prisma from "../prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function RegisterUser(values: z.infer<typeof registerUserSchema>) {
    const validate = registerUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const { firstName, lastName, email, businessUnit, password } = values;
    const name = firstName + " " + lastName

    try {
       await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                callbackURL: '/',
            }
        });

        const user = await prisma.user.update({
            where:{email},
            data:{
                businessUnit
            }
        });
        console.log(user);
        

         return { status: "success", message: "Account created succesfully!"};
        
    } catch (error) {
        if (error instanceof APIError) {
            console.log(error.message, error.status)
            return {
                status: "error", message: error.message
            }

        } else {
            console.log(error);

            return {
                status: "error", message: "There was an error"
            }
        }
    }



}

export async function loginInUser(values: z.infer<typeof loginUserSchema>){

     const validate = loginUserSchema.safeParse(values);

     if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }
     const { email, password } = values;
        try {
         await auth.api.signInEmail({
        body: {
            email, password, callbackURL: "/"
        }

        
    });
   
    

        return {
        status: "success", message: "User created successfully"
    }
    } catch (error) {
          if (error instanceof APIError) {
        console.log(error.message, error.status)
            return {
        status: "error", message: error.message
    }

    } else {
        console.log(error);
        
        return {
        status: "error", message: "There was an error"
    }
    }
           
        
        
    }
}

export async function logoutOutUser(){
const result = await auth.api.signOut({
        headers: await headers()
    });

    return result;


}

export async function authProtection(){
 const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session){
        redirect('/auth/login')
    }

}