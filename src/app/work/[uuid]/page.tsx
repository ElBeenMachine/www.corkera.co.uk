/**
 * @author Ollie Beenham
 */

"use client";

import { Container } from "@/components/Container";
import { Work } from "@/lib/interfaces/Work.interface";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Piece({ params }: { params: { uuid: string } }) {
    const [work, setWork] = useState<Work | null>(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        console.log("Loading work...");

        const loadWork = async () => {
            const workRequest = await fetch(`/api/work/${params.uuid}`);
            const workData = await workRequest.json();

            if(workData.error) {
                return notFound();
            }

            setWork(workData.work);
            setDescription(workData.description);   
        }

        loadWork();
    }, []);

    return (
        <Container>
            <h1>{work?.title}</h1>
            {description && (
                <div
                    id="work-description"
                    className="w-full"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
            )}
        </Container>
    )
}