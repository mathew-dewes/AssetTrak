import { BusinessUnit } from "@/app/generated/prisma/enums";
import z from "zod";

const businessUnits = Object.values(BusinessUnit)

export const registerUserSchema = z.object({
    firstName: z.string().min(3, "First name is required").max(15, "First name must be 15 or less characters"),
    lastName: z.string().min(3, "Last name is required").max(15, "Last name must be 15 or less characters"),
    email: z.email(),
    businessUnit: z.enum(businessUnits, "Business unit must be a valid"),
    password: z.string().min(6, "Password must be 6 or more characters"),

});


export const loginUserSchema = z.object({
    email: z.email(),
    password: z.string().min(2, "Password must be 8 or more characters"),

});