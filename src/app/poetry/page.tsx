/**
 * @author Ollie Beenham
 */

import { Container } from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import work from "@/lib/work/work";
import { formatDate } from "@/utils/dateOperations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alice Corker - My Poetry",
    description: "This is my portfolio.",
};

export default function MyPoetry() {
    // Sort the work array by date in descending order
    const sorted = work.poetry.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

    return (
        <main>
            <PageHeader title="My Poetry" />
            <Container>
                <div className="w-full flex items-center justify-center mt-12 text-center flex-col">
                    <p className="max-w-[500px] w-full">
                        Some of my poetry focuses on important themes such as loss, grief, sexual assault and mental health.
                    </p>
                    <p className="mt-3">Resources for these are as follows:</p>
                    <a
                        href="https://www.samaritans.org/how-we-can-help/contact-samaritan/"
                        className="mt-3 underline transition-all hover:opacity-70 py-2"
                        target="_blank"
                    >
                        Contact Samaritans - Free support available 24/6 on 116 123.
                    </a>
                    <a href="https://giveusashout.org/" className="mt-3 underline transition-all hover:opacity-70 py-2" target="_blank">
                        Contact Shout - A free and confidential messaging service. Text SHOUT to 85258.
                    </a>
                    <a
                        href="https://rainn.org/new-rainn-mobile-app-offers-survivors-loved-ones-another-option-support"
                        className="mt-3 underline transition-all hover:opacity-70 py-2"
                        target="_blank"
                    >
                        Contact Rainn - The nation's largest anti-sexual violence organization. Available 24/7.
                    </a>
                    <p className="mt-3 pt-2">Please don't hesitate to reach out. You are not alone.</p>
                </div>
                <div className="flex justify-center w-full">
                    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full lg:max-w-[90%]">
                        {sorted.map((poem) => (
                            <a
                                className="block content-center text-center py-4 px-3 transition-all hover:-translate-y-1 group"
                                href={`/work/${poem.uuid}`}
                                key={poem.uuid}
                            >
                                <p className="text-xs opacity-30 transition-all group-hover:opacity-80">{formatDate(poem.date)}</p>
                                <h2 className="text-lg">{poem.title}</h2>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
}
