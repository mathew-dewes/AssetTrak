"use server"

import z from "zod";
import { loginUserSchema, registerUserSchema } from "../validation";
import { auth } from "../auth";
import { APIError } from "better-auth/api";
import prisma from "../prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function RegisterUser(values: z.infer<typeof registerUserSchema>, assetId: string | null) {
    const validate = registerUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const { firstName, lastName, email, businessUnit, password } = values;
    const name = firstName + " " + lastName

    try {
        const user = await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                callbackURL: '/',
            }
        });

        const userId = user.user?.id;

        await prisma.user.update({
            where: { id: userId },
            data: {
                businessUnit
            }
        });




        if (assetId && userId) {
            await prisma.asset.update({
                data: {
                    assignee: { connect: { id: userId } },
                    status: "in_service"

                },
                where: { id: assetId }
            });

            await prisma.assignment.create({
                data: {
                    status: "checkOut",
                    assignee: { connect: { id: userId } },
                    asset: { connect: { id: assetId } }
                },
            })


        }



        return { status: "success", message: "Account created succesfully!" };

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

export async function loginInUser(values: z.infer<typeof loginUserSchema>, plantNumber: string | null) {

    const validate = loginUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }
    const { email, password } = values;
    try {
        const user = await auth.api.signInEmail({
            body: {
                email, password, callbackURL: "/"
            }


        });

        const userId = user.user?.id;


        if (plantNumber && userId) {
            await prisma.asset.update({
                data: {
                    assignee: { connect: { id: userId } },
                    status: "in_service"

                },
                where: { plantNumber }
            });

            await prisma.assignment.create({
                data: {
                    status: "checkOut",
                    assignee: { connect: { id: userId } },
                    asset: { connect: { plantNumber } }
                },
            })


        }



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

export async function logoutOutUser() {
    const result = await auth.api.signOut({
        headers: await headers()
    });

    return result;


}

export async function authProtection() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect('/welcome')
    }

}

export async function getUserId() {
    const user = await auth.api.getSession({ headers: await headers() });
    return user?.user.id
}

export async function isUserAdmin(userId: string){
    const count = await prisma.user.count({
        where:{
            id: userId,
            role: "admin"
        }
    });

    return count > 0
}

export async function getSession(){
        return await auth.api.getSession({
        headers: await headers()
    });
}