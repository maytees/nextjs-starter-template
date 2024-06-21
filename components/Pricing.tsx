import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, ChevronRight, XIcon } from 'lucide-react';
import Link from "next/link";
import { Button } from './ui/button';
import PricingOptions from './PricingOption';


const Pricing = () => {
    return (
        <div id="pricing" className='flex flex-col gap-10 mt-52 2xl:px-60'>
            <div className="flex flex-col">
                <h1 className='text-2xl font-bold text-center'>Pricing</h1>
                <h2 className='text-lg text-center'>Are you ready to explore the limitless possibilities?</h2>
            </div>

            <PricingOptions />
        </div >
    )
}


export default Pricing