import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

const stepColors = ["#00A86B", "#50C878", "#0D9B76", "#00BF7A"];

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
      className="bg-[#D0E4D5] py-20 md:py-28 lg:py-32 overflow-hidden"
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
            colorFrom="#98D8AA"
            colorTo="#1B4332"
          >
            How Vony Works for
            <br />
            Friends and Family
          </ScrollHighlight>
        </div>

        {/* Desktop: three-column — steps | image box | description */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-10 xl:gap-16 items-center">
          {/* Left — Step selectors */}
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const accentColor = stepColors[index];
              return (
                <button
                  key={step.label}
                  onClick={() => handleStepClick(index)}
                  className={`relative text-left py-5 px-5 rounded-xl transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "bg-[#E5F0E8]"
                      : "bg-transparent hover:bg-[#B8D0BE]/50"
                  }`}
                >
                  <div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? accentColor : "transparent",
                    }}
                  />
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-xs transition-colors duration-300"
                      style={{
                        color: isActive ? accentColor : "#7A9A85",
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-sans text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#0A1A10]" : "text-[#7A9A85] group-hover:text-[#0A1A10]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center — Image box */}
          <div className="flex items-center justify-center">
            <div
              className="w-[280px] xl:w-[320px] bg-[#E5F0E8] rounded-2xl border aspect-[3/4] flex items-center justify-center transition-colors duration-500"
              style={{ borderColor: stepColors[activeIndex] + "40" }}
            >
              <p className="font-mono text-xs text-[#4A6B55] uppercase tracking-wider">
                Image coming soon
              </p>
            </div>
          </div>

          {/* Right — Description text */}
          <div className="flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-sans text-base lg:text-lg text-[#4A6B55] leading-relaxed"
              >
                {steps[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet: two-column — steps left, image box + description right */}
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
                      ? "bg-[#E5F0E8]"
                      : "bg-transparent hover:bg-[#B8D0BE]/50"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#00A86B]" : "bg-transparent group-hover:bg-[#7A9A85]"
                    }`}
                  />
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? "text-[#00A86B]" : "text-[#7A9A85] group-hover:text-[#7A9A85]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-sans text-lg font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#0A1A10]" : "text-[#7A9A85] group-hover:text-[#0A1A10]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — Image box + description stacked */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full bg-[#E5F0E8] rounded-2xl border border-[#B0CCBA] aspect-[4/3] flex items-center justify-center">
              <p className="font-mono text-xs text-[#4A6B55] uppercase tracking-wider">
                Image coming soon
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-sans text-base text-[#4A6B55] leading-relaxed w-full"
              >
                {steps[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked — steps, image box, description */}
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
                      ? "bg-[#E5F0E8]"
                      : "bg-transparent hover:bg-[#B8D0BE]/50"
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
                        isActive ? "text-[#00A86B]" : "text-[#7A9A85]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-sans text-base font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#0A1A10]" : "text-[#7A9A85]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Image box */}
          <div className="w-full bg-[#E5F0E8] rounded-2xl border border-[#B0CCBA] aspect-[4/3] flex items-center justify-center">
            <p className="font-mono text-xs text-[#4A6B55] uppercase tracking-wider">
              Image coming soon
            </p>
          </div>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="font-sans text-base text-[#4A6B55] leading-relaxed px-2"
            >
              {steps[activeIndex].description}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
