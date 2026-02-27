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

/* Step-specific SVG illustrations */
function StepIllustration({ index }: { index: number }) {
  const illustrations = [
    // Step 1: Document / form
    <svg key="step1" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="25" y="15" width="70" height="90" rx="8" fill="#00A86B" opacity="0.12" />
      <rect x="30" y="20" width="60" height="80" rx="6" stroke="#00A86B" strokeWidth="1.5" fill="#00A86B" opacity="0.08" />
      <rect x="40" y="35" width="40" height="4" rx="2" fill="#00A86B" opacity="0.4" />
      <rect x="40" y="45" width="30" height="4" rx="2" fill="#00A86B" opacity="0.3" />
      <rect x="40" y="58" width="40" height="4" rx="2" fill="#00A86B" opacity="0.4" />
      <rect x="40" y="68" width="25" height="4" rx="2" fill="#00A86B" opacity="0.3" />
      <rect x="40" y="82" width="35" height="8" rx="4" fill="#00A86B" opacity="0.5" />
      <circle cx="35" cy="37" r="2" fill="#00A86B" opacity="0.5" />
      <circle cx="35" cy="47" r="2" fill="#00A86B" opacity="0.5" />
      <circle cx="35" cy="60" r="2" fill="#00A86B" opacity="0.5" />
      <circle cx="35" cy="70" r="2" fill="#00A86B" opacity="0.5" />
    </svg>,
    // Step 2: Two phones with handshake
    <svg key="step2" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="15" y="25" width="35" height="70" rx="6" stroke="#50C878" strokeWidth="1.5" fill="#50C878" opacity="0.12" />
      <rect x="70" y="25" width="35" height="70" rx="6" stroke="#50C878" strokeWidth="1.5" fill="#50C878" opacity="0.12" />
      <rect x="22" y="40" width="21" height="3" rx="1.5" fill="#50C878" opacity="0.4" />
      <rect x="22" y="47" width="15" height="3" rx="1.5" fill="#50C878" opacity="0.3" />
      <rect x="77" y="40" width="21" height="3" rx="1.5" fill="#50C878" opacity="0.4" />
      <rect x="77" y="47" width="15" height="3" rx="1.5" fill="#50C878" opacity="0.3" />
      <path d="M50 55 L70 55" stroke="#50C878" strokeWidth="2" strokeDasharray="3 3" opacity="0.5" />
      <path d="M50 60 L70 60" stroke="#50C878" strokeWidth="2" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="60" cy="57.5" r="8" fill="#50C878" opacity="0.15" />
      <path d="M56 57.5 L59 60.5 L64 55" stroke="#50C878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>,
    // Step 3: Progress bar / timeline
    <svg key="step3" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="52" width="80" height="8" rx="4" fill="#0D9B76" opacity="0.15" />
      <rect x="20" y="52" width="52" height="8" rx="4" fill="#0D9B76" opacity="0.5" />
      <circle cx="20" cy="56" r="6" fill="#0D9B76" opacity="0.6" />
      <circle cx="45" cy="56" r="6" fill="#0D9B76" opacity="0.6" />
      <circle cx="72" cy="56" r="6" fill="#0D9B76" opacity="0.6" />
      <circle cx="100" cy="56" r="6" fill="#0D9B76" opacity="0.2" />
      <text x="20" y="42" textAnchor="middle" fill="#0D9B76" opacity="0.5" fontSize="8" fontFamily="sans-serif">$50</text>
      <text x="45" y="42" textAnchor="middle" fill="#0D9B76" opacity="0.5" fontSize="8" fontFamily="sans-serif">$50</text>
      <text x="72" y="42" textAnchor="middle" fill="#0D9B76" opacity="0.5" fontSize="8" fontFamily="sans-serif">$50</text>
      <text x="100" y="42" textAnchor="middle" fill="#0D9B76" opacity="0.25" fontSize="8" fontFamily="sans-serif">$50</text>
      <text x="20" y="76" textAnchor="middle" fill="#0D9B76" opacity="0.4" fontSize="7" fontFamily="sans-serif">Jan</text>
      <text x="45" y="76" textAnchor="middle" fill="#0D9B76" opacity="0.4" fontSize="7" fontFamily="sans-serif">Feb</text>
      <text x="72" y="76" textAnchor="middle" fill="#0D9B76" opacity="0.4" fontSize="7" fontFamily="sans-serif">Mar</text>
      <text x="100" y="76" textAnchor="middle" fill="#0D9B76" opacity="0.25" fontSize="7" fontFamily="sans-serif">Apr</text>
      <path d="M20 58 L20 62" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M45 58 L45 62" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M72 58 L72 62" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    // Step 4: Folder with documents
    <svg key="step4" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M20 35 L20 90 Q20 95 25 95 L95 95 Q100 95 100 90 L100 45 Q100 40 95 40 L55 40 L48 30 Q46 28 43 28 L25 28 Q20 28 20 33 Z" stroke="#00BF7A" strokeWidth="1.5" fill="#00BF7A" opacity="0.12" />
      <rect x="35" y="52" width="50" height="32" rx="4" stroke="#00BF7A" strokeWidth="1" fill="#00BF7A" opacity="0.08" />
      <rect x="42" y="60" width="28" height="3" rx="1.5" fill="#00BF7A" opacity="0.4" />
      <rect x="42" y="67" width="20" height="3" rx="1.5" fill="#00BF7A" opacity="0.3" />
      <rect x="42" y="74" width="24" height="3" rx="1.5" fill="#00BF7A" opacity="0.3" />
      <circle cx="82" cy="82" r="10" fill="#00BF7A" opacity="0.2" />
      <text x="82" y="86" textAnchor="middle" fill="#00BF7A" opacity="0.6" fontSize="10" fontFamily="sans-serif" fontWeight="700">3</text>
    </svg>,
  ];

  return illustrations[index] || null;
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
      id="how-it-works"
      ref={sectionRef}
      className="bg-[#36CE8E] pt-8 md:pt-12 pb-20 md:pb-28 lg:pb-32 overflow-hidden relative"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1B4332 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 relative z-10"
      >
        {/* Section header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#0A1A10]/50 mb-4">
            How It Works
          </p>
          <ScrollHighlight
            className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[0.95]"
            colorFrom="rgba(10,26,16,0.4)"
            colorTo="#0A1A10"
          >
            How Vony Works for
            <br />
            Friends and Family
          </ScrollHighlight>
        </div>

        {/* Desktop: three-column */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-10 xl:gap-16 items-center">
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={step.label}
                  onClick={() => handleStepClick(index)}
                  className={`relative text-left py-5 px-5 rounded-xl transition-all duration-300 cursor-pointer group ${
                    isActive ? "bg-[#0A1A10]/10" : "bg-transparent hover:bg-[#0A1A10]/5"
                  }`}
                >
                  <div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300"
                    style={{ backgroundColor: isActive ? "#0A1A10" : "transparent" }}
                  />
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-xs transition-colors duration-300"
                      style={{ color: isActive ? "#0A1A10" : "rgba(10,26,16,0.5)" }}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-sans text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#0A1A10]" : "text-[#0A1A10]/50 group-hover:text-[#0A1A10]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-[280px] xl:w-[320px] bg-[#0A1A10]/10 rounded-2xl aspect-[3/4] flex items-center justify-center transition-colors duration-500 p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto"
                >
                  <StepIllustration index={activeIndex} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-sans text-base lg:text-lg text-[#0A1A10]/70 leading-relaxed"
              >
                {steps[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet: two-column */}
        <div className="hidden md:grid lg:hidden grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={step.label}
                  onClick={() => handleStepClick(index)}
                  className={`relative text-left py-5 px-5 rounded-xl transition-all duration-300 cursor-pointer group ${
                    isActive ? "bg-[#0A1A10]/10" : "bg-transparent hover:bg-[#0A1A10]/5"
                  }`}
                >
                  <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#0A1A10]" : "bg-transparent group-hover:bg-[#0A1A10]/30"
                  }`} />
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs transition-colors duration-300 ${
                      isActive ? "text-[#0A1A10]" : "text-[#0A1A10]/50"
                    }`}>{step.number}</span>
                    <span className={`font-sans text-lg font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#0A1A10]" : "text-[#0A1A10]/50 group-hover:text-[#0A1A10]"
                    }`}>{step.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="w-full bg-[#0A1A10]/10 rounded-2xl aspect-[4/3] flex items-center justify-center p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-3/4 h-auto"
                >
                  <StepIllustration index={activeIndex} />
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-sans text-base text-[#0A1A10]/70 leading-relaxed w-full"
              >
                {steps[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: steps + description side by side, image below */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Top row: steps left, description right */}
          <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
            <div className="flex flex-col gap-1">
              {steps.map((step, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={step.label}
                    onClick={() => handleStepClick(index)}
                    className={`relative text-left py-3 px-3 pr-4 rounded-lg transition-all duration-300 cursor-pointer group ${
                      isActive ? "bg-[#0A1A10]/10" : "bg-transparent hover:bg-[#0A1A10]/5"
                    }`}
                  >
                    <div className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#0A1A10]" : "bg-transparent"
                    }`} />
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[10px] transition-colors duration-300 ${
                        isActive ? "text-[#0A1A10]" : "text-[#0A1A10]/50"
                      }`}>{step.number}</span>
                      <span className={`font-sans text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                        isActive ? "text-[#0A1A10]" : "text-[#0A1A10]/50"
                      }`}>{step.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-sans text-sm text-[#0A1A10]/70 leading-relaxed"
                >
                  {steps[activeIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Image below */}
          <div className="w-full bg-[#0A1A10]/10 rounded-2xl aspect-[4/3] flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="w-3/4 h-auto"
              >
                <StepIllustration index={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
