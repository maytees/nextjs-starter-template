"use server";

import { auth, signOut } from "@/server/auth";
import { db } from "@/server/db";

export async function deleteAccount() {
    const session = await auth();

    if (!session) {
        console.log("no session")
        return {
            error: "No session",
            success: false
        }
    }

    if (!session.user) {
        console.log("no user in session")
        return {
            error: "No user in session object",
            success: false
        }
    }

    if (!session.user.email) {
        console.log("no email in user in session")
        console.log(session.user);
        return {
            error: "No user id in session object",
            success: false
        }
    }

    const userExists = await db.user.findUnique({
        where: {
            email: session.user.email,
        }
    });

    if (!userExists) {
        return {
            error: "User does not exist",
            success: false
        }
    }


    await db.user.delete({
        where: {
            email: session.user.email
        }
    });

    await signOut({ redirectTo: "/" });

    return {
        success: true
    }
}