import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const previews = [
  {
    title: "Dashboard",
    description: "Your lending overview at a glance. Track active loans, net position, and recent activity.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 540" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="540" fill="#F4F5F0" />

        {/* Top hero banner — bold green gradient */}
        <rect width="800" height="200" fill="#1B4332" />
        <rect width="800" height="200" fill="url(#dashGrad)" />
        <defs>
          <linearGradient id="dashGrad" x1="0" y1="0" x2="800" y2="200">
            <stop offset="0%" stopColor="#1B4332" />
            <stop offset="100%" stopColor="#2D6A4F" />
          </linearGradient>
        </defs>

        {/* Top bar */}
        <text x="36" y="40" fill="white" fontSize="22" fontWeight="700" fontFamily="serif" fontStyle="italic">Vony</text>
        <circle cx="748" cy="30" r="16" fill="white" opacity="0.15" />
        <text x="748" y="35" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">S</text>
        <circle cx="704" cy="30" r="16" fill="white" opacity="0.08" />

        {/* Greeting */}
        <text x="36" y="82" fill="white" opacity="0.6" fontSize="13">Good morning</text>
        <text x="36" y="108" fill="white" fontSize="26" fontWeight="700">Sarah's Overview</text>

        {/* Net position card — overlapping banner */}
        <rect x="36" y="132" width="728" height="120" rx="16" fill="white" />
        <rect x="37" y="133" width="726" height="118" rx="15" fill="white" />

        <text x="64" y="166" fill="#4A6B55" fontSize="11" fontWeight="500">NET LENDING POSITION</text>
        <text x="64" y="206" fill="#1B4332" fontSize="36" fontWeight="700">$1,250.00</text>
        <text x="280" y="206" fill="#36CE8E" fontSize="13" fontWeight="600">+$100 this week</text>

        {/* Mini donut / pie visual */}
        <circle cx="660" cy="185" r="32" fill="none" stroke="#DBEEE3" strokeWidth="8" />
        <circle cx="660" cy="185" r="32" fill="none" stroke="#36CE8E" strokeWidth="8" strokeDasharray="121 80" strokeLinecap="round" transform="rotate(-90 660 185)" />
        <text x="660" y="182" textAnchor="middle" fill="#1B4332" fontSize="11" fontWeight="700">60%</text>
        <text x="660" y="195" textAnchor="middle" fill="#4A6B55" fontSize="8">repaid</text>

        {/* Quick action pills */}
        <rect x="36" y="268" width="120" height="40" rx="20" fill="#36CE8E" />
        <text x="96" y="293" textAnchor="middle" fill="#0A1A10" fontSize="12" fontWeight="600">+ New Loan</text>
        <rect x="168" y="268" width="100" height="40" rx="20" fill="white" stroke="#DBEEE3" strokeWidth="1.2" />
        <text x="218" y="293" textAnchor="middle" fill="#4A6B55" fontSize="12">Invite</text>
        <rect x="280" y="268" width="100" height="40" rx="20" fill="white" stroke="#DBEEE3" strokeWidth="1.2" />
        <text x="330" y="293" textAnchor="middle" fill="#4A6B55" fontSize="12">History</text>

        {/* Stat cards — side by side */}
        <rect x="36" y="324" width="230" height="88" rx="14" fill="white" />
        <text x="56" y="352" fill="#4A6B55" fontSize="10" fontWeight="500">LENT OUT</text>
        <text x="56" y="384" fill="#1B4332" fontSize="24" fontWeight="700">$2,450</text>
        <text x="160" y="384" fill="#36CE8E" fontSize="10" fontWeight="600">3 active</text>

        <rect x="284" y="324" width="230" height="88" rx="14" fill="white" />
        <text x="304" y="352" fill="#4A6B55" fontSize="10" fontWeight="500">COLLECTED</text>
        <text x="304" y="384" fill="#1B4332" fontSize="24" fontWeight="700">$1,800</text>
        <text x="420" y="384" fill="#4A6B55" fontSize="10">73% returned</text>

        <rect x="532" y="324" width="232" height="88" rx="14" fill="white" />
        <text x="552" y="352" fill="#4A6B55" fontSize="10" fontWeight="500">OUTSTANDING</text>
        <text x="552" y="384" fill="#1B4332" fontSize="24" fontWeight="700">$1,200</text>
        <text x="680" y="384" fill="#D0ED6F" fontSize="10" fontWeight="600">on track</text>

        {/* Recent activity list */}
        <rect x="36" y="428" width="728" height="72" rx="14" fill="white" />
        <text x="56" y="450" fill="#1B4332" fontSize="12" fontWeight="600">Recent Activity</text>

        <circle cx="68" cy="478" r="12" fill="#36CE8E" opacity="0.12" />
        <text x="68" y="482" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">M</text>
        <text x="88" y="475" fill="#1B4332" fontSize="11" fontWeight="500">Mike paid $100</text>
        <text x="88" y="490" fill="#7A9A85" fontSize="9">2h ago</text>

        <circle cx="268" cy="478" r="12" fill="#D0ED6F" opacity="0.15" />
        <text x="268" y="482" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">J</text>
        <text x="288" y="475" fill="#1B4332" fontSize="11" fontWeight="500">New loan with Jake</text>
        <text x="288" y="490" fill="#7A9A85" fontSize="9">Yesterday</text>

        <circle cx="488" cy="478" r="12" fill="#83F384" opacity="0.12" />
        <text x="488" y="482" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">A</text>
        <text x="508" y="475" fill="#1B4332" fontSize="11" fontWeight="500">Amy fully repaid!</text>
        <text x="508" y="490" fill="#36CE8E" fontSize="9" fontWeight="500">Complete</text>

        {/* Bottom tab bar */}
        <rect y="510" width="800" height="30" fill="white" />
        <rect y="509" width="800" height="1" fill="#E8F0EB" />
        <rect x="105" y="515" width="30" height="3" rx="1.5" fill="#36CE8E" />
        <rect x="295" y="515" width="30" height="3" rx="1.5" fill="#DBEEE3" />
        <rect x="385" y="515" width="30" height="3" rx="1.5" fill="#DBEEE3" />
        <rect x="475" y="515" width="30" height="3" rx="1.5" fill="#DBEEE3" />
        <rect x="665" y="515" width="30" height="3" rx="1.5" fill="#DBEEE3" />
      </svg>
    ),
  },
  {
    title: "Create a Loan",
    description: "Set up a new loan with a friend in a clean, guided flow.",
    color: "#83F384",
    svg: (
      <svg viewBox="0 0 800 540" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="540" fill="#F4F5F0" />

        {/* Top bar */}
        <rect width="800" height="56" fill="white" />
        <rect y="55" width="800" height="1" fill="#E8F0EB" />
        <text x="400" y="36" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">New Loan</text>
        <text x="36" y="36" fill="#36CE8E" fontSize="13" fontWeight="500">← Back</text>
        <text x="764" y="36" textAnchor="end" fill="#7A9A85" fontSize="12">Cancel</text>

        {/* Step indicator */}
        <rect x="36" y="72" width="728" height="4" rx="2" fill="#DBEEE3" />
        <rect x="36" y="72" width="243" height="4" rx="2" fill="#36CE8E" />
        <text x="36" y="92" fill="#4A6B55" fontSize="10" fontWeight="500">STEP 1 OF 3</text>
        <text x="36" y="108" fill="#1B4332" fontSize="20" fontWeight="700">Loan Details</text>

        {/* Form card */}
        <rect x="36" y="124" width="728" height="370" rx="16" fill="white" />

        {/* Borrower field */}
        <text x="64" y="158" fill="#4A6B55" fontSize="11" fontWeight="600">WHO ARE YOU LENDING TO?</text>
        <rect x="64" y="168" width="672" height="56" rx="12" fill="#F4F5F0" />
        <circle cx="100" cy="196" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="100" y="201" textAnchor="middle" fill="#36CE8E" fontSize="11" fontWeight="600">M</text>
        <text x="126" y="193" fill="#1B4332" fontSize="14" fontWeight="500">Mike Johnson</text>
        <text x="126" y="208" fill="#7A9A85" fontSize="10">mike@email.com</text>
        <text x="700" y="200" textAnchor="end" fill="#36CE8E" fontSize="11" fontWeight="500">Change</text>

        {/* Amount field */}
        <text x="64" y="250" fill="#4A6B55" fontSize="11" fontWeight="600">AMOUNT</text>
        <rect x="64" y="260" width="672" height="64" rx="12" fill="#F4F5F0" />
        <text x="88" y="300" fill="#7A9A85" fontSize="22">$</text>
        <text x="110" y="302" fill="#1B4332" fontSize="32" fontWeight="700">500</text>
        <text x="182" y="302" fill="#1B4332" fontSize="32" fontWeight="700" opacity="0.2">.00</text>

        {/* Purpose field */}
        <text x="64" y="350" fill="#4A6B55" fontSize="11" fontWeight="600">WHAT'S IT FOR?</text>
        <rect x="64" y="360" width="672" height="48" rx="12" fill="#F4F5F0" />
        <text x="88" y="390" fill="#7A9A85" fontSize="13">Car repair</text>

        {/* Options row */}
        <rect x="64" y="424" width="320" height="48" rx="12" fill="#F4F5F0" />
        <text x="84" y="453" fill="#4A6B55" fontSize="11">Interest-free</text>
        <rect x="218" y="439" width="36" height="20" rx="10" fill="#36CE8E" />
        <circle cx="244" cy="449" r="7" fill="white" />

        <rect x="400" y="424" width="336" height="48" rx="12" fill="#F4F5F0" />
        <text x="420" y="453" fill="#4A6B55" fontSize="11">Send reminders</text>
        <rect x="570" y="439" width="36" height="20" rx="10" fill="#36CE8E" />
        <circle cx="596" cy="449" r="7" fill="white" />

        {/* CTA */}
        <rect x="36" y="506" width="728" height="22" rx="0" fill="transparent" />
        <rect x="200" y="502" width="400" height="30" rx="15" fill="#36CE8E" />
        <text x="400" y="522" textAnchor="middle" fill="#0A1A10" fontSize="13" fontWeight="600">Continue to Terms →</text>
      </svg>
    ),
  },
  {
    title: "Loan Overview",
    description: "See exactly where a loan stands — progress, payments, and key details at a glance.",
    color: "#6EE8B5",
    svg: (
      <svg viewBox="0 0 800 540" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="540" fill="#F4F5F0" />

        {/* Top hero */}
        <rect width="800" height="170" fill="url(#loanGrad)" />
        <defs>
          <linearGradient id="loanGrad" x1="0" y1="0" x2="800" y2="170">
            <stop offset="0%" stopColor="#1B4332" />
            <stop offset="100%" stopColor="#2D6A4F" />
          </linearGradient>
        </defs>

        {/* Top bar */}
        <text x="36" y="36" fill="white" opacity="0.6" fontSize="13" fontWeight="500">← Loans</text>
        <text x="400" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">Loan Details</text>

        {/* Person info */}
        <circle cx="64" cy="80" r="22" fill="white" opacity="0.15" />
        <text x="64" y="86" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">M</text>
        <text x="96" y="74" fill="white" fontSize="18" fontWeight="700">Mike Johnson</text>
        <text x="96" y="94" fill="white" opacity="0.6" fontSize="11">Car repair · Started Jan 15</text>
        <rect x="260" y="66" width="52" height="22" rx="11" fill="white" opacity="0.15" />
        <text x="286" y="81" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Active</text>

        {/* Progress card — overlapping */}
        <rect x="36" y="112" width="728" height="108" rx="16" fill="white" />
        <text x="64" y="144" fill="#4A6B55" fontSize="10" fontWeight="500">REPAYMENT PROGRESS</text>
        <text x="64" y="178" fill="#1B4332" fontSize="30" fontWeight="700">$300</text>
        <text x="175" y="178" fill="#7A9A85" fontSize="14">of $500</text>
        <rect x="64" y="192" width="672" height="8" rx="4" fill="#DBEEE3" />
        <rect x="64" y="192" width="403" height="8" rx="4" fill="#36CE8E" />
        <text x="736" y="144" textAnchor="end" fill="#1B4332" fontSize="28" fontWeight="700">60%</text>

        {/* Detail cards */}
        <rect x="36" y="236" width="236" height="80" rx="14" fill="white" />
        <text x="56" y="262" fill="#4A6B55" fontSize="10" fontWeight="500">MONTHLY</text>
        <text x="56" y="294" fill="#1B4332" fontSize="22" fontWeight="700">$100</text>

        <rect x="284" y="236" width="236" height="80" rx="14" fill="white" />
        <text x="304" y="262" fill="#4A6B55" fontSize="10" fontWeight="500">INTEREST</text>
        <text x="304" y="294" fill="#36CE8E" fontSize="22" fontWeight="700">0%</text>

        <rect x="532" y="236" width="232" height="80" rx="14" fill="white" />
        <text x="552" y="262" fill="#4A6B55" fontSize="10" fontWeight="500">NEXT DUE</text>
        <text x="552" y="294" fill="#1B4332" fontSize="22" fontWeight="700">Apr 15</text>

        {/* Payment timeline */}
        <rect x="36" y="332" width="728" height="196" rx="16" fill="white" />
        <text x="64" y="362" fill="#1B4332" fontSize="13" fontWeight="700">Payment History</text>
        <text x="736" y="362" textAnchor="end" fill="#36CE8E" fontSize="11" fontWeight="500">See all</text>

        {/* Timeline entries */}
        <circle cx="80" cy="400" r="10" fill="#36CE8E" />
        <path d="M76 400 L78 402 L84 396" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="79" y="410" width="2" height="20" fill="#36CE8E" />
        <text x="100" y="396" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <text x="100" y="412" fill="#7A9A85" fontSize="10">January 15 · Paid on time</text>

        <circle cx="80" cy="442" r="10" fill="#36CE8E" />
        <path d="M76 442 L78 444 L84 438" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="79" y="452" width="2" height="20" fill="#36CE8E" />
        <text x="100" y="438" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <text x="100" y="454" fill="#7A9A85" fontSize="10">February 15 · Paid on time</text>

        <circle cx="80" cy="484" r="10" fill="#36CE8E" />
        <path d="M76 484 L78 486 L84 480" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <text x="100" y="480" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <text x="100" y="496" fill="#7A9A85" fontSize="10">March 15 · Paid on time</text>

        {/* Status badges on right */}
        <rect x="660" y="390" width="56" height="22" rx="11" fill="#36CE8E" opacity="0.08" />
        <text x="688" y="405" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>
        <rect x="660" y="432" width="56" height="22" rx="11" fill="#36CE8E" opacity="0.08" />
        <text x="688" y="447" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>
        <rect x="660" y="474" width="56" height="22" rx="11" fill="#36CE8E" opacity="0.08" />
        <text x="688" y="489" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>
      </svg>
    ),
  },
  {
    title: "Contracts",
    description: "Your loan agreements organised with clear status, progress, and quick actions.",
    color: "#D0ED6F",
    svg: (
      <svg viewBox="0 0 800 540" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="540" fill="#F4F5F0" />

        {/* Top bar */}
        <rect width="800" height="56" fill="white" />
        <rect y="55" width="800" height="1" fill="#E8F0EB" />
        <text x="400" y="36" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">Contracts</text>
        <circle cx="748" cy="28" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="748" y="33" textAnchor="middle" fill="#1B4332" fontSize="11" fontWeight="600">S</text>

        {/* Search bar */}
        <rect x="36" y="72" width="728" height="44" rx="22" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="66" y="98" fill="#7A9A85" fontSize="12">Search contracts...</text>

        {/* Filter tabs */}
        <rect x="36" y="130" width="52" height="32" rx="16" fill="#1B4332" />
        <text x="62" y="150" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">All</text>
        <rect x="96" y="130" width="66" height="32" rx="16" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="129" y="150" textAnchor="middle" fill="#4A6B55" fontSize="11">Active</text>
        <rect x="170" y="130" width="80" height="32" rx="16" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="210" y="150" textAnchor="middle" fill="#4A6B55" fontSize="11">Complete</text>

        {/* Contract card 1 */}
        <rect x="36" y="178" width="728" height="108" rx="16" fill="white" />
        <circle cx="72" cy="224" r="22" fill="#36CE8E" opacity="0.1" />
        <text x="72" y="230" textAnchor="middle" fill="#1B4332" fontSize="14" fontWeight="700">MJ</text>
        <text x="106" y="210" fill="#1B4332" fontSize="15" fontWeight="600">Mike Johnson</text>
        <rect x="222" y="200" width="52" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="248" y="214" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>
        <text x="106" y="232" fill="#7A9A85" fontSize="11">$500 · Monthly · Car repair</text>
        <text x="106" y="252" fill="#7A9A85" fontSize="10">Jan 15, 2026 — May 15, 2026</text>

        <rect x="540" y="218" width="140" height="6" rx="3" fill="#DBEEE3" />
        <rect x="540" y="218" width="84" height="6" rx="3" fill="#36CE8E" />
        <text x="540" y="242" fill="#7A9A85" fontSize="9">60% repaid</text>
        <rect x="660" y="260" width="80" height="16" rx="8" fill="#F4F5F0" />
        <text x="700" y="272" textAnchor="middle" fill="#4A6B55" fontSize="9">View →</text>

        {/* Contract card 2 */}
        <rect x="36" y="298" width="728" height="108" rx="16" fill="white" />
        <circle cx="72" cy="344" r="22" fill="#83F384" opacity="0.1" />
        <text x="72" y="350" textAnchor="middle" fill="#1B4332" fontSize="14" fontWeight="700">JW</text>
        <text x="106" y="330" fill="#1B4332" fontSize="15" fontWeight="600">Jake Wilson</text>
        <rect x="210" y="320" width="52" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="236" y="334" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>
        <text x="106" y="352" fill="#7A9A85" fontSize="11">$1,000 · Bi-weekly · Rent help</text>
        <text x="106" y="372" fill="#7A9A85" fontSize="10">Dec 1, 2025 — Mar 1, 2026</text>

        <rect x="540" y="338" width="140" height="6" rx="3" fill="#DBEEE3" />
        <rect x="540" y="338" width="112" height="6" rx="3" fill="#83F384" />
        <text x="540" y="362" fill="#7A9A85" fontSize="9">80% repaid</text>
        <rect x="660" y="380" width="80" height="16" rx="8" fill="#F4F5F0" />
        <text x="700" y="392" textAnchor="middle" fill="#4A6B55" fontSize="9">View →</text>

        {/* Contract card 3 — Complete */}
        <rect x="36" y="418" width="728" height="108" rx="16" fill="white" />
        <circle cx="72" cy="464" r="22" fill="#DBEEE3" opacity="0.3" />
        <text x="72" y="470" textAnchor="middle" fill="#7A9A85" fontSize="14" fontWeight="700">AC</text>
        <text x="106" y="450" fill="#1B4332" fontSize="15" fontWeight="600">Amy Chen</text>
        <rect x="186" y="440" width="66" height="20" rx="10" fill="#4A6B55" opacity="0.06" />
        <text x="219" y="454" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">Complete</text>
        <text x="106" y="472" fill="#7A9A85" fontSize="11">$750 · Monthly · Medical bill</text>
        <text x="106" y="492" fill="#7A9A85" fontSize="10">Oct 1, 2025 — Mar 1, 2026</text>

        <rect x="540" y="458" width="140" height="6" rx="3" fill="#36CE8E" opacity="0.3" />
        <text x="540" y="482" fill="#36CE8E" fontSize="9" fontWeight="500">All settled!</text>
        <rect x="660" y="500" width="80" height="16" rx="8" fill="#F4F5F0" />
        <text x="700" y="512" textAnchor="middle" fill="#4A6B55" fontSize="9">View →</text>
      </svg>
    ),
  },
  {
    title: "Payment Schedule",
    description: "Track upcoming and past payments with a clear, visual timeline.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 540" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="540" fill="#F4F5F0" />

        {/* Top hero */}
        <rect width="800" height="160" fill="url(#payGrad)" />
        <defs>
          <linearGradient id="payGrad" x1="0" y1="0" x2="800" y2="160">
            <stop offset="0%" stopColor="#1B4332" />
            <stop offset="100%" stopColor="#2D6A4F" />
          </linearGradient>
        </defs>

        {/* Top bar */}
        <text x="36" y="36" fill="white" opacity="0.6" fontSize="13" fontWeight="500">← Back</text>
        <text x="400" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">Payments</text>

        {/* Header */}
        <text x="36" y="76" fill="white" fontSize="20" fontWeight="700">Payment Schedule</text>
        <text x="36" y="98" fill="white" opacity="0.6" fontSize="12">$500 loan with Mike · 5 monthly payments</text>

        {/* Summary card — overlapping */}
        <rect x="36" y="116" width="728" height="80" rx="16" fill="white" />

        <text x="64" y="142" fill="#4A6B55" fontSize="10" fontWeight="500">PAID</text>
        <text x="64" y="168" fill="#36CE8E" fontSize="22" fontWeight="700">$300</text>

        <rect x="210" y="130" width="1" height="50" fill="#DBEEE3" />

        <text x="234" y="142" fill="#4A6B55" fontSize="10" fontWeight="500">REMAINING</text>
        <text x="234" y="168" fill="#1B4332" fontSize="22" fontWeight="700">$200</text>

        <rect x="400" y="130" width="1" height="50" fill="#DBEEE3" />

        <text x="424" y="142" fill="#4A6B55" fontSize="10" fontWeight="500">NEXT DUE</text>
        <text x="424" y="168" fill="#1B4332" fontSize="22" fontWeight="700">Apr 15</text>

        <rect x="580" y="130" width="1" height="50" fill="#DBEEE3" />

        <text x="604" y="142" fill="#4A6B55" fontSize="10" fontWeight="500">COMPLETION</text>
        <text x="604" y="168" fill="#7A9A85" fontSize="22" fontWeight="700">May 15</text>

        {/* Timeline card */}
        <rect x="36" y="212" width="728" height="316" rx="16" fill="white" />
        <text x="64" y="244" fill="#1B4332" fontSize="13" fontWeight="700">Timeline</text>

        {/* Payment 1 */}
        <circle cx="80" cy="282" r="12" fill="#36CE8E" />
        <path d="M75 282 L78 285 L85 278" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <text x="106" y="278" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <text x="200" y="278" fill="#7A9A85" fontSize="11">January 15</text>
        <rect x="660" y="272" width="56" height="22" rx="11" fill="#36CE8E" opacity="0.08" />
        <text x="688" y="287" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>
        <text x="106" y="296" fill="#7A9A85" fontSize="10">On time</text>
        <rect x="79" y="294" width="2" height="24" fill="#36CE8E" />

        {/* Payment 2 */}
        <circle cx="80" cy="330" r="12" fill="#36CE8E" />
        <path d="M75 330 L78 333 L85 326" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <text x="106" y="326" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <text x="200" y="326" fill="#7A9A85" fontSize="11">February 15</text>
        <rect x="660" y="320" width="56" height="22" rx="11" fill="#36CE8E" opacity="0.08" />
        <text x="688" y="335" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>
        <text x="106" y="344" fill="#7A9A85" fontSize="10">On time</text>
        <rect x="79" y="342" width="2" height="24" fill="#36CE8E" />

        {/* Payment 3 */}
        <circle cx="80" cy="378" r="12" fill="#36CE8E" />
        <path d="M75 378 L78 381 L85 374" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <text x="106" y="374" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <text x="200" y="374" fill="#7A9A85" fontSize="11">March 15</text>
        <rect x="660" y="368" width="56" height="22" rx="11" fill="#36CE8E" opacity="0.08" />
        <text x="688" y="383" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>
        <text x="106" y="392" fill="#7A9A85" fontSize="10">On time</text>
        <rect x="79" y="390" width="2" height="24" fill="#DBEEE3" />

        {/* Payment 4 — upcoming */}
        <circle cx="80" cy="426" r="12" fill="white" stroke="#D0ED6F" strokeWidth="2.5" />
        <text x="80" y="430" textAnchor="middle" fill="#D0ED6F" fontSize="10" fontWeight="700">4</text>
        <text x="106" y="422" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <text x="200" y="422" fill="#7A9A85" fontSize="11">April 15</text>
        <rect x="660" y="416" width="56" height="22" rx="11" fill="#D0ED6F" opacity="0.1" />
        <text x="688" y="431" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">Due</text>
        <text x="106" y="440" fill="#D0ED6F" fontSize="10" fontWeight="500">Coming up next</text>
        <rect x="79" y="438" width="2" height="24" fill="#DBEEE3" />

        {/* Payment 5 — future */}
        <circle cx="80" cy="474" r="12" fill="white" stroke="#DBEEE3" strokeWidth="2" />
        <text x="80" y="478" textAnchor="middle" fill="#DBEEE3" fontSize="10" fontWeight="700">5</text>
        <text x="106" y="470" fill="#7A9A85" fontSize="12">$100.00</text>
        <text x="200" y="470" fill="#7A9A85" fontSize="11">May 15</text>
        <rect x="652" y="464" width="70" height="22" rx="11" fill="#DBEEE3" opacity="0.2" />
        <text x="687" y="479" textAnchor="middle" fill="#7A9A85" fontSize="9" fontWeight="600">Pending</text>
        <text x="106" y="488" fill="#7A9A85" fontSize="10">Final payment</text>

        {/* Progress summary */}
        <rect x="64" y="504" width="672" height="8" rx="4" fill="#DBEEE3" />
        <rect x="64" y="504" width="403" height="8" rx="4" fill="#36CE8E" />
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
