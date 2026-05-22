import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll"; // Import the scroller
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Patel | Full-Stack Developer",
  description: "Interactive portfolio showcasing MERN stack development, Machine Learning, and real-time engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="vignette-overlay"></div>
        <div className="noise-overlay"></div>
        <Navigation />
        {/* Wrap children in the SmoothScroll component */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}