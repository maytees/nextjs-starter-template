"use client";

import React from 'react'
import { DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from './dropdown-menu'
import { MoonIcon } from 'lucide-react'
import { useTheme } from "next-themes";

const DropdownThemeSelect = () => {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2 h-full w-full">
                <MoonIcon size={16} />
                Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                        <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    )
}

export default DropdownThemeSelect