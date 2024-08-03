import DashboardNav from "@/components/Dashboard/NavBar";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/Dashboard/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.corkera.co.uk"),
    title: "Alice Corker - Dashboard",
    description: "This is my portfolio.",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex h-dvh`}>
                <NavBar />
                <main className="w-full min-h-dvh">
                    {children}
                </main>
            </body>
        </html>
    );
}
