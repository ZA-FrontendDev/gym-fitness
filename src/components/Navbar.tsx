import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const links = ["Home", "Programs", "Trainers", "BMI", "Pricing", "Gallery", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 glass" : "py-5 bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-fire flex items-center justify-center glow-red group-hover:rotate-12 transition-transform">
            <Flame className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl tracking-widest">FORGE<span className="text-gradient-fire">FIT</span></span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="underline-anim text-sm font-medium tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors">{l}</a>
            </li>
          ))}
        </ul>

        <a href="#pricing" className="hidden lg:inline-flex btn-glow px-6 py-2.5 rounded-full bg-gradient-fire text-primary-foreground font-semibold text-sm tracking-wider uppercase">
          Join Now
        </a>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden glass mt-3 mx-6 rounded-xl overflow-hidden"
        >
          <ul className="flex flex-col p-6 gap-4">
            {links.map(l => (
              <li key={l}>
                <a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block text-sm tracking-wider uppercase">{l}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
