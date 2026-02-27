import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const paragraph =
  "From small favours to larger loans, Vony helps you formalise, track, and manage lending between friends and family with ease.";

const words = paragraph.split(" ");

function ScrollWord({
  word,
  index,
  totalWords,
  progress,
}: {
  word: string;
  index: number;
  totalWords: number;
  progress: number;
}) {
  const wordStart = (index / totalWords) * 0.85;
  const wordEnd = wordStart + 0.04;

  // Clamp: once revealed, stay revealed
  const t = Math.min(1, Math.max(0, (progress - wordStart) / (wordEnd - wordStart)));

  const opacity = 0.2 + t * 0.8;
  // Cycle through greens based on word position: emerald → teal → forest → jade
  const greenShades = ["#1B4332", "#0D9B76", "#0A1A10", "#00A86B"];
  const shadeIndex = index % greenShades.length;
  const targetColor = greenShades[shadeIndex];
  const color = t >= 1 ? targetColor : `rgb(${200 - t * 190}, ${210 - t * 190}, ${200 - t * 185})`;

  return (
    <span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [maxProgress, setMaxProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });

  // Track the highest scroll progress reached — words never un-reveal
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setMaxProgress((prev) => Math.max(prev, latest));
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#DBEEE3] py-20 md:py-28 lg:py-32"
      data-testid="section-about"
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-8 md:mb-12">
          <span className="text-[#1B4332]">Designed for </span>
          <span className="text-[#0D9B76]">Everyday Lending</span>
        </h2>
        <p className="font-display text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug md:leading-snug lg:leading-snug font-normal italic">
          {words.map((word, i) => (
            <ScrollWord
              key={`${word}-${i}`}
              word={word}
              index={i}
              totalWords={words.length}
              progress={maxProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
