import { motion } from "motion/react";
import { Scale } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)]"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="mb-6 text-[var(--accent)]"
      >
        <Scale size={56} strokeWidth={1.2} />
      </motion.div>

      <motion.h1
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-[var(--font-display)] text-2xl md:text-[28px] text-[var(--text)] text-center px-6"
      >
        Dr. Luiz Henrique Mamprin
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="h-px bg-[var(--accent)] mt-4"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-4 font-[var(--font-mono)] text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]"
      >
        Advocacia & Consultoria
      </motion.p>
    </motion.div>
  );
}
