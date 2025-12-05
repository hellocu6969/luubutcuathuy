import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function GuestbookCard({ entry, className }) {
    return (
        <Card className={cn("glass hover:scale-[1.02] transition-transform duration-300 border-white/20", className)}>
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                    <span>{entry.name}</span>
                    <span className="text-sm font-normal text-muted-foreground opacity-70">
                        {new Date(entry.date).toLocaleDateString()}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                    {entry.message}
                </p>
                {entry.memories && (
                    <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-sm italic">
                        "{entry.memories}"
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
