"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useParams, useSearchParams } from "next/navigation"

enum Error {
    Configuration = "Configuration",
    AccessDenied = "Access Denied",
    Verification = "Verification",
    Default = "Default",
}

const errorMap = {
    [Error.Configuration]: (
        <p>
            There was a problem when trying to authenticate. Please contact us if this
            error persists. Unique error code:{" "}
            <code className="text-xs bg-slate-100 p-1 rounded-sm">Configuration</code>
        </p>
    ),
    [Error.AccessDenied]: (
        <p>
            You don{"'"}t have permission to access this page. Please contact us if this
            error persists. Unique error code:{" "}
            <code className="text-xs bg-slate-100 p-1 rounded-sm">Access Denied</code>
        </p>
    ),
    [Error.Verification]: (
        <p>
            Seems like the link is invalid or expired. Please contact us if the
            error persists. Unique error code:
            <code className="text-xs bg-slate-100 p-1 rounded-sm">Verification</code>
        </p>
    ),
    [Error.Default]: (
        <p>
            There was a problem when trying to authenticate. Please contact us if this
            error persists. Unique error code:{" "}
            <code className="text-xs bg-slate-100 p-1 rounded-sm">Default</code>
        </p>
    ),
}

export default function AuthErrorPage() {
    const search = useSearchParams()
    const error = search.get("error") as Error

    return (
        <Card className="mx-auto max-w-sm mt-[20vh] mb-48">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Whoops!</CardTitle>
                <CardDescription>
                    Something went wrong...
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                {errorMap[error] || "Please contact us if this error persists."}
            </CardContent>
        </Card>
    )
}