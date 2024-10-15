import { Container } from "./Container";

import { Noto_Serif } from "next/font/google";

const font = Noto_Serif({ weight: "600", style: "normal", subsets: ["latin"] });

export default function Hero() {
    return (
        <div id="hero" className="w-full bg-pink text-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center h-max md:h-[50dvh]">
                <div className="w-full md:w-1/2 flex items-center justify-center p-12 min-h-[50dvh]">
                    <h1 className={`text-left ${font.className} text-4xl md:text-5xl lg:text-6xl`}>
                        <span className="text-white">“</span>I'm Alice,
                        <br />
                        and this is my story.
                        <span className="text-white">”</span>
                    </h1>
                </div>
                <img className="hidden md:block w-1/2 h-full object-center object-cover" alt="Hero Header" src={"/img/theme-01.webp"} />
            </div>
        </div>
    );
}
