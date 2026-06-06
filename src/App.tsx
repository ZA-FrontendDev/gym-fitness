import { BMI } from "@/components/BMI";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Programs } from "@/components/Programs";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Trainers } from "@/components/Trainers";

export function App() {
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
