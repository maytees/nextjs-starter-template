import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./ui/theme-toggle";
import email from "next-auth/providers/email";
import {
    Menu
} from "lucide-react";

import {
    LogInIcon,
    LogOutIcon,
    MountainIcon,
    RocketIcon,
    SettingsIcon,
    UserIcon
} from "./VZeroIcons";

type TempSession = {
    user: {
        name: "John Doe",
        email: "5vCQx@example.com",
    }
} | null;

export default async function Component() {
    let session: TempSession = null;

    return (
        <>
            <Sheet>
                <SheetTrigger asChild className="mx-16 mt-20">
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 lg:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="h-screen flex flex-col justify-between">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Image src="Acme.svg" width="32" height="32" alt="Acme" />
                            <span className="sr-only">Acme</span>
                        </Link>
                        <Link href="/" className="hover:text-foreground">
                            Home
                        </Link>
                        <Link
                            href="#features"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Pricing
                        </Link>
                    </nav>
                    {/* {session &&
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
                                <Button href="/api/auth/signout" className="gap-2 justify-start pl-auto" variant="destructive">
                                    <LogOutIcon />
                                    <span>Log out</span>
                                </Button>
                            </div>
                            <Separator />
                            <div className="flex flex-row-reverse gap-2 w-full items-center justify-end">
                                <div className="flex flex-col">
                                    <h1 className="text-left">{session.user.name}</h1>
                                    <h2 className="text-left text-muted-foreground">{session.user.email}</h2>
                                </div>
                                <Image src="/placeholder.png" width="72" height="72" className="rounded-full" alt="Avatar" />
                            </div>
                        </div>
                    } */}
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
            <header className="hidden lg:flex h-20 w-full shrink-0 items-center px-16 xl:px-52 mt-10 2xl:mt-16">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <MountainIcon />
                    <span className="text-2xl text-primary font-bold">Starter</span>
                </Link>
                <nav className="ml-10 gap-10 text-md text-foreground font-medium flex">
                    <Link href="/" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#features" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#pricing" className="hover:opacity-50 transition-opacity ease-in-out duration-100" prefetch={false}>
                        Pricing
                    </Link>
                </nav>
                {/* {session &&
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex flex-row gap-4 ml-auto rounded-full hover:cursor-pointer">
                                <div className="">
                                    <h1 className="text-right text-sm">{session.user.name}</h1>
                                    <h2 className="text-right text-sm text-muted-foreground">{session.user.email}</h2>
                                </div>
                                <Button variant="ghost" size="icon" className="ml-auto rounded-full">
                                    <Image src="/placeholder.png" width="82" height="82" className="rounded-full" alt="Avatar" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                    <SettingsIcon className="h-4 w-4" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                    <UserIcon className="h-4 w-4" />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                    <RocketIcon className="h-4 w-4" />
                                    Plan
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                    <LogOutIcon className="h-4 w-4" />
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                } */}
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
