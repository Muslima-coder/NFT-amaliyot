import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/modules";


const workSans = Work_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Discover digital art & Collect NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
