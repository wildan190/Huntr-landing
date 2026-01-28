'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/lib/translations";

export function Contact() {
  const context = useContext(LanguageContext);
  const lang = context?.language || 'en';
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline">{t.title}</CardTitle>
              <CardDescription>
                {t.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
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
  );
}
