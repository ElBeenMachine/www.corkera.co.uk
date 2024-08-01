import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alice Corker - My Story",
    description: "I'm just a girl. Just an ordinary girl, who has dedicated her life to writing. My name is Alice, and this is my story.",
};

export default function Home() {
    return (
        <main>
            <Hero />
            <Container>
                <div className="flex space-between flex-col-reverse lg:flex-row">
                    <div className="flex flex-col gap-8 w-full lg:w-1/2 p-6">
                        <img src="/img/theme-02.webp" className="w-full h-auto object-center object-cover" />
                    </div>
                    <div className="flex flex-col gap-8 w-full lg:w-1/2 p-6">
                        <p>
                            I'm just a girl. Just an ordinary girl, who has dedicated her life to writing. When I was little, I would sit with my
                            sister and DIY fashion magazines with our best gel pens. sellotape and all of the A4 paper we could find, advertising
                            dresses and makeup products for the sparkling price of £5.00 and under.
                        </p>
                        <p>
                            In primary school, my year six class entered a short story competition. The task was to tell a story in 100 words or less.
                            My story made its way into the collection along with the other winners', so as it got published, I clutched onto it like
                            it was the greatest gift I'd ever received. The book safely made its way into hospital to see my Nanna Beach, who inspired
                            many of my stories. She wasn't in the position to talk, attached to tube upon tube, yet the approving face and hum she
                            made told me I had to write even more going forward.
                        </p>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex space-between flex-col lg:flex-row">
                    <div className="flex flex-col gap-8 w-full lg:w-1/2 p-6">
                        <p>
                            In 2019, I started at Liverpool John Moore's University. I will never forget stepping off the train at Lime Street station
                            and the complete euphoria I felt. I could see my Nanna again in her hospital bed and the pride washed over me and wrapped
                            me in her powdery fragrance that I never thought I'd smell again.
                        </p>
                        <p>
                            During my time at university, I discovered a love for creative non-fiction and poetry. It is safe to say now that there is
                            no way I could condense a story into 100 words. My work tackles a range of topics, some hard hitting, others based on the
                            beach, bringing back the fondest of memories. This being said, Nanna will always be my favourite story.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 w-full lg:w-1/2 p-6">
                        <img src="/img/theme-03.webp" className="w-full h-auto object-center object-cover" />
                    </div>
                </div>
            </Container>
        </main>
    );
}
