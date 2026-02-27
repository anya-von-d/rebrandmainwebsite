import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function PhoneOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Phone body */}
      <rect
        x="6"
        y="6"
        width="268"
        height="548"
        rx="40"
        ry="40"
        stroke="#0A1A10"
        strokeWidth="4"
        fill="none"
      />
      {/* Inner screen border */}
      <rect
        x="18"
        y="58"
        width="244"
        height="444"
        rx="8"
        ry="8"
        stroke="#0A1A10"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
      {/* Top notch / dynamic island */}
      <rect
        x="104"
        y="22"
        width="72"
        height="24"
        rx="12"
        ry="12"
        fill="#0A1A10"
        opacity="0.15"
      />
      {/* Bottom home indicator */}
      <rect
        x="100"
        y="524"
        width="80"
        height="5"
        rx="2.5"
        ry="2.5"
        fill="#0A1A10"
        opacity="0.2"
      />
    </svg>
  );
}

const features = [
  "Create Clear Agreements",
  "Track Repayments",
  "Set Custom Payment Plans",
  "Manage Your Loans",
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const marqueeFeatures = [...features, ...features];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="h-screen bg-[#36CE8E] relative overflow-hidden"
    >
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full"
      >
        {/* ── Two-column layout: headline left, image right ── */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left — Headline + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#0A1A10] tracking-tight font-extrabold">
                Lending Money to Friends{" "}
                <span className="bg-gradient-to-r from-[#00A86B] via-[#0D9B76] to-[#007A4D] bg-clip-text text-transparent">Made Simple</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="mt-8"
              >
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-[#00A86B] to-[#0D9B76] hover:from-[#008F5A] hover:to-[#087A5C] text-white px-8 py-3 rounded-lg font-semibold text-base transition-all cursor-pointer shadow-lg shadow-[#00A86B]/20"
                >
                  Get Started
                </button>
              </motion.div>
            </motion.div>

            {/* Right — Phone Outline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="hidden md:flex justify-center md:justify-end pointer-events-none"
            >
              <PhoneOutline className="w-[28vw] max-w-[280px] lg:w-[22vw] lg:max-w-[320px] xl:max-w-[360px] h-auto" />
            </motion.div>
          </div>
        </div>

        {/* ── Features marquee — bottom of screen ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-[6%] md:bottom-[8%] left-0 right-0 z-20 pointer-events-none"
        >
          <div className="overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {marqueeFeatures.map((feature, i) => (
                <span
                  key={`${feature}-${i}`}
                  className="inline-flex items-center mx-6 md:mx-10"
                >
                  <span className="font-mono text-[10px] md:text-xs lg:text-sm text-[#0D9B76] uppercase tracking-[0.2em]">
                    {feature}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: phone outline visible below headline ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-[15%] z-10 flex md:hidden justify-center pointer-events-none"
        >
          <PhoneOutline className="w-[40vw] max-w-[200px] h-auto opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
