/**
 * @author Ollie Beenham
 */

import Link from "next/link";
import { Container } from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "404 - Page Not Found",
	description:
		"The requested location or resource could not be found on our servers. Please check the URL and try again.",
};

export default function NotFound() {
	return (
		<div className="h-[calc(100dvh-80px)] flex flex-col items-center justify-center">
			<Container>
				<div className="flex flex-col gap-10 items-center justify-center">
					<h1 className="text-[20px] lg:text-[40px] font-semibold text-center text-gray-800">
						404
						<br /> Page Not Found
					</h1>
					<Link
						href="/"
						className="bg-gray-800 hover:bg-gray-800/85 rounded-md px-6 py-2 text-white w-max flex items-center transition-all gap-3 group font-semibold">
						Go back to Home
					</Link>
				</div>
			</Container>
		</div>
	);
}
