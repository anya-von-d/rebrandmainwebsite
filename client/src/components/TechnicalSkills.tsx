import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

export default function TechnicalSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A120E] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Two-column layout: Title left, Box right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — Title with parallax */}
          <motion.div style={{ y: titleY, opacity: contentOpacity }} className="lg:sticky lg:top-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4A6B55] mb-4">
              Stay Organised
            </p>
            <ScrollHighlight
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
              colorFrom="#1B4332"
              colorTo="#50C878"
            >
              Keep Track
              <br />
              of Your Loan
              <br />
              Agreements
            </ScrollHighlight>
            <p className="font-sans text-base text-[#98D8AA] mt-6 max-w-[360px] leading-relaxed">
              Every loan you create is stored securely and accessible anytime. View outstanding balances, payment history, and contract details all in one place.
            </p>
          </motion.div>

          {/* Right — Image box */}
          <motion.div style={{ opacity: contentOpacity }} className="lg:sticky lg:top-32">
            <div className="bg-[#0E1F14] rounded-2xl border border-[#1B4332] p-6 md:p-8 lg:p-10 shadow-lg shadow-[#00A86B]/5">
              <div className="min-h-[360px] flex items-center justify-center">
                <p className="font-mono text-xs text-[#50C878] uppercase tracking-wider">
                  Image coming soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
