/**
 * @author Ollie Beenham
 */

import work from "@/lib/work/work";
import WorkContent from "@/components/WorkContent";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: { uuid: string } }) {
    // Loop through all the works and find the one with the matching uuid
    let piece = work.poetry.find((piece) => piece.uuid === params.uuid);

    if (!piece) piece = work["creative-non-fiction"].find((piece) => piece.uuid === params.uuid);

    if (!piece) return { title: "An Original Piece By Alice Corker" };

    return {
        title: `${piece.title} - By Alice Corker`,
    };
}

export default async function Piece({ params }: { params: { uuid: string } }) {
    return (
        <main className="py-12">
            <Suspense fallback={"LOADING"}>
                <WorkContent uuid={params.uuid} />
            </Suspense>
        </main>
    );
}
