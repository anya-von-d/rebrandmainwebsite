import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

const hoverColors = ["#00A86B", "#50C878", "#0D9B76", "#00BF7A"];
const cardBgColors = ["#D0ED6F", "#83F384", "#6EE8B5"];

const useCases = [
  {
    title: "Split Dinner Bills",
    description: "Easily divide restaurant tabs and track who owes what.",
  },
  {
    title: "Help with Rent",
    description: "Cover a friend's rent and set up a clear repayment plan.",
  },
  {
    title: "Urgent Car Repairs",
    description: "Lend for unexpected breakdowns without the awkwardness.",
  },
  {
    title: "Concert Tickets",
    description: "Front the cost for group tickets and get paid back on time.",
  },
  {
    title: "Moving Costs",
    description: "Help a mate with deposits and moving expenses stress-free.",
  },
  {
    title: "Textbooks & Tuition",
    description: "Support a friend through study costs with flexible terms.",
  },
  {
    title: "Travel Expenses",
    description: "Split holiday costs and track shared travel spending.",
  },
  {
    title: "Medical Bills",
    description: "Help cover unexpected medical expenses with a clear agreement.",
  },
  {
    title: "Pet Emergencies",
    description: "Lend for vet bills and set up easy instalments.",
  },
  {
    title: "Birthday Gifts",
    description: "Pool money for group presents and keep everyone accountable.",
  },
  {
    title: "Grocery Runs",
    description: "Track shared household shopping costs effortlessly.",
  },
  {
    title: "Utility Bills",
    description: "Split electricity, internet, and water between housemates.",
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-[#A8E6B8] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Two-column layout: Title left, Box right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — Large title with parallax */}
          <motion.div
            style={{ y: titleY, opacity: contentOpacity }}
            className="lg:sticky lg:top-32"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
              Use Cases
            </p>
            <ScrollHighlight
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
              colorFrom="#98D8AA"
              colorTo="#1B4332"
            >
              Perfect for
              <br />
              Real-Life
              <br />
              Situations
            </ScrollHighlight>
            <p className="font-sans text-base text-[#4A6B55] mt-6 max-w-[360px] leading-relaxed">
              Whether it's a small favour or a bigger expense, Vony makes
              lending between friends and family clear and simple.
            </p>
          </motion.div>

          {/* Right — Scrolling use-case cards box */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-[#DBFFEB] rounded-2xl p-6 md:p-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-5">
                Common Scenarios
              </p>

              {/* Scrollable container with masked edges */}
              <div className="relative">
                {/* Top fade mask */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#DBFFEB] to-transparent z-10 pointer-events-none rounded-t-lg" />
                {/* Bottom fade mask */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#DBFFEB] to-transparent z-10 pointer-events-none rounded-b-lg" />

                <div className="max-h-[420px] overflow-y-auto space-y-3 pr-2 scrollbar-thin py-2">
                  {useCases.map((useCase, index) => {
                    const hoverColor = hoverColors[index % hoverColors.length];
                    return (
                      <motion.div
                        key={useCase.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                        className="rounded-xl p-4 md:p-5 transition-colors group"
                        style={{ ["--hover-color" as string]: hoverColor, backgroundColor: cardBgColors[index % cardBgColors.length] }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3
                          className="font-sans font-semibold text-[15px] text-[#0A1A10] transition-colors"
                          style={{ ["--hover-color" as string]: hoverColor }}
                        >
                          <span className="group-hover:hidden">{useCase.title}</span>
                          <span className="hidden group-hover:inline" style={{ color: hoverColor }}>{useCase.title}</span>
                        </h3>
                        <p className="font-sans text-sm text-[#4A6B55] mt-1 leading-relaxed">
                          {useCase.description}
                        </p>
                      </motion.div>
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
