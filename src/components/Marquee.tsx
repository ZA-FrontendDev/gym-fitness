const items = ["Train Hard", "★", "No Excuses", "★", "Be Stronger", "★", "Push Limits", "★", "Forge Yourself", "★", "Stay Hungry", "★"];

export function Marquee() {
  return (
    <div className="relative py-8 border-y border-border bg-gradient-fire overflow-hidden">
      <div className="flex gap-12 animate-ticker w-max font-display text-3xl md:text-5xl text-primary-foreground tracking-widest">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="shrink-0">{t}</span>
        ))}
      </div>
    </div>
  );
}
