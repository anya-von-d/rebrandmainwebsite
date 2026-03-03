import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const previews = [
  {
    title: "Dashboard",
    description: "A clean overview of your lending activity.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 480" fill="none" className="w-full h-full">
        <rect width="800" height="480" fill="white" />

        {/* Nav */}
        <rect y="0" width="800" height="48" fill="white" />
        <rect y="47" width="800" height="1" fill="#F0F0EC" />
        <text x="40" y="30" fill="#1B4332" fontSize="18" fontWeight="700" fontFamily="serif" fontStyle="italic">Vony</text>
        <circle cx="752" cy="24" r="14" fill="#F0F0EC" />
        <text x="752" y="29" textAnchor="middle" fill="#7A9A85" fontSize="10" fontWeight="600">S</text>

        {/* Balance */}
        <text x="40" y="88" fill="#7A9A85" fontSize="11">Your balance</text>
        <text x="40" y="120" fill="#1B4332" fontSize="32" fontWeight="700">$1,250</text>

        {/* Two cards */}
        <rect x="40" y="148" width="352" height="72" rx="12" fill="#F8F9F6" />
        <text x="64" y="176" fill="#7A9A85" fontSize="10">Lent out</text>
        <text x="64" y="200" fill="#1B4332" fontSize="20" fontWeight="700">$2,450</text>
        <text x="180" y="200" fill="#36CE8E" fontSize="11">3 active</text>

        <rect x="408" y="148" width="352" height="72" rx="12" fill="#F8F9F6" />
        <text x="432" y="176" fill="#7A9A85" fontSize="10">Collected</text>
        <text x="432" y="200" fill="#1B4332" fontSize="20" fontWeight="700">$1,800</text>
        <text x="548" y="200" fill="#7A9A85" fontSize="11">73%</text>

        {/* Activity */}
        <text x="40" y="256" fill="#1B4332" fontSize="13" fontWeight="600">Activity</text>

        <rect x="40" y="270" width="720" height="1" fill="#F0F0EC" />

        <circle cx="60" cy="300" r="12" fill="#F0F0EC" />
        <text x="60" y="305" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">M</text>
        <text x="82" y="296" fill="#1B4332" fontSize="12">Mike paid $100</text>
        <text x="82" y="312" fill="#7A9A85" fontSize="10">2 hours ago</text>
        <text x="740" y="304" textAnchor="end" fill="#36CE8E" fontSize="10">Paid</text>

        <rect x="40" y="326" width="720" height="1" fill="#F0F0EC" />

        <circle cx="60" cy="356" r="12" fill="#F0F0EC" />
        <text x="60" y="361" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">J</text>
        <text x="82" y="352" fill="#1B4332" fontSize="12">New loan with Jake</text>
        <text x="82" y="368" fill="#7A9A85" fontSize="10">Yesterday</text>
        <text x="740" y="360" textAnchor="end" fill="#7A9A85" fontSize="10">New</text>

        <rect x="40" y="382" width="720" height="1" fill="#F0F0EC" />

        <circle cx="60" cy="412" r="12" fill="#F0F0EC" />
        <text x="60" y="417" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">A</text>
        <text x="82" y="408" fill="#1B4332" fontSize="12">Amy fully repaid</text>
        <text x="82" y="424" fill="#7A9A85" fontSize="10">3 days ago</text>
        <text x="740" y="416" textAnchor="end" fill="#36CE8E" fontSize="10">Complete</text>

        <rect x="40" y="438" width="720" height="1" fill="#F0F0EC" />

        {/* Bottom bar */}
        <rect x="40" y="458" width="44" height="3" rx="1.5" fill="#36CE8E" />
        <rect x="200" y="458" width="44" height="3" rx="1.5" fill="#F0F0EC" />
        <rect x="360" y="458" width="44" height="3" rx="1.5" fill="#F0F0EC" />
        <rect x="520" y="458" width="44" height="3" rx="1.5" fill="#F0F0EC" />
        <rect x="680" y="458" width="44" height="3" rx="1.5" fill="#F0F0EC" />
      </svg>
    ),
  },
  {
    title: "Create a Loan",
    description: "Pick a friend, set an amount, send.",
    color: "#83F384",
    svg: (
      <svg viewBox="0 0 800 480" fill="none" className="w-full h-full">
        <rect width="800" height="480" fill="white" />

        {/* Nav */}
        <rect y="47" width="800" height="1" fill="#F0F0EC" />
        <text x="40" y="30" fill="#36CE8E" fontSize="13">← Back</text>
        <text x="400" y="30" textAnchor="middle" fill="#1B4332" fontSize="15" fontWeight="700">New Loan</text>

        {/* Progress */}
        <rect x="40" y="60" width="720" height="3" rx="1.5" fill="#F0F0EC" />
        <rect x="40" y="60" width="240" height="3" rx="1.5" fill="#36CE8E" />
        <text x="40" y="82" fill="#7A9A85" fontSize="10">Step 1 of 3</text>

        {/* Friend */}
        <text x="40" y="116" fill="#7A9A85" fontSize="10">Lending to</text>
        <rect x="40" y="126" width="720" height="48" rx="10" fill="#F8F9F6" />
        <circle cx="72" cy="150" r="12" fill="#F0F0EC" />
        <text x="72" y="155" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">M</text>
        <text x="94" y="154" fill="#1B4332" fontSize="13">Mike Johnson</text>
        <text x="736" y="154" textAnchor="end" fill="#36CE8E" fontSize="11">Change</text>

        {/* Amount */}
        <text x="40" y="200" fill="#7A9A85" fontSize="10">Amount</text>
        <rect x="40" y="210" width="720" height="56" rx="10" fill="#F8F9F6" />
        <text x="64" y="246" fill="#7A9A85" fontSize="18">$</text>
        <text x="84" y="248" fill="#1B4332" fontSize="28" fontWeight="700">500</text>

        {/* Purpose */}
        <text x="40" y="292" fill="#7A9A85" fontSize="10">What's it for</text>
        <rect x="40" y="302" width="720" height="44" rx="10" fill="#F8F9F6" />
        <text x="64" y="330" fill="#7A9A85" fontSize="12">Car repair</text>

        {/* Toggles */}
        <rect x="40" y="366" width="352" height="44" rx="10" fill="#F8F9F6" />
        <text x="64" y="394" fill="#7A9A85" fontSize="11">Interest-free</text>
        <rect x="324" y="381" width="28" height="16" rx="8" fill="#36CE8E" />
        <circle cx="344" cy="389" r="5.5" fill="white" />

        <rect x="408" y="366" width="352" height="44" rx="10" fill="#F8F9F6" />
        <text x="432" y="394" fill="#7A9A85" fontSize="11">Reminders</text>
        <rect x="692" y="381" width="28" height="16" rx="8" fill="#36CE8E" />
        <circle cx="712" cy="389" r="5.5" fill="white" />

        {/* Button */}
        <rect x="240" y="432" width="320" height="36" rx="18" fill="#36CE8E" />
        <text x="400" y="455" textAnchor="middle" fill="#0A1A10" fontSize="13" fontWeight="600">Continue</text>
      </svg>
    ),
  },
  {
    title: "Loan Overview",
    description: "See where a loan stands at a glance.",
    color: "#6EE8B5",
    svg: (
      <svg viewBox="0 0 800 480" fill="none" className="w-full h-full">
        <rect width="800" height="480" fill="white" />

        {/* Nav */}
        <rect y="47" width="800" height="1" fill="#F0F0EC" />
        <text x="40" y="30" fill="#36CE8E" fontSize="13">← Loans</text>

        {/* Person */}
        <circle cx="60" cy="80" r="18" fill="#F0F0EC" />
        <text x="60" y="85" textAnchor="middle" fill="#1B4332" fontSize="12" fontWeight="700">M</text>
        <text x="88" y="76" fill="#1B4332" fontSize="15" fontWeight="700">Mike Johnson</text>
        <text x="88" y="94" fill="#7A9A85" fontSize="11">Car repair · Monthly</text>
        <rect x="240" y="68" width="44" height="20" rx="10" fill="#F0F0EC" />
        <text x="262" y="82" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>

        {/* Progress */}
        <text x="40" y="136" fill="#7A9A85" fontSize="10">Repayment</text>
        <text x="740" y="136" textAnchor="end" fill="#1B4332" fontSize="14" fontWeight="700">60%</text>
        <rect x="40" y="146" width="720" height="8" rx="4" fill="#F0F0EC" />
        <rect x="40" y="146" width="432" height="8" rx="4" fill="#36CE8E" />
        <text x="40" y="174" fill="#7A9A85" fontSize="10">$300 of $500</text>

        {/* Stats */}
        <rect x="40" y="196" width="228" height="60" rx="10" fill="#F8F9F6" />
        <text x="60" y="220" fill="#7A9A85" fontSize="10">Monthly</text>
        <text x="60" y="242" fill="#1B4332" fontSize="18" fontWeight="700">$100</text>

        <rect x="286" y="196" width="228" height="60" rx="10" fill="#F8F9F6" />
        <text x="306" y="220" fill="#7A9A85" fontSize="10">Interest</text>
        <text x="306" y="242" fill="#36CE8E" fontSize="18" fontWeight="700">0%</text>

        <rect x="532" y="196" width="228" height="60" rx="10" fill="#F8F9F6" />
        <text x="552" y="220" fill="#7A9A85" fontSize="10">Next due</text>
        <text x="552" y="242" fill="#1B4332" fontSize="18" fontWeight="700">Apr 15</text>

        {/* Payments */}
        <text x="40" y="292" fill="#1B4332" fontSize="13" fontWeight="600">Payments</text>

        <rect x="40" y="306" width="720" height="1" fill="#F0F0EC" />

        <text x="56" y="332" fill="#1B4332" fontSize="11">Jan 15</text>
        <text x="300" y="332" fill="#1B4332" fontSize="11">$100</text>
        <text x="740" y="332" textAnchor="end" fill="#36CE8E" fontSize="10">Paid</text>

        <rect x="40" y="346" width="720" height="1" fill="#F0F0EC" />

        <text x="56" y="372" fill="#1B4332" fontSize="11">Feb 15</text>
        <text x="300" y="372" fill="#1B4332" fontSize="11">$100</text>
        <text x="740" y="372" textAnchor="end" fill="#36CE8E" fontSize="10">Paid</text>

        <rect x="40" y="386" width="720" height="1" fill="#F0F0EC" />

        <text x="56" y="412" fill="#1B4332" fontSize="11">Mar 15</text>
        <text x="300" y="412" fill="#1B4332" fontSize="11">$100</text>
        <text x="740" y="412" textAnchor="end" fill="#36CE8E" fontSize="10">Paid</text>

        <rect x="40" y="426" width="720" height="1" fill="#F0F0EC" />

        <text x="56" y="452" fill="#7A9A85" fontSize="11">Apr 15</text>
        <text x="300" y="452" fill="#7A9A85" fontSize="11">$100</text>
        <text x="740" y="452" textAnchor="end" fill="#7A9A85" fontSize="10">Due</text>
      </svg>
    ),
  },
  {
    title: "Contracts",
    description: "All your loan agreements in one list.",
    color: "#D0ED6F",
    svg: (
      <svg viewBox="0 0 800 480" fill="none" className="w-full h-full">
        <rect width="800" height="480" fill="white" />

        {/* Nav */}
        <rect y="47" width="800" height="1" fill="#F0F0EC" />
        <text x="400" y="30" textAnchor="middle" fill="#1B4332" fontSize="15" fontWeight="700">Contracts</text>

        {/* Filters */}
        <rect x="40" y="64" width="44" height="26" rx="13" fill="#1B4332" />
        <text x="62" y="81" textAnchor="middle" fill="white" fontSize="10">All</text>
        <rect x="92" y="64" width="56" height="26" rx="13" fill="#F8F9F6" />
        <text x="120" y="81" textAnchor="middle" fill="#7A9A85" fontSize="10">Active</text>
        <rect x="156" y="64" width="66" height="26" rx="13" fill="#F8F9F6" />
        <text x="189" y="81" textAnchor="middle" fill="#7A9A85" fontSize="10">Complete</text>

        {/* Card 1 */}
        <rect x="40" y="108" width="720" height="1" fill="#F0F0EC" />

        <circle cx="60" cy="140" r="12" fill="#F0F0EC" />
        <text x="60" y="145" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">M</text>
        <text x="82" y="134" fill="#1B4332" fontSize="13" fontWeight="600">Mike Johnson</text>
        <text x="82" y="152" fill="#7A9A85" fontSize="10">$500 · Car repair</text>
        <rect x="520" y="134" width="100" height="5" rx="2.5" fill="#F0F0EC" />
        <rect x="520" y="134" width="60" height="5" rx="2.5" fill="#36CE8E" />
        <text x="632" y="140" fill="#7A9A85" fontSize="9">60%</text>
        <text x="740" y="140" textAnchor="end" fill="#36CE8E" fontSize="10">Active</text>

        {/* Card 2 */}
        <rect x="40" y="168" width="720" height="1" fill="#F0F0EC" />

        <circle cx="60" cy="200" r="12" fill="#F0F0EC" />
        <text x="60" y="205" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">J</text>
        <text x="82" y="194" fill="#1B4332" fontSize="13" fontWeight="600">Jake Wilson</text>
        <text x="82" y="212" fill="#7A9A85" fontSize="10">$1,000 · Rent help</text>
        <rect x="520" y="194" width="100" height="5" rx="2.5" fill="#F0F0EC" />
        <rect x="520" y="194" width="80" height="5" rx="2.5" fill="#83F384" />
        <text x="632" y="200" fill="#7A9A85" fontSize="9">80%</text>
        <text x="740" y="200" textAnchor="end" fill="#36CE8E" fontSize="10">Active</text>

        {/* Card 3 */}
        <rect x="40" y="228" width="720" height="1" fill="#F0F0EC" />

        <circle cx="60" cy="260" r="12" fill="#F0F0EC" />
        <text x="60" y="265" textAnchor="middle" fill="#7A9A85" fontSize="9" fontWeight="600">A</text>
        <text x="82" y="254" fill="#1B4332" fontSize="13" fontWeight="600">Amy Chen</text>
        <text x="82" y="272" fill="#7A9A85" fontSize="10">$750 · Medical bill</text>
        <rect x="520" y="254" width="100" height="5" rx="2.5" fill="#36CE8E" opacity="0.25" />
        <text x="632" y="260" fill="#7A9A85" fontSize="9">100%</text>
        <text x="740" y="260" textAnchor="end" fill="#7A9A85" fontSize="10">Complete</text>

        <rect x="40" y="288" width="720" height="1" fill="#F0F0EC" />
      </svg>
    ),
  },
  {
    title: "Payment Schedule",
    description: "Every payment on a simple timeline.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 480" fill="none" className="w-full h-full">
        <rect width="800" height="480" fill="white" />

        {/* Nav */}
        <rect y="47" width="800" height="1" fill="#F0F0EC" />
        <text x="40" y="30" fill="#36CE8E" fontSize="13">← Back</text>
        <text x="400" y="30" textAnchor="middle" fill="#1B4332" fontSize="15" fontWeight="700">Payments</text>

        {/* Context */}
        <text x="40" y="76" fill="#1B4332" fontSize="14" fontWeight="600">Mike Johnson</text>
        <text x="40" y="96" fill="#7A9A85" fontSize="11">$500 · 5 payments of $100</text>

        {/* Summary */}
        <text x="40" y="132" fill="#7A9A85" fontSize="10">Paid</text>
        <text x="40" y="152" fill="#36CE8E" fontSize="18" fontWeight="700">$300</text>
        <text x="200" y="132" fill="#7A9A85" fontSize="10">Remaining</text>
        <text x="200" y="152" fill="#1B4332" fontSize="18" fontWeight="700">$200</text>
        <text x="400" y="132" fill="#7A9A85" fontSize="10">Next</text>
        <text x="400" y="152" fill="#1B4332" fontSize="18" fontWeight="700">Apr 15</text>

        {/* Progress */}
        <rect x="40" y="172" width="720" height="6" rx="3" fill="#F0F0EC" />
        <rect x="40" y="172" width="432" height="6" rx="3" fill="#36CE8E" />

        {/* Timeline */}
        <circle cx="60" cy="216" r="8" fill="#36CE8E" />
        <rect x="59" y="224" width="2" height="32" fill="#36CE8E" />
        <text x="82" y="214" fill="#1B4332" fontSize="12" fontWeight="500">$100 · Jan 15</text>
        <text x="82" y="230" fill="#7A9A85" fontSize="10">Paid on time</text>
        <text x="740" y="220" textAnchor="end" fill="#36CE8E" fontSize="10">Paid</text>

        <circle cx="60" cy="268" r="8" fill="#36CE8E" />
        <rect x="59" y="276" width="2" height="32" fill="#36CE8E" />
        <text x="82" y="266" fill="#1B4332" fontSize="12" fontWeight="500">$100 · Feb 15</text>
        <text x="82" y="282" fill="#7A9A85" fontSize="10">Paid on time</text>
        <text x="740" y="272" textAnchor="end" fill="#36CE8E" fontSize="10">Paid</text>

        <circle cx="60" cy="320" r="8" fill="#36CE8E" />
        <rect x="59" y="328" width="2" height="32" fill="#F0F0EC" />
        <text x="82" y="318" fill="#1B4332" fontSize="12" fontWeight="500">$100 · Mar 15</text>
        <text x="82" y="334" fill="#7A9A85" fontSize="10">Paid on time</text>
        <text x="740" y="324" textAnchor="end" fill="#36CE8E" fontSize="10">Paid</text>

        <circle cx="60" cy="372" r="8" fill="white" stroke="#D0ED6F" strokeWidth="2" />
        <rect x="59" y="380" width="2" height="32" fill="#F0F0EC" />
        <text x="82" y="370" fill="#1B4332" fontSize="12" fontWeight="500">$100 · Apr 15</text>
        <text x="82" y="386" fill="#7A9A85" fontSize="10">Coming up</text>
        <text x="740" y="376" textAnchor="end" fill="#7A9A85" fontSize="10">Due</text>

        <circle cx="60" cy="424" r="8" fill="white" stroke="#F0F0EC" strokeWidth="2" />
        <text x="82" y="422" fill="#7A9A85" fontSize="12">$100 · May 15</text>
        <text x="82" y="438" fill="#7A9A85" fontSize="10">Final payment</text>
        <text x="740" y="428" textAnchor="end" fill="#7A9A85" fontSize="10">Pending</text>
      </svg>
    ),
  },
];

export default function Preview() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main className="bg-[#DBEEE3] min-h-screen pt-14">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#0A1A10]/50 mb-4">
              Preview
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1B4332] mb-4">
              Portal Preview
            </h1>
            <p className="font-sans text-base text-[#0A1A10]/70 max-w-[480px] mx-auto leading-relaxed">
              Browse through the key screens of the Vony portal. See how simple and clear lending between friends can be.
            </p>
          </motion.div>

          {/* Preview cards */}
          <div className="flex flex-col gap-12 md:gap-16">
            {previews.map((preview, index) => (
              <motion.div
                key={preview.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Title and description */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: preview.color }}
                    />
                    <h2 className="font-serif text-xl md:text-2xl font-extrabold text-[#1B4332]">
                      {preview.title}
                    </h2>
                  </div>
                  <p className="font-sans text-sm text-[#4A6B55] leading-relaxed max-w-[500px]">
                    {preview.description}
                  </p>
                </div>

                {/* Preview image box */}
                <div className="rounded-2xl overflow-hidden border border-[#0A1A10]/10 shadow-lg shadow-[#0A1A10]/5 bg-white select-none pointer-events-none">
                  {preview.svg}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16 md:mt-20"
          >
            <p className="font-sans text-base text-[#0A1A10]/70 mb-6">
              Ready to try it yourself?
            </p>
            <a
              href="https://lend-with-vony.com/home"
              className="inline-block bg-[#0A1A10] hover:bg-[#0A1A10]/90 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all shadow-lg shadow-[#0A1A10]/20"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
