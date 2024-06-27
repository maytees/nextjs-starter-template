"use server";

import { registerSchema } from "@/lib/validation";
import { z } from "zod";
import { db } from "~/server/db";

export async function register(values: z.infer<typeof registerSchema>) {
    // 1. Validate fields
    // 2. Check if email exists
    // 3. Check if username exists
    // 4. If all good, create user

    const fields = registerSchema.safeParse(values);

    if (!fields.success) {
        return {
            error: "Invalid fields"
        }
    }

    const {
        email,
        name
    } = fields.data;

    const userExists = await db.user.findFirst({
        where: {
            OR: [
                { email },
                { name }
            ]
        }
    });

    if (userExists) {
        if (userExists.email === email) {
            return {
                error: "Email already exists",
            }
        }

        if (userExists.name === name) {
            return {
                error: "Username already exists",
            }
        }
    }

    const avatar = `https://avatar.iran.liara.run/public/${Math.ceil(Math.random() * 100) + 1}`
    await db.user.create({
        data: {
            email,
            name,
            image: avatar
        }
    });

    return {
        success: true
    }
}