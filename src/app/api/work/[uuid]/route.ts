/**
 * @author Ollie Beenham
 */

import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import { parse } from "marked";
import work from "@/lib/work/work";

export function GET(req: Request, { params }: { params: { uuid: string } }) {
    // Define the project and description variables
    let project, description;

    // Find the work object with the matching uuid
    project = work.poetry.find((p) => p.uuid === params.uuid);

    // If the project is not found in the poetry category, try the creative non fiction category
    if (!project) {
        project = work["creatinve-non-fiction"].find((p) => p.uuid === params.uuid);
    }

    // If the project is still not found, return a 404 error
    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });

    // Try to read the project description from the file system
    try {
        description = readFileSync(`./src/lib/work/${project?.uuid}.md`, "utf-8");
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Error loading project description" }, { status: 500 });
    }

    // If the description is not found, return a 404 error
    if (!description) return NextResponse.json({ error: "Project description not found" }, { status: 404 });

    // Return the project and the parsed description
    return NextResponse.json({ work: project, description: parse(description) }, { status: 200 });
}