import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImage from "@assets/Screenshot_2026-01-08_at_10.44.47_AM_1767898127121.png";

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
      className="h-screen bg-[#0A120E] relative overflow-hidden"
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
              <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#E8F5ED] uppercase tracking-tight font-extrabold">
                Lending Money to Friends{" "}
                <span className="text-[#00A86B]">Made Simple</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="mt-8"
              >
                <button
                  onClick={scrollToContact}
                  className="bg-[#00A86B] hover:bg-[#008F5A] text-white px-8 py-3 rounded-lg font-semibold text-base transition-colors cursor-pointer"
                >
                  Get Started
                </button>
              </motion.div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="hidden md:flex justify-center md:justify-end pointer-events-none"
            >
              <img
                src={profileImage}
                alt="App preview"
                className="w-[45vw] max-w-[440px] lg:w-[32vw] lg:max-w-[480px] xl:max-w-[520px] object-cover"
              />
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
                  <span className="font-mono text-[10px] md:text-xs lg:text-sm text-[#00A86B] uppercase tracking-[0.2em]">
                    {feature}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: image visible below headline ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-[15%] z-10 flex md:hidden justify-center pointer-events-none"
        >
          <img
            src={profileImage}
            alt="App preview"
            className="w-[50vw] max-w-[280px] object-cover opacity-40"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
