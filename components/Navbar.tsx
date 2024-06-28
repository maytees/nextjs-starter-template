import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ModeToggle, ModeToggle2 } from "./ui/theme-toggle";

import {
    Menu,
    MountainSnowIcon,
    MountainIcon,
    MoonIcon
} from "lucide-react";

import {
    LogInIcon,
    LogOutIcon,
    RocketIcon,
    SettingsIcon,
    UserIcon
} from "./VZeroIcons";
import { auth } from "@/server/auth";
import DropdownThemeSelect from "./ui/dropdownThemeSelect";

export default async function Component() {
    const session = await auth();

    return (
        <>
            <Sheet modal={false}>
                <SheetTrigger asChild className="flex lg:hidden mt-20 w-full">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 items-center">
                            <MountainIcon size={24} />
                            <span className="text-2xl text-primary font-bold">Acme</span>
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 lg:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </div>
                </SheetTrigger>
                <SheetContent side="left" className="h-screen flex flex-col justify-between">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/"
                            className="flex flex-row items-center gap-2 text-lg font-semibold"
                        >
                            <MountainIcon />
                        </Link>
                        <Link href="/" className="hover:text-foreground">
                            Home
                        </Link>
                        <Link
                            href="#tools"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Tools
                        </Link>
                        <Link
                            href="#features"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Features
                        </Link>
                        <Link
                            href="#faq"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Pricing
                        </Link>
                    </nav>
                    {session &&
                        <div className="flex flex-col gap-8">
                            <Separator />
                            <div className="flex flex-col gap-3">
                                <Button className="gap-2 justify-start pl-auto" variant="outline">
                                    <SettingsIcon />
                                    <span>Settings</span>
                                </Button>
                                <Button className="gap-2 justify-start pl-auto" variant="outline">
                                    <UserIcon />
                                    <span>Profile</span>
                                </Button>
                                <Button className="gap-2 justify-start pl-auto" variant="outline">
                                    <RocketIcon />
                                    <span>Plan</span>
                                </Button>
                                <ModeToggle2 />
                                <Button href="/api/auth/signout" className="gap-2 justify-start pl-auto" variant="destructive">
                                    <LogOutIcon />
                                    <span>Log out</span>
                                </Button>
                            </div>
                            <Separator />
                            <div className="flex flex-row-reverse gap-2 w-full items-center justify-end">
                                <div className="flex flex-col">
                                    <h1 className="text-left font-semibold">{session?.user?.name}</h1>
                                    <h2 className="text-left text-muted-foreground">{session?.user?.email}</h2>
                                </div>
                                <Image src={session?.user?.image || "https://avatar.iran.liara.run/public/31"} width="62" height="62" className="rounded-full" alt="Avatar" />
                            </div>
                        </div>
                    }
                    {!session && <div className="gap-5 flex flex-col">
                        <Separator className="mb-5" />
                        <Button href="/api/auth/signin" variant="outline">
                            Log in
                        </Button>
                        <Button href="/auth/register" variant="default">
                            Register
                        </Button>
                    </div>}
                </SheetContent>
            </Sheet>
            <header className="hidden lg:flex h-20 w-full shrink-0 items-center px-16 2xl:px-60 mt-10 2xl:mt-16">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <MountainIcon />
                    <span className="text-2xl text-primary font-bold">Acme</span>
                </Link>
                <nav className="ml-10 gap-5 text-md text-foreground font-medium flex">
                    <Link href="/" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#tools" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        Tools
                    </Link>
                    <Link href="#features" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#faq" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        FAQ
                    </Link>
                    <Link href="#pricing" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        Pricing
                    </Link>
                </nav>
                {session &&
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex flex-row gap-4 ml-auto rounded-full hover:cursor-pointer">
                                <div className="">
                                    <h1 className="text-right text-sm font-bold">{session?.user?.name}</h1>
                                    <h2 className="text-right text-sm text-muted-foreground">{session?.user?.email}</h2>
                                </div>
                                <div className="flex-shrink-0">
                                    <Image src={session?.user?.image || "https://avatar.iran.liara.run/public/31"} width="44" height="44" className="rounded-full" alt="Avatar" />
                                    <span className="sr-only">Toggle user menu</span>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2 h-full w-full" prefetch={false}>
                                    <SettingsIcon />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2 h-full w-full" prefetch={false}>
                                    <UserIcon />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2 h-full w-full" prefetch={false}>
                                    <RocketIcon />
                                    Plan
                                </Link>
                            </DropdownMenuItem>
                            <DropdownThemeSelect />
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="/auth/logout" className="flex items-center gap-2 w-full h-full" prefetch={false}>
                                    <LogOutIcon />
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
                {
                    !session &&
                    <div className="ml-auto flex flex-row gap-x-5">
                        <ModeToggle />
                        <div className="flex flex-row gap-x-10">
                            <Button href="/api/auth/signin" className="px-10 py-2" variant="outline">Log in</Button>
                            <Button href="/auth/register" className="px-10 py-2" variant="default">Get Started</Button>
                        </div>
                    </div>
                }
            </header>
        </>
    )
}
