import { BusinessUnit, Status } from "@/app/generated/prisma/enums";
import z from "zod";

const businessUnits = Object.values(BusinessUnit);
const statuses = Object.values(Status);

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

export const commentSchema = z.object({
  comment: z.string().min(1, "Comment is required").max(200, "Comment must be less than 200 characters")
});

export const statusChangerSchema = z.object({
  status: z.enum(statuses, "Asset status must be valid")
});


export const changeAssigneeSchema = z.object({
  user: z.string("Assignee must be saved within the system")
})

