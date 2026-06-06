import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1600); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-display text-gradient-fire tracking-widest"
          >
            FORGE
          </motion.div>
          <div className="mt-6 h-[2px] w-48 overflow-hidden bg-secondary rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-fire"
            />
          </div>
          <p className="mt-4 text-xs tracking-[0.4em] text-muted-foreground">FORGING YOUR EXPERIENCE</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
