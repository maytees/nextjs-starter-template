"use server";

import { changeUsernameSchema } from "@/lib/validation";
import { auth, signIn } from "@/server/auth";
import { db } from "@/server/db";
import { z } from "zod";

export async function changeUsername(data: z.infer<typeof changeUsernameSchema>) {
    const fields = changeUsernameSchema.safeParse(data);

    if (!fields.success) {
        return {
            error: "Invalid fields"
        }
    }

    const {
        name
    } = fields.data;

    const session = await auth();

    if (!session) {
        return {
            error: "No session"
        }
    }

    if (!session.user) {
        return {
            error: "No user in session object"
        }
    }

    if (!session.user.email) {
        return {
            error: "No user id in session object"
        }
    }

    const userExists = await db.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!userExists) {
        return {
            error: "User does not exist"
        }
    }

    await db.user.update({
        where: {
            email: session.user.email
        },
        data: {
            name
        }
    });

    return {
        success: true
    }
}