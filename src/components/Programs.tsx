import { motion } from "framer-motion";
import { Dumbbell, Flame, Heart, Trophy, UserCheck, ArrowUpRight } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with progressive overload programs designed by elite coaches.", color: "var(--neon)" },
  { icon: Flame, title: "Weight Loss", desc: "High-intensity fat-burning protocols backed by nutrition science.", color: "var(--flame)" },
  { icon: Heart, title: "Cardio Fitness", desc: "Endurance, agility, and heart-pumping conditioning workouts.", color: "var(--electric)" },
  { icon: Trophy, title: "Body Building", desc: "Sculpt elite physiques with hypertrophy-focused training plans.", color: "var(--neon)" },
  { icon: UserCheck, title: "Personal Coaching", desc: "1-on-1 attention from world-class coaches tailored to your goals.", color: "var(--flame)" },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary">Our Programs</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">
            Built To <span className="text-gradient-fire">Dominate</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Choose from our signature training programs—each engineered by experts, refined by champions, and proven to transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl p-8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-foreground/40"
              style={{ "--c": p.color } as React.CSSProperties}
            >
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                style={{ background: p.color }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${p.color}, transparent)`, boxShadow: `0 0 30px ${p.color}40` }}
                >
                  <p.icon className="w-7 h-7 text-foreground" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-wide">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-gradient-fire transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
