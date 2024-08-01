export default function Skeleton({ className }: { className: string }) {
    return <div className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`} />;
}

export function Loading() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Skeleton className="w-[50ch] h-[2rem]" />
                <Skeleton className="w-[20ch] h-[1rem]" />
            </div>
            <div className="space-y-2">
                <Skeleton className="w-[30ch] h-[1.25rem]" />
                <Skeleton className="w-[45ch] h-[1rem]" />
            </div>
            <div className="space-y-2">
                <Skeleton className="w-[30ch] h-[1.25rem]" />
                <Skeleton className="w-[45ch] h-[1rem]" />
            </div>
            <div className="space-y-2">
                <Skeleton className="w-[30ch] h-[1.25rem]" />
                <Skeleton className="w-[45ch] h-[1rem]" />
            </div>
            <div className="space-y-2">
                <Skeleton className="w-[30ch] h-[1.25rem]" />
                <Skeleton className="w-[45ch] h-[1rem]" />
            </div>
        </div>
    );
}
