import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-driven text highlight effect inspired by Ryan Mulligan's CodePen.
 * As the element scrolls into view, a color sweep reveals across the text
 * using a gradient background-size animation.
 *
 * Props:
 * - children: The text content
 * - className: Additional classes for the wrapper
 * - colorFrom: Starting (unhighlighted) text color
 * - colorTo: Ending (highlighted) text color — the sweep color
 */
interface ScrollHighlightProps {
  children: ReactNode;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
}

export default function ScrollHighlight({
  children,
  className = "",
  colorFrom = "#C8C8D0",
  colorTo = "#0A0A0A",
}: ScrollHighlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  // backgroundSize goes from 0% to 100% as the element scrolls into view
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        backgroundImage: `linear-gradient(${colorTo}, ${colorTo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize,
        backgroundPosition: "left",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: colorFrom,
        WebkitTextFillColor: colorFrom,
      }}
    >
      <motion.span
        style={{
          // This span has the "revealed" color clipped to the gradient
          backgroundImage: `linear-gradient(${colorTo}, ${colorTo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize,
          backgroundPosition: "left",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
