import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from 'next';
import { translations } from "@/lib/translations";

export const metadata: Metadata = {
  title: translations.en.header.article,
  description: "Explore informative articles and blog posts from Huntr.",
};

export default function ArticlePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-headline">Articles</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Informative articles and blog posts will be displayed here.
        </p>
      </main>
      <Footer />
    </div>
  );
}
