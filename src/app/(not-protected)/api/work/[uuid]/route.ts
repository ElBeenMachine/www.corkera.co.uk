/**
 * @author Ollie Beenham
 */

import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import { marked } from "marked";
import work from "@/lib/work/work";

export async function GET(req: Request, { params }: { params: { uuid: string } }) {
    // Define the project and description variables
    let project, description;

    // Find the work object with the matching uuid
    project = work.poetry.find((p) => p.uuid === params.uuid);

    // If the project is not found in the poetry category, try the creative non fiction category
    if (!project) {
        project = work["creative-non-fiction"].find((p) => p.uuid === params.uuid);
    }

    // If the project is still not found, return a 404 error
    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });

    // Try to read the project description from the file system
    try {
        description = readFileSync(`./src/lib/work/${project?.uuid}.md`, "utf-8");
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error loading project description" }, { status: 500 });
    }

    // If the description is not found, return a 404 error
    if (!description) return NextResponse.json({ error: "Project description not found" }, { status: 404 });

    // Introduce a 2-second delay using a Promise
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Create a custom renderer
    const renderer = new marked.Renderer();

    // Override the link rendering method
    renderer.link = ({ href, title, tokens }) => {
        return `<a href="${href}" target="_blank">${title || href}</a>`;
    };

    // Set the custom renderer to marked
    marked.setOptions({
        renderer: renderer,
    });

    // Return the project and the parsed description
    return NextResponse.json({ work: project, description: marked(description) }, { status: 200 });
}
