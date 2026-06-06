import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  { name: "Starter", price: 29, period: "month", popular: false, features: ["Gym Access (6am-10pm)", "2 Group Classes/wk", "Locker Room Access", "Basic Equipment"] },
  { name: "Pro", price: 59, period: "month", popular: true, features: ["24/7 Gym Access", "Unlimited Classes", "1 PT Session/wk", "Nutrition Plan", "Sauna & Spa", "Guest Passes (2)"] },
  { name: "Elite", price: 99, period: "month", popular: false, features: ["Everything in Pro", "4 PT Sessions/wk", "Custom Meal Plan", "Recovery Lounge", "VIP Events", "Body Composition Scans"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary">Membership</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">Choose Your <span className="text-gradient-fire">Path</span></h2>
          <p className="mt-6 text-muted-foreground">No contracts. No fluff. Just results-driven training plans built around you.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                p.popular
                  ? "bg-gradient-fire text-primary-foreground glow-red scale-105 md:scale-110 z-10"
                  : "glass hover:border-foreground/40"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 rounded-full bg-background text-foreground text-[10px] tracking-[0.3em] uppercase">
                  <Zap className="w-3 h-3 text-primary fill-primary" /> Most Popular
                </div>
              )}
              <h3 className="font-display text-3xl tracking-wider">{p.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-6xl">${p.price}</span>
                <span className={`text-sm pb-2 ${p.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/ {p.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 shrink-0 ${p.popular ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={p.popular ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-4 rounded-full font-semibold tracking-wider uppercase text-sm transition-all ${
                p.popular ? "bg-background text-foreground hover:bg-foreground hover:text-background" : "btn-glow bg-gradient-fire text-primary-foreground"
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
