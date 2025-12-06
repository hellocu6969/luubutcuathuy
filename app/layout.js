import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

import dc from "@/lib/DataConfig";

export const metadata = {
  title: dc.meta.title,
  description: dc.meta.description,
  keywords: dc.meta.keywords,
  openGraph: {
    title: dc.meta.title,
    description: dc.meta.description,
    images: [
      {
        url: dc.meta.img,
        width: 1200,
        height: 630,
        alt: dc.meta.title,
      },
    ],
    type: "website",
  },
  icons: {
    icon: dc.meta.favicon,
    shortcut: dc.meta.favicon, // Simplified for now, user can change if mapped
  },
};

import { GuestbookProvider } from "@/components/context/GuestbookContext";
import FloatingNav from "@/components/FloatingNav";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (localTheme === 'dark' || (!localTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20 selection:text-primary-foreground", inter.variable, playfair.variable)}>
        <GuestbookProvider>
          {children}
          <FloatingNav />
          <Toaster position="top-center" richColors />
        </GuestbookProvider>
      </body>
    </html>
  );
}
