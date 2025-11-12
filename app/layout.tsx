import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

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
        <header className= "border-b border-white/10 px-17 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-10">
              <Link href="/" className = "text-gray-200 hover:text-white font-medium hover:underline">
              About
              </Link>
              <Link href="/" className = "text-gray-200 hover:text-white font-medium hover:underline">
              Projects
              </Link>
              <Link href="/" className = "text-gray-200 hover:text-white font-medium hover:underline">
              Experience
              </Link>
            </div>

            <div className="flex items-center space-x-10">
              
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/ethan-rogers/portfolio-website" className = "flex items-center space-x-2 text-gray-400 font-medium hover:underline">
              <FaGithub /> <span>ethan-rogers/portfolio-website</span>
              </Link>

            </div>

          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
