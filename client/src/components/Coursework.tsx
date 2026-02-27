import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

const cardAccents = ["#00A86B", "#50C878", "#0D9B76"];

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
      className="bg-[#E5F0E8] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Two-column layout: Box left, Title right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — Image box */}
          <div className="lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="bg-[#F5FAF6] rounded-2xl border border-[#C8DCCE] p-6 md:p-8 lg:p-10">
              <div className="min-h-[360px] flex items-center justify-center">
                <p className="font-mono text-xs text-[#7A9A85] uppercase tracking-wider">
                  Image coming soon
                </p>
              </div>
            </div>
          </div>

          {/* Right — Large title with parallax */}
          <motion.div style={{ y: titleY, opacity: contentOpacity }} className="lg:sticky lg:top-32 order-1 lg:order-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
              What You Get
            </p>
            <ScrollHighlight
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
              colorFrom="#98D8AA"
              colorTo="#1B4332"
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
        </div>
      </div>

      {/* Full-width marquee feature cards — outside the max-w container */}
      <div className="mt-12 overflow-hidden relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#E5F0E8] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#E5F0E8] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max gap-4">
          {/* First set */}
          {featureCards.map((card, index) => (
            <div
              key={`a-${index}`}
              className="bg-[#F5FAF6] rounded-xl border border-[#C8DCCE] p-5 md:p-6 w-[280px] md:w-[320px] flex-shrink-0 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: cardAccents[index % cardAccents.length] }} />
              <h4 className="font-sans font-semibold text-[15px] mb-2" style={{ color: cardAccents[index % cardAccents.length] }}>
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
              className="bg-[#F5FAF6] rounded-xl border border-[#C8DCCE] p-5 md:p-6 w-[280px] md:w-[320px] flex-shrink-0 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: cardAccents[index % cardAccents.length] }} />
              <h4 className="font-sans font-semibold text-[15px] mb-2" style={{ color: cardAccents[index % cardAccents.length] }}>
                {card.title}
              </h4>
              <p className="font-sans text-sm text-[#4A6B55] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
