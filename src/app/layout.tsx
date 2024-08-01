import type { Metadata } from "next";
import { Inter, Style_Script } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alice Corker",
    description: "This is my portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} mt-20`}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
