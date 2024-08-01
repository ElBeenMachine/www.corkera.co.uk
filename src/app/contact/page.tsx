import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alice Corker - Contact Me",
    description: "This is my portfolio.",
};

export default function ContactPage() {
    return (
        <main>
            <PageHeader title="Contact Me" />
            <Container>
                <ContactForm />
            </Container>
        </main>
    );
}
