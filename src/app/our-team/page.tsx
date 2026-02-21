import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from 'next';
import { translations } from "@/lib/translations";

export const metadata: Metadata = {
  title: translations.en.header.ourTeam,
  description: "Meet the professional team behind Huntr's success.",
};

export default function OurTeamPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-headline">Our Team</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Information about our team will be displayed here.
        </p>
      </main>
      <Footer />
    </div>
  );
}
