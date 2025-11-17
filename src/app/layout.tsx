import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Value - Modern Web Development",
  description: "Create production-ready web applications with modern React, TypeScript, and cutting-edge design systems.",
  keywords: ["Code Value", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React", "Web Development"],
  authors: [{ name: "Code Value Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Code Value",
    description: "Modern web development with cutting-edge technology",
    siteName: "Code Value",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Value",
    description: "Modern web development with cutting-edge technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
