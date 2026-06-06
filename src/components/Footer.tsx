import { Flame, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const socials = [Instagram, Twitter, Facebook, Youtube];
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-fire opacity-20 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-fire flex items-center justify-center glow-red">
                <Flame className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-3xl tracking-widest">FORGE<span className="text-gradient-fire">FIT</span></span>
            </a>
            <p className="mt-6 max-w-md text-muted-foreground">
              Where sweat meets steel. Where ambition becomes achievement. Train with the best, become the best.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((Icon, i) => (
                <a key={i} href="#"
                  className="group w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-gradient-fire transition-all hover:scale-110 hover:rotate-6">
                  <Icon className="w-4 h-4 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.3em] uppercase text-foreground mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Programs", "Trainers", "Pricing", "Gallery", "Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="underline-anim hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.3em] uppercase text-foreground mb-5">Hours</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Mon - Fri: 5:00 - 23:00</li>
              <li>Saturday: 6:00 - 22:00</li>
              <li>Sunday: 7:00 - 20:00</li>
              <li className="text-primary">Pro/Elite: 24/7 Access</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 ForgeFit. Built to dominate.</p>
          <div className="flex gap-6">
            <a href="#" className="underline-anim hover:text-foreground">Privacy</a>
            <a href="#" className="underline-anim hover:text-foreground">Terms</a>
            <a href="#" className="underline-anim hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
