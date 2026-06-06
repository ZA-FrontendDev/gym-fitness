import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (n) => Math.floor(n).toLocaleString() + suffix);
  useEffect(() => { if (inView) animate(v, to, { duration: 2.2, ease: "easeOut" }); }, [inView, to, v]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 12500, suffix: "+", label: "Active Members" },
  { value: 85, suffix: "+", label: "Expert Trainers" },
  { value: 240, suffix: "+", label: "Weekly Classes" },
  { value: 15, suffix: "yrs", label: "Of Excellence" },
];

export function Stats() {
  return (
    <section className="relative py-20 border-y border-border bg-card/30">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-7xl text-gradient-fire">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
