'use client';

import { GuestbookProvider } from "@/components/context/GuestbookContext";
import BackgroundMusic from "@/components/BackgroundMusic";
import { Toaster } from "sonner";

export default function ClientProviders({ children }) {
  return (
    <GuestbookProvider>
      <BackgroundMusic />
      {children}
      <Toaster position="top-center" richColors />
    </GuestbookProvider>
  );
}
