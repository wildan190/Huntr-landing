'use client';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Lato, Montserrat } from 'next/font/google';
import { LanguageProvider, LanguageContext } from '@/context/language-context';
import { useContext, useEffect } from 'react';
import { translations } from '@/lib/translations';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LanguageContext);
  const lang = context?.language || 'en';
  
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].metadata.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', translations[lang].metadata.description);

  }, [lang]);
  
  return <>{children}</>;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable} !scroll-smooth`}>
      <head />
      <body className="font-body antialiased">
        <LanguageProvider>
          <MainContent>{children}</MainContent>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
