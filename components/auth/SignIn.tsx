"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { Separator } from '@/components/ui/separator';
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { signIn } from 'next-auth/react';
import { login } from '@/actions/login';
import { useRouter } from 'next/navigation';
import { loginSchema } from '~/lib/validation';

function Login() {
    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: ""
        }
    });

    async function onSubmit({ email }: z.infer<typeof loginSchema>) {
        const loginRes = await login(email);

        if (!loginRes.success) {
            router.push("/auth/register")
            return;
        }
    }

    return (
        <Card className="mx-auto max-w-sm mt-[12vh] mb-48">
            <CardHeader>
                <CardTitle className="text-2xl">Welcome back.</CardTitle>
                <CardDescription>
                    Enter your email below to send a magic link.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input id="email" type="email" placeholder="m@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Send Link
                        </Button>
                    </form>
                </Form>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row mt-3 items-center">
                        <Separator className='w-1/4' />
                        <span className="mx-auto uppercase font-light text-sm text-muted-foreground">or login with</span>
                        <Separator className='w-1/4' />
                    </div>
                    <Button variant="outline" className="w-full justify-start">
                        <FaDiscord className="ml-28" />
                        <span className='pl-2'>Discord</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <FaGoogle className="ml-28" />
                        <span className='pl-2'>Google</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <FaGithub className="ml-28" />
                        <span className='pl-2'>Github</span>
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/register" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

export default Login;
