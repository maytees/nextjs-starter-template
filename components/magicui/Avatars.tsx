"use client";

import { cn } from "../../lib/utils";
import React from "react";
import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: string[];
    href?: string;
}

const AvatarCircles = ({ numPeople, className, avatarUrls, href }: AvatarCirclesProps) => {
    return (
        <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
            {avatarUrls.map((url, index) => (
                <Image
                    key={index}
                    className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                    src={url}
                    width={40}
                    height={40}
                    alt={`Avatar ${index + 1}`}
                />
            ))}
            <TooltipProvider>
                <Tooltip delayDuration={200}>
                    <TooltipTrigger>
                        <a
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
                            href={href}
                        >
                            +{numPeople}
                        </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>View testimonials</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default AvatarCircles;
