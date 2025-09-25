import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
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


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
   const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${workSans.className}`}
      >
        <NextIntlClientProvider>
        <Header/>
        {children}
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

