import React from 'react'
import { MdShield, MdSpaceDashboard } from "react-icons/md";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Features = () => {
    return (
        <div id="features" className='flex flex-col gap-10 mt-52 mb-[100vh] 2xl:px-60'>
            <div className="flex flex-col">
                <h1 className='text-2xl font-bold text-center'>Features</h1>
                <h2 className='text-lg text-center'>What comes straight out of the box?</h2>
            </div>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10 xl:grid xl:grid-rows-2 grid-cols-2'>
                    <FeatureCard
                        icon={<MdShield size={62} />}
                        title="Authentication"
                        description={"This starter kit comes out of the box with all the authentication logic you need, including magic link, OTP authentication, Google OAuth, Github OAuth, Prisma and more."}
                    />
                    <FeatureCard
                        icon={<AiFillDollarCircle size={62} />}
                        title="Billing"
                        description={"Obviously, one of the important elements of a SaaS application is the revenue. This starter kit comes out of the box with Stripe subscriptions, and one time payment examples. Along with integration to the app dashboard."}
                    />
                    <FeatureCard
                        icon={<MdSpaceDashboard size={62} />}
                        title="Dashboard"
                        description={"This kit comes out of the box with a very intuitive dashbaord interface. You can use it to monitor your application, manage users (billing, data, etc), and much more."}
                    />
                    <FeatureCard
                        icon={<FaGear size={62} />}
                        title="Customizability"
                        description={"In this kit, you are given the ability to pick and choose different components to suit your needs. For instance, you can select a one of many different Hero sections depending on your project, for example, whether you require a hero image or not."}
                    />
                </div>
                <FeatureCard
                    icon={<FaMagnifyingGlass size={62} />}
                    title="SEO Optimization"
                    description={"SEO Optimization is CRUCIAL, which is why this starter kit makes it very easy to setup SEO optimization, via meta data you can tailor to your app's specific needs to land you at the top of the search results."}
                    className='w-full'
                />
            </div>
        </div>
    )
}

const FeatureCard = ({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) => {
    return (
        <Card className='py-5'>
            <CardHeader className='items-center'>
                {icon}
                <CardTitle className='text-lg font-bold'>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-center font-normal'>
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}

export default Features