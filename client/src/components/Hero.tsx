import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CodeTyping from "@/components/CodeTyping";
import profileImage from "@assets/Screenshot_2026-01-08_at_10.44.47_AM_1767898127121.png";

const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "NumPy",
  "pandas",
  "scikit-learn",
  "C++",
  "R",
  "MATLAB",
  "SQL",
  "Git",
  "Linux",
  "Deep Learning",
  "Computer Vision",
  "Bayesian Inference",
  "Monte Carlo",
  "Numerical Methods",
  "Parallel Programming",
  "Web Development",
  "HPC",
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

  const marqueeSkills = [...skills, ...skills];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="h-screen bg-[#0A120E] relative overflow-hidden"
    >
      {/* Animated code typing background with cursor */}
      <CodeTyping />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full"
      >
        {/* ── Giant name — sits BEHIND the photo ── */}
        <div className="absolute inset-x-0 top-[6%] md:top-[8%] z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="whitespace-nowrap"
          >
            {/* First name — Syne, bold, structured */}
            <h1 className="font-serif text-[12vw] md:text-[10vw] lg:text-[9vw] leading-[0.8] text-[#E8F5ED] uppercase tracking-tight font-extrabold">
              Anya
            </h1>
            {/* Last name — Cormorant Garamond italic, elegant, French */}
            <p className="font-display italic text-[7vw] md:text-[5.5vw] lg:text-[5vw] leading-[1] text-[#00A86B] -mt-[0.5vw] tracking-wide">
              von Diessl
            </p>
          </motion.div>
        </div>

        {/* ── Skills marquee — behind the photo (z-20) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-[8%] md:bottom-[10%] left-0 right-0 z-20 pointer-events-none"
        >
          <div className="overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {marqueeSkills.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="inline-flex items-center mx-4 md:mx-6"
                >
                  <span className="font-mono text-[10px] md:text-xs lg:text-sm text-[#00A86B] uppercase tracking-[0.2em]">
                    {skill}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Photo — large, centered, overlapping text & skills ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-[8%] md:bottom-[6%] z-30 flex justify-center pointer-events-none"
        >
          <img
            src={profileImage}
            alt="Anya von Diessl"
            className="w-[55vw] max-w-[380px] md:w-[35vw] md:max-w-[440px] lg:w-[28vw] lg:max-w-[480px] xl:max-w-[520px] object-cover"
          />
        </motion.div>

        {/* ── Left side — Role & Education ──
             Uses left-0 to the center photo zone as its space.
             The photo is ~28-35vw wide centered, so the side panel
             occupies from the screen edge to roughly where the photo starts.
             We use left-0 w-[36%] (on lg) with flex justify-center to
             center the content within that left column. */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex w-[30%] lg:w-[34%] justify-center"
        >
          <div className="flex flex-col items-center text-center gap-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4A6B55] mb-3">
              Role
            </p>
            <p className="font-sans text-sm lg:text-base text-[#E8F5ED] font-semibold leading-relaxed">
              AI Researcher
            </p>
            <p className="font-sans text-sm lg:text-base text-[#7A9A85] leading-relaxed">
              &amp; Computer Scientist
            </p>
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4A6B55] mb-3">
                Education
              </p>
              <p className="font-sans text-sm lg:text-base text-[#E8F5ED] font-semibold leading-relaxed">
                Stanford University
              </p>
              <p className="font-sans text-sm lg:text-base text-[#7A9A85] leading-relaxed">
                MS Computer Science
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Right side — Social / Contact ──
             Mirror of the left side, occupying from the photo zone to
             the right edge of the screen. */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex w-[30%] lg:w-[34%] justify-center"
        >
          <div className="flex flex-col items-center text-center gap-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4A6B55] mb-3">
              Connect
            </p>
            <a
              href="https://www.linkedin.com/in/anya-von-diessl/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm lg:text-base text-[#E8F5ED] font-semibold hover:text-[#00A86B] transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <div className="mt-6">
              <button
                onClick={scrollToContact}
                className="bg-[#00A86B] hover:bg-[#008F5A] text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: info below everything ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-4 inset-x-0 z-40 flex md:hidden justify-between px-6"
        >
          <div className="text-left">
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#4A6B55] mb-1">
              Role
            </p>
            <p className="font-sans text-xs text-[#E8F5ED] font-semibold">
              AI Researcher
            </p>
            <p className="font-sans text-[11px] text-[#7A9A85]">
              &amp; Computer Scientist
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-[#00A86B] hover:bg-[#008F5A] text-white px-4 py-1.5 rounded-lg font-medium text-xs transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="text-right">
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#4A6B55] mb-1">
              Education
            </p>
            <p className="font-sans text-xs text-[#E8F5ED] font-semibold">
              Stanford
            </p>
            <p className="font-sans text-[11px] text-[#7A9A85]">
              MS Computer Science
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
