import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

const trainers = [
  { img: t1, name: "Marcus Cole", role: "Strength Coach", quote: "Pain is temporary." },
  { img: t2, name: "Elena Vargas", role: "HIIT Specialist", quote: "Push your limits." },
  { img: t3, name: "Dmitri Volkov", role: "Body Builder Pro", quote: "No excuses." },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary">Meet The Team</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Elite <span className="text-gradient-fire">Coaches</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground">Trained by the best to make you the best. Our coaches have shaped pros, athletes, and everyday warriors.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs tracking-[0.3em] uppercase text-primary">{t.role}</p>
                <h3 className="mt-1 font-display text-3xl">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground italic">"{t.quote}"</p>
                <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-gradient-fire transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-fire opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
