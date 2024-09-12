import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "The Record",
  description: "The Record is coming soon, here's a sneak peek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased`} >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {children}
      </body>
    </html>
  );
}
