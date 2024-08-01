"use client";

import { Style_Script } from "next/font/google";
import Link from "next/link";
import { Container } from "./Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const font = Style_Script({ weight: "400", style: "normal", subsets: ["latin"] });

export default function NavBar() {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <>
            <nav id="desktop-nav" className="w-full h-20 bg-white shadow-md fixed top-0 z-10 hidden lg:block">
                <Container>
                    <div className="justify-center flex items-center h-20 px-4">
                        <div className="h-full w-full justify-start items-center gap-5 hidden lg:flex">
                            <Link href="/" className="transition-all hover:opacity-60">
                                My Story
                            </Link>
                            <Link href="/contact" className="transition-all hover:opacity-60">
                                Contact Me
                            </Link>
                        </div>
                        <h1 className={`text-4xl text-gray-800 ${font.className} w-full text-center`}>
                            <Link href="/">Alice Corker</Link>
                        </h1>
                        <div className="h-full w-full justify-end items-center gap-5 hidden lg:flex">
                            <Link href="/poetry" className="transition-all hover:opacity-60">
                                Poetry
                            </Link>
                            <Link href="/creative-non-fiction" className="transition-all hover:opacity-60">
                                Creative Non-Fiction
                            </Link>
                        </div>
                    </div>
                </Container>
            </nav>
            <nav id="mobile-nav" className="w-full h-20 bg-white shadow-md fixed top-0 z-20 lg:hidden">
                <Container>
                    <div className="w-full justify-start flex items-center h-20">
                        <h1 className={`text-2xl md:text-4xl text-gray-800 ${font.className} w-max text-center`}>
                            <Link href="/">Alice Corker</Link>
                        </h1>
                        <button className="w-20 h-20 absolute right-[20px] md:right-[40px] top-0 flex items-center justify-center">
                            <RxHamburgerMenu onClick={toggleOpen} className="text-2xl" />
                        </button>
                    </div>
                </Container>
            </nav>
            <div
                id="navLinks"
                className={`transition-all ${
                    open ? "w-full md:w-1/3 shadow-md" : "w-0"
                } fixed right-0 top-[80px] bg-pink h-full z-10 flex lg:hidden flex-col py-4`}
            >
                <Link onClick={toggleOpen} href="/" className="transition-all hover:opacity-60 text-gray-800 whitespace-nowrap py-4 px-6">
                    My Story
                </Link>
                <Link onClick={toggleOpen} href="/contact" className="transition-all hover:opacity-60 text-gray-800 whitespace-nowrap py-4 px-6">
                    Contact Me
                </Link>
                <Link onClick={toggleOpen} href="/poetry" className="transition-all hover:opacity-60 text-gray-800 whitespace-nowrap py-4 px-6">
                    My Poetry
                </Link>
                <Link
                    onClick={toggleOpen}
                    href="/creative-non-fiction"
                    className="transition-all hover:opacity-60 text-gray-800 whitespace-nowrap py-4 px-6"
                >
                    My Creative Non-Fiction
                </Link>
            </div>
        </>
    );
}
