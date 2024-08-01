"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { CiCircleCheck } from "react-icons/ci";

export default function ContactForm() {
    const router = useRouter();
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: any) {
        // Get the contents of the form and create a mailto link
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const mailto = `mailto:hello@corkera.co.uk?subject=Contact Form Submission&body=Name: ${name}%0aEmail: ${email}%0a%0aMessage:%0a${message}`;

        // Open the mailto link
        router.push(mailto);
        setSubmitted(true);
    }

    return (
        <div className="w-full flex flex-col gap-5 py-12 items-center justify-center">
            <p className="max-w-[500px] text-center">
                If you would like to get in touch, you can send an email to <a href="mailto:hello@corkera.co.uk">hello@corkera.co.uk</a>, or fill in
                the form below.
            </p>

            {submitted && (
                <div className="py-12 flex justify-center items-center flex-col gap-5">
                    <CiCircleCheck className="text-gray-800" size={100} />
                    <div>
                        <p className="text-center">Thank you for getting in touch!</p>
                        <p className="text-center">I'll get back to you as soon as I can.</p>
                    </div>
                </div>
            )}

            {!submitted && (
                <form onSubmit={handleSubmit} className="w-full max-w-[500px] flex flex-col gap-5 mt-5" autoComplete="off">
                    <div className="relative">
                        <label htmlFor="name" className="absolute -top-[0.65rem] px-2 left-4 h-5 z-5 bg-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-800 rounded-md px-5 py-4"
                            aria-autocomplete="none"
                            autoFocus
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="email" className="absolute -top-[0.65rem] px-2 left-4 h-5 z-5 bg-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-800 rounded-md px-5 py-4"
                            aria-autocomplete="none"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="message" className="absolute -top-[0.65rem] px-2 left-4 h-5 z-5 bg-white">
                            Message
                        </label>
                        <textarea id="message" name="message" className="w-full border border-gray-800 rounded-md px-5 py-4" rows={5} />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white transition-all hover:text-gray-800 hover:bg-pink py-2 px-3 rounded-md text-lg"
                    >
                        Send
                    </button>
                </form>
            )}
        </div>
    );
}
