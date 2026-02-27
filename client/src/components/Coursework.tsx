import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const bannerItems = [
  "Custom Payment Plans",
  "Smart Interest Options",
  "Repayment Tracking",
  "Digital Contracts",
];

const features = [
  {
    title: "Custom Payment Plans",
    description:
      "Set up flexible payment schedules that work for both parties. Weekly, bi-weekly, or monthly payments with customisable amounts.",
    svg: (
      <svg viewBox="0 0 100 80" fill="none" className="w-full h-full max-w-[160px]">
        {/* Calendar grid */}
        <rect x="10" y="10" width="80" height="60" rx="6" stroke="#50C878" strokeWidth="1.5" fill="#50C878" opacity="0.08" />
        <line x1="10" y1="24" x2="90" y2="24" stroke="#50C878" strokeWidth="1" opacity="0.2" />
        {[0,1,2,3,4,5,6].map((i) => (
          <rect key={i} x={16 + i * 10.5} y={30} width="7" height="7" rx="1.5" fill="#50C878" opacity={i < 3 ? 0.5 : 0.15} />
        ))}
        {[0,1,2,3,4,5,6].map((i) => (
          <rect key={`b-${i}`} x={16 + i * 10.5} y={42} width="7" height="7" rx="1.5" fill="#50C878" opacity={i < 5 ? 0.5 : 0.15} />
        ))}
        {[0,1,2].map((i) => (
          <rect key={`c-${i}`} x={16 + i * 10.5} y={54} width="7" height="7" rx="1.5" fill="#50C878" opacity={0.5} />
        ))}
        <circle cx="72" cy="57" r="8" fill="#50C878" opacity="0.3" />
        <text x="72" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">$</text>
      </svg>
    ),
  },
  {
    title: "Repayment Tracking",
    description:
      "Monitor every payment in real-time. See outstanding balances, payment history, and upcoming dues at a glance.",
    svg: (
      <svg viewBox="0 0 100 80" fill="none" className="w-full h-full max-w-[160px]">
        {/* Progress bars */}
        <rect x="10" y="20" width="80" height="8" rx="4" fill="#00A86B" opacity="0.15" />
        <rect x="10" y="20" width="60" height="8" rx="4" fill="#00A86B" opacity="0.5" />
        <text x="10" y="16" fill="white" fontSize="7" opacity="0.5">Sarah, 75%</text>

        <rect x="10" y="40" width="80" height="8" rx="4" fill="#00A86B" opacity="0.15" />
        <rect x="10" y="40" width="32" height="8" rx="4" fill="#00A86B" opacity="0.5" />
        <text x="10" y="36" fill="white" fontSize="7" opacity="0.5">Mike, 40%</text>

        <rect x="10" y="60" width="80" height="8" rx="4" fill="#00A86B" opacity="0.15" />
        <rect x="10" y="60" width="80" height="8" rx="4" fill="#00A86B" opacity="0.5" />
        <text x="10" y="56" fill="white" fontSize="7" opacity="0.5">Jake, 100%</text>
        <path d="M82 62 L85 65 L90 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

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

        {/* Two feature boxes */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-300 group border border-white/[0.06]"
            >
              <div className="flex flex-col h-full">
                {/* SVG illustration */}
                <div className="mb-5 h-20 flex items-center">
                  {feature.svg}
                </div>
                <h3 className="font-sans font-semibold text-lg md:text-xl text-white mb-2 group-hover:text-[#83F384] transition-colors">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
