import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (prefersReduce || !hasFinePointer) return;

    const element = heroRef.current;
    if (!element) return;

    let frame = null;

    const updateSpot = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      if (frame) return;

      frame = requestAnimationFrame(() => {
        element.style.setProperty("--hero-spot-x", `${x}%`);
        element.style.setProperty("--hero-spot-y", `${y}%`);
        frame = null;
      });
    };

    const resetSpot = () => {
      element.style.setProperty("--hero-spot-x", "50%");
      element.style.setProperty("--hero-spot-y", "50%");
    };

    element.addEventListener("pointermove", updateSpot);
    element.addEventListener("pointerleave", resetSpot);

    return () => {
      element.removeEventListener("pointermove", updateSpot);
      element.removeEventListener("pointerleave", resetSpot);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <motion.div
        className="hero-inner"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-intro" variants={heroItem}>
          Hi, my name is
        </motion.p>

        <motion.h1 className="hero-title" variants={heroItem}>
          Mohamed El Gendy.
        </motion.h1>

        <motion.h2 className="hero-subtitle" variants={heroItem}>
          I build products across software and engineering.
        </motion.h2>

        <motion.p className="hero-description" variants={heroItem}>
          I’m a mechatronics engineering student and full-stack developer focused
          on building responsive web experiences, startup products, and practical
          engineering systems.
        </motion.p>

        <motion.a
          className="hero-button"
          href="#projects"
          variants={heroItem}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
