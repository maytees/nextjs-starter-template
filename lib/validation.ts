import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address!" })
});

export const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email address!" }),
    name: z.string().min(3, { message: "Username must be at least 3 characters long!" })
        .refine(s => !s.includes(" "), { message: "Username cannot contain spaces" }),
});