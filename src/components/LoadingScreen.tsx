import { motion } from "motion/react";
import { Scale } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-blue-500"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mb-6"
      >
        <Scale size={64} strokeWidth={1.5} />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-serif text-2xl md:text-3xl tracking-widest text-neutral-100 uppercase"
      >
        Dr. Luiz Henrique Mamprin
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="h-0.5 bg-blue-500 mt-4"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-4 text-sm text-neutral-400 tracking-widest uppercase"
      >
        Advocacia & Consultoria
      </motion.p>
    </motion.div>
  );
}
