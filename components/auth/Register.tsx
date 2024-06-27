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
import { register } from '@/actions/register';
import { registerSchema } from '~/lib/validation';
import { toast } from "sonner"

const Register = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: ""
        }
    });

    async function onSubmit({ email, name }: z.infer<typeof registerSchema>) {
        const registerRes = await register({ email, name });

        if (registerRes.success) {
            const res = await signIn("resend", {
                email,
                callbackUrl: `${window.location.origin}`,
                redirect: true
            });
            console.log(res);
            return;
        }

        toast.error(registerRes.error);
    }

    return (
        <Card className="mx-auto max-w-sm mt-[12vh] mb-48">
            <CardHeader>
                <CardTitle className="text-2xl">Hello there.</CardTitle>
                <CardDescription>
                    Fill in the form to register and begin your journey with us.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className='space-y-2'>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input id="username" type="text" placeholder="john_doe1" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input id="email" type="email" placeholder="johnfoe@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Register
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
                    <Link href="/auth/signin" className="underline">
                        Log in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

export default Register