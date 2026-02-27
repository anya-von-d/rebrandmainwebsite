import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = ["create", "manage", "define", "store"];

export default function VonyBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to word index (0–3)
  const wordIndex = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 2, 3]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A120E] py-20 md:py-28 lg:py-36 overflow-hidden border-y border-[#1a2e1e]"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-[#E8F5ED]">
            Vony makes it easy to{" "}
            <span className="relative inline-block">
              <motion.span
                className="text-[#00A86B] font-bold"
              >
                <VonyWord wordIndex={wordIndex} />
              </motion.span>
            </span>
            <br />
            loans between friends
          </h2>
        </div>
      </div>
    </section>
  );
}

function VonyWord({ wordIndex }: { wordIndex: ReturnType<typeof useTransform<number>> }) {
  return (
    <motion.span>
      {words.map((word, i) => (
        <motion.span
          key={word}
          style={{
            position: i === 0 ? "relative" : "absolute",
            left: i === 0 ? undefined : 0,
            opacity: useTransform(
              wordIndex,
              [i - 0.5, i, i + 0.5],
              [0, 1, i === words.length - 1 ? 1 : 0]
            ),
            y: useTransform(
              wordIndex,
              [i - 0.5, i, i + 0.5],
              [20, 0, i === words.length - 1 ? 0 : -20]
            ),
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
