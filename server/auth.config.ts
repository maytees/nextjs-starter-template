import { env } from "@/lib/env";
import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

export default {
    providers: [GitHub, Resend({
        from: env.EMAIL_FROM,
        server: env.EMAIL_SERVER_HOST,
    })],
} satisfies NextAuthConfig;