/**
 * @author Ollie Beenham
 */

import { Container } from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import work from "@/lib/work/work";
import { formatDate } from "@/utils/dateOperations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alice Corker - My Creative Non-Fiction",
    description: "This is my portfolio.",
  };

export default function MyPoetry() {
    // Sort the work array by date in descending order
    const sorted = work["creatinve-non-fiction"].sort((a, b) => { return b.date.getTime() - a.date.getTime(); });

    return (
        <div>
            <PageHeader title="My Poetry" />
            <Container>
                <div className="flex justify-center w-full">
                    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:max-w-[80%]">
                        {sorted.map((prose) => (
                            <a className="block content-center text-center py-4 px-3 transition-all hover:-translate-y-2 group" href={`/work/${prose.uuid}`} key={prose.uuid}>
                                <p className="text-xs opacity-30 transition-all group-hover:opacity-80">{formatDate(prose.date)}</p>
                                <h2 className="text-lg">{prose.title}</h2>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}