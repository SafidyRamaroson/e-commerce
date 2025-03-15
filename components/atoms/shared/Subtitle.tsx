import { cn } from "@/utils/tailwind";


export function Subtitle({ text, className }: { text: string; className?: string }) {
    return (
        <h4 className={cn("text-wrap text-lg", className)}>{text}</h4>
    )
}