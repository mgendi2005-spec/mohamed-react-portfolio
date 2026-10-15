import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const titles = [
  "Bachelor In Mechatronics Engineering ",
  "Frontend Developer",
  "Control Systems Enthusiast",
  "PCB Designer",
];

function AnimatedTitle() {
  const reduceMotion = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(titles[0]);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let currentIndex = 0;
    let characterIndex = titles[currentIndex].length;
    let deleting = true;
    let timeoutId;

    const tick = () => {
      const currentTitle = titles[currentIndex];

      if (deleting) {
        characterIndex -= 1;
        setVisibleText(currentTitle.slice(0, characterIndex));

        if (characterIndex === 0) {
          deleting = false;
          currentIndex = (currentIndex + 1) % titles.length;
          setTitleIndex(currentIndex);
          timeoutId = window.setTimeout(tick, 220);
          return;
        }

        timeoutId = window.setTimeout(tick, 32);
        return;
      }

      characterIndex += 1;
      setVisibleText(titles[currentIndex].slice(0, characterIndex));

      if (characterIndex === titles[currentIndex].length) {
        deleting = true;
        timeoutId = window.setTimeout(tick, 1500);
        return;
      }

      timeoutId = window.setTimeout(tick, 58);
    };

    timeoutId = window.setTimeout(tick, 1500);
    return () => window.clearTimeout(timeoutId);
  }, [reduceMotion]);

  return (
    <span className="hero-role" aria-label={titles[titleIndex]}>
      <span aria-hidden="true">{reduceMotion ? titles[0] : visibleText}</span>
      {!reduceMotion && <span className="typing-cursor" aria-hidden="true" />}
    </span>
  );
}

export default AnimatedTitle;
