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
  const color = t >= 1 ? "#4A6B55" : `rgb(${200 - t * 126}, ${200 - t * 95}, ${200 - t * 115})`;

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

  const marqueeFeatures = [
    "Create Clear Agreements",
    "Track Repayments",
    "Set Custom Payment Plans",
    "Manage Your Loans",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#DBEEE3] pt-8 md:pt-12 pb-20 md:pb-28 lg:pb-32"
      data-testid="section-about"
    >
      {/* Scrolling marquee */}
      <div className="overflow-hidden mb-12 md:mb-16">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeFeatures, ...marqueeFeatures].map((feature, i) => (
            <span
              key={`${feature}-${i}`}
              className="inline-flex items-center mx-6 md:mx-10"
            >
              <span className="font-mono text-xs md:text-sm lg:text-base text-[#0A1A10]/40 uppercase tracking-[0.2em]">
                {feature}
              </span>
              <span className="ml-6 md:ml-10 text-[#0A1A10]/20">&#x2022;</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
          About
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 md:mb-12">
          <span className="text-[#1B4332]">Designed for </span>
          <span className="text-[#0D9B76]">Everyday Lending</span>
        </h2>
        <p className="font-sans text-base md:text-lg leading-relaxed font-normal max-w-[520px] mx-auto">
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
