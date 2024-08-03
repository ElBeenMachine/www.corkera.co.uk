"use client";

import { Style_Script } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const font = Style_Script({ weight: "400", style: "normal", subsets: ["latin"] });

export default function DashboardNav() {
    const path = usePathname();
    console.log(path);

    return <nav className="w-max flex flex-col h-full shadow-lg">
        <h1 className={`${font.className} text-gray-800 py-6 px-12 select-none`}>Dashboard</h1>
        <div className="flex flex-col justify-start items-center">
            <Link href="/dashboard" className={`py-3 px-4 hover:bg-black/10 transition-all text-left w-full ${path == "/dashboard" ? "bg-black/10" : ""}`}>My Dashboard</Link>
            <Link href="/dashboard/poetry" className={`py-3 px-4 hover:bg-black/10 transition-all text-left w-full ${path == "/dashboard/poetry" ? "bg-black/10" : ""}`}>My Poetry</Link>
            <Link href="/dashboard/creative-non-fiction" className={`py-3 px-4 hover:bg-black/10 transition-all text-left w-full ${path == "/dashboard/creative-non-fiction" ? "bg-black/10" : ""}`}>My Creative Non-Fiction</Link>
        </div>
    </nav>
}