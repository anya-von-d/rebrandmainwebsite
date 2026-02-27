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

const CYCLE_INTERVAL = 5000;

/* ── Phone outline SVG ── */
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[220px] lg:w-[260px]">
      {/* Phone frame */}
      <div className="relative rounded-[36px] border-[3px] border-[#2A4A35] bg-[#0A120E] p-2 shadow-2xl shadow-[#00A86B]/5">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-[#0A120E] rounded-b-2xl z-20 border-x-[3px] border-b-[3px] border-[#2A4A35]" />

        {/* Screen area */}
        <div className="relative rounded-[28px] bg-[#0E1F14] overflow-hidden aspect-[9/19]">
          {/* Screen content — placeholder for future app screenshots */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            {children}
          </div>
        </div>
      </div>

      {/* Bottom bar indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[100px] h-[4px] rounded-full bg-[#2A4A35]" />
    </div>
  );
}

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

        {/* Desktop: three-column — steps | phone | description */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-10 xl:gap-16 items-center">
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

          {/* Center — Phone mockup */}
          <div className="flex items-center justify-center">
            <PhoneMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#00A86B]/15 flex items-center justify-center mx-auto mb-3">
                    <span className="font-mono text-sm text-[#00A86B] font-semibold">
                      {steps[activeIndex].number}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#7A9A85] uppercase tracking-wider mb-2">
                    {steps[activeIndex].label}
                  </p>
                  <div className="w-8 h-[1px] bg-[#2A4A35] mx-auto mb-3" />
                  <p className="font-sans text-[11px] text-[#4A6B55] leading-relaxed">
                    Screen preview coming soon
                  </p>
                </motion.div>
              </AnimatePresence>
            </PhoneMockup>
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
                className="font-sans text-base lg:text-lg text-[#C8DCCE] leading-relaxed"
              >
                {steps[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet: two-column — steps left, phone + description right */}
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

          {/* Right — Phone + description stacked */}
          <div className="flex flex-col items-center gap-8">
            <PhoneMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#00A86B]/15 flex items-center justify-center mx-auto mb-3">
                    <span className="font-mono text-sm text-[#00A86B] font-semibold">
                      {steps[activeIndex].number}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#7A9A85] uppercase tracking-wider mb-2">
                    {steps[activeIndex].label}
                  </p>
                  <div className="w-8 h-[1px] bg-[#2A4A35] mx-auto mb-3" />
                  <p className="font-sans text-[11px] text-[#4A6B55] leading-relaxed">
                    Screen preview coming soon
                  </p>
                </motion.div>
              </AnimatePresence>
            </PhoneMockup>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-sans text-base text-[#C8DCCE] leading-relaxed w-full"
              >
                {steps[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked — steps, phone, description */}
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

          {/* Phone */}
          <div className="flex justify-center">
            <PhoneMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#00A86B]/15 flex items-center justify-center mx-auto mb-3">
                    <span className="font-mono text-sm text-[#00A86B] font-semibold">
                      {steps[activeIndex].number}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#7A9A85] uppercase tracking-wider mb-2">
                    {steps[activeIndex].label}
                  </p>
                  <div className="w-8 h-[1px] bg-[#2A4A35] mx-auto mb-3" />
                  <p className="font-sans text-[11px] text-[#4A6B55] leading-relaxed">
                    Screen preview coming soon
                  </p>
                </motion.div>
              </AnimatePresence>
            </PhoneMockup>
          </div>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="font-sans text-base text-[#C8DCCE] leading-relaxed px-2"
            >
              {steps[activeIndex].description}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
