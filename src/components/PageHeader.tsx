export default function PageHeader({ title }: { title: string }) {
    return (
        <header className="bg-white shadow">
            <div className="w-full text-center bg-gray-800 content-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
        </header>
    );

}