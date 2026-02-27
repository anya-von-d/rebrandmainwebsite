import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

const coursework = [
  "Advanced Probability Theory",
  "Stochastic Modeling",
  "Optimization",
  "Statistical Inference",
  "Partial Differential Equations",
  "Continuous Mathematical Methods",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Algorithms",
  "Decision Making Under Uncertainty",
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
        {/* Two-column layout: Title left, Box right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — Large title with parallax */}
          <motion.div style={{ y: titleY, opacity: contentOpacity }} className="lg:sticky lg:top-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
              Background
            </p>
            <ScrollHighlight
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
              colorFrom="#A8C8B0"
              colorTo="#0A1A10"
            >
              Foundations
              <br />
              &amp;&nbsp;Tools
            </ScrollHighlight>
            <p className="font-sans text-base text-[#7A9A85] mt-6 max-w-[360px] leading-relaxed">
              Strong foundation in mathematics and computer science with
              hands-on experience building production-quality AI systems.
            </p>
          </motion.div>

          {/* Right — Coursework box, sticky so it stays stationary */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-[#F5FAF6] rounded-2xl border border-[#C8DCCE] p-6 md:p-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
                Selected Coursework
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="text-[14px] text-[#4A6B55] py-2.5 border-b border-[#E5F0E8] last:border-b-0 hover:text-[#0A1A10] transition-colors cursor-default"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
