import { Style_Script } from "next/font/google";

const font = Style_Script({ weight: "400", style: "normal", subsets: ["latin"] });

export default function NavBar() {
    return (
        <nav className="w-full h-20 bg-white justify-center flex items-center px-4 shadow-md">
            <h1 className={`text-4xl text-gray-800 ${font.className}`}>Alice Corker</h1>
        </nav>
    );
}