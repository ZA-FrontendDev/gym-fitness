import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Activity } from "lucide-react";

export function BMI() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);

  const { bmi, category, color } = useMemo(() => {
    const b = weight / Math.pow(height / 100, 2);
    let category = "Normal", color = "var(--flame)";
    if (b < 18.5) { category = "Underweight"; color = "var(--electric)"; }
    else if (b < 25) { category = "Normal"; color = "var(--flame)"; }
    else if (b < 30) { category = "Overweight"; color = "oklch(0.75 0.19 55)"; }
    else { category = "Obese"; color = "var(--neon)"; }
    return { bmi: b.toFixed(1), category, color };
  }, [height, weight]);

  return (
    <section id="bmi" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.4em] uppercase text-primary">Know Your Body</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">BMI <span className="text-gradient-fire">Calculator</span></h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Your Body Mass Index is the first step on your transformation journey. Find your starting point and build from there.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Activity className="w-5 h-5 text-primary" />
              <span>Updated in real-time as you adjust the sliders.</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-fire opacity-20 blur-3xl" />

            <div className="relative">
              <div className="text-center mb-8">
                <motion.div
                  key={bmi}
                  initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="font-display text-8xl"
                  style={{ color, textShadow: `0 0 40px ${color}` }}
                >
                  {bmi}
                </motion.div>
                <p className="mt-2 text-sm tracking-[0.4em] uppercase" style={{ color }}>{category}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-muted-foreground tracking-wider uppercase">Height</label>
                    <span className="font-display text-2xl">{height} <span className="text-xs text-muted-foreground">cm</span></span>
                  </div>
                  <input type="range" min="120" max="220" value={height} onChange={e => setHeight(+e.target.value)}
                    className="w-full accent-primary" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-muted-foreground tracking-wider uppercase">Weight</label>
                    <span className="font-display text-2xl">{weight} <span className="text-xs text-muted-foreground">kg</span></span>
                  </div>
                  <input type="range" min="30" max="180" value={weight} onChange={e => setWeight(+e.target.value)}
                    className="w-full accent-primary" />
                </div>
              </div>

              <button className="btn-glow mt-8 w-full py-4 rounded-full bg-gradient-fire font-semibold tracking-wider uppercase text-sm">
                Get My Plan
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
