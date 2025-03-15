import { cn } from "@/utils/tailwind";

function HeroTitle({ text, className }: { text: string; className?: string }) {
    return (
        <h1 className={cn("lg:text-6xl md:text-6xl text-4xl font-bold",className)}>{text}</h1>
    )
}

export { HeroTitle }