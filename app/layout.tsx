import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Boodschappie | Fam. Bouw",
    template: "Boodschappie | %s",
  },
  description: "Gewoon handig toch",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="dark">
      <body className={inter.className}>
        <Toaster position="bottom-left" richColors theme="dark" />
        {children}
      </body>
    </html>
  );
}
