import { useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

/**
 * Curved SVG divider inspired by Arman Taherian's CodePen.
 * The curve flattens as the user scrolls, creating a smooth
 * transition from the dark hero to the light section below.
 */
export default function CurvedDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [curveY, setCurveY] = useState(150);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Curve control point goes from 150 (deep curve) to 0 (flat) as you scroll
  const curveValue = useTransform(scrollYProgress, [0, 0.6], [150, 0]);

  useMotionValueEvent(curveValue, "change", (latest) => {
    setCurveY(Math.max(0, latest));
  });

  // SVG path: starts at top-left, goes across top, curves down on the bottom edge
  // The Q control point Y value determines how deep the curve is
  const path = `M 0 0 L 1440 0 L 1440 80 Q 720 ${80 + curveY} 0 80 Z`;

  return (
    <div
      ref={containerRef}
      className="relative w-full -mt-[6px]"
      style={{ height: `${80 + curveY / 2}px`, backgroundColor: "#DBEEE3" }}
    >
      <svg
        viewBox="0 0 1440 230"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={path}
          fill="#36CE8E"
          style={{ transition: "d 0.05s linear" }}
        />
      </svg>
    </div>
  );
}
