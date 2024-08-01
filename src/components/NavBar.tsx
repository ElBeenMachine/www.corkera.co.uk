import { Style_Script } from "next/font/google";
import Link from "next/link";
import { Container } from "./Container";

const font = Style_Script({ weight: "400", style: "normal", subsets: ["latin"] });

export default function NavBar() {
    return (
        <nav className="w-full h-20 bg-white shadow-md fixed top-0 z-10">
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
                            Non-Fiction
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
}
