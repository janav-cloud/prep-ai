import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const baseFont = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartHire",
  description: "Boost your Interview Preps with SmartHire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>  
      <html lang="en">
        <body className={baseFont.className}>
          <div className="flex flex-col min-h-screen bg-gradient-to-t from-sky-200">
            <Header/>
            <div>
              <Toaster />
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
