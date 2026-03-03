import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const previews = [
  {
    title: "Dashboard",
    description: "Your lending overview at a glance. See active loans, recent activity, and quick actions.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav */}
        <rect x="0" y="0" width="800" height="48" fill="#1B4332" />
        <text x="30" y="30" fill="white" fontSize="16" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>
        <rect x="130" y="14" width="65" height="22" rx="4" fill="#36CE8E" opacity="0.25" />
        <text x="162" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">Dashboard</text>
        <rect x="205" y="14" width="55" height="22" rx="4" fill="transparent" />
        <text x="232" y="29" textAnchor="middle" fill="white" fontSize="10" opacity="0.5">Loans</text>
        <rect x="270" y="14" width="65" height="22" rx="4" fill="transparent" />
        <text x="302" y="29" textAnchor="middle" fill="white" fontSize="10" opacity="0.5">Contracts</text>
        <rect x="345" y="14" width="65" height="22" rx="4" fill="transparent" />
        <text x="377" y="29" textAnchor="middle" fill="white" fontSize="10" opacity="0.5">Payments</text>
        <circle cx="740" cy="24" r="14" fill="white" opacity="0.1" />
        <text x="740" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">S</text>
        <rect x="762" y="14" width="18" height="18" rx="4" fill="white" opacity="0.08" />

        {/* Content area */}
        <rect x="0" y="48" width="800" height="452" fill="#F7FDF9" />

        {/* Welcome + quick actions row */}
        <text x="40" y="88" fill="#1B4332" fontSize="18" fontWeight="700">Welcome back, Sarah</text>
        <rect x="620" y="68" width="80" height="30" rx="6" fill="#36CE8E" />
        <text x="660" y="88" textAnchor="middle" fill="#0A1A10" fontSize="10" fontWeight="600">+ New Loan</text>
        <rect x="710" y="68" width="60" height="30" rx="6" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="740" y="88" textAnchor="middle" fill="#4A6B55" fontSize="10">Export</text>

        {/* Stat cards row */}
        <rect x="40" y="108" width="230" height="100" rx="14" fill="white" />
        <circle cx="70" cy="140" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="70" y="144" textAnchor="middle" fill="#36CE8E" fontSize="14">$</text>
        <text x="100" y="138" fill="#4A6B55" fontSize="10">Total Lent</text>
        <text x="100" y="162" fill="#1B4332" fontSize="22" fontWeight="700">$2,450.00</text>
        <text x="200" y="178" fill="#36CE8E" fontSize="9" fontWeight="500">↑ 12% this month</text>

        <rect x="285" y="108" width="230" height="100" rx="14" fill="white" />
        <circle cx="315" cy="140" r="16" fill="#83F384" opacity="0.12" />
        <text x="315" y="145" textAnchor="middle" fill="#1B4332" fontSize="12" fontWeight="700">3</text>
        <text x="345" y="138" fill="#4A6B55" fontSize="10">Active Loans</text>
        <text x="345" y="162" fill="#1B4332" fontSize="22" fontWeight="700">$1,200</text>
        <text x="345" y="178" fill="#4A6B55" fontSize="9">outstanding balance</text>

        <rect x="530" y="108" width="230" height="100" rx="14" fill="white" />
        <circle cx="560" cy="140" r="16" fill="#D0ED6F" opacity="0.15" />
        <path d="M555 140 L558 143 L565 136" stroke="#4A6B55" strokeWidth="1.5" strokeLinecap="round" />
        <text x="590" y="138" fill="#4A6B55" fontSize="10">Repaid</text>
        <text x="590" y="162" fill="#1B4332" fontSize="22" fontWeight="700">$1,800.00</text>
        <text x="590" y="178" fill="#36CE8E" fontSize="9" fontWeight="500">73% collected</text>

        {/* Two-column: chart + activity */}
        {/* Mini chart */}
        <rect x="40" y="225" width="370" height="245" rx="14" fill="white" />
        <text x="65" y="255" fill="#1B4332" fontSize="13" fontWeight="600">Monthly Overview</text>
        <text x="65" y="272" fill="#4A6B55" fontSize="9">Repayments received over time</text>
        {/* Bar chart */}
        <rect x="80" y="380" width="36" height="60" rx="4" fill="#DBEEE3" />
        <rect x="80" y="400" width="36" height="40" rx="4" fill="#36CE8E" opacity="0.5" />
        <text x="98" y="452" textAnchor="middle" fill="#4A6B55" fontSize="8">Oct</text>
        <rect x="130" y="380" width="36" height="60" rx="4" fill="#DBEEE3" />
        <rect x="130" y="385" width="36" height="55" rx="4" fill="#36CE8E" opacity="0.5" />
        <text x="148" y="452" textAnchor="middle" fill="#4A6B55" fontSize="8">Nov</text>
        <rect x="180" y="380" width="36" height="60" rx="4" fill="#DBEEE3" />
        <rect x="180" y="370" width="36" height="70" rx="4" fill="#36CE8E" opacity="0.6" />
        <text x="198" y="452" textAnchor="middle" fill="#4A6B55" fontSize="8">Dec</text>
        <rect x="230" y="380" width="36" height="60" rx="4" fill="#DBEEE3" />
        <rect x="230" y="355" width="36" height="85" rx="4" fill="#36CE8E" opacity="0.6" />
        <text x="248" y="452" textAnchor="middle" fill="#4A6B55" fontSize="8">Jan</text>
        <rect x="280" y="380" width="36" height="60" rx="4" fill="#DBEEE3" />
        <rect x="280" y="340" width="36" height="100" rx="4" fill="#36CE8E" opacity="0.7" />
        <text x="298" y="452" textAnchor="middle" fill="#4A6B55" fontSize="8">Feb</text>
        <rect x="330" y="380" width="36" height="60" rx="4" fill="#DBEEE3" />
        <rect x="330" y="320" width="36" height="120" rx="4" fill="#83F384" opacity="0.7" />
        <text x="348" y="452" textAnchor="middle" fill="#4A6B55" fontSize="8">Mar</text>

        {/* Activity feed */}
        <rect x="425" y="225" width="335" height="245" rx="14" fill="white" />
        <text x="450" y="255" fill="#1B4332" fontSize="13" fontWeight="600">Recent Activity</text>
        <circle cx="460" cy="288" r="12" fill="#36CE8E" opacity="0.1" />
        <text x="460" y="292" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">M</text>
        <text x="482" y="285" fill="#1B4332" fontSize="11" fontWeight="500">Mike paid $100.00</text>
        <text x="482" y="298" fill="#4A6B55" fontSize="9">2 hours ago</text>
        <rect x="680" y="278" width="55" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="707" y="292" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Received</text>

        <rect x="450" y="312" width="285" height="1" fill="#F0FFF5" />

        <circle cx="460" cy="338" r="12" fill="#D0ED6F" opacity="0.15" />
        <text x="460" y="342" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">J</text>
        <text x="482" y="335" fill="#1B4332" fontSize="11" fontWeight="500">New loan with Jake</text>
        <text x="482" y="348" fill="#4A6B55" fontSize="9">Yesterday</text>
        <rect x="680" y="328" width="55" height="20" rx="10" fill="#D0ED6F" opacity="0.15" />
        <text x="707" y="342" textAnchor="middle" fill="#4A6B55" fontSize="8" fontWeight="600">New</text>

        <rect x="450" y="362" width="285" height="1" fill="#F0FFF5" />

        <circle cx="460" cy="388" r="12" fill="#6EE8B5" opacity="0.1" />
        <text x="460" y="392" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">S</text>
        <text x="482" y="385" fill="#1B4332" fontSize="11" fontWeight="500">Sarah fully repaid</text>
        <text x="482" y="398" fill="#4A6B55" fontSize="9">3 days ago</text>
        <rect x="680" y="378" width="55" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="707" y="392" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Complete</text>

        <rect x="450" y="412" width="285" height="1" fill="#F0FFF5" />

        <circle cx="460" cy="438" r="12" fill="#83F384" opacity="0.1" />
        <text x="460" y="442" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">A</text>
        <text x="482" y="435" fill="#1B4332" fontSize="11" fontWeight="500">Amy sent reminder</text>
        <text x="482" y="448" fill="#4A6B55" fontSize="9">Last week</text>
        <rect x="680" y="428" width="55" height="20" rx="10" fill="#DBEEE3" opacity="0.5" />
        <text x="707" y="442" textAnchor="middle" fill="#4A6B55" fontSize="8" fontWeight="600">Reminder</text>
      </svg>
    ),
  },
  {
    title: "Create a Loan",
    description: "Set up a new loan with custom terms, repayment schedule, and optional interest.",
    color: "#83F384",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav */}
        <rect x="0" y="0" width="800" height="48" fill="#1B4332" />
        <text x="30" y="30" fill="white" fontSize="16" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>
        <rect x="130" y="14" width="65" height="22" rx="4" fill="transparent" />
        <text x="162" y="29" textAnchor="middle" fill="white" fontSize="10" opacity="0.5">Dashboard</text>
        <rect x="205" y="14" width="55" height="22" rx="4" fill="#36CE8E" opacity="0.25" />
        <text x="232" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">Loans</text>
        <circle cx="740" cy="24" r="14" fill="white" opacity="0.1" />
        <text x="740" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">S</text>

        {/* Content */}
        <rect x="0" y="48" width="800" height="452" fill="#F7FDF9" />

        {/* Breadcrumb */}
        <text x="40" y="80" fill="#4A6B55" fontSize="10">Loans › <tspan fontWeight="600" fill="#1B4332">Create New</tspan></text>

        {/* Step indicator */}
        <rect x="40" y="94" width="720" height="36" rx="18" fill="white" />
        <circle cx="140" cy="112" r="10" fill="#36CE8E" />
        <text x="140" y="116" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">1</text>
        <text x="165" y="116" fill="#1B4332" fontSize="10" fontWeight="600">Details</text>
        <rect x="220" y="111" width="80" height="2" rx="1" fill="#36CE8E" />
        <circle cx="340" cy="112" r="10" fill="#36CE8E" opacity="0.2" />
        <text x="340" y="116" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="700">2</text>
        <text x="365" y="116" fill="#4A6B55" fontSize="10">Terms</text>
        <rect x="410" y="111" width="80" height="2" rx="1" fill="#DBEEE3" />
        <circle cx="530" cy="112" r="10" fill="#DBEEE3" />
        <text x="530" y="116" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="700">3</text>
        <text x="555" y="116" fill="#4A6B55" fontSize="10">Review</text>
        <rect x="600" y="111" width="80" height="2" rx="1" fill="#DBEEE3" />
        <circle cx="720" cy="112" r="10" fill="#DBEEE3" />
        <text x="720" y="116" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="700">4</text>
        <text x="742" y="116" fill="#4A6B55" fontSize="10">Send</text>

        {/* Form card */}
        <rect x="40" y="148" width="480" height="330" rx="14" fill="white" />
        <text x="65" y="180" fill="#1B4332" fontSize="15" fontWeight="700">Loan Details</text>
        <text x="65" y="196" fill="#4A6B55" fontSize="10">Who are you lending to?</text>

        {/* Borrower */}
        <text x="65" y="225" fill="#1B4332" fontSize="10" fontWeight="600">Borrower</text>
        <rect x="65" y="232" width="430" height="38" rx="8" fill="#F7FDF9" stroke="#DBEEE3" strokeWidth="1" />
        <circle cx="90" cy="251" r="10" fill="#36CE8E" opacity="0.12" />
        <text x="90" y="255" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">M</text>
        <text x="108" y="255" fill="#1B4332" fontSize="11">Mike Johnson</text>
        <text x="400" y="255" fill="#4A6B55" fontSize="9">mike@email.com</text>

        {/* Amount */}
        <text x="65" y="290" fill="#1B4332" fontSize="10" fontWeight="600">Loan Amount</text>
        <rect x="65" y="297" width="430" height="38" rx="8" fill="#F7FDF9" stroke="#DBEEE3" strokeWidth="1" />
        <text x="82" y="320" fill="#4A6B55" fontSize="12">$</text>
        <text x="98" y="320" fill="#1B4332" fontSize="14" fontWeight="600">500.00</text>

        {/* Purpose */}
        <text x="65" y="355" fill="#1B4332" fontSize="10" fontWeight="600">Purpose (optional)</text>
        <rect x="65" y="362" width="430" height="38" rx="8" fill="#F7FDF9" stroke="#DBEEE3" strokeWidth="1" />
        <text x="82" y="385" fill="#4A6B55" fontSize="11">Help with car repair</text>

        {/* Buttons */}
        <rect x="65" y="420" width="200" height="38" rx="8" fill="#1B4332" />
        <text x="165" y="443" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Continue to Terms →</text>
        <rect x="280" y="420" width="100" height="38" rx="8" fill="transparent" stroke="#DBEEE3" strokeWidth="1" />
        <text x="330" y="443" textAnchor="middle" fill="#4A6B55" fontSize="12">Cancel</text>

        {/* Right summary panel */}
        <rect x="540" y="148" width="220" height="180" rx="14" fill="white" />
        <text x="565" y="178" fill="#1B4332" fontSize="12" fontWeight="600">Loan Summary</text>
        <rect x="565" y="188" width="170" height="1" fill="#F0FFF5" />
        <text x="565" y="212" fill="#4A6B55" fontSize="10">Borrower</text>
        <text x="735" y="212" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Mike Johnson</text>
        <text x="565" y="234" fill="#4A6B55" fontSize="10">Amount</text>
        <text x="735" y="234" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">$500.00</text>
        <text x="565" y="256" fill="#4A6B55" fontSize="10">Purpose</text>
        <text x="735" y="256" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Car repair</text>
        <text x="565" y="278" fill="#4A6B55" fontSize="10">Schedule</text>
        <text x="735" y="278" textAnchor="end" fill="#4A6B55" fontSize="10">Not set yet</text>
        <text x="565" y="300" fill="#4A6B55" fontSize="10">Interest</text>
        <text x="735" y="300" textAnchor="end" fill="#4A6B55" fontSize="10">Not set yet</text>

        {/* Tips card */}
        <rect x="540" y="345" width="220" height="100" rx="14" fill="#36CE8E" opacity="0.08" />
        <text x="565" y="375" fill="#1B4332" fontSize="11" fontWeight="600">💡 Tip</text>
        <text x="565" y="395" fill="#4A6B55" fontSize="9">Adding a purpose helps both</text>
        <text x="565" y="408" fill="#4A6B55" fontSize="9">parties remember the context</text>
        <text x="565" y="421" fill="#4A6B55" fontSize="9">of the loan agreement.</text>
      </svg>
    ),
  },
  {
    title: "Loan Overview",
    description: "Track every detail of an active loan — payments made, upcoming dues, and the full agreement.",
    color: "#6EE8B5",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav */}
        <rect x="0" y="0" width="800" height="48" fill="#1B4332" />
        <text x="30" y="30" fill="white" fontSize="16" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>
        <rect x="205" y="14" width="55" height="22" rx="4" fill="#36CE8E" opacity="0.25" />
        <text x="232" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">Loans</text>
        <circle cx="740" cy="24" r="14" fill="white" opacity="0.1" />
        <text x="740" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">S</text>

        {/* Content */}
        <rect x="0" y="48" width="800" height="452" fill="#F7FDF9" />

        {/* Breadcrumb */}
        <text x="40" y="80" fill="#4A6B55" fontSize="10">Loans › <tspan fontWeight="600" fill="#1B4332">Mike Johnson</tspan></text>

        {/* Header row */}
        <circle cx="60" cy="115" r="20" fill="#36CE8E" opacity="0.12" />
        <text x="60" y="120" textAnchor="middle" fill="#36CE8E" fontSize="14" fontWeight="700">M</text>
        <text x="90" y="108" fill="#1B4332" fontSize="18" fontWeight="700">Loan with Mike</text>
        <rect x="250" y="98" width="55" height="22" rx="11" fill="#36CE8E" opacity="0.12" />
        <text x="277" y="113" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>
        <text x="90" y="126" fill="#4A6B55" fontSize="10">Created Jan 15, 2026 · Car repair</text>
        <rect x="660" y="98" width="100" height="28" rx="6" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="710" y="116" textAnchor="middle" fill="#4A6B55" fontSize="10">Send Reminder</text>

        {/* Big progress card */}
        <rect x="40" y="145" width="720" height="80" rx="14" fill="white" />
        <text x="65" y="172" fill="#1B4332" fontSize="12" fontWeight="600">Repayment Progress</text>
        <text x="720" y="172" textAnchor="end" fill="#1B4332" fontSize="12" fontWeight="700">$300 / $500</text>
        <rect x="65" y="185" width="670" height="10" rx="5" fill="#DBEEE3" />
        <rect x="65" y="185" width="402" height="10" rx="5" fill="#36CE8E" />
        <text x="65" y="210" fill="#4A6B55" fontSize="9">3 of 5 payments · 60% complete</text>
        <text x="735" y="210" textAnchor="end" fill="#36CE8E" fontSize="9" fontWeight="600">$200 remaining</text>

        {/* Three info cards */}
        <rect x="40" y="240" width="230" height="80" rx="12" fill="white" />
        <text x="65" y="268" fill="#4A6B55" fontSize="10">Monthly Payment</text>
        <text x="65" y="296" fill="#1B4332" fontSize="20" fontWeight="700">$100.00</text>

        <rect x="285" y="240" width="230" height="80" rx="12" fill="white" />
        <text x="310" y="268" fill="#4A6B55" fontSize="10">Interest Rate</text>
        <text x="310" y="296" fill="#1B4332" fontSize="20" fontWeight="700">0%</text>

        <rect x="530" y="240" width="230" height="80" rx="12" fill="white" />
        <text x="555" y="268" fill="#4A6B55" fontSize="10">Next Payment</text>
        <text x="555" y="296" fill="#36CE8E" fontSize="20" fontWeight="700">Apr 15</text>

        {/* Payment table */}
        <rect x="40" y="340" width="720" height="140" rx="14" fill="white" />
        <text x="65" y="368" fill="#1B4332" fontSize="12" fontWeight="600">Payment History</text>

        {/* Table header */}
        <text x="65" y="392" fill="#4A6B55" fontSize="9" fontWeight="600">PAYMENT</text>
        <text x="300" y="392" fill="#4A6B55" fontSize="9" fontWeight="600">DATE</text>
        <text x="500" y="392" fill="#4A6B55" fontSize="9" fontWeight="600">AMOUNT</text>
        <text x="680" y="392" fill="#4A6B55" fontSize="9" fontWeight="600">STATUS</text>
        <rect x="65" y="398" width="670" height="1" fill="#F0FFF5" />

        {/* Row 1 */}
        <text x="65" y="418" fill="#1B4332" fontSize="10">#3</text>
        <text x="300" y="418" fill="#4A6B55" fontSize="10">Mar 15, 2026</text>
        <text x="500" y="418" fill="#1B4332" fontSize="10" fontWeight="600">$100.00</text>
        <circle cx="685" cy="414" r="5" fill="#36CE8E" opacity="0.2" />
        <path d="M682 414 L684 416 L688 412" stroke="#36CE8E" strokeWidth="1.2" strokeLinecap="round" />
        <text x="696" y="418" fill="#36CE8E" fontSize="9" fontWeight="500">Paid</text>

        {/* Row 2 */}
        <text x="65" y="438" fill="#1B4332" fontSize="10">#2</text>
        <text x="300" y="438" fill="#4A6B55" fontSize="10">Feb 15, 2026</text>
        <text x="500" y="438" fill="#1B4332" fontSize="10" fontWeight="600">$100.00</text>
        <circle cx="685" cy="434" r="5" fill="#36CE8E" opacity="0.2" />
        <path d="M682 434 L684 436 L688 432" stroke="#36CE8E" strokeWidth="1.2" strokeLinecap="round" />
        <text x="696" y="438" fill="#36CE8E" fontSize="9" fontWeight="500">Paid</text>

        {/* Row 3 */}
        <text x="65" y="458" fill="#1B4332" fontSize="10">#1</text>
        <text x="300" y="458" fill="#4A6B55" fontSize="10">Jan 15, 2026</text>
        <text x="500" y="458" fill="#1B4332" fontSize="10" fontWeight="600">$100.00</text>
        <circle cx="685" cy="454" r="5" fill="#36CE8E" opacity="0.2" />
        <path d="M682 454 L684 456 L688 452" stroke="#36CE8E" strokeWidth="1.2" strokeLinecap="round" />
        <text x="696" y="458" fill="#36CE8E" fontSize="9" fontWeight="500">Paid</text>
      </svg>
    ),
  },
  {
    title: "Contracts",
    description: "View and manage all your loan agreements. Clear terms that both sides can access anytime.",
    color: "#D0ED6F",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav */}
        <rect x="0" y="0" width="800" height="48" fill="#1B4332" />
        <text x="30" y="30" fill="white" fontSize="16" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>
        <rect x="270" y="14" width="65" height="22" rx="4" fill="#36CE8E" opacity="0.25" />
        <text x="302" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">Contracts</text>
        <circle cx="740" cy="24" r="14" fill="white" opacity="0.1" />
        <text x="740" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">S</text>

        {/* Content */}
        <rect x="0" y="48" width="800" height="452" fill="#F7FDF9" />

        {/* Header */}
        <text x="40" y="88" fill="#1B4332" fontSize="18" fontWeight="700">Your Contracts</text>
        <text x="40" y="106" fill="#4A6B55" fontSize="11">3 loan agreements</text>

        {/* Search + filter row */}
        <rect x="40" y="118" width="300" height="34" rx="8" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="60" y="139" fill="#4A6B55" fontSize="10">🔍  Search contracts...</text>
        <rect x="355" y="118" width="55" height="34" rx="17" fill="#1B4332" />
        <text x="382" y="139" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">All</text>
        <rect x="420" y="118" width="60" height="34" rx="17" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="450" y="139" textAnchor="middle" fill="#4A6B55" fontSize="10">Active</text>
        <rect x="490" y="118" width="70" height="34" rx="17" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="525" y="139" textAnchor="middle" fill="#4A6B55" fontSize="10">Complete</text>

        {/* Contract cards — horizontal layout */}
        {/* Card 1 */}
        <rect x="40" y="168" width="235" height="290" rx="14" fill="white" />
        <rect x="40" y="168" width="235" height="6" rx="3" fill="#36CE8E" />
        <circle cx="85" cy="210" r="22" fill="#36CE8E" opacity="0.08" />
        <text x="85" y="215" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">M</text>
        <text x="120" y="205" fill="#1B4332" fontSize="13" fontWeight="600">Mike Johnson</text>
        <rect x="120" y="212" width="48" height="18" rx="9" fill="#36CE8E" opacity="0.1" />
        <text x="144" y="225" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Active</text>
        <rect x="60" y="250" width="195" height="1" fill="#F0FFF5" />
        <text x="60" y="275" fill="#4A6B55" fontSize="10">Amount</text>
        <text x="235" y="275" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">$500.00</text>
        <text x="60" y="295" fill="#4A6B55" fontSize="10">Schedule</text>
        <text x="235" y="295" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Monthly</text>
        <text x="60" y="315" fill="#4A6B55" fontSize="10">Interest</text>
        <text x="235" y="315" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">0%</text>
        <text x="60" y="335" fill="#4A6B55" fontSize="10">Progress</text>
        <text x="235" y="335" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">3/5 paid</text>
        <rect x="60" y="348" width="195" height="6" rx="3" fill="#DBEEE3" />
        <rect x="60" y="348" width="117" height="6" rx="3" fill="#36CE8E" />
        <rect x="60" y="370" width="195" height="32" rx="8" fill="#F7FDF9" stroke="#DBEEE3" strokeWidth="1" />
        <text x="157" y="390" textAnchor="middle" fill="#4A6B55" fontSize="10">View Contract →</text>

        {/* Card 2 */}
        <rect x="290" y="168" width="235" height="290" rx="14" fill="white" />
        <rect x="290" y="168" width="235" height="6" rx="3" fill="#83F384" />
        <circle cx="335" cy="210" r="22" fill="#83F384" opacity="0.08" />
        <text x="335" y="215" textAnchor="middle" fill="#1B4332" fontSize="16" fontWeight="700">J</text>
        <text x="370" y="205" fill="#1B4332" fontSize="13" fontWeight="600">Jake Wilson</text>
        <rect x="370" y="212" width="48" height="18" rx="9" fill="#36CE8E" opacity="0.1" />
        <text x="394" y="225" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Active</text>
        <rect x="310" y="250" width="195" height="1" fill="#F0FFF5" />
        <text x="310" y="275" fill="#4A6B55" fontSize="10">Amount</text>
        <text x="485" y="275" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">$1,000.00</text>
        <text x="310" y="295" fill="#4A6B55" fontSize="10">Schedule</text>
        <text x="485" y="295" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Bi-weekly</text>
        <text x="310" y="315" fill="#4A6B55" fontSize="10">Interest</text>
        <text x="485" y="315" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">2%</text>
        <text x="310" y="335" fill="#4A6B55" fontSize="10">Progress</text>
        <text x="485" y="335" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">8/10 paid</text>
        <rect x="310" y="348" width="195" height="6" rx="3" fill="#DBEEE3" />
        <rect x="310" y="348" width="156" height="6" rx="3" fill="#83F384" />
        <rect x="310" y="370" width="195" height="32" rx="8" fill="#F7FDF9" stroke="#DBEEE3" strokeWidth="1" />
        <text x="407" y="390" textAnchor="middle" fill="#4A6B55" fontSize="10">View Contract →</text>

        {/* Card 3 */}
        <rect x="540" y="168" width="220" height="290" rx="14" fill="white" />
        <rect x="540" y="168" width="220" height="6" rx="3" fill="#4A6B55" opacity="0.2" />
        <circle cx="585" cy="210" r="22" fill="#4A6B55" opacity="0.05" />
        <text x="585" y="215" textAnchor="middle" fill="#4A6B55" fontSize="16" fontWeight="700">S</text>
        <text x="620" y="205" fill="#1B4332" fontSize="13" fontWeight="600">Sarah Lee</text>
        <rect x="620" y="212" width="60" height="18" rx="9" fill="#4A6B55" opacity="0.08" />
        <text x="650" y="225" textAnchor="middle" fill="#4A6B55" fontSize="8" fontWeight="600">Complete</text>
        <rect x="560" y="250" width="180" height="1" fill="#F0FFF5" />
        <text x="560" y="275" fill="#4A6B55" fontSize="10">Amount</text>
        <text x="740" y="275" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">$750.00</text>
        <text x="560" y="295" fill="#4A6B55" fontSize="10">Schedule</text>
        <text x="740" y="295" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">Monthly</text>
        <text x="560" y="315" fill="#4A6B55" fontSize="10">Interest</text>
        <text x="740" y="315" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">0%</text>
        <text x="560" y="335" fill="#4A6B55" fontSize="10">Progress</text>
        <text x="740" y="335" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="500">5/5 paid</text>
        <rect x="560" y="348" width="180" height="6" rx="3" fill="#36CE8E" opacity="0.3" />
        <rect x="560" y="370" width="180" height="32" rx="8" fill="#F7FDF9" stroke="#DBEEE3" strokeWidth="1" />
        <text x="650" y="390" textAnchor="middle" fill="#4A6B55" fontSize="10">View Contract →</text>
      </svg>
    ),
  },
  {
    title: "Payment Schedule",
    description: "View upcoming and completed payments with a clear timeline of every instalment.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav */}
        <rect x="0" y="0" width="800" height="48" fill="#1B4332" />
        <text x="30" y="30" fill="white" fontSize="16" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>
        <rect x="345" y="14" width="65" height="22" rx="4" fill="#36CE8E" opacity="0.25" />
        <text x="377" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">Payments</text>
        <circle cx="740" cy="24" r="14" fill="white" opacity="0.1" />
        <text x="740" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">S</text>

        {/* Content */}
        <rect x="0" y="48" width="800" height="452" fill="#F7FDF9" />

        {/* Breadcrumb */}
        <text x="40" y="80" fill="#4A6B55" fontSize="10">Payments › <tspan fontWeight="600" fill="#1B4332">Mike Johnson</tspan></text>

        {/* Header */}
        <text x="40" y="110" fill="#1B4332" fontSize="18" fontWeight="700">Payment Schedule</text>
        <text x="40" y="128" fill="#4A6B55" fontSize="11">$500.00 loan · 5 monthly payments of $100.00</text>

        {/* Summary cards */}
        <rect x="40" y="145" width="170" height="55" rx="10" fill="white" />
        <text x="60" y="167" fill="#4A6B55" fontSize="9">Paid</text>
        <text x="60" y="186" fill="#36CE8E" fontSize="16" fontWeight="700">$300.00</text>

        <rect x="225" y="145" width="170" height="55" rx="10" fill="white" />
        <text x="245" y="167" fill="#4A6B55" fontSize="9">Remaining</text>
        <text x="245" y="186" fill="#1B4332" fontSize="16" fontWeight="700">$200.00</text>

        <rect x="410" y="145" width="170" height="55" rx="10" fill="white" />
        <text x="430" y="167" fill="#4A6B55" fontSize="9">Next Due</text>
        <text x="430" y="186" fill="#D0ED6F" fontSize="16" fontWeight="700">Apr 15</text>

        <rect x="595" y="145" width="165" height="55" rx="10" fill="white" />
        <text x="615" y="167" fill="#4A6B55" fontSize="9">Final Payment</text>
        <text x="615" y="186" fill="#4A6B55" fontSize="16" fontWeight="700">May 15</text>

        {/* Horizontal timeline */}
        <rect x="40" y="220" width="720" height="260" rx="14" fill="white" />
        <text x="65" y="250" fill="#1B4332" fontSize="13" fontWeight="600">Timeline</text>

        {/* Horizontal track */}
        <rect x="80" y="290" width="640" height="4" rx="2" fill="#DBEEE3" />
        <rect x="80" y="290" width="384" height="4" rx="2" fill="#36CE8E" />

        {/* Node 1 */}
        <circle cx="80" cy="292" r="12" fill="#36CE8E" />
        <path d="M75 292 L78 295 L85 288" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <text x="80" y="320" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">$100</text>
        <text x="80" y="334" textAnchor="middle" fill="#4A6B55" fontSize="8">Jan 15</text>
        <rect x="55" y="340" width="50" height="16" rx="8" fill="#36CE8E" opacity="0.1" />
        <text x="80" y="352" textAnchor="middle" fill="#36CE8E" fontSize="7" fontWeight="600">Paid</text>

        {/* Node 2 */}
        <circle cx="240" cy="292" r="12" fill="#36CE8E" />
        <path d="M235 292 L238 295 L245 288" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <text x="240" y="320" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">$100</text>
        <text x="240" y="334" textAnchor="middle" fill="#4A6B55" fontSize="8">Feb 15</text>
        <rect x="215" y="340" width="50" height="16" rx="8" fill="#36CE8E" opacity="0.1" />
        <text x="240" y="352" textAnchor="middle" fill="#36CE8E" fontSize="7" fontWeight="600">Paid</text>

        {/* Node 3 */}
        <circle cx="400" cy="292" r="12" fill="#36CE8E" />
        <path d="M395 292 L398 295 L405 288" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <text x="400" y="320" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">$100</text>
        <text x="400" y="334" textAnchor="middle" fill="#4A6B55" fontSize="8">Mar 15</text>
        <rect x="375" y="340" width="50" height="16" rx="8" fill="#36CE8E" opacity="0.1" />
        <text x="400" y="352" textAnchor="middle" fill="#36CE8E" fontSize="7" fontWeight="600">Paid</text>

        {/* Node 4 — upcoming */}
        <circle cx="560" cy="292" r="12" fill="white" stroke="#D0ED6F" strokeWidth="2.5" />
        <text x="560" y="296" textAnchor="middle" fill="#D0ED6F" fontSize="10" fontWeight="700">4</text>
        <text x="560" y="320" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">$100</text>
        <text x="560" y="334" textAnchor="middle" fill="#4A6B55" fontSize="8">Apr 15</text>
        <rect x="535" y="340" width="50" height="16" rx="8" fill="#D0ED6F" opacity="0.15" />
        <text x="560" y="352" textAnchor="middle" fill="#4A6B55" fontSize="7" fontWeight="600">Due</text>

        {/* Node 5 — future */}
        <circle cx="720" cy="292" r="12" fill="white" stroke="#DBEEE3" strokeWidth="2" />
        <text x="720" y="296" textAnchor="middle" fill="#DBEEE3" fontSize="10" fontWeight="700">5</text>
        <text x="720" y="320" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="600">$100</text>
        <text x="720" y="334" textAnchor="middle" fill="#4A6B55" fontSize="8">May 15</text>
        <rect x="695" y="340" width="50" height="16" rx="8" fill="#DBEEE3" opacity="0.3" />
        <text x="720" y="352" textAnchor="middle" fill="#4A6B55" fontSize="7" fontWeight="600">Pending</text>

        {/* Progress text */}
        <text x="65" y="395" fill="#4A6B55" fontSize="10">3 of 5 payments completed</text>
        <rect x="65" y="405" width="670" height="8" rx="4" fill="#DBEEE3" />
        <rect x="65" y="405" width="402" height="8" rx="4" fill="#36CE8E" />
        <text x="735" y="430" textAnchor="end" fill="#1B4332" fontSize="11" fontWeight="600">60%</text>
        <text x="65" y="460" fill="#4A6B55" fontSize="9">Estimated completion: May 15, 2026</text>
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
