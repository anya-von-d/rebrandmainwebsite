import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

const featureCards = [
  {
    title: "Custom Payment Plans",
    description:
      "Set up flexible payment schedules that work for both parties. Weekly, bi-weekly, or monthly payments with customisable amounts.",
  },
  {
    title: "Interest Rate Options",
    description:
      "Choose to lend with or without interest. Set fair rates for both parties or keep it simple with zero-interest loans between friends.",
  },
  {
    title: "Repayment Periods",
    description:
      "Set realistic timeframes from days to years. Perfect for short-term emergency loans or longer-term financial assistance.",
  },
];

const CYCLE_INTERVAL = 4000;

export default function Coursework() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const startCycle = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featureCards.length);
    }, CYCLE_INTERVAL);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, [startCycle]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    if (timerRef.current) clearInterval(timerRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);

    resumeRef.current = setTimeout(() => {
      startCycle();
    }, 10000);
  };

  return (
    <section
      id="coursework"
      ref={sectionRef}
      className="bg-[#E5F0E8] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Two-column layout: Title left, Box right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — Large title with parallax */}
          <motion.div style={{ y: titleY, opacity: contentOpacity }} className="lg:sticky lg:top-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
              What You Get
            </p>
            <ScrollHighlight
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
              colorFrom="#A8C8B0"
              colorTo="#0A1A10"
            >
              Features
            </ScrollHighlight>
            <p className="font-sans text-base text-[#7A9A85] mt-6 max-w-[360px] leading-relaxed">
              Everything you need to lend and borrow with confidence. Vony gives you the tools to create clear agreements, set fair terms, and keep both sides informed every step of the way.
            </p>
          </motion.div>

          {/* Right — Image box with cycling feature card on top */}
          <div className="lg:sticky lg:top-32">
            {/* Cycling feature card — sits above the image box */}
            <div className="mb-4">
              <div className="flex gap-2 mb-3">
                {featureCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === index
                        ? "bg-[#00A86B] flex-[2]"
                        : "bg-[#C8DCCE] flex-1 hover:bg-[#7A9A85]"
                    }`}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#F5FAF6] rounded-xl border border-[#C8DCCE] p-5 md:p-6"
                >
                  <h4 className="font-sans font-semibold text-[15px] text-[#0A1A10] mb-2">
                    {featureCards[activeIndex].title}
                  </h4>
                  <p className="font-sans text-sm text-[#4A6B55] leading-relaxed">
                    {featureCards[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image placeholder box */}
            <div className="bg-[#F5FAF6] rounded-2xl border border-[#C8DCCE] aspect-[4/3] flex items-center justify-center">
              <p className="font-mono text-xs text-[#7A9A85] uppercase tracking-wider">
                Image coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
