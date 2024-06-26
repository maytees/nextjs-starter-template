"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import SetThemeSetting from "./profile/SetThemeSetting";
import ChangenameSetting from "./profile/ChangeUsername";
import DeleteAccount from "./profile/DeleteAccount";

// This is stupid asf dont judge
export const SettingsTab = ({ tab, defaultTab }: { tab: string, defaultTab?: string }) => {
    const searchParams = useSearchParams();
    const param = searchParams.get("tab");
    const isCorrect = searchParams.get("tab") === tab

    const router = useRouter();

    const tabs = [
        "profile",
        "appearance",
    ];

    if (!param) {
        router.push(`/settings?tab=${defaultTab}`)
        return null;
    }

    if (!tabs.includes(param)) {
        router.push(`/settings?tab=${defaultTab}`)
        return null;
    }

    return (
        <>{isCorrect && <div className="space-y-10 mb-10">
            <ChangenameSetting />
            <SetThemeSetting />
            <DeleteAccount />
        </div>}</>
    )
}