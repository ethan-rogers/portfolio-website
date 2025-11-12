import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Rogers",
  description: "Project showcase and work experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className= "border-b border-white/10 px-30 py-6">
          <nav className="flex space-x-8">
            <Link href="/" className = "test-grey-800 font-medium">
            About
            </Link>
            <Link href="/" className = "test-grey-800 font-medium">
            Projects
            </Link>
            <Link href="/" className = "test-grey-800 font-medium">
            Experience
            </Link>

          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
