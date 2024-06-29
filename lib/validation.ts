import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address!" })
});

export const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email address!" }),
    name: z.string().min(3, { message: "Username must be at least 3 characters long!" })
        .refine(s => !s.includes(" "), { message: "Username cannot contain spaces" }),
});

// Settings

export const ThemeSetting = z.object({
    theme: z.enum(["light", "dark", "system"])
});

export const deleteAccountSchema = z.object({
    agree: z.boolean().refine(b => b, { message: "You must agree to the terms and conditions" })
});

export const changeUsernameSchema = z.object({
    name: z.string().min(3, { message: "Username must be at least 3 characters long!" }).refine(s => !s.includes(" "), { message: "Username cannot contain spaces" })
});