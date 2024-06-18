import React from 'react'
import { Button } from '@/components/ui/button'
import { FaGithub, FaAngleRight } from 'react-icons/fa'
import AvatarCircles from './magicui/Avatars';

const avatarUrls = [
    "https://avatars.githubusercontent.com/u/59754860",
    "https://avatars.githubusercontent.com/u/34900630",
    "https://avatars.githubusercontent.com/u/83298279",
    "https://avatars.githubusercontent.com/u/88842870",
];

const Hero = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center mt-44 gap-3 xl:px-48 2xl:px-96">
            <div className="absolute inset-0 h-screen w-screen -z-50 bg-background dark:bg-[radial-gradient(#0f0f0f_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
            [background-size:16px_16px]" >
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <Button href="#" variant="outline" size="sm" className='rounded-full group flex flex-row items-center justify-center gap-1'>
                <span className='font-semibold'>Take me places!</span>
                <FaAngleRight size={12} className='h-3 w-3 group-hover:translate-x-1 transition-transform duration-100 ease-in-out' />
            </Button>
            <h1 className="text-4xl font-bold text-center">
                Build NextJS 14 apps quickly with an easy to use template.
            </h1>
            <p className="text-lg font-normal text-center">
                When starting on a project, many people like myself get stuck on the
                annoying boilerplate: Authentication, Email, Database, Typesafety, Landing Page, and etc.
                So this template is meant for <span className='italic font-semibold'>saving time</span>
            </p>
            <Button href="https://github.com/maytees/nextjs-starter-template" className="flex flex-row items-center gap-2" size={"lg"}>
                <FaGithub size={20} />
                View repository
            </Button>
            <AvatarCircles numPeople={36} avatarUrls={avatarUrls} href="#testimonials" />
        </div>
    )
}

export default Hero