import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import CustomCursor from "@/components/main/Cursor";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volta token",
  description: "Volta token website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#000] overflow-y-scroll overflow-x-hidden`}
      >
      <CustomCursor />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
