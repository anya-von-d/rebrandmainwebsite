import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useInView } from "framer-motion";
import { Shield, Handshake, Clock } from "lucide-react";

const paragraph =
  "Vony takes the awkwardness out of lending between friends and family. Set clear terms, track every payment, and protect your relationships — all in one simple app.";

const words = paragraph.split(" ");

const featureHighlights = [
  {
    icon: Shield,
    title: "Protected Agreements",
    description:
      "Every loan is formalised with a digital contract both parties can access anytime.",
  },
  {
    icon: Handshake,
    title: "Built for Trust",
    description:
      "Transparent terms and repayment tracking keep everyone on the same page.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description:
      "Set custom payment plans that work for both the lender and borrower.",
  },
];

const useCasePills = [
  "Split Bills",
  "Help with Rent",
  "Car Repairs",
  "Concert Tickets",
  "Moving Costs",
  "Travel Expenses",
  "Medical Bills",
  "Pet Emergencies",
];

function ScrollWord({
  word,
  index,
  totalWords,
  progress,
}: {
  word: string;
  index: number;
  totalWords: number;
  progress: number;
}) {
  const wordStart = (index / totalWords) * 0.85;
  const wordEnd = wordStart + 0.04;

  const t = Math.min(1, Math.max(0, (progress - wordStart) / (wordEnd - wordStart)));

  const opacity = 0.2 + t * 0.8;
  const greenShades = ["#1B4332", "#0D9B76", "#0A1A10", "#00A86B"];
  const shadeIndex = index % greenShades.length;
  const targetColor = greenShades[shadeIndex];
  const color = t >= 1 ? targetColor : `rgb(${200 - t * 190}, ${210 - t * 190}, ${200 - t * 185})`;

  return (
    <span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [maxProgress, setMaxProgress] = useState(0);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setMaxProgress((prev) => Math.max(prev, latest));
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#DBEEE3] py-20 md:py-28 lg:py-32"
      data-testid="section-about"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-8 md:mb-12">
          <span className="text-[#1B4332]">Designed for </span>
          <span className="text-[#0D9B76]">Everyday Lending</span>
        </h2>
        <p className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug md:leading-snug lg:leading-snug font-normal italic">
          {words.map((word, i) => (
            <ScrollWord
              key={`${word}-${i}`}
              word={word}
              index={i}
              totalWords={words.length}
              progress={maxProgress}
            />
          ))}
        </p>

        {/* Feature highlight cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20"
        >
          {featureHighlights.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="bg-[#C8E8D4] rounded-2xl p-6 md:p-8 group hover:bg-[#B8DEC6] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00A86B]/10 flex items-center justify-center mb-4 group-hover:bg-[#00A86B]/20 transition-colors">
                <feature.icon
                  size={20}
                  className="text-[#00A86B]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-sans font-semibold text-lg text-[#0A1A10] mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-[#4A6B55] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Use case pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-2 justify-center md:justify-start"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] self-center mr-2">
            Perfect for
          </span>
          {useCasePills.map((pill) => (
            <span
              key={pill}
              className="px-4 py-1.5 rounded-full bg-[#B0D9BE] text-[#1B4332] font-sans text-xs font-medium"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
