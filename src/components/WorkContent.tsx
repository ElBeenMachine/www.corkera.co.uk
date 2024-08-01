"use client";

import { Work } from "@/lib/interfaces/Work.interface";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Loading } from "./LoadingSkeleton";

export default function WorkContent({ uuid }: { uuid: string }) {
    const [work, setWork] = useState<Work | null>(null);
    const [description, setDescription] = useState(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        console.log("Loading work...");

        const loadWork = async () => {
            const workRequest = await fetch(`/api/work/${uuid}`);

            if (!workRequest.ok) router.push("/not-found");

            const workData = await workRequest.json();

            setWork(workData.work);
            setDescription(workData.description);
            setLoading(false);
        };

        loadWork();
    }, []);

    return (
        <div>
            {loading && (
                <Container>
                    <Loading />
                </Container>
            )}

            {work && description && !loading && (
                <Container>
                    <h1 className="text-4xl font-semibold">{work.title}</h1>
                    <h2 className="mb-6 text-lg opacity-40">By Alice Corker</h2>
                    {description && <div id="work-description" className="w-full" dangerouslySetInnerHTML={{ __html: description }}></div>}
                </Container>
            )}
        </div>
    );
}
