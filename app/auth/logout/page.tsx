import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { auth, signOut } from '@/server/auth';
import { redirect } from 'next/navigation';

const LogoutPage = async () => {
    const session = await auth();

    if (!session) redirect("/");
    return (
        <Card className="mx-auto max-w-sm mt-[20vh] mb-48">
            <CardHeader>
                <CardTitle className="text-2xl">Sad to see you go.</CardTitle>
                <CardDescription>
                    Do you really wish to log out??
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action={async (formData) => {
                    "use server";
                    await signOut();
                }}>
                    <Button type="submit" className="w-full">
                        Log out
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default LogoutPage