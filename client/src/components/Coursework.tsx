import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

export default function Coursework() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="coursework"
      ref={sectionRef}
      className="bg-[#E5F0E8] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Two-column layout: Title left, Scrolling cards right */}
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
              Flexible
              <br />
              Lending
              <br />
              Options
            </ScrollHighlight>
            <p className="font-sans text-base text-[#7A9A85] mt-6 max-w-[360px] leading-relaxed">
              Everything you need to lend and borrow with confidence. Vony gives you the tools to create clear agreements, set fair terms, and keep both sides informed every step of the way.
            </p>
          </motion.div>

          {/* Right — Scrolling feature cards marquee */}
          <div className="lg:sticky lg:top-32 overflow-hidden relative">
            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#E5F0E8] to-transparent z-10 pointer-events-none" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#E5F0E8] to-transparent z-10 pointer-events-none" />

            <div
              className="flex flex-col gap-4 animate-marquee-vertical"
            >
              {/* First set */}
              {featureCards.map((card, index) => (
                <div
                  key={`a-${index}`}
                  className="bg-[#F5FAF6] rounded-xl border border-[#C8DCCE] p-5 md:p-6 flex-shrink-0"
                >
                  <h4 className="font-sans font-semibold text-[15px] text-[#0A1A10] mb-2">
                    {card.title}
                  </h4>
                  <p className="font-sans text-sm text-[#4A6B55] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {featureCards.map((card, index) => (
                <div
                  key={`b-${index}`}
                  className="bg-[#F5FAF6] rounded-xl border border-[#C8DCCE] p-5 md:p-6 flex-shrink-0"
                >
                  <h4 className="font-sans font-semibold text-[15px] text-[#0A1A10] mb-2">
                    {card.title}
                  </h4>
                  <p className="font-sans text-sm text-[#4A6B55] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
