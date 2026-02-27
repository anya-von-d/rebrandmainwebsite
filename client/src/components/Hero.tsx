import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function PhoneOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Phone body */}
      <rect
        x="6"
        y="6"
        width="268"
        height="548"
        rx="40"
        ry="40"
        stroke="white"
        strokeWidth="3"
        fill="rgba(255,255,255,0.08)"
      />
      {/* Inner screen border */}
      <rect
        x="18"
        y="58"
        width="244"
        height="444"
        rx="8"
        ry="8"
        stroke="white"
        strokeWidth="1"
        fill="rgba(255,255,255,0.04)"
        opacity="0.5"
      />
      {/* Top notch / dynamic island */}
      <rect
        x="104"
        y="22"
        width="72"
        height="24"
        rx="12"
        ry="12"
        fill="white"
        opacity="0.15"
      />

      {/* ── Mock App UI inside screen ── */}

      {/* Vony logo text */}
      <text
        x="140"
        y="88"
        textAnchor="middle"
        fill="white"
        opacity="0.9"
        fontFamily="serif"
        fontStyle="italic"
        fontSize="18"
        fontWeight="600"
      >
        Vony
      </text>

      {/* Loan card background */}
      <rect
        x="34"
        y="105"
        width="212"
        height="120"
        rx="16"
        ry="16"
        fill="white"
        opacity="0.15"
      />

      {/* Loan amount */}
      <text
        x="50"
        y="140"
        fill="white"
        opacity="0.9"
        fontFamily="sans-serif"
        fontSize="28"
        fontWeight="700"
      >
        $250.00
      </text>

      {/* Payment label */}
      <text
        x="50"
        y="160"
        fill="white"
        opacity="0.5"
        fontFamily="sans-serif"
        fontSize="11"
      >
        Monthly Repayment
      </text>

      {/* Progress bar background */}
      <rect
        x="50"
        y="178"
        width="160"
        height="6"
        rx="3"
        ry="3"
        fill="white"
        opacity="0.15"
      />
      {/* Progress bar fill */}
      <rect
        x="50"
        y="178"
        width="104"
        height="6"
        rx="3"
        ry="3"
        fill="white"
        opacity="0.7"
      />

      {/* Progress text */}
      <text
        x="50"
        y="202"
        fill="white"
        opacity="0.5"
        fontFamily="sans-serif"
        fontSize="9"
      >
        65% repaid
      </text>
      <text
        x="210"
        y="202"
        textAnchor="end"
        fill="white"
        opacity="0.5"
        fontFamily="sans-serif"
        fontSize="9"
      >
        3 of 5 payments
      </text>

      {/* Send / Request buttons */}
      <rect
        x="34"
        y="240"
        width="100"
        height="38"
        rx="10"
        ry="10"
        fill="white"
        opacity="0.2"
      />
      <text
        x="84"
        y="264"
        textAnchor="middle"
        fill="white"
        opacity="0.8"
        fontFamily="sans-serif"
        fontSize="13"
        fontWeight="600"
      >
        Send
      </text>

      <rect
        x="146"
        y="240"
        width="100"
        height="38"
        rx="10"
        ry="10"
        fill="white"
        opacity="0.2"
      />
      <text
        x="196"
        y="264"
        textAnchor="middle"
        fill="white"
        opacity="0.8"
        fontFamily="sans-serif"
        fontSize="13"
        fontWeight="600"
      >
        Request
      </text>

      {/* Recent activity section */}
      <text
        x="34"
        y="310"
        fill="white"
        opacity="0.4"
        fontFamily="sans-serif"
        fontSize="10"
        letterSpacing="1.5"
      >
        RECENT ACTIVITY
      </text>

      {/* Activity item 1 */}
      <circle cx="50" cy="340" r="14" fill="white" opacity="0.1" />
      <text
        x="50"
        y="344"
        textAnchor="middle"
        fill="white"
        opacity="0.5"
        fontFamily="sans-serif"
        fontSize="11"
      >
        S
      </text>
      <text
        x="74"
        y="336"
        fill="white"
        opacity="0.7"
        fontFamily="sans-serif"
        fontSize="12"
        fontWeight="500"
      >
        Sarah paid $50
      </text>
      <text
        x="74"
        y="350"
        fill="white"
        opacity="0.35"
        fontFamily="sans-serif"
        fontSize="10"
      >
        2 hours ago
      </text>

      {/* Activity item 2 */}
      <circle cx="50" cy="380" r="14" fill="white" opacity="0.1" />
      <text
        x="50"
        y="384"
        textAnchor="middle"
        fill="white"
        opacity="0.5"
        fontFamily="sans-serif"
        fontSize="11"
      >
        M
      </text>
      <text
        x="74"
        y="376"
        fill="white"
        opacity="0.7"
        fontFamily="sans-serif"
        fontSize="12"
        fontWeight="500"
      >
        Mike — new loan
      </text>
      <text
        x="74"
        y="390"
        fill="white"
        opacity="0.35"
        fontFamily="sans-serif"
        fontSize="10"
      >
        Yesterday
      </text>

      {/* Activity item 3 */}
      <circle cx="50" cy="420" r="14" fill="white" opacity="0.1" />
      <text
        x="50"
        y="424"
        textAnchor="middle"
        fill="white"
        opacity="0.5"
        fontFamily="sans-serif"
        fontSize="11"
      >
        J
      </text>
      <text
        x="74"
        y="416"
        fill="white"
        opacity="0.7"
        fontFamily="sans-serif"
        fontSize="12"
        fontWeight="500"
      >
        Jake paid $75
      </text>
      <text
        x="74"
        y="430"
        fill="white"
        opacity="0.35"
        fontFamily="sans-serif"
        fontSize="10"
      >
        3 days ago
      </text>

      {/* Bottom nav bar */}
      <rect
        x="18"
        y="460"
        width="244"
        height="42"
        rx="0"
        ry="0"
        fill="white"
        opacity="0.06"
      />

      {/* Nav icons — Home */}
      <rect x="52" y="470" width="16" height="14" rx="2" fill="white" opacity="0.5" />
      <rect x="56" y="467" width="8" height="4" rx="1" fill="white" opacity="0.5" />

      {/* Nav icons — Cards/Wallet */}
      <rect x="112" y="470" width="16" height="12" rx="3" fill="white" opacity="0.25" />

      {/* Nav icons — Activity */}
      <circle cx="180" cy="476" r="8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.25" />

      {/* Nav icons — Profile */}
      <circle cx="220" cy="472" r="5" fill="white" opacity="0.25" />
      <rect x="213" y="480" width="14" height="5" rx="2.5" fill="white" opacity="0.25" />

      {/* Bottom home indicator */}
      <rect
        x="100"
        y="524"
        width="80"
        height="5"
        rx="2.5"
        ry="2.5"
        fill="white"
        opacity="0.2"
      />
    </svg>
  );
}

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const marqueeFeatures = [...features, ...features];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="h-[82vh] bg-[#36CE8E] relative overflow-hidden pb-1"
    >
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full"
      >
        {/* ── Headline left ── */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-center md:text-left md:max-w-[55%]"
            >
              <h1 className="font-display italic text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-[#0A1A10] font-bold">
                Lending Money to Friends{" "}
                <span className="text-[#83F384]">Made Simple</span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="mt-4 text-base md:text-lg text-[#0A1A10]/70 font-sans max-w-[480px] leading-relaxed md:mx-0 mx-auto"
              >
                Create clear loan agreements, track repayments, and keep
                friendships strong.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#0A1A10] hover:bg-[#0A1A10]/90 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all cursor-pointer shadow-lg shadow-[#0A1A10]/20"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="bg-transparent border-2 border-[#0A1A10]/30 hover:border-[#0A1A10]/60 text-[#0A1A10] px-8 py-3 rounded-lg font-semibold text-base transition-all cursor-pointer"
                >
                  See How It Works
                </button>
              </motion.div>

              {/* Trust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-4 font-mono text-[11px] text-[#0A1A10]/50 tracking-wide text-center md:text-left"
              >
                Free to use &middot; No hidden fees &middot; Bank-level security
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* ── Phone Outline — bigger, positioned to overflow bottom ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="hidden md:block absolute right-[8%] lg:right-[12%] top-[22%] z-20 pointer-events-none"
        >
          <PhoneOutline className="w-[32vw] max-w-[380px] lg:w-[26vw] lg:max-w-[420px] xl:max-w-[460px] h-auto" />
        </motion.div>

        {/* ── Features marquee — moved up, behind the phone ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-[12%] md:bottom-[16%] left-0 right-0 z-10 pointer-events-none"
        >
          <div className="overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {marqueeFeatures.map((feature, i) => (
                <span
                  key={`${feature}-${i}`}
                  className="inline-flex items-center mx-6 md:mx-10"
                >
                  <span className="font-mono text-xs md:text-sm lg:text-base text-[#0A1A10]/60 uppercase tracking-[0.2em]">
                    {feature}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: phone outline visible below headline ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-[-5%] z-10 flex md:hidden justify-center pointer-events-none"
        >
          <PhoneOutline className="w-[50vw] max-w-[260px] h-auto opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
