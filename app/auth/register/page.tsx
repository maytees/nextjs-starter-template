import React from 'react'
import Register from '@/components/auth/Register'
import { redirect } from 'next/navigation';
import { auth } from '@/server/auth';

const RegisterPage = async () => {
    const session = await auth()

    if (session) redirect('/');

    return (
        <Register />
    )
}

export default RegisterPage