import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const bannerItems = [
  "Custom Payment Plans",
  "Smart Interest Options",
  "Repayment Tracking",
  "Digital Contracts",
];

const cardBgColors = ["#D0ED6F", "#83F384", "#6EE8B5", "#D0ED6F"];

const features = [
  {
    title: "Custom Payment Plans",
    description:
      "Set up flexible payment schedules that work for both parties. Weekly, bi-weekly, or monthly payments with customisable amounts.",
    svg: (
      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
        {/* Calendar card */}
        <rect x="40" y="20" width="320" height="220" rx="16" fill="#1B4332" opacity="0.3" />
        <rect x="40" y="20" width="320" height="50" rx="16" fill="#50C878" opacity="0.15" />
        <rect x="40" y="54" width="320" height="1" fill="#50C878" opacity="0.1" />
        <text x="200" y="52" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" opacity="0.7">Payment Schedule</text>
        {/* Week rows */}
        {[0,1,2,3,4,5,6].map((i) => (
          <rect key={i} x={60 + i * 42} y={82} width="30" height="30" rx="6" fill="#50C878" opacity={i < 4 ? 0.5 : 0.15} />
        ))}
        {[0,1,2,3,4,5,6].map((i) => (
          <rect key={`b-${i}`} x={60 + i * 42} y={122} width="30" height="30" rx="6" fill="#50C878" opacity={i < 6 ? 0.5 : 0.15} />
        ))}
        {[0,1,2,3].map((i) => (
          <rect key={`c-${i}`} x={60 + i * 42} y={162} width="30" height="30" rx="6" fill="#50C878" opacity={0.5} />
        ))}
        {/* Amount badge */}
        <rect x="240" y="162" width="100" height="36" rx="18" fill="#50C878" opacity="0.4" />
        <text x="290" y="185" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">$250/mo</text>
      </svg>
    ),
  },
  {
    title: "Smart Interest Options",
    description:
      "Choose to add interest or keep it at 0%. Vony lets you set custom rates and automatically calculates repayment schedules for both parties.",
    svg: (
      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
        {/* Interest calculator card */}
        <rect x="40" y="20" width="320" height="220" rx="16" fill="#1B4332" opacity="0.3" />
        <text x="200" y="60" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" opacity="0.7">Interest Calculator</text>
        {/* Gauge arc */}
        <path d="M120 180 A80 80 0 0 1 280 180" stroke="#50C878" strokeWidth="8" opacity="0.2" fill="none" strokeLinecap="round" />
        <path d="M120 180 A80 80 0 0 1 240 112" stroke="#50C878" strokeWidth="8" opacity="0.6" fill="none" strokeLinecap="round" />
        <text x="200" y="165" textAnchor="middle" fill="white" fontSize="28" fontWeight="700" opacity="0.8">3.5%</text>
        <text x="200" y="185" textAnchor="middle" fill="white" fontSize="12" opacity="0.4">APR</text>
        {/* Rate chips */}
        <rect x="80" y="205" width="60" height="24" rx="12" fill="#50C878" opacity="0.15" />
        <text x="110" y="221" textAnchor="middle" fill="white" fontSize="10" opacity="0.5">0%</text>
        <rect x="155" y="205" width="60" height="24" rx="12" fill="#50C878" opacity="0.4" />
        <text x="185" y="221" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">3.5%</text>
        <rect x="230" y="205" width="60" height="24" rx="12" fill="#50C878" opacity="0.15" />
        <text x="260" y="221" textAnchor="middle" fill="white" fontSize="10" opacity="0.5">5%</text>
      </svg>
    ),
  },
  {
    title: "Repayment Tracking",
    description:
      "Monitor every payment in real-time. See outstanding balances, payment history, and upcoming dues at a glance.",
    svg: (
      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
        {/* Dashboard card */}
        <rect x="40" y="20" width="320" height="220" rx="16" fill="#1B4332" opacity="0.3" />
        <text x="200" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" opacity="0.7">Repayment Dashboard</text>
        {/* Progress bars */}
        <rect x="70" y="80" width="260" height="14" rx="7" fill="#00A86B" opacity="0.15" />
        <rect x="70" y="80" width="195" height="14" rx="7" fill="#00A86B" opacity="0.5" />
        <text x="70" y="74" fill="white" fontSize="11" opacity="0.5">Sarah &middot; 75%</text>
        <text x="275" y="74" fill="white" fontSize="11" opacity="0.3" textAnchor="end">$750 / $1,000</text>

        <rect x="70" y="125" width="260" height="14" rx="7" fill="#00A86B" opacity="0.15" />
        <rect x="70" y="125" width="104" height="14" rx="7" fill="#00A86B" opacity="0.5" />
        <text x="70" y="119" fill="white" fontSize="11" opacity="0.5">Mike &middot; 40%</text>
        <text x="275" y="119" fill="white" fontSize="11" opacity="0.3" textAnchor="end">$200 / $500</text>

        <rect x="70" y="170" width="260" height="14" rx="7" fill="#00A86B" opacity="0.15" />
        <rect x="70" y="170" width="260" height="14" rx="7" fill="#00A86B" opacity="0.5" />
        <text x="70" y="164" fill="white" fontSize="11" opacity="0.5">Jake &middot; 100%</text>
        <path d="M315 172 L320 177 L330 165" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

        {/* Summary */}
        <rect x="70" y="205" width="260" height="1" fill="white" opacity="0.1" />
        <text x="70" y="228" fill="white" fontSize="11" opacity="0.4">Total Collected</text>
        <text x="330" y="228" textAnchor="end" fill="#50C878" fontSize="14" fontWeight="700" opacity="0.7">$1,950</text>
      </svg>
    ),
  },
  {
    title: "Digital Contracts",
    description:
      "Generate clear, legally-worded agreements automatically. Both parties review and accept terms before any money changes hands.",
    svg: (
      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
        {/* Contract document */}
        <rect x="80" y="10" width="240" height="240" rx="12" fill="#1B4332" opacity="0.3" />
        <rect x="80" y="10" width="240" height="40" rx="12" fill="#50C878" opacity="0.12" />
        <text x="200" y="37" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" opacity="0.7">Loan Agreement</text>
        {/* Document lines */}
        <rect x="110" y="68" width="180" height="6" rx="3" fill="white" opacity="0.12" />
        <rect x="110" y="84" width="140" height="6" rx="3" fill="white" opacity="0.08" />
        <rect x="110" y="100" width="160" height="6" rx="3" fill="white" opacity="0.08" />
        {/* Terms section */}
        <rect x="110" y="125" width="80" height="6" rx="3" fill="#50C878" opacity="0.3" />
        <rect x="110" y="141" width="180" height="6" rx="3" fill="white" opacity="0.08" />
        <rect x="110" y="157" width="150" height="6" rx="3" fill="white" opacity="0.08" />
        {/* Signature lines */}
        <line x1="110" y1="195" x2="185" y2="195" stroke="white" strokeWidth="1" opacity="0.2" />
        <text x="147" y="210" textAnchor="middle" fill="white" fontSize="9" opacity="0.3">Lender</text>
        <line x1="215" y1="195" x2="290" y2="195" stroke="white" strokeWidth="1" opacity="0.2" />
        <text x="252" y="210" textAnchor="middle" fill="white" fontSize="9" opacity="0.3">Borrower</text>
        {/* Checkmark badge */}
        <circle cx="290" cy="70" r="14" fill="#50C878" opacity="0.3" />
        <path d="M283 70 L288 75 L298 64" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    startAutoplay();
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % features.length);
    startAutoplay();
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    startAutoplay();
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-[#1B4332] py-20 md:py-28 lg:py-32 overflow-hidden relative"
    >
      {/* Scrolling banner */}
      <div className="overflow-hidden mb-12 md:mb-16">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...bannerItems, ...bannerItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center mx-6 md:mx-10"
            >
              <span className="font-mono text-sm md:text-base text-white/30 uppercase tracking-[0.2em]">
                {item}
              </span>
              <span className="ml-6 md:ml-10 text-white/15">&#x2022;</span>
            </span>
          ))}
        </div>
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 relative z-10"
      >
        {/* Section header */}
        <div className="mb-14 md:mb-18">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#50C878]/60 mb-4">
            Features
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] text-white font-extrabold tracking-tight">
            Everything You Need
            <br />
            <span className="text-[#50C878]">to Lend with Confidence</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-white/50 mt-6 max-w-[520px] leading-relaxed">
            Vony gives you the tools to create clear agreements, set fair terms,
            and keep both sides informed every step of the way.
          </p>
        </div>

        {/* Feature carousel */}
        <div className="max-w-[700px]">
          {/* Large display box */}
          <div className="relative bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden h-[280px] md:h-[340px]">
            {/* Navigation arrows */}
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous feature"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8L10 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next feature"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center p-8 md:p-12"
              >
                {features[activeIndex].svg}
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "w-6 h-2 bg-white/60"
                      : "w-2 h-2 bg-white/20 hover:bg-white/30"
                  }`}
                  aria-label={`Go to feature ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Info box below - paired with display */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ backgroundColor: cardBgColors[activeIndex % cardBgColors.length] }}
              className="rounded-2xl p-6 md:p-8 mt-4"
            >
              <h3 className="font-sans font-semibold text-lg md:text-xl text-[#0A1A10] mb-2">
                {features[activeIndex].title}
              </h3>
              <p className="font-sans text-sm text-[#0A1A10]/70 leading-relaxed">
                {features[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
