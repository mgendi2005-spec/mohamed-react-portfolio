import { motion, useReducedMotion } from "motion/react";

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="page-transition"
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: reduceMotion ? 0.18 : 0.32, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
