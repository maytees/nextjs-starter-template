import { env } from "@/lib/env";
import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

export default {
    providers: [GitHub, Resend({
        from: env.EMAIL_FROM,
        server: env.EMAIL_SERVER_HOST,
        sendVerificationRequest(params) {
            return sendVerificationRequest(params)
        },
    })]
} satisfies NextAuthConfig;

export async function sendVerificationRequest(params: any) {
    const { identifier: to, provider, url, theme } = params
    const { host } = new URL(url)
    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${provider.apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: provider.from,
            to,
            subject: `Sign in to ${host}`,
            html: html({ url, host }),
            text: text({ url, host }),
        }),
    })

    if (!res.ok)
        throw new Error("Resend error: " + JSON.stringify(await res.json()))
}

function html(params: { url: string; host: string }) {
    const { url, host } = params

    const escapedHost = host.replace(/\./g, "&#8203;.")

    const brandColor = "#346df1"
    const color = {
        background: "#FFFFFF",
        text: "#444",
        mainBackground: "#fff",
        buttonBackground: "#18181b",
        buttonBorder: "#18181b",
        buttonText: "#fff",
        borderColor: "#e2e8f0",
    }
    const name = "NextJS Starter";

    return `
  <body style="background: ${color.background}; padding-top: 50px; padding-bottom: 100px;">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
      style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px; border: 1px solid black; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
          <tr>
            <td align="center"
              style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
              Thank you for registering!
            </td>
          </tr>
            <tr>
            <td align="center"
              style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
              Click the button below to get started using ${name}!
            </td>
            </tr>
          <tr>
            <td align="center" style="padding: 20px 0;">
              <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                      target="_blank"
                      style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                      in</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center"
              style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
              If you did not request this email you can safely ignore it.
            </td>
          </tr>
    </table>
  </body>
  `
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
function text({ url, host }: { url: string; host: string }) {
    return `Sign in to ${host}\n${url}\n\n`
}