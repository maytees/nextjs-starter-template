import React from 'react'
import { FaStripeS } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiResend, SiShadcnui } from "react-icons/si";
import { Separator } from './ui/separator'
import { MdShield } from "react-icons/md";
import Link from "next/link"
import { ArrowRightIcon, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Features = () => {
    return (
        <div id="features" className='flex flex-col gap-10 mt-96 mb-[100vh] 2xl:px-60'>
            <div className="flex flex-col">
                <h1 className='text-2xl font-bold text-center'>Tools</h1>
                <h2 className='text-lg text-center'>What tools are being used in this kit?</h2>
            </div>

            <div className="grid lg:grid-flow-row lg:grid-cols-2 lg:grid-rows-2 2xl:grid-cols-3 2xl:grid-rows-2 gap-20 lg:gap-10 mt-5 lg:mt-10">
                <FeatureCard
                    icon={<SiNextdotjs size={32} />}
                    title="NextJS 14"
                    description="NextJS 14 is a must have. It is the most popular and powerful framework for building full stack applications. Use server actions for backend logic, along with api routes for data fetching."
                    href="https://nextjs.org/"
                />
                <FeatureCard
                    icon={<MdShield size={32} />}
                    title="Next Auth"
                    description="NextAuth JS allows you to easily handle authentication and authorization in your SaaS app.
                    This template comes out of the box with Magic link, OTP, Google, and Github authentication methods."
                    href='https://authjs.dev/'
                />
                <FeatureCard
                    icon={<SiResend size={32} />}
                    title="Resend"
                    description="Resend is an easey to use mail service which is easily connected with NextAuth, to handle magic
                    link. Resend is also used for OTP, Password Reset, and Verification emails."
                    href="https://resend.com/"
                />

                <FeatureCard
                    icon={<FaStripeS size={32} />}
                    title="Stripe Payment"
                    description="Stripe providers seamless and secure payment processing, allowing you to easily accept
                payments from customers worldwide. It is all set up for you, and ready to go."
                    href="https://stripe.com/"
                />

                <FeatureCard
                    icon={<SiTailwindcss size={32} />}
                    title="Tailwind CSS"
                    description="Tailwind CSS is a very powerful, I 
                    barely know how to use normal CSS, and I do not reccomend it as Tailwind CSS is such as a lifesaver, and a
                    must have for modern SaaS projects, especially when paired with React."
                    href="https://tailwindcss.com/"
                />
                <FeatureCard
                    icon={<SiShadcnui size={32} />}
                    title="Shadcn UI"
                    description="Certainly a must have. I have paired Shadcn UI with Magic UI, 
                    and Aceternity UI in order to get awesome animations and a variety of 
                    components for your Saas Project. Some components are customized BTW."
                    href="https://ui.shadcn.com/"
                />
            </div>
        </div>
    )
}

const FeatureCard = ({ icon, title, description, className, href }: { icon: React.ReactNode, title: string, description: string, className?: string, href?: string }) => {
    return (
        <div className={"flex flex-col justify-between min-h-64 " + className} >
            <div className="space-y-5">
                <div className="space-y-3">
                    {icon}
                    <div>
                        <span className='text-lg font-bold'>{title}</span>
                        <Separator className='w-full' />
                    </div>
                </div>
                <p>{description}</p>
            </div>

            {href &&
                <Link target='_blank' href={href} className='group flex flex-row items-center text-blue-600'>
                    <span className='lg:text-sm font-light'>Learn more</span>
                    <ChevronRight size={12} className='text-blue-600 group-hover:translate-x-1 transition-transform duration-100 ease-in-out' />
                </Link>
            }
        </div >
    );
}

export default Features