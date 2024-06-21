"use client";
import React from 'react'
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, ChevronRight, XIcon } from 'lucide-react';

type PricingFeature = {
    name: string;
    checked: boolean;
};

export type PricingTier = {
    name: string;
    description: string;
    price: string;
    features: PricingFeature[];
    button: string;
    badge?: string;
    highlight?: boolean;
};

const monthlyTiers: PricingTier[] = [
    {
        name: "Open Source",
        description: "Everything included in this kit is open source",
        price: "$0/month",
        features: [
            { name: "Example Feature 1", checked: true },
            { name: "Example Feature 2", checked: true },
            { name: "Example Feature 3", checked: true },
            { name: "Example Feature 4", checked: true },
            { name: "Example Feature 5", checked: true },
            { name: "Example Feature 6", checked: false },
            { name: "Example Feature 7", checked: false },
            { name: "Example Feature 8", checked: false },
            { name: "Example Feature 9", checked: false },
            { name: "Example Feature 10", checked: false }
        ],
        button: "Visit Repository",
    },
    {
        name: "Pro",
        description: "Everything included in the Open Source tier plus...",
        price: "$10/month",
        features: [
            { name: "Example Feature 1", checked: true },
            { name: "Example Feature 2", checked: true },
            { name: "Example Feature 3", checked: true },
            { name: "Example Feature 4", checked: true },
            { name: "Example Feature 5", checked: true },
            { name: "Example Feature 6", checked: false },
            { name: "Example Feature 7", checked: false },
            { name: "Example Feature 8", checked: false },
            { name: "Example Feature 9", checked: false },
            { name: "Example Feature 10", checked: false }
        ],
        button: "Purchase",
    },
    {
        name: "Enterprise",
        description: "Everything included in the Pro tier plus...",
        price: "Lets talk...",
        features: [
            { name: "Example Feature 1", checked: true },
            { name: "Example Feature 2", checked: true },
            { name: "Example Feature 3", checked: true },
            { name: "Example Feature 4", checked: true },
            { name: "Example Feature 5", checked: true },
            { name: "Example Feature 6", checked: false },
            { name: "Example Feature 7", checked: false },
            { name: "Example Feature 8", checked: false },
            { name: "Example Feature 9", checked: false },
            { name: "Example Feature 10", checked: false }
        ],
        button: "Contact Us",
    }
];

const yearlyTiers: PricingTier[] = [
    {
        name: "Open Source",
        description: "Everything included in this kit is open source",
        price: "$0/year",
        features: [
            { name: "Example Feature 1", checked: true },
            { name: "Example Feature 2", checked: true },
            { name: "Example Feature 3", checked: true },
            { name: "Example Feature 4", checked: true },
            { name: "Example Feature 5", checked: true },
            { name: "Example Feature 6", checked: false },
            { name: "Example Feature 7", checked: false },
            { name: "Example Feature 8", checked: false },
            { name: "Example Feature 9", checked: false },
            { name: "Example Feature 10", checked: false }
        ],
        button: "Visit Repository",
    },
    {
        name: "Pro",
        description: "Everything included in the Open Source tier plus...",
        price: "$100/year",
        badge: "Save $20",
        highlight: true,
        features: [
            { name: "Example Feature 1", checked: true },
            { name: "Example Feature 2", checked: true },
            { name: "Example Feature 3", checked: true },
            { name: "Example Feature 4", checked: true },
            { name: "Example Feature 5", checked: true },
            { name: "Example Feature 6", checked: false },
            { name: "Example Feature 7", checked: false },
            { name: "Example Feature 8", checked: false },
            { name: "Example Feature 9", checked: false },
            { name: "Example Feature 10", checked: false }
        ],
        button: "Purchase",
    },
    {
        name: "Enterprise",
        description: "Everything included in the Pro tier plus...",
        price: "Lets talk...",
        features: [
            { name: "Example Feature 1", checked: true },
            { name: "Example Feature 2", checked: true },
            { name: "Example Feature 3", checked: true },
            { name: "Example Feature 4", checked: true },
            { name: "Example Feature 5", checked: true },
            { name: "Example Feature 6", checked: false },
            { name: "Example Feature 7", checked: false },
            { name: "Example Feature 8", checked: false },
            { name: "Example Feature 9", checked: false },
            { name: "Example Feature 10", checked: false }
        ],
        button: "Contact Us",
    }
];

const PricingOptions = () => {
    // Always selects the first option
    const [isMonthly, setMonthly] = React.useState(true);

    return (
        <div className='flex flex-col gap-5 items-center'>
            <div className='flex flex-row px-3 py-2 bg-accent rounded-xl gap-1'>
                <Button variant={isMonthly ? "default" : "ghost"} onClick={() => setMonthly(true)} size="sm" className='font-semibold text-base'>Monthly</Button>
                <Button variant={isMonthly ? "ghost" : "default"} onClick={() => setMonthly(false)} size="sm" className='font-semibold text-base'>Yearly</Button>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-5 mt-5">
                {isMonthly ?
                    monthlyTiers.map((tier) => {
                        return <PricingCard key={tier.name} tier={tier} />
                    })
                    :
                    yearlyTiers.map((tier) => {
                        return <PricingCard key={tier.name} tier={tier} />
                    })
                }
            </div >
        </div>
    )
}

const PricingCard = (
    { tier }: { tier: PricingTier }
) => {

    return (
        <Card className={`w-full 2xl:w-1/3 min-h-[30rem] flex flex-col justify-between h-full  ${tier.highlight && "border-[#ee9ca7]"}`}>
            <CardHeader>
                <CardTitle>
                    <div className='flex flex-row justify-between'>
                        <span className='text-lg font-normal'>{tier.name}</span>
                        {tier.badge && <Badge text={tier.badge} />}
                    </div>
                    <p className='text-xl font-bold mb-2'>{tier.price}</p>
                </CardTitle>
                <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
                {tier.features.map((feature: PricingFeature) => (
                    <div key={feature.name} className='flex flex-row items-center gap-3'>
                        {feature.checked ? <CheckCircle className="h-4 w-4" /> : <XIcon className="h-4 w-4" />}
                        <span>{feature.name}</span>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                <Button variant={tier.highlight ? "default" : "outline"} className='group mt-auto w-full'>
                    <span>{tier.button}</span>
                    <ChevronRight size={14} className='ml-1 mt-[2px] group-hover:translate-x-1 transition-transform duration-100 ease-in-out' />
                </Button>
            </CardFooter>
        </Card >
    );
}
const Badge = (
    { text }:
        {
            text: string
        }
) => {

    return (
        <div className={`py-1 px-4 w-fit rounded-2xl bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]`}>
            <span className="font-normal text-sm">{text}</span>
        </div>
    )
}

export default PricingOptions