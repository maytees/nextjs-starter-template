import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { ThemeSetting, changeUsernameSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { changeUsername } from '@/actions/changeUsername';
import { toast } from 'sonner';

const ChangenameSetting = () => {

    const form = useForm<z.infer<typeof changeUsernameSchema>>({
        resolver: zodResolver(changeUsernameSchema),
        defaultValues: {
            name: "",
        }
    });

    function onSubmit(values: z.infer<typeof changeUsernameSchema>) {
        changeUsername(values).then(res => {
            if (res.success) {
                console.log(res);
                return;
            }

            toast.error(res.error);
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Change username</CardTitle>
                <CardDescription>
                    Change your username. Your username can only contain letters, numbers,
                    and underscores and must be a minimum of 3 characters long.
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder={"New Username"} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button type='submit' variant="default">
                            Change Username
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card >
    )
}

export default ChangenameSetting