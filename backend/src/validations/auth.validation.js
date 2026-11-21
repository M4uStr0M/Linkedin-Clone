import { z } from 'zod'

export const registerSchema = z.object({
    firstName: z.string().trim().min(3, "Minimum 3 letter in firstname").max(30, "Maximum 30 letter in firstname").regex(/^[A-Za-z]+$/, "First name can only contain letters"),
    lastName: z.string().trim().min(3, "Minimum 3 letter in lastname").max(30, "Maximum 30 letter in lastname").regex(/^[A-Za-z]+$/, "Last name can only contain letters"),
    userName: z.string().trim().min(3, "Minimum 3 letter in username").max(30, "Maximum 30 letter in username"),
    email: z.email("Invalid Email"),
    password: z.string().min(8, "Minimum 8 letter in password")

})


export const loginSchema = z.object({
    email: z.email("Invalid Email"),
    password: z.string()
})


