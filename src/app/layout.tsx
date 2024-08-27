import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/components/header/index";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Raddi",
  description: "Candidata a vereadora por Paranaíba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Analytics/>
        <Footer/>
        </body>
    </html>
  );
}
