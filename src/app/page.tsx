import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Solutions } from "@/components/landing/solutions";
import { Features } from "@/components/landing/features";
import { SuccessStories } from "@/components/landing/success-stories";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Features />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
