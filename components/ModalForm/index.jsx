"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export function ModalForm({ onSubmit }) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        try {
            await onSubmit(data)
            setOpen(false)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-blue-500 to-purple-600 border-0">
                    Viết lưu bút
                </Button>
            </DialogTrigger>
            <DialogContent className="glass-strong border-white/20 sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Gửi lời nhắn
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Tên của bạn</Label>
                        <Input id="name" name="name" required className="bg-white/5 border-white/10 focus:border-blue-400/50" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Lời nhắn</Label>
                        <Textarea id="message" name="message" required className="bg-white/5 border-white/10 focus:border-blue-400/50 min-h-[100px]" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="memories">Kỷ niệm (tùy chọn)</Label>
                        <Textarea id="memories" name="memories" className="bg-white/5 border-white/10 focus:border-blue-400/50" />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Gửi lưu bút
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
