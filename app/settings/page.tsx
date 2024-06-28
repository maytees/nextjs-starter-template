import { SettingsTab } from '@/components/settings/SettingsTab'
import { auth } from '@/server/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const SettingsPage = async () => {
    const session = await auth();

    if (!session) return redirect("/auth/signin");

    return (
        <div className='space-y-10 w-full px-60 mt-10'>
            <h1 className='text-2xl font-bold'>Settings</h1>
            <div className='w-full flex flex-row'>
                <div className='w-1/4 h-full'>
                    <Link href="/settings?tab=profile">Profile</Link>
                </div>
                <div className='w-3/4 h-full'>
                    <SettingsTab tab="profile" defaultTab='profile' />
                </div>
            </div>
        </div>
    )
}


export default SettingsPage