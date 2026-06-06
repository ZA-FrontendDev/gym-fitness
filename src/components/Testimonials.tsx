import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Sarah K.", role: "Lost 18kg", text: "ForgeFit changed my life. The coaches push you exactly where you need to be pushed. Six months in, I'm a different person." },
  { name: "James R.", role: "Pro Athlete", text: "Best gym I've trained in. Equipment is elite, the energy is unmatched, and the trainers actually know their craft." },
  { name: "Maya L.", role: "Bodybuilder", text: "From beginner to competing in 18 months. The programming and community here are absolutely world-class." },
  { name: "Alex T.", role: "CrossFit Coach", text: "I've trained at gyms worldwide. Nothing comes close to the intensity and culture at ForgeFit. Period." },
  { name: "Priya S.", role: "Marathon Runner", text: "The cardio programming completely transformed my endurance. Hit a personal best within 4 months." },
  { name: "Diego M.", role: "Strength Athlete", text: "Pulled my first 200kg deadlift here. The coaching here is on another level. Forever grateful." },
];

const row = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-primary">Voices</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">Real <span className="text-gradient-fire">Results</span></h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-ticker w-max">
          {row.map((t, i) => (
            <div key={i} className="w-[360px] glass rounded-2xl p-6 shrink-0">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground/80 leading-relaxed text-sm">{t.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-display text-xl tracking-wider">{t.name}</p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-accent text-accent" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
