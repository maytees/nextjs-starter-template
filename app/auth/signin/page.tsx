import React from 'react'
import SignIn from "@/components/auth/SignIn";
import { auth } from '@/server/auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
    const session = await auth()

    if (session) redirect('/');

    return (
        <SignIn />
    )
}

export default SignInPage