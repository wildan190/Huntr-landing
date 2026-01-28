'use client';

import Link from "next/link";
import { HuntrLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/lib/translations";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const context = useContext(LanguageContext);
  const lang = context?.language || 'en';
  const t = translations[lang].footer;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <HuntrLogo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Huntr</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t.copy}
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
