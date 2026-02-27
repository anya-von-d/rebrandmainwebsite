import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

const hoverColors = ["#00A86B", "#50C878", "#0D9B76", "#00BF7A"];
const cardBgColors = ["#D0ED6F", "#83F384", "#6EE8B5"];

const useCases = [
  {
    title: "Split Bills",
    description: "Easily divide restaurant tabs, utilities, and shared costs between friends.",
  },
  {
    title: "Help with Rent",
    description: "Cover a friend's rent and set up a clear repayment plan.",
  },
  {
    title: "Car Repairs",
    description: "Lend for unexpected breakdowns without the awkwardness.",
  },
  {
    title: "Medical Bills",
    description: "Help cover unexpected medical expenses with a clear agreement.",
  },
  {
    title: "Emergencies",
    description: "Be there when it matters, lend quickly with transparent terms.",
  },
  {
    title: "Travel Expenses",
    description: "Split holiday costs and track shared travel spending.",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Duplicate for seamless vertical loop
  const marqueeCards = [...useCases, ...useCases];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-[#83F384] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Two-column layout: Title left, Box right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — Large title with parallax */}
          <motion.div
            style={{ y: titleY, opacity: contentOpacity }}
            className="lg:sticky lg:top-32 text-center lg:text-left"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
              Use Cases
            </p>
            <ScrollHighlight
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95]"
              colorFrom="#98D8AA"
              colorTo="#1B4332"
            >
              Perfect for
              <br />
              Real-Life
              <br />
              Situations
            </ScrollHighlight>
            <p className="font-sans text-base text-[#4A6B55] mt-6 max-w-[360px] leading-relaxed mx-auto lg:mx-0">
              Whether it's a small favour or a bigger expense, Vony makes
              lending between friends and family clear and simple.
            </p>
          </motion.div>

          {/* Right — Auto-scrolling use-case cards box */}
          <div className="lg:sticky lg:top-32 max-w-[85%] mx-auto lg:max-w-none">
            <div className="bg-[#DBFFEB] rounded-2xl p-6 md:p-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-5">
                Common Scenarios
              </p>

              {/* Auto-scrolling container with masked edges */}
              <div className="relative overflow-hidden max-h-[380px]">
                {/* Top fade mask */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#DBFFEB] to-transparent z-10 pointer-events-none" />
                {/* Bottom fade mask */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#DBFFEB] to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee-vertical flex flex-col gap-3 py-2">
                  {marqueeCards.map((useCase, index) => {
                    const hoverColor = hoverColors[index % hoverColors.length];
                    return (
                      <div
                        key={`${useCase.title}-${index}`}
                        className="rounded-xl p-4 md:p-5 transition-colors group flex-shrink-0"
                        style={{ backgroundColor: cardBgColors[index % cardBgColors.length] }}
                      >
                        <h3
                          className="font-sans font-semibold text-[15px] text-[#0A1A10] transition-colors"
                        >
                          <span className="group-hover:hidden">{useCase.title}</span>
                          <span className="hidden group-hover:inline" style={{ color: hoverColor }}>{useCase.title}</span>
                        </h3>
                        <p className="font-sans text-sm text-[#4A6B55] mt-1 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
