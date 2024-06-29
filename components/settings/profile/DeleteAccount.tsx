"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from "@/components/ui/checkbox";
import { deleteAccount } from "@/actions/deleteAccount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { deleteAccountSchema } from "@/lib/validation";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { toast } from "sonner";

const DeleteAccount = () => {
    const form = useForm<z.infer<typeof deleteAccountSchema>>({
        resolver: zodResolver(deleteAccountSchema),
        defaultValues: {
            agree: false
        }
    });

    function onSubmit(data: z.infer<typeof deleteAccountSchema>) {
        const res = deleteAccount().then(res => {
            if (res.success) {
                console.log(res);
                return;
            }

            toast.error(res.error);
        });

        console.log(res);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Delete Account</CardTitle>
                <CardDescription>
                    Completely delete your account from Acme. This action cannot be undone.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button type='submit' variant="destructive">
                            Delete Account
                        </Button>
                    </DialogTrigger>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                    <FormField
                                        control={form.control}
                                        name="agree"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row gap-2 items-center">
                                                <Checkbox
                                                    id="agree"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="mt-2"
                                                />
                                                <FormLabel htmlFor="agree">
                                                    I agree with these terms.
                                                </FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                </DialogHeader>
                                <DialogFooter className="gap-2">
                                    <Button onClick={() => (deleteAccount())} variant="destructive" disabled={!form.getValues().agree}>
                                        Delete Account
                                    </Button>
                                    <DialogClose asChild>
                                        <Button variant={"outline"}>
                                            Nope, I change my mind
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Form>
                </Dialog>
            </CardContent>
        </Card >
    )
}

export default DeleteAccount