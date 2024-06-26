import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./db"
import Resend from "next-auth/providers/resend";
import { env } from "@/lib/env";
import authConfig from "./auth.config";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    pages: {
        newUser: "/auth/setup",
        signIn: "/auth/signin",
    },
    session: {
        strategy: "jwt"
    },
    ...authConfig
});