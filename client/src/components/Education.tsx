import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

const steps = [
  {
    label: "Create a Loan Offer",
    number: "01",
    description:
      "Enter the amount, repayment schedule, and whether interest is included. Vony will generate a loan offer and send it to the borrower.",
  },
  {
    label: "Accept and Formalise",
    number: "02",
    description:
      "Once the borrower accepts, Vony creates a digital contract that both sides can access anytime.",
  },
  {
    label: "Track and Repay",
    number: "03",
    description:
      "Repayments, balances, and history are clearly tracked so everyone knows what's been paid and what's still due.",
  },
  {
    label: "View Your Contracts",
    number: "04",
    description:
      "Access all your active and completed loan agreements in one place. Review terms, payment history, and outstanding balances whenever you need to.",
  },
];

const CYCLE_INTERVAL = 5000;

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  const startCycle = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, CYCLE_INTERVAL);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, [startCycle]);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    if (timerRef.current) clearInterval(timerRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);

    resumeRef.current = setTimeout(() => {
      startCycle();
    }, 10000);
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-[#0A120E] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <motion.div
        style={{ opacity: contentOpacity }}
        className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16"
      >
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
            How It Works
          </p>
          <ScrollHighlight
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95]"
            colorFrom="#2A4A35"
            colorTo="#E8F5ED"
          >
            How Vony Works for
            <br />
            Friends and Family
          </ScrollHighlight>
        </div>

        {/* Desktop: two-column — steps left, image box with overlapping card right */}
        <div className="hidden lg:grid grid-cols-[1fr_1.4fr] gap-10 xl:gap-16 items-start">
          {/* Left — Step selectors */}
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={step.label}
                  onClick={() => handleStepClick(index)}
                  className={`relative text-left py-5 px-5 rounded-xl transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "bg-[#0E1F14]"
                      : "bg-transparent hover:bg-[#0E1F14]/50"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#00A86B]" : "bg-transparent group-hover:bg-[#2A4A35]"
                    }`}
                  />
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? "text-[#00A86B]" : "text-[#2A4A35] group-hover:text-[#7A9A85]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-sans text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#E8F5ED]" : "text-[#7A9A85] group-hover:text-[#E8F5ED]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — Image box with overlapping description card */}
          <div className="relative">
            {/* Image placeholder box */}
            <div className="bg-[#0E1F14] rounded-2xl border border-[#2A4A35] aspect-[4/3] flex items-center justify-center">
              <p className="font-mono text-xs text-[#4A6B55] uppercase tracking-wider">
                Image coming soon
              </p>
            </div>

            {/* Overlapping description card */}
            <div className="absolute -bottom-8 -left-6 max-w-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#0E1F14] rounded-xl border border-[#2A4A35] p-5 md:p-6 shadow-2xl shadow-black/30"
                >
                  <p className="font-sans text-sm lg:text-base text-[#C8DCCE] leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Tablet: two-column — steps left, image box with overlapping card right */}
        <div className="hidden md:grid lg:hidden grid-cols-[1fr_1.3fr] gap-10 items-start">
          {/* Left — Steps */}
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={step.label}
                  onClick={() => handleStepClick(index)}
                  className={`relative text-left py-5 px-5 rounded-xl transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "bg-[#0E1F14]"
                      : "bg-transparent hover:bg-[#0E1F14]/50"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#00A86B]" : "bg-transparent group-hover:bg-[#2A4A35]"
                    }`}
                  />
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? "text-[#00A86B]" : "text-[#2A4A35] group-hover:text-[#7A9A85]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-sans text-lg font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#E8F5ED]" : "text-[#7A9A85] group-hover:text-[#E8F5ED]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — Image box with overlapping card */}
          <div className="relative pb-10">
            {/* Image placeholder box */}
            <div className="bg-[#0E1F14] rounded-2xl border border-[#2A4A35] aspect-[4/3] flex items-center justify-center">
              <p className="font-mono text-xs text-[#4A6B55] uppercase tracking-wider">
                Image coming soon
              </p>
            </div>

            {/* Overlapping description card */}
            <div className="absolute -bottom-2 -left-4 max-w-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#0E1F14] rounded-xl border border-[#2A4A35] p-5 shadow-2xl shadow-black/30"
                >
                  <p className="font-sans text-sm text-[#C8DCCE] leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile: stacked — steps, image box with overlapping card */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Steps */}
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={step.label}
                  onClick={() => handleStepClick(index)}
                  className={`relative text-left py-4 px-4 rounded-xl transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "bg-[#0E1F14]"
                      : "bg-transparent hover:bg-[#0E1F14]/50"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#00A86B]" : "bg-transparent"
                    }`}
                  />
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? "text-[#00A86B]" : "text-[#2A4A35]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-sans text-base font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#E8F5ED]" : "text-[#7A9A85]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Image box with overlapping card */}
          <div className="relative pb-12">
            <div className="bg-[#0E1F14] rounded-2xl border border-[#2A4A35] aspect-[4/3] flex items-center justify-center">
              <p className="font-mono text-xs text-[#4A6B55] uppercase tracking-wider">
                Image coming soon
              </p>
            </div>

            {/* Overlapping description card */}
            <div className="absolute -bottom-4 left-2 right-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#0E1F14] rounded-xl border border-[#2A4A35] p-4 shadow-2xl shadow-black/30"
                >
                  <p className="font-sans text-sm text-[#C8DCCE] leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
