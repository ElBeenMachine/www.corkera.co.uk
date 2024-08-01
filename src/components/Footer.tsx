import { Style_Script } from "next/font/google";
import Link from "next/link";
import { Container } from "./Container";

import info from "../../package.json";
const version = info.version;

const font = Style_Script({ weight: "400", style: "normal", subsets: ["latin"] });

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <h1 className={`text-4xl ${font.className}`}>
                        <Link href="/">Alice Corker</Link>
                    </h1>
                    <div className="flex flex-col">
                        <h1 className="text-xl mb-1">Sitemap</h1>
                        <Link href="/" className="w-max transition-all hover:opacity-60">
                            My Story
                        </Link>
                        <Link href="/contact-me" className="w-max transition-all hover:opacity-60">
                            Contact Me
                        </Link>
                        <Link href="/poetry" className="w-max transition-all hover:opacity-60">
                            My Poetry
                        </Link>
                        <Link href="/creative-non-fiction" className="w-max transition-all hover:opacity-60">
                            My Creative Non-Fiction
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl mb-1">Other Links</h1>
                        <Link
                            href="https://www.ljmu.ac.uk/study/courses/undergraduates/2024/32840-creative-writing-ba-hons"
                            target="_blank"
                            className="w-max transition-all hover:opacity-60"
                        >
                            Creative Writing at LJMU
                        </Link>
                        <Link href="#" target="_blank" className="w-max transition-all hover:opacity-60">
                            Link 2
                        </Link>
                        <Link href="#" target="_blank" className="w-max transition-all hover:opacity-60">
                            Link 3
                        </Link>
                        <Link href="#" target="_blank" className="w-max transition-all hover:opacity-60">
                            Link 4
                        </Link>
                    </div>
                </div>
                <p className="text-center opacity-40 text-xs mt-12">
                    Created by{" "}
                    <Link href={"https://www.beenhamow.co.uk"} target="_blank" className="underline">
                        Ollie Beenham
                    </Link>{" "}
                    | Version {version}
                </p>
            </Container>
        </footer>
    );
}
