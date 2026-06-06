import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, label: "Strength", className: "row-span-2" },
  { src: g2, label: "Combat", className: "" },
  { src: g3, label: "Equipment", className: "" },
  { src: g4, label: "Calisthenics", className: "row-span-2" },
  { src: g5, label: "Cardio", className: "" },
  { src: g6, label: "Flexibility", className: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary">Inside The Gym</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">The <span className="text-gradient-fire">Arena</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground">Step inside where champions are forged daily.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[repeat(4,180px)] md:grid-rows-[repeat(2,280px)] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${it.className}`}
            >
              <img src={it.src} alt={it.label} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary">Discover</p>
                <p className="font-display text-2xl">{it.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
