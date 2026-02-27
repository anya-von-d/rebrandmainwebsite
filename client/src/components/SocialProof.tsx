import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { ShieldCheck, Eye, Lock } from "lucide-react";

const stats = [
  { value: 10000, suffix: "+", label: "Active Users", prefix: "" },
  { value: 50000, suffix: "+", label: "Loans Created", prefix: "" },
  { value: 2, suffix: "M+", label: "Amount Tracked", prefix: "$" },
];

const testimonials = [
  {
    quote:
      "Vony made it so easy to lend my friend money for rent. No awkward conversations, just clear terms we both agreed to.",
    name: "Sarah K.",
    role: "Lender",
  },
  {
    quote:
      "I used to stress about borrowing from friends. Now I can see exactly what I owe and when. It keeps things fair.",
    name: "Mike R.",
    role: "Borrower",
  },
  {
    quote:
      "We use Vony for splitting group expenses on holidays. The payment tracking is a game-changer.",
    name: "Jess T.",
    role: "Group Organiser",
  },
];

const trustBadges = [
  { icon: Lock, label: "Bank-Level Encryption" },
  { icon: Eye, label: "No Hidden Fees" },
  { icon: ShieldCheck, label: "GDPR Compliant" },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
    duration: 2000,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const rounded = Math.floor(latest);
      if (rounded >= 1000000) {
        setDisplay(`${(rounded / 1000000).toFixed(0)}`);
      } else if (rounded >= 1000) {
        setDisplay(rounded.toLocaleString());
      } else {
        setDisplay(rounded.toString());
      }
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#F0FFF5] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Animated stat counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B4332] tracking-tight">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#7A9A85] mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm shadow-[#00A86B]/5"
            >
              <p className="font-sans text-sm text-[#4A6B55] leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-sans text-sm font-semibold text-[#0A1A10]">
                  {testimonial.name}
                </p>
                <p className="font-mono text-[10px] text-[#7A9A85] uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2"
            >
              <badge.icon
                size={16}
                className="text-[#00A86B]"
                strokeWidth={1.5}
              />
              <span className="font-mono text-[11px] text-[#4A6B55] uppercase tracking-wider">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
