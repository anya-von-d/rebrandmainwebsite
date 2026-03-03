import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const previews = [
  {
    title: "Dashboard",
    description: "Your lending hub — net worth style overview with spending-like breakdowns and friend insights.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 560" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="560" fill="#FAFBF8" />

        {/* Top bar — white, minimal */}
        <rect width="800" height="52" fill="white" />
        <rect y="51" width="800" height="1" fill="#EAEEE6" />
        <text x="400" y="34" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">Dashboard</text>
        <circle cx="40" cy="26" r="14" fill="#36CE8E" opacity="0.12" />
        <text x="40" y="31" textAnchor="middle" fill="#1B4332" fontSize="10" fontWeight="600">S</text>
        <circle cx="760" cy="26" r="14" fill="#F4F5F0" />

        {/* Large balance hero — centered, bold */}
        <rect x="0" y="52" width="800" height="148" fill="white" />
        <rect x="0" y="199" width="800" height="1" fill="#EAEEE6" />
        <text x="400" y="92" textAnchor="middle" fill="#7A9A85" fontSize="11" fontWeight="500" letterSpacing="1.5">YOUR LENDING BALANCE</text>
        <text x="400" y="142" textAnchor="middle" fill="#1B4332" fontSize="44" fontWeight="700">$1,250.00</text>
        <rect x="330" y="156" width="140" height="26" rx="13" fill="#36CE8E" opacity="0.08" />
        <text x="400" y="174" textAnchor="middle" fill="#36CE8E" fontSize="11" fontWeight="600">↑ $100 this week</text>

        {/* Horizontal breakdown bar */}
        <rect x="40" y="216" width="720" height="60" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        {/* Segments */}
        <rect x="56" y="234" width="280" height="12" rx="6" fill="#36CE8E" />
        <rect x="336" y="234" width="180" height="12" rx="0" fill="#83F384" />
        <rect x="516" y="234" width="100" height="12" rx="0" fill="#D0ED6F" />
        <rect x="616" y="234" width="130" height="12" rx="6" fill="#DBEEE3" />
        {/* Labels */}
        <text x="56" y="262" fill="#36CE8E" fontSize="9" fontWeight="500">Collected $1,800</text>
        <text x="336" y="262" fill="#4A6B55" fontSize="9" fontWeight="500">Outstanding $1,200</text>
        <text x="616" y="262" fill="#7A9A85" fontSize="9">Pending</text>

        {/* Three metric tiles */}
        <rect x="40" y="292" width="232" height="96" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="60" y="318" fill="#7A9A85" fontSize="10" fontWeight="500" letterSpacing="0.5">TOTAL LENT</text>
        <text x="60" y="352" fill="#1B4332" fontSize="26" fontWeight="700">$2,450</text>
        <text x="60" y="372" fill="#36CE8E" fontSize="10" fontWeight="500">3 friends</text>

        <rect x="284" y="292" width="232" height="96" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="304" y="318" fill="#7A9A85" fontSize="10" fontWeight="500" letterSpacing="0.5">REPAYMENT RATE</text>
        {/* Mini semi-circle gauge */}
        <path d="M 370 374 A 40 40 0 0 1 450 374" stroke="#DBEEE3" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 370 374 A 40 40 0 0 1 438 344" stroke="#36CE8E" strokeWidth="6" fill="none" strokeLinecap="round" />
        <text x="410" y="370" textAnchor="middle" fill="#1B4332" fontSize="18" fontWeight="700">73%</text>

        <rect x="528" y="292" width="232" height="96" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="548" y="318" fill="#7A9A85" fontSize="10" fontWeight="500" letterSpacing="0.5">NEXT PAYMENT</text>
        <text x="548" y="352" fill="#1B4332" fontSize="26" fontWeight="700">Apr 15</text>
        <text x="548" y="372" fill="#7A9A85" fontSize="10">from Mike · $100</text>

        {/* Friends list — NerdWallet "accounts" style */}
        <rect x="40" y="404" width="720" height="140" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="64" y="432" fill="#1B4332" fontSize="13" fontWeight="700">Friends</text>
        <text x="736" y="432" textAnchor="end" fill="#36CE8E" fontSize="11" fontWeight="500">See all</text>

        {/* Friend 1 */}
        <circle cx="80" cy="468" r="14" fill="#36CE8E" opacity="0.1" />
        <text x="80" y="473" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">MJ</text>
        <text x="104" y="464" fill="#1B4332" fontSize="12" fontWeight="500">Mike Johnson</text>
        <text x="104" y="480" fill="#7A9A85" fontSize="10">Car repair · Monthly</text>
        <text x="440" y="468" textAnchor="end" fill="#1B4332" fontSize="12" fontWeight="600">$200</text>
        <text x="440" y="482" textAnchor="end" fill="#7A9A85" fontSize="9">remaining</text>
        {/* Inline progress */}
        <rect x="460" y="470" width="100" height="5" rx="2.5" fill="#DBEEE3" />
        <rect x="460" y="470" width="60" height="5" rx="2.5" fill="#36CE8E" />
        <text x="572" y="476" fill="#7A9A85" fontSize="9">60%</text>

        {/* Divider */}
        <rect x="64" y="496" width="672" height="1" fill="#F2F3EE" />

        {/* Friend 2 */}
        <circle cx="80" cy="522" r="14" fill="#83F384" opacity="0.1" />
        <text x="80" y="527" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">JW</text>
        <text x="104" y="518" fill="#1B4332" fontSize="12" fontWeight="500">Jake Wilson</text>
        <text x="104" y="534" fill="#7A9A85" fontSize="10">Rent help · Bi-weekly</text>
        <text x="440" y="522" textAnchor="end" fill="#1B4332" fontSize="12" fontWeight="600">$200</text>
        <text x="440" y="536" textAnchor="end" fill="#7A9A85" fontSize="9">remaining</text>
        <rect x="460" y="524" width="100" height="5" rx="2.5" fill="#DBEEE3" />
        <rect x="460" y="524" width="80" height="5" rx="2.5" fill="#83F384" />
        <text x="572" y="530" fill="#7A9A85" fontSize="9">80%</text>
      </svg>
    ),
  },
  {
    title: "Create a Loan",
    description: "A streamlined two-panel flow — pick a friend, set terms, and preview before sending.",
    color: "#83F384",
    svg: (
      <svg viewBox="0 0 800 560" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="560" fill="#FAFBF8" />

        {/* Top bar */}
        <rect width="800" height="52" fill="white" />
        <rect y="51" width="800" height="1" fill="#EAEEE6" />
        <text x="36" y="34" fill="#36CE8E" fontSize="13" fontWeight="500">← Cancel</text>
        <text x="400" y="34" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">New Loan</text>

        {/* Step dots */}
        <circle cx="370" cy="74" r="5" fill="#36CE8E" />
        <rect x="381" y="72" width="16" height="4" rx="2" fill="#36CE8E" />
        <circle cx="403" cy="74" r="5" fill="#36CE8E" opacity="0.2" />
        <rect x="414" y="72" width="16" height="4" rx="2" fill="#DBEEE3" />
        <circle cx="436" cy="74" r="5" fill="#DBEEE3" />
        <text x="400" y="96" textAnchor="middle" fill="#7A9A85" fontSize="10">Details</text>

        {/* Two-panel layout */}
        {/* Left panel — form */}
        <rect x="40" y="112" width="430" height="420" rx="16" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="68" y="148" fill="#1B4332" fontSize="17" fontWeight="700">Loan Details</text>

        {/* Friend selector */}
        <text x="68" y="180" fill="#7A9A85" fontSize="10" fontWeight="500" letterSpacing="0.5">LENDING TO</text>
        <rect x="68" y="190" width="374" height="52" rx="12" fill="#F4F5F0" />
        <circle cx="100" cy="216" r="14" fill="#36CE8E" opacity="0.12" />
        <text x="100" y="221" textAnchor="middle" fill="#36CE8E" fontSize="10" fontWeight="600">M</text>
        <text x="124" y="212" fill="#1B4332" fontSize="13" fontWeight="500">Mike Johnson</text>
        <text x="124" y="228" fill="#7A9A85" fontSize="10">Friend</text>
        <text x="418" y="220" textAnchor="end" fill="#36CE8E" fontSize="10" fontWeight="500">Change</text>

        {/* Amount */}
        <text x="68" y="270" fill="#7A9A85" fontSize="10" fontWeight="500" letterSpacing="0.5">AMOUNT</text>
        <rect x="68" y="280" width="374" height="64" rx="12" fill="#F4F5F0" />
        <text x="92" y="322" fill="#7A9A85" fontSize="24">$</text>
        <text x="118" y="322" fill="#1B4332" fontSize="34" fontWeight="700">500</text>

        {/* Purpose */}
        <text x="68" y="372" fill="#7A9A85" fontSize="10" fontWeight="500" letterSpacing="0.5">PURPOSE</text>
        <rect x="68" y="382" width="374" height="44" rx="12" fill="#F4F5F0" />
        <text x="88" y="410" fill="#7A9A85" fontSize="12">Car repair</text>

        {/* Options */}
        <rect x="68" y="442" width="178" height="44" rx="12" fill="#F4F5F0" />
        <text x="88" y="468" fill="#4A6B55" fontSize="10">Interest-free</text>
        <rect x="208" y="455" width="28" height="16" rx="8" fill="#36CE8E" />
        <circle cx="228" cy="463" r="5.5" fill="white" />

        <rect x="264" y="442" width="178" height="44" rx="12" fill="#F4F5F0" />
        <text x="284" y="468" fill="#4A6B55" fontSize="10">Reminders</text>
        <rect x="400" y="455" width="28" height="16" rx="8" fill="#36CE8E" />
        <circle cx="420" cy="463" r="5.5" fill="white" />

        {/* CTA */}
        <rect x="68" y="500" width="374" height="18" rx="9" fill="#36CE8E" opacity="0.06" />
        <text x="255" y="513" textAnchor="middle" fill="#4A6B55" fontSize="9">You can review everything before sending</text>

        {/* Right panel — live preview */}
        <rect x="490" y="112" width="270" height="420" rx="16" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="518" y="148" fill="#1B4332" fontSize="14" fontWeight="700">Preview</text>
        <text x="518" y="168" fill="#7A9A85" fontSize="10">What Mike will see</text>

        {/* Preview card */}
        <rect x="510" y="186" width="230" height="200" rx="12" fill="#F4F5F0" />
        <text x="625" y="218" textAnchor="middle" fill="#1B4332" fontSize="13" fontWeight="600">Loan Request</text>

        <rect x="530" y="232" width="190" height="1" fill="#DBEEE3" />

        <text x="540" y="256" fill="#7A9A85" fontSize="9">From</text>
        <text x="710" y="256" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Sarah (you)</text>
        <text x="540" y="278" fill="#7A9A85" fontSize="9">Amount</text>
        <text x="710" y="278" textAnchor="end" fill="#1B4332" fontSize="12" fontWeight="700">$500.00</text>
        <text x="540" y="300" fill="#7A9A85" fontSize="9">For</text>
        <text x="710" y="300" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Car repair</text>
        <text x="540" y="322" fill="#7A9A85" fontSize="9">Interest</text>
        <text x="710" y="322" textAnchor="end" fill="#36CE8E" fontSize="10" fontWeight="500">None</text>
        <text x="540" y="344" fill="#7A9A85" fontSize="9">Reminders</text>
        <text x="710" y="344" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Enabled</text>
        <text x="540" y="366" fill="#7A9A85" fontSize="9">Schedule</text>
        <text x="710" y="366" textAnchor="end" fill="#7A9A85" fontSize="10">Set in next step</text>

        {/* Send button in preview */}
        <rect x="510" y="402" width="230" height="42" rx="12" fill="#36CE8E" />
        <text x="625" y="428" textAnchor="middle" fill="#0A1A10" fontSize="13" fontWeight="600">Send Request</text>

        {/* Tip */}
        <rect x="510" y="458" width="230" height="56" rx="10" fill="#36CE8E" opacity="0.05" />
        <text x="530" y="480" fill="#4A6B55" fontSize="10" fontWeight="500">💡 Tip</text>
        <text x="530" y="496" fill="#7A9A85" fontSize="9">Mike can accept or suggest changes</text>
      </svg>
    ),
  },
  {
    title: "Loan Overview",
    description: "A detailed loan profile with visual progress tracking and payment history.",
    color: "#6EE8B5",
    svg: (
      <svg viewBox="0 0 800 560" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="560" fill="#FAFBF8" />

        {/* Top bar */}
        <rect width="800" height="52" fill="white" />
        <rect y="51" width="800" height="1" fill="#EAEEE6" />
        <text x="36" y="34" fill="#36CE8E" fontSize="13" fontWeight="500">← Loans</text>
        <text x="400" y="34" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">Loan Details</text>
        <text x="764" y="34" textAnchor="end" fill="#7A9A85" fontSize="12">Edit</text>

        {/* Person header card */}
        <rect x="40" y="68" width="720" height="80" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <circle cx="84" cy="108" r="24" fill="#36CE8E" opacity="0.1" />
        <text x="84" y="114" textAnchor="middle" fill="#1B4332" fontSize="15" fontWeight="700">M</text>
        <text x="120" y="100" fill="#1B4332" fontSize="16" fontWeight="700">Mike Johnson</text>
        <rect x="246" y="90" width="52" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="272" y="104" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>
        <text x="120" y="120" fill="#7A9A85" fontSize="11">Car repair · Monthly · Interest-free</text>
        <rect x="620" y="94" width="120" height="28" rx="14" fill="#F4F5F0" />
        <text x="680" y="113" textAnchor="middle" fill="#4A6B55" fontSize="10">Send Reminder</text>

        {/* Progress section — large visual */}
        <rect x="40" y="164" width="720" height="130" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />

        {/* Circle progress */}
        <circle cx="120" cy="230" r="38" fill="none" stroke="#EAEEE6" strokeWidth="7" />
        <circle cx="120" cy="230" r="38" fill="none" stroke="#36CE8E" strokeWidth="7" strokeDasharray="143.4 95.6" strokeLinecap="round" transform="rotate(-90 120 230)" />
        <text x="120" y="226" textAnchor="middle" fill="#1B4332" fontSize="18" fontWeight="700">60%</text>
        <text x="120" y="244" textAnchor="middle" fill="#7A9A85" fontSize="9">complete</text>

        {/* Stats beside circle */}
        <text x="200" y="198" fill="#7A9A85" fontSize="10" fontWeight="500" letterSpacing="0.5">REPAID</text>
        <text x="200" y="224" fill="#1B4332" fontSize="28" fontWeight="700">$300</text>
        <text x="290" y="224" fill="#7A9A85" fontSize="13">of $500</text>

        <rect x="200" y="240" width="540" height="8" rx="4" fill="#EAEEE6" />
        <rect x="200" y="240" width="324" height="8" rx="4" fill="#36CE8E" />

        <text x="200" y="268" fill="#7A9A85" fontSize="10">3 of 5 payments · 2 remaining · Est. completion May 15</text>

        {/* Key terms — horizontal */}
        <rect x="40" y="310" width="175" height="76" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="60" y="336" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">MONTHLY</text>
        <text x="60" y="366" fill="#1B4332" fontSize="22" fontWeight="700">$100</text>

        <rect x="225" y="310" width="175" height="76" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="245" y="336" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">INTEREST</text>
        <text x="245" y="366" fill="#36CE8E" fontSize="22" fontWeight="700">0%</text>

        <rect x="410" y="310" width="175" height="76" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="430" y="336" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">NEXT DUE</text>
        <text x="430" y="366" fill="#1B4332" fontSize="22" fontWeight="700">Apr 15</text>

        <rect x="595" y="310" width="165" height="76" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="615" y="336" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">STARTED</text>
        <text x="615" y="366" fill="#7A9A85" fontSize="22" fontWeight="700">Jan 15</text>

        {/* Payments list */}
        <rect x="40" y="402" width="720" height="146" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="64" y="430" fill="#1B4332" fontSize="13" fontWeight="700">Payments</text>
        <text x="736" y="430" textAnchor="end" fill="#36CE8E" fontSize="11" fontWeight="500">See all</text>

        {/* Row headers */}
        <text x="64" y="456" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">DATE</text>
        <text x="300" y="456" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">AMOUNT</text>
        <text x="500" y="456" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">STATUS</text>
        <rect x="64" y="462" width="672" height="1" fill="#F2F3EE" />

        {/* Row 1 */}
        <text x="64" y="484" fill="#1B4332" fontSize="11">Jan 15, 2026</text>
        <text x="300" y="484" fill="#1B4332" fontSize="11" fontWeight="600">$100.00</text>
        <rect x="500" y="472" width="44" height="18" rx="9" fill="#36CE8E" opacity="0.08" />
        <text x="522" y="485" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        {/* Row 2 */}
        <text x="64" y="508" fill="#1B4332" fontSize="11">Feb 15, 2026</text>
        <text x="300" y="508" fill="#1B4332" fontSize="11" fontWeight="600">$100.00</text>
        <rect x="500" y="496" width="44" height="18" rx="9" fill="#36CE8E" opacity="0.08" />
        <text x="522" y="509" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        {/* Row 3 */}
        <text x="64" y="532" fill="#1B4332" fontSize="11">Mar 15, 2026</text>
        <text x="300" y="532" fill="#1B4332" fontSize="11" fontWeight="600">$100.00</text>
        <rect x="500" y="520" width="44" height="18" rx="9" fill="#36CE8E" opacity="0.08" />
        <text x="522" y="533" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>
      </svg>
    ),
  },
  {
    title: "Contracts",
    description: "Browse and manage all agreements with inline progress and quick filters.",
    color: "#D0ED6F",
    svg: (
      <svg viewBox="0 0 800 560" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="560" fill="#FAFBF8" />

        {/* Top bar */}
        <rect width="800" height="52" fill="white" />
        <rect y="51" width="800" height="1" fill="#EAEEE6" />
        <text x="400" y="34" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">Contracts</text>
        <circle cx="760" cy="26" r="14" fill="#F4F5F0" />

        {/* Stats header bar */}
        <rect x="0" y="52" width="800" height="64" fill="white" />
        <rect x="0" y="115" width="800" height="1" fill="#EAEEE6" />

        <text x="120" y="78" textAnchor="middle" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">TOTAL</text>
        <text x="120" y="100" textAnchor="middle" fill="#1B4332" fontSize="18" fontWeight="700">5</text>

        <rect x="220" y="68" width="1" height="36" fill="#EAEEE6" />

        <text x="320" y="78" textAnchor="middle" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">ACTIVE</text>
        <text x="320" y="100" textAnchor="middle" fill="#36CE8E" fontSize="18" fontWeight="700">2</text>

        <rect x="420" y="68" width="1" height="36" fill="#EAEEE6" />

        <text x="520" y="78" textAnchor="middle" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">COMPLETE</text>
        <text x="520" y="100" textAnchor="middle" fill="#1B4332" fontSize="18" fontWeight="700">3</text>

        <rect x="620" y="68" width="1" height="36" fill="#EAEEE6" />

        <text x="720" y="78" textAnchor="middle" fill="#7A9A85" fontSize="9" fontWeight="500" letterSpacing="0.5">VALUE</text>
        <text x="720" y="100" textAnchor="middle" fill="#1B4332" fontSize="18" fontWeight="700">$4,250</text>

        {/* Filter tabs */}
        <rect x="40" y="132" width="52" height="30" rx="15" fill="#1B4332" />
        <text x="66" y="151" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">All</text>
        <rect x="100" y="132" width="66" height="30" rx="15" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="133" y="151" textAnchor="middle" fill="#4A6B55" fontSize="11">Active</text>
        <rect x="174" y="132" width="80" height="30" rx="15" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <text x="214" y="151" textAnchor="middle" fill="#4A6B55" fontSize="11">Complete</text>

        {/* Contract card 1 */}
        <rect x="40" y="178" width="720" height="110" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <rect x="40" y="178" width="4" height="110" rx="2" fill="#36CE8E" />
        <circle cx="76" cy="228" r="20" fill="#36CE8E" opacity="0.08" />
        <text x="76" y="234" textAnchor="middle" fill="#1B4332" fontSize="13" fontWeight="700">M</text>
        <text x="108" y="216" fill="#1B4332" fontSize="14" fontWeight="600">Mike Johnson</text>
        <text x="108" y="236" fill="#7A9A85" fontSize="10">$500 · Car repair · Monthly</text>
        <text x="108" y="256" fill="#7A9A85" fontSize="10">Jan 15 — May 15, 2026</text>
        <rect x="500" y="212" width="160" height="6" rx="3" fill="#EAEEE6" />
        <rect x="500" y="212" width="96" height="6" rx="3" fill="#36CE8E" />
        <text x="500" y="234" fill="#7A9A85" fontSize="9">$300 of $500 · 60%</text>
        <rect x="500" y="250" width="50" height="20" rx="10" fill="#36CE8E" opacity="0.08" />
        <text x="525" y="264" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>
        <text x="680" y="264" textAnchor="end" fill="#4A6B55" fontSize="10">View →</text>

        {/* Contract card 2 */}
        <rect x="40" y="300" width="720" height="110" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <rect x="40" y="300" width="4" height="110" rx="2" fill="#83F384" />
        <circle cx="76" cy="350" r="20" fill="#83F384" opacity="0.08" />
        <text x="76" y="356" textAnchor="middle" fill="#1B4332" fontSize="13" fontWeight="700">J</text>
        <text x="108" y="338" fill="#1B4332" fontSize="14" fontWeight="600">Jake Wilson</text>
        <text x="108" y="358" fill="#7A9A85" fontSize="10">$1,000 · Rent help · Bi-weekly</text>
        <text x="108" y="378" fill="#7A9A85" fontSize="10">Dec 1, 2025 — Mar 1, 2026</text>
        <rect x="500" y="334" width="160" height="6" rx="3" fill="#EAEEE6" />
        <rect x="500" y="334" width="128" height="6" rx="3" fill="#83F384" />
        <text x="500" y="356" fill="#7A9A85" fontSize="9">$800 of $1,000 · 80%</text>
        <rect x="500" y="372" width="50" height="20" rx="10" fill="#36CE8E" opacity="0.08" />
        <text x="525" y="386" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>
        <text x="680" y="386" textAnchor="end" fill="#4A6B55" fontSize="10">View →</text>

        {/* Contract card 3 — Complete */}
        <rect x="40" y="422" width="720" height="110" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <rect x="40" y="422" width="4" height="110" rx="2" fill="#DBEEE3" />
        <circle cx="76" cy="472" r="20" fill="#EAEEE6" opacity="0.5" />
        <text x="76" y="478" textAnchor="middle" fill="#7A9A85" fontSize="13" fontWeight="700">A</text>
        <text x="108" y="460" fill="#1B4332" fontSize="14" fontWeight="600">Amy Chen</text>
        <text x="108" y="480" fill="#7A9A85" fontSize="10">$750 · Medical bill · Monthly</text>
        <text x="108" y="500" fill="#7A9A85" fontSize="10">Oct 1, 2025 — Mar 1, 2026</text>
        <rect x="500" y="456" width="160" height="6" rx="3" fill="#36CE8E" opacity="0.25" />
        <text x="500" y="478" fill="#36CE8E" fontSize="9" fontWeight="500">$750 of $750 · Complete</text>
        <rect x="500" y="494" width="66" height="20" rx="10" fill="#4A6B55" opacity="0.06" />
        <text x="533" y="508" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">Complete</text>
        <text x="680" y="508" textAnchor="end" fill="#4A6B55" fontSize="10">View →</text>
      </svg>
    ),
  },
  {
    title: "Payment Schedule",
    description: "A calendar-like view of all payments with visual status and summary stats.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 560" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="560" fill="#FAFBF8" />

        {/* Top bar */}
        <rect width="800" height="52" fill="white" />
        <rect y="51" width="800" height="1" fill="#EAEEE6" />
        <text x="36" y="34" fill="#36CE8E" fontSize="13" fontWeight="500">← Back</text>
        <text x="400" y="34" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">Payment Schedule</text>

        {/* Loan context */}
        <rect x="40" y="68" width="720" height="52" rx="12" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <circle cx="76" cy="94" r="14" fill="#36CE8E" opacity="0.1" />
        <text x="76" y="99" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">MJ</text>
        <text x="100" y="91" fill="#1B4332" fontSize="13" fontWeight="600">Mike Johnson</text>
        <text x="100" y="106" fill="#7A9A85" fontSize="10">$500.00 · 5 payments of $100</text>
        <rect x="630" y="82" width="110" height="24" rx="12" fill="#F4F5F0" />
        <text x="685" y="99" textAnchor="middle" fill="#4A6B55" fontSize="10">View Contract</text>

        {/* Progress bar — full width */}
        <rect x="40" y="136" width="720" height="36" rx="12" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <rect x="52" y="148" width="696" height="10" rx="5" fill="#EAEEE6" />
        <rect x="52" y="148" width="418" height="10" rx="5" fill="#36CE8E" />
        <text x="480" y="157" fill="white" fontSize="8" fontWeight="600">60%</text>

        {/* Payment cards — calendar grid style */}
        {/* Row 1 */}
        <rect x="40" y="188" width="345" height="110" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <circle cx="68" cy="214" r="12" fill="#36CE8E" />
        <path d="M63 214 L66 217 L73 210" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <text x="90" y="210" fill="#1B4332" fontSize="13" fontWeight="600">Payment 1</text>
        <text x="90" y="228" fill="#7A9A85" fontSize="10">January 15, 2026</text>
        <text x="350" y="214" textAnchor="end" fill="#1B4332" fontSize="16" fontWeight="700">$100</text>
        <rect x="60" y="248" width="310" height="1" fill="#F2F3EE" />
        <text x="68" y="272" fill="#7A9A85" fontSize="10">Received on Jan 15</text>
        <rect x="290" y="260" width="44" height="18" rx="9" fill="#36CE8E" opacity="0.08" />
        <text x="312" y="273" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        <rect x="415" y="188" width="345" height="110" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <circle cx="443" cy="214" r="12" fill="#36CE8E" />
        <path d="M438 214 L441 217 L448 210" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <text x="465" y="210" fill="#1B4332" fontSize="13" fontWeight="600">Payment 2</text>
        <text x="465" y="228" fill="#7A9A85" fontSize="10">February 15, 2026</text>
        <text x="725" y="214" textAnchor="end" fill="#1B4332" fontSize="16" fontWeight="700">$100</text>
        <rect x="435" y="248" width="310" height="1" fill="#F2F3EE" />
        <text x="443" y="272" fill="#7A9A85" fontSize="10">Received on Feb 15</text>
        <rect x="665" y="260" width="44" height="18" rx="9" fill="#36CE8E" opacity="0.08" />
        <text x="687" y="273" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        {/* Row 2 */}
        <rect x="40" y="312" width="345" height="110" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <circle cx="68" cy="338" r="12" fill="#36CE8E" />
        <path d="M63 338 L66 341 L73 334" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <text x="90" y="334" fill="#1B4332" fontSize="13" fontWeight="600">Payment 3</text>
        <text x="90" y="352" fill="#7A9A85" fontSize="10">March 15, 2026</text>
        <text x="350" y="338" textAnchor="end" fill="#1B4332" fontSize="16" fontWeight="700">$100</text>
        <rect x="60" y="372" width="310" height="1" fill="#F2F3EE" />
        <text x="68" y="396" fill="#7A9A85" fontSize="10">Received on Mar 15</text>
        <rect x="290" y="384" width="44" height="18" rx="9" fill="#36CE8E" opacity="0.08" />
        <text x="312" y="397" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        <rect x="415" y="312" width="345" height="110" rx="14" fill="white" stroke="#D0ED6F" strokeWidth="1.5" />
        <circle cx="443" cy="338" r="12" fill="white" stroke="#D0ED6F" strokeWidth="2" />
        <text x="443" y="342" textAnchor="middle" fill="#D0ED6F" fontSize="10" fontWeight="700">4</text>
        <text x="465" y="334" fill="#1B4332" fontSize="13" fontWeight="600">Payment 4</text>
        <text x="465" y="352" fill="#D0ED6F" fontSize="10" fontWeight="500">April 15, 2026</text>
        <text x="725" y="338" textAnchor="end" fill="#1B4332" fontSize="16" fontWeight="700">$100</text>
        <rect x="435" y="372" width="310" height="1" fill="#F2F3EE" />
        <text x="443" y="396" fill="#D0ED6F" fontSize="10" fontWeight="500">Due in 2 weeks</text>
        <rect x="665" y="384" width="44" height="18" rx="9" fill="#D0ED6F" opacity="0.1" />
        <text x="687" y="397" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">Due</text>

        {/* Row 3 — single */}
        <rect x="40" y="436" width="345" height="110" rx="14" fill="white" stroke="#EAEEE6" strokeWidth="1" />
        <circle cx="68" cy="462" r="12" fill="white" stroke="#DBEEE3" strokeWidth="2" />
        <text x="68" y="466" textAnchor="middle" fill="#DBEEE3" fontSize="10" fontWeight="700">5</text>
        <text x="90" y="458" fill="#7A9A85" fontSize="13" fontWeight="600">Payment 5</text>
        <text x="90" y="476" fill="#7A9A85" fontSize="10">May 15, 2026</text>
        <text x="350" y="462" textAnchor="end" fill="#7A9A85" fontSize="16" fontWeight="700">$100</text>
        <rect x="60" y="496" width="310" height="1" fill="#F2F3EE" />
        <text x="68" y="520" fill="#7A9A85" fontSize="10">Final payment</text>
        <rect x="274" y="508" width="60" height="18" rx="9" fill="#EAEEE6" opacity="0.3" />
        <text x="304" y="521" textAnchor="middle" fill="#7A9A85" fontSize="9" fontWeight="600">Pending</text>

        {/* Summary */}
        <rect x="415" y="436" width="345" height="110" rx="14" fill="#1B4332" />
        <text x="445" y="468" fill="white" opacity="0.5" fontSize="10" fontWeight="500" letterSpacing="0.5">SUMMARY</text>
        <text x="445" y="498" fill="white" fontSize="13" fontWeight="500">3 of 5 payments complete</text>
        <text x="445" y="520" fill="white" opacity="0.6" fontSize="11">Est. completion: May 15, 2026</text>
        <rect x="660" y="476" width="76" height="46" rx="12" fill="white" opacity="0.1" />
        <text x="698" y="500" textAnchor="middle" fill="white" fontSize="20" fontWeight="700">60%</text>
        <text x="698" y="516" textAnchor="middle" fill="white" opacity="0.5" fontSize="8">done</text>
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
