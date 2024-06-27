import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./db"
import authConfig from "./auth.config";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    pages: {
        newUser: "/auth/setup",
        signIn: "/auth/signin",
        signOut: "/auth/logout",
        verifyRequest: "/auth/verify-request",
        error: "/auth/error"
    },
    session: {
        strategy: "jwt"
    },

    ...authConfig
});