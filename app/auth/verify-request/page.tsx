import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const VerifyRequestPage = () => {
    return (
        <Card className="mx-auto max-w-sm mt-[20vh] mb-48">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Thanks for logging in</CardTitle>
                <CardDescription className='text-center'>You can exit this page now.</CardDescription>
            </CardHeader>
            <CardContent className='text-center'>
                A sign in link has been sent to your email.
            </CardContent>
        </Card>
    )
}

export default VerifyRequestPage