import type { Metadata } from "next";
import { Inter, Style_Script } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import QuoteBox from "@/components/QuoteBox";

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
            <body className={`${inter.className} mt-20 flex flex-col min-h-[calc(100dvh-80px)]`}>
                <NavBar />
                {children}
                <div className="flex-grow"></div>
                <QuoteBox quote={"In the end, we'll all become stories."} author={"Margaret Atwood"} />
                <Footer />
            </body>
        </html>
    );
}
