import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.15; ry += (y - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px) scale(${hover ? 1.6 : 1})`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    const id = requestAnimationFrame(loop);

    const hoverables = document.querySelectorAll("a, button, [data-cursor]");
    const enter = () => setHover(true);
    const leave = () => setHover(false);
    hoverables.forEach(el => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(id);
      hoverables.forEach(el => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
    };
  }, [hover]);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
