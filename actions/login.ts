"use server";

import { signIn } from "@/server/auth";
import { db } from "~/server/db";

export async function login(email: string) {
    // Function simply checks if the email even exists,
    // if not then force user to register

    const userExists = await db.user.findUnique({
        where: {
            email
        }
    });

    if (!userExists) {
        return {
            redirect: "/auth/register",
            error: "User does not exist",
            success: false
        }
    }

    const res = await signIn("resend", { email });

    return {
        success: true
    }
}