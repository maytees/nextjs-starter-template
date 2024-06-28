"use client";
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const SettingCard = (
    {
        children,
        title = "Setting",
        description = "Setting description",
        onSave
    }:
        {
            children: React.ReactNode,
            title: string,
            description: string,
            onSave: any
        },
) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Button onClick={onSave} variant="default">
                    Save
                </Button>
            </CardFooter>
        </Card >
    )
}

export default SettingCard