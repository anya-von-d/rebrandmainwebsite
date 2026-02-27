import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const paragraph =
  "Vony takes the awkwardness out of lending between friends and family. Set clear terms, track every payment, and protect your relationships, all in one simple app.";

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

  const t = Math.min(1, Math.max(0, (progress - wordStart) / (wordEnd - wordStart)));

  const opacity = 0.2 + t * 0.8;
  const color = t >= 1 ? "#0A1A10" : `rgb(${200 - t * 190}, ${200 - t * 190}, ${200 - t * 190})`;

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
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 md:mb-12">
          <span className="text-[#1B4332]">Designed for </span>
          <span className="text-[#0D9B76]">Everyday Lending</span>
        </h2>
        <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed font-normal max-w-[700px] mx-auto">
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
