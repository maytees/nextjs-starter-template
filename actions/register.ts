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
        username
    } = fields.data;

    const userExists = await db.user.findFirst({
        where: {
            OR: [
                { email },
                { username }
            ]
        }
    });

    if (userExists) {
        if (userExists.email === email) {
            return {
                error: "Email already exists",
            }
        }

        if (userExists.username === username) {
            return {
                error: "Username already exists",
            }
        }
    }

    await db.user.create({
        data: {
            email,
            username
        }
    });

    return {
        success: true
    }
}