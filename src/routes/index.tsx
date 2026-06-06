import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { Marquee } from "@/components/Marquee";
import { Trainers } from "@/components/Trainers";
import { BMI } from "@/components/BMI";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ForgeFit — Premium Gym & Fitness Studio" },
      { name: "description", content: "Train with elite coaches at ForgeFit. Strength, cardio, body building, and personal coaching in a world-class gym." },
      { property: "og:title", content: "ForgeFit — Where Champions Are Forged" },
      { property: "og:description", content: "Premium gym, elite trainers, real results." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Marquee />
      <Trainers />
      <BMI />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
