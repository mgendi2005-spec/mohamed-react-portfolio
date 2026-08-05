import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  ...props
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`reveal ${className}`.trim()}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.6,
        ease: "easeOut",
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
