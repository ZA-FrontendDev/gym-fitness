import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import { Particles } from "./Particles";

const headline = ["Train", "Hard.", "Transform", "Your", "Body."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img src={heroImg} alt="Athlete training in dark gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-cinematic" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-[var(--violet)]/10 blur-3xl animate-aurora" />
        <div className="absolute -bottom-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-[var(--electric)]/10 blur-3xl animate-aurora" />
      </motion.div>

      <Particles count={40} />

      <motion.div style={{ opacity }} className="relative container mx-auto px-6 pt-32 pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase text-foreground/80">No.1 Premium Gym 2026</span>
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight max-w-5xl">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-4 ${i === 2 || i === 3 || i === 4 ? "text-gradient-fire" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-foreground/70 leading-relaxed"
        >
          Elite coaches, world-class equipment, and a community that pushes you past every limit. This is where champions are forged.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#pricing" className="btn-glow group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-fire text-primary-foreground font-semibold tracking-wider uppercase text-sm">
            Join Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#programs" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-foreground/20 hover:border-foreground/50 transition-all font-semibold tracking-wider uppercase text-sm">
            <span className="w-8 h-8 rounded-full bg-gradient-fire flex items-center justify-center"><Play className="w-3 h-3 fill-primary-foreground text-primary-foreground" /></span>
            Start Training
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/60">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-fire animate-scroll-down" />
        </div>
      </motion.div>
    </section>
  );
}
