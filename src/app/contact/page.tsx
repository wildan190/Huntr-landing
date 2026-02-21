'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function ContactPage() {
  const context = useContext(LanguageContext);
  const lang = context?.language || 'en';
  const t = translations[lang].contact;

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 -mt-24">
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
              {t.title}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
              {t.description}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.nameLabel}</Label>
                        <Input id="name" placeholder={t.namePlaceholder} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.emailLabel}</Label>
                        <Input id="email" type="email" placeholder={t.emailPlaceholder} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t.companyLabel}</Label>
                      <Input id="company" placeholder={t.companyPlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t.messageLabel}</Label>
                      <Textarea id="message" placeholder={t.messagePlaceholder} />
                    </div>
                    <Button type="submit" className="w-full">{t.submitButton}</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
