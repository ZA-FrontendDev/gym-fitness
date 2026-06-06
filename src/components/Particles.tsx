import { useMemo } from "react";

export function Particles({ count = 30 }: { count?: number }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 8,
      color: Math.random() > 0.5 ? "var(--neon)" : "var(--flame)",
    })), [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${p.left}%`, top: `${p.top}%`,
            width: p.size, height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
