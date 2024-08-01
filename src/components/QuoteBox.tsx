import { Container } from "./Container";

export default function QuoteBox({ quote, author }: { quote: string; author: string }) {
    return (
        <div className="w-full bg-pink text-gray-800 text-center py-24">
            <Container>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-semibold">“{quote}”</h2>
                <p className="text-md mt-6">{author}</p>
            </Container>
        </div>
    );
}
