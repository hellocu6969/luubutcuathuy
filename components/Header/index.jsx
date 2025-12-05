"use client"

import { useTheme } from "@/hooks/useTheme"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full glass-subtle border-b border-white/10">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Lưu Bút
                    </span>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full hover:bg-white/10"
                >
                    {theme === "dark" ? (
                        <Sun className="h-5 w-5 text-yellow-300" />
                    ) : (
                        <Moon className="h-5 w-5 text-slate-700" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </header>
    )
}
