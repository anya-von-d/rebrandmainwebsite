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
];

const CYCLE_INTERVAL = 5000; // ms per step in auto-cycle

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
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

  // Auto-cycle through steps
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

  // When user clicks, pause auto-cycle then resume after inactivity
  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setUserInteracted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);

    resumeRef.current = setTimeout(() => {
      setUserInteracted(false);
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
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16"
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

        {/* Two-column: steps left, description right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20 items-start">
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
                  {/* Active indicator bar */}
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

                  {/* Progress bar for auto-cycle (only on active step) */}
                  {isActive && !userInteracted && (
                    <motion.div
                      className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#00A86B]/30 rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="h-full bg-[#00A86B]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: CYCLE_INTERVAL / 1000,
                          ease: "linear",
                        }}
                        key={`progress-${activeIndex}`}
                      />
                    </motion.div>
                  )}
                </button>
              );
            })}

            {/* Mobile: show description below on small screens */}
            <div className="md:hidden mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#0E1F14] rounded-xl p-6 border border-[#1E3326]"
                >
                  <p className="font-sans text-base text-[#C8DCCE] leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right — Description panel (desktop only) */}
          <div className="hidden md:flex items-start pt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#0E1F14] rounded-2xl p-8 lg:p-10 border border-[#1E3326] w-full"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#00A86B]/15 flex items-center justify-center">
                    <span className="font-mono text-sm text-[#00A86B] font-semibold">
                      {steps[activeIndex].number}
                    </span>
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#E8F5ED]">
                    {steps[activeIndex].label}
                  </h3>
                </div>
                <p className="font-sans text-base md:text-lg text-[#C8DCCE] leading-relaxed">
                  {steps[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
