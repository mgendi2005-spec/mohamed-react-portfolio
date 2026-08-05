import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

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
      <div className="hero-inner">
        <Reveal delay={0}>
          <p className="hero-intro">Hi, my name is</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="hero-title">Mohamed El Gendy.</h1>
        </Reveal>

        <Reveal delay={0.16}>
          <h2 className="hero-subtitle">
            I build products across software and engineering.
          </h2>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="hero-description">
            I’m a mechatronics engineering student and full-stack developer focused
            on building responsive web experiences, startup products, and practical
            engineering systems.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <a className="hero-button" href="#projects">
            Explore My Work
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
