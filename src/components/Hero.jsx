import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { useEffect, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import HeroIllustration from "./HeroIllustration";

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const heroCopy = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (prefersReduce || !hasFinePointer) return undefined;

    const element = heroRef.current;
    if (!element) return undefined;

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
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div className="hero-copy" variants={heroCopy}>
          <motion.p className="hero-intro" variants={heroItem}>
            Hi There!
          </motion.p>

          <motion.h1 className="hero-title" variants={heroItem}>
            Mohamed El Gendi.
          </motion.h1>

          <motion.p className="hero-role-line" variants={heroItem}>
            <span className="hero-role-prefix">I’m a </span>
            <AnimatedTitle />
          </motion.p>

          <motion.h2 className="hero-subtitle" variants={heroItem}>
            I build products across software and engineering.
          </motion.h2>

          <motion.p className="hero-description" variants={heroItem}>
            I’m a full-stack developer focused on building responsive web
            experiences, startup products, and practical systems.
          </motion.p>

          <motion.div className="hero-actions" variants={heroItem}>
            <a className="hero-button" href="#projects">
              Explore My Work <span aria-hidden="true"></span>
            </a>
            <Link className="hero-button hero-button-secondary" to="/contact">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="hero-illustration" variants={heroItem}>
          <HeroIllustration />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
