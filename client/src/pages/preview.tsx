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
      <svg viewBox="0 0 800 520" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="520" fill="#F7FBF8" />

        {/* Top bar */}
        <rect width="800" height="56" fill="white" />
        <rect y="55" width="800" height="1" fill="#E8F0EB" />
        <text x="36" y="36" fill="#1B4332" fontSize="20" fontWeight="700" fontFamily="serif" fontStyle="italic">Vony</text>
        <circle cx="748" cy="28" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="748" y="33" textAnchor="middle" fill="#1B4332" fontSize="12" fontWeight="600">S</text>
        <circle cx="700" cy="28" r="3" fill="#36CE8E" />

        {/* Greeting */}
        <text x="36" y="96" fill="#1B4332" fontSize="22" fontWeight="700">Hey Sarah!</text>
        <text x="36" y="116" fill="#7A9A85" fontSize="12">Here's what's happening with your loans.</text>

        {/* Quick action buttons */}
        <rect x="580" y="82" width="100" height="36" rx="18" fill="#36CE8E" />
        <text x="630" y="104" textAnchor="middle" fill="#0A1A10" fontSize="11" fontWeight="600">+ New Loan</text>
        <rect x="692" y="82" width="76" height="36" rx="18" fill="white" stroke="#DBEEE3" strokeWidth="1.2" />
        <text x="730" y="104" textAnchor="middle" fill="#4A6B55" fontSize="11">Invite</text>

        {/* Three stat cards */}
        <rect x="36" y="140" width="236" height="110" rx="16" fill="white" />
        <text x="56" y="172" fill="#7A9A85" fontSize="11">Total Lent</text>
        <text x="56" y="204" fill="#1B4332" fontSize="28" fontWeight="700">$2,450</text>
        <rect x="56" y="220" width="55" height="18" rx="9" fill="#36CE8E" opacity="0.1" />
        <text x="83" y="233" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">+12%</text>

        <rect x="284" y="140" width="236" height="110" rx="16" fill="white" />
        <text x="304" y="172" fill="#7A9A85" fontSize="11">Active Loans</text>
        <text x="304" y="204" fill="#1B4332" fontSize="28" fontWeight="700">3</text>
        <text x="304" y="224" fill="#7A9A85" fontSize="10">$1,200 outstanding</text>

        <rect x="532" y="140" width="236" height="110" rx="16" fill="white" />
        <text x="552" y="172" fill="#7A9A85" fontSize="11">Collected Back</text>
        <text x="552" y="204" fill="#1B4332" fontSize="28" fontWeight="700">$1,800</text>
        <rect x="552" y="220" width="65" height="18" rx="9" fill="#83F384" opacity="0.15" />
        <text x="584" y="233" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">73% back</text>

        {/* Left — Recent Activity */}
        <rect x="36" y="268" width="400" height="235" rx="16" fill="white" />
        <text x="56" y="298" fill="#1B4332" fontSize="14" fontWeight="600">Recent Activity</text>

        <circle cx="72" cy="332" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="72" y="337" textAnchor="middle" fill="#36CE8E" fontSize="11" fontWeight="600">M</text>
        <text x="98" y="328" fill="#1B4332" fontSize="12" fontWeight="500">Mike paid you $100</text>
        <text x="98" y="344" fill="#7A9A85" fontSize="10">2 hours ago</text>
        <rect x="360" y="322" width="52" height="22" rx="11" fill="#36CE8E" opacity="0.1" />
        <text x="386" y="337" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Paid</text>

        <rect x="56" y="358" width="360" height="1" fill="#F0F7F2" />

        <circle cx="72" cy="382" r="16" fill="#D0ED6F" opacity="0.2" />
        <text x="72" y="387" textAnchor="middle" fill="#4A6B55" fontSize="11" fontWeight="600">J</text>
        <text x="98" y="378" fill="#1B4332" fontSize="12" fontWeight="500">New loan with Jake</text>
        <text x="98" y="394" fill="#7A9A85" fontSize="10">Yesterday</text>
        <rect x="360" y="372" width="52" height="22" rx="11" fill="#D0ED6F" opacity="0.15" />
        <text x="386" y="387" textAnchor="middle" fill="#4A6B55" fontSize="8" fontWeight="600">New</text>

        <rect x="56" y="408" width="360" height="1" fill="#F0F7F2" />

        <circle cx="72" cy="432" r="16" fill="#83F384" opacity="0.12" />
        <text x="72" y="437" textAnchor="middle" fill="#4A6B55" fontSize="11" fontWeight="600">A</text>
        <text x="98" y="428" fill="#1B4332" fontSize="12" fontWeight="500">Amy fully repaid!</text>
        <text x="98" y="444" fill="#7A9A85" fontSize="10">3 days ago</text>
        <rect x="352" y="422" width="60" height="22" rx="11" fill="#36CE8E" opacity="0.1" />
        <text x="382" y="437" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Complete</text>

        {/* Right — Your Friends */}
        <rect x="448" y="268" width="320" height="235" rx="16" fill="white" />
        <text x="468" y="298" fill="#1B4332" fontSize="14" fontWeight="600">Your Friends</text>

        <circle cx="484" cy="332" r="14" fill="#36CE8E" opacity="0.1" />
        <text x="484" y="337" textAnchor="middle" fill="#36CE8E" fontSize="10" fontWeight="600">MJ</text>
        <text x="508" y="328" fill="#1B4332" fontSize="12" fontWeight="500">Mike Johnson</text>
        <text x="508" y="344" fill="#7A9A85" fontSize="10">Owes you $200</text>
        <rect x="694" y="322" width="52" height="22" rx="11" fill="#F0F7F2" />
        <text x="720" y="337" textAnchor="middle" fill="#4A6B55" fontSize="9">Nudge</text>

        <rect x="468" y="358" width="280" height="1" fill="#F0F7F2" />

        <circle cx="484" cy="382" r="14" fill="#83F384" opacity="0.1" />
        <text x="484" y="387" textAnchor="middle" fill="#4A6B55" fontSize="10" fontWeight="600">JW</text>
        <text x="508" y="378" fill="#1B4332" fontSize="12" fontWeight="500">Jake Wilson</text>
        <text x="508" y="394" fill="#7A9A85" fontSize="10">Owes you $200</text>
        <rect x="694" y="372" width="52" height="22" rx="11" fill="#F0F7F2" />
        <text x="720" y="387" textAnchor="middle" fill="#4A6B55" fontSize="9">Nudge</text>

        <rect x="468" y="408" width="280" height="1" fill="#F0F7F2" />

        <circle cx="484" cy="432" r="14" fill="#D0ED6F" opacity="0.15" />
        <text x="484" y="437" textAnchor="middle" fill="#4A6B55" fontSize="10" fontWeight="600">SL</text>
        <text x="508" y="428" fill="#1B4332" fontSize="12" fontWeight="500">Sarah Lee</text>
        <text x="508" y="444" fill="#36CE8E" fontSize="10" fontWeight="500">All settled up!</text>

        {/* Bottom nav dots */}
        <rect y="490" width="800" height="30" fill="white" />
        <rect y="489" width="800" height="1" fill="#E8F0EB" />
        <circle cx="160" cy="505" r="3" fill="#7A9A85" opacity="0.25" />
        <circle cx="320" cy="505" r="3" fill="#7A9A85" opacity="0.25" />
        <circle cx="400" cy="505" r="3" fill="#36CE8E" />
        <circle cx="480" cy="505" r="3" fill="#7A9A85" opacity="0.25" />
        <circle cx="640" cy="505" r="3" fill="#7A9A85" opacity="0.25" />
      </svg>
    ),
  },
  {
    title: "Create a Loan",
    description: "Set up a loan in seconds. Pick a friend, enter an amount, and you're done.",
    color: "#83F384",
    svg: (
      <svg viewBox="0 0 800 520" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="520" fill="#F7FBF8" />

        {/* Top bar */}
        <rect width="800" height="56" fill="white" />
        <rect y="55" width="800" height="1" fill="#E8F0EB" />
        <text x="36" y="36" fill="#1B4332" fontSize="20" fontWeight="700" fontFamily="serif" fontStyle="italic">Vony</text>
        <text x="80" y="36" fill="#7A9A85" fontSize="12">/ New Loan</text>
        <circle cx="748" cy="28" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="748" y="33" textAnchor="middle" fill="#1B4332" fontSize="12" fontWeight="600">S</text>

        {/* Main form card — centered */}
        <rect x="140" y="80" width="520" height="410" rx="20" fill="white" />

        {/* Header */}
        <text x="400" y="122" textAnchor="middle" fill="#1B4332" fontSize="20" fontWeight="700">Create a Loan</text>
        <text x="400" y="142" textAnchor="middle" fill="#7A9A85" fontSize="12">Lending to a friend? Set it up in a few taps.</text>

        {/* Who are you lending to? */}
        <text x="180" y="180" fill="#1B4332" fontSize="11" fontWeight="600">Who are you lending to?</text>
        <rect x="180" y="190" width="440" height="48" rx="12" fill="#F7FBF8" stroke="#DBEEE3" strokeWidth="1.2" />
        <circle cx="212" cy="214" r="14" fill="#36CE8E" opacity="0.12" />
        <text x="212" y="219" textAnchor="middle" fill="#36CE8E" fontSize="10" fontWeight="600">M</text>
        <text x="236" y="218" fill="#1B4332" fontSize="13" fontWeight="500">Mike Johnson</text>
        <text x="560" y="218" fill="#7A9A85" fontSize="10">Friend</text>

        {/* Amount */}
        <text x="180" y="264" fill="#1B4332" fontSize="11" fontWeight="600">How much?</text>
        <rect x="180" y="274" width="440" height="56" rx="12" fill="#F7FBF8" stroke="#DBEEE3" strokeWidth="1.2" />
        <text x="210" y="308" fill="#7A9A85" fontSize="18">$</text>
        <text x="230" y="310" fill="#1B4332" fontSize="24" fontWeight="700">500</text>
        <text x="282" y="310" fill="#1B4332" fontSize="24" fontWeight="700" opacity="0.25">.00</text>

        {/* What's it for? */}
        <text x="180" y="358" fill="#1B4332" fontSize="11" fontWeight="600">What's it for?</text>
        <rect x="180" y="368" width="440" height="42" rx="12" fill="#F7FBF8" stroke="#DBEEE3" strokeWidth="1.2" />
        <text x="200" y="394" fill="#7A9A85" fontSize="12">Car repair</text>

        {/* Simple toggle row */}
        <text x="180" y="438" fill="#7A9A85" fontSize="10">Interest-free</text>
        <rect x="255" y="425" width="36" height="20" rx="10" fill="#36CE8E" />
        <circle cx="281" cy="435" r="7" fill="white" />
        <text x="302" y="438" fill="#7A9A85" fontSize="10">Remind me</text>
        <rect x="365" y="425" width="36" height="20" rx="10" fill="#36CE8E" />
        <circle cx="391" cy="435" r="7" fill="white" />

        {/* CTA button */}
        <rect x="180" y="458" width="440" height="46" rx="14" fill="#36CE8E" />
        <text x="400" y="486" textAnchor="middle" fill="#0A1A10" fontSize="14" fontWeight="600">Send Loan Request</text>
      </svg>
    ),
  },
  {
    title: "Loan Overview",
    description: "Track every detail of an active loan — payments, progress, and the full picture.",
    color: "#6EE8B5",
    svg: (
      <svg viewBox="0 0 800 520" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="520" fill="#F7FBF8" />

        {/* Top bar */}
        <rect width="800" height="56" fill="white" />
        <rect y="55" width="800" height="1" fill="#E8F0EB" />
        <text x="36" y="36" fill="#1B4332" fontSize="20" fontWeight="700" fontFamily="serif" fontStyle="italic">Vony</text>
        <text x="80" y="36" fill="#7A9A85" fontSize="12">/ Loans / Mike</text>
        <circle cx="748" cy="28" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="748" y="33" textAnchor="middle" fill="#1B4332" fontSize="12" fontWeight="600">S</text>

        {/* Header with avatar */}
        <circle cx="64" cy="100" r="24" fill="#36CE8E" opacity="0.12" />
        <text x="64" y="106" textAnchor="middle" fill="#36CE8E" fontSize="16" fontWeight="700">M</text>
        <text x="100" y="94" fill="#1B4332" fontSize="18" fontWeight="700">Mike Johnson</text>
        <rect x="240" y="82" width="52" height="22" rx="11" fill="#36CE8E" opacity="0.1" />
        <text x="266" y="97" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Active</text>
        <text x="100" y="114" fill="#7A9A85" fontSize="11">Car repair · Started Jan 15</text>

        <rect x="620" y="84" width="80" height="32" rx="16" fill="white" stroke="#DBEEE3" strokeWidth="1.2" />
        <text x="660" y="104" textAnchor="middle" fill="#4A6B55" fontSize="10">Remind</text>
        <rect x="710" y="84" width="60" height="32" rx="16" fill="white" stroke="#DBEEE3" strokeWidth="1.2" />
        <text x="740" y="104" textAnchor="middle" fill="#4A6B55" fontSize="10">Edit</text>

        {/* Big progress card */}
        <rect x="36" y="134" width="730" height="100" rx="20" fill="white" />
        <text x="66" y="168" fill="#1B4332" fontSize="13" fontWeight="600">Repayment Progress</text>
        <text x="720" y="168" textAnchor="end" fill="#1B4332" fontSize="24" fontWeight="700">60%</text>
        <rect x="66" y="182" width="630" height="10" rx="5" fill="#DBEEE3" />
        <rect x="66" y="182" width="378" height="10" rx="5" fill="#36CE8E" />
        <text x="66" y="210" fill="#7A9A85" fontSize="10">$300 of $500 repaid · 2 payments left</text>

        {/* Three stat cards */}
        <rect x="36" y="252" width="236" height="90" rx="16" fill="white" />
        <text x="56" y="282" fill="#7A9A85" fontSize="10">Monthly Payment</text>
        <text x="56" y="314" fill="#1B4332" fontSize="24" fontWeight="700">$100</text>

        <rect x="284" y="252" width="236" height="90" rx="16" fill="white" />
        <text x="304" y="282" fill="#7A9A85" fontSize="10">Interest</text>
        <text x="304" y="314" fill="#36CE8E" fontSize="24" fontWeight="700">0%</text>
        <text x="340" y="314" fill="#7A9A85" fontSize="11">interest-free</text>

        <rect x="532" y="252" width="234" height="90" rx="16" fill="white" />
        <text x="552" y="282" fill="#7A9A85" fontSize="10">Next Payment Due</text>
        <text x="552" y="314" fill="#1B4332" fontSize="24" fontWeight="700">Apr 15</text>

        {/* Payment history */}
        <rect x="36" y="358" width="730" height="148" rx="16" fill="white" />
        <text x="66" y="390" fill="#1B4332" fontSize="14" fontWeight="600">Payments</text>

        {/* Payment 1 */}
        <circle cx="78" cy="422" r="10" fill="#36CE8E" opacity="0.1" />
        <path d="M74 422 L76 424 L82 418" stroke="#36CE8E" strokeWidth="1.5" strokeLinecap="round" />
        <text x="98" y="418" fill="#1B4332" fontSize="11" fontWeight="500">$100 — Jan 15</text>
        <text x="98" y="434" fill="#7A9A85" fontSize="9">On time</text>

        {/* Payment 2 */}
        <circle cx="268" cy="422" r="10" fill="#36CE8E" opacity="0.1" />
        <path d="M264 422 L266 424 L272 418" stroke="#36CE8E" strokeWidth="1.5" strokeLinecap="round" />
        <text x="288" y="418" fill="#1B4332" fontSize="11" fontWeight="500">$100 — Feb 15</text>
        <text x="288" y="434" fill="#7A9A85" fontSize="9">On time</text>

        {/* Payment 3 */}
        <circle cx="458" cy="422" r="10" fill="#36CE8E" opacity="0.1" />
        <path d="M454 422 L456 424 L462 418" stroke="#36CE8E" strokeWidth="1.5" strokeLinecap="round" />
        <text x="478" y="418" fill="#1B4332" fontSize="11" fontWeight="500">$100 — Mar 15</text>
        <text x="478" y="434" fill="#7A9A85" fontSize="9">On time</text>

        {/* Payment 4 — upcoming */}
        <circle cx="648" cy="422" r="10" fill="white" stroke="#DBEEE3" strokeWidth="1.5" />
        <text x="648" y="426" textAnchor="middle" fill="#DBEEE3" fontSize="8" fontWeight="700">4</text>
        <text x="668" y="418" fill="#7A9A85" fontSize="11">$100 — Apr 15</text>
        <text x="668" y="434" fill="#D0ED6F" fontSize="9" fontWeight="500">Upcoming</text>

        {/* Bottom encouragement */}
        <rect x="66" y="460" width="680" height="28" rx="14" fill="#36CE8E" opacity="0.06" />
        <text x="400" y="479" textAnchor="middle" fill="#4A6B55" fontSize="10">Mike is doing great! 3 out of 5 payments completed on time.</text>
      </svg>
    ),
  },
  {
    title: "Contracts",
    description: "View and manage your loan agreements. Clear terms that both sides can see anytime.",
    color: "#D0ED6F",
    svg: (
      <svg viewBox="0 0 800 520" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="520" fill="#F7FBF8" />

        {/* Top bar */}
        <rect width="800" height="56" fill="white" />
        <rect y="55" width="800" height="1" fill="#E8F0EB" />
        <text x="36" y="36" fill="#1B4332" fontSize="20" fontWeight="700" fontFamily="serif" fontStyle="italic">Vony</text>
        <text x="80" y="36" fill="#7A9A85" fontSize="12">/ Contracts</text>
        <circle cx="748" cy="28" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="748" y="33" textAnchor="middle" fill="#1B4332" fontSize="12" fontWeight="600">S</text>

        {/* Header */}
        <text x="36" y="96" fill="#1B4332" fontSize="22" fontWeight="700">Contracts</text>
        <text x="36" y="116" fill="#7A9A85" fontSize="12">Your loan agreements, all in one place.</text>

        {/* Filter tabs */}
        <rect x="36" y="130" width="48" height="28" rx="14" fill="#1B4332" />
        <text x="60" y="148" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">All</text>
        <rect x="92" y="130" width="60" height="28" rx="14" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="122" y="148" textAnchor="middle" fill="#4A6B55" fontSize="10">Active</text>
        <rect x="160" y="130" width="72" height="28" rx="14" fill="white" stroke="#DBEEE3" strokeWidth="1" />
        <text x="196" y="148" textAnchor="middle" fill="#4A6B55" fontSize="10">Complete</text>

        {/* Contract card 1 */}
        <rect x="36" y="174" width="730" height="100" rx="16" fill="white" />
        <circle cx="72" cy="224" r="20" fill="#36CE8E" opacity="0.1" />
        <text x="72" y="230" textAnchor="middle" fill="#1B4332" fontSize="14" fontWeight="700">M</text>
        <text x="104" y="210" fill="#1B4332" fontSize="14" fontWeight="600">Mike Johnson</text>
        <rect x="210" y="200" width="50" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="235" y="214" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Active</text>
        <text x="104" y="232" fill="#7A9A85" fontSize="10">$500 · Car repair · Monthly payments</text>
        <text x="104" y="250" fill="#7A9A85" fontSize="10">Started Jan 15, 2026</text>

        <rect x="520" y="216" width="140" height="6" rx="3" fill="#DBEEE3" />
        <rect x="520" y="216" width="84" height="6" rx="3" fill="#36CE8E" />
        <text x="520" y="238" fill="#7A9A85" fontSize="9">60% repaid</text>
        <text x="680" y="214" textAnchor="middle" fill="#4A6B55" fontSize="10">View</text>
        <text x="740" y="214" textAnchor="middle" fill="#4A6B55" fontSize="10">Remind</text>

        {/* Contract card 2 */}
        <rect x="36" y="286" width="730" height="100" rx="16" fill="white" />
        <circle cx="72" cy="336" r="20" fill="#83F384" opacity="0.1" />
        <text x="72" y="342" textAnchor="middle" fill="#1B4332" fontSize="14" fontWeight="700">J</text>
        <text x="104" y="322" fill="#1B4332" fontSize="14" fontWeight="600">Jake Wilson</text>
        <rect x="200" y="312" width="50" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="225" y="326" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Active</text>
        <text x="104" y="344" fill="#7A9A85" fontSize="10">$1,000 · Rent help · Bi-weekly payments</text>
        <text x="104" y="362" fill="#7A9A85" fontSize="10">Started Dec 1, 2025</text>

        <rect x="520" y="328" width="140" height="6" rx="3" fill="#DBEEE3" />
        <rect x="520" y="328" width="112" height="6" rx="3" fill="#83F384" />
        <text x="520" y="350" fill="#7A9A85" fontSize="9">80% repaid</text>
        <text x="680" y="326" textAnchor="middle" fill="#4A6B55" fontSize="10">View</text>
        <text x="740" y="326" textAnchor="middle" fill="#4A6B55" fontSize="10">Remind</text>

        {/* Contract card 3 — completed */}
        <rect x="36" y="398" width="730" height="100" rx="16" fill="white" />
        <circle cx="72" cy="448" r="20" fill="#DBEEE3" opacity="0.3" />
        <text x="72" y="454" textAnchor="middle" fill="#7A9A85" fontSize="14" fontWeight="700">A</text>
        <text x="104" y="434" fill="#1B4332" fontSize="14" fontWeight="600">Amy Chen</text>
        <rect x="185" y="424" width="62" height="20" rx="10" fill="#4A6B55" opacity="0.08" />
        <text x="216" y="438" textAnchor="middle" fill="#4A6B55" fontSize="8" fontWeight="600">Complete</text>
        <text x="104" y="456" fill="#7A9A85" fontSize="10">$750 · Medical bill · Monthly payments</text>
        <text x="104" y="474" fill="#7A9A85" fontSize="10">Completed Mar 1, 2026</text>

        <rect x="520" y="440" width="140" height="6" rx="3" fill="#36CE8E" opacity="0.3" />
        <text x="520" y="462" fill="#36CE8E" fontSize="9">All settled!</text>
        <text x="680" y="438" textAnchor="middle" fill="#4A6B55" fontSize="10">View</text>
      </svg>
    ),
  },
  {
    title: "Payment Schedule",
    description: "See upcoming and past payments on a clear timeline. No surprises.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 520" fill="none" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="520" fill="#F7FBF8" />

        {/* Top bar */}
        <rect width="800" height="56" fill="white" />
        <rect y="55" width="800" height="1" fill="#E8F0EB" />
        <text x="36" y="36" fill="#1B4332" fontSize="20" fontWeight="700" fontFamily="serif" fontStyle="italic">Vony</text>
        <text x="80" y="36" fill="#7A9A85" fontSize="12">/ Payments / Mike</text>
        <circle cx="748" cy="28" r="16" fill="#36CE8E" opacity="0.12" />
        <text x="748" y="33" textAnchor="middle" fill="#1B4332" fontSize="12" fontWeight="600">S</text>

        {/* Header */}
        <text x="36" y="96" fill="#1B4332" fontSize="22" fontWeight="700">Payment Schedule</text>
        <text x="36" y="116" fill="#7A9A85" fontSize="12">$500 loan with Mike · 5 monthly payments of $100</text>

        {/* Summary row */}
        <rect x="36" y="132" width="180" height="68" rx="16" fill="white" />
        <text x="56" y="158" fill="#7A9A85" fontSize="10">Paid So Far</text>
        <text x="56" y="182" fill="#36CE8E" fontSize="20" fontWeight="700">$300</text>

        <rect x="228" y="132" width="180" height="68" rx="16" fill="white" />
        <text x="248" y="158" fill="#7A9A85" fontSize="10">Still Owed</text>
        <text x="248" y="182" fill="#1B4332" fontSize="20" fontWeight="700">$200</text>

        <rect x="420" y="132" width="180" height="68" rx="16" fill="white" />
        <text x="440" y="158" fill="#7A9A85" fontSize="10">Next Payment</text>
        <text x="440" y="182" fill="#1B4332" fontSize="20" fontWeight="700">Apr 15</text>

        <rect x="612" y="132" width="156" height="68" rx="16" fill="white" />
        <text x="632" y="158" fill="#7A9A85" fontSize="10">All Done By</text>
        <text x="632" y="182" fill="#7A9A85" fontSize="20" fontWeight="700">May 15</text>

        {/* Visual timeline — vertical */}
        <rect x="36" y="218" width="730" height="285" rx="20" fill="white" />
        <text x="66" y="252" fill="#1B4332" fontSize="14" fontWeight="600">Timeline</text>

        {/* Payment 1 */}
        <circle cx="90" cy="290" r="12" fill="#36CE8E" />
        <path d="M85 290 L88 293 L95 286" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <text x="118" y="286" fill="#1B4332" fontSize="12" fontWeight="600">$100 — January 15</text>
        <text x="118" y="302" fill="#7A9A85" fontSize="10">Paid on time</text>
        <rect x="640" y="280" width="50" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="665" y="294" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Paid</text>

        <rect x="89" y="302" width="2" height="22" rx="1" fill="#36CE8E" />

        {/* Payment 2 */}
        <circle cx="90" cy="336" r="12" fill="#36CE8E" />
        <path d="M85 336 L88 339 L95 332" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <text x="118" y="332" fill="#1B4332" fontSize="12" fontWeight="600">$100 — February 15</text>
        <text x="118" y="348" fill="#7A9A85" fontSize="10">Paid on time</text>
        <rect x="640" y="326" width="50" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="665" y="340" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Paid</text>

        <rect x="89" y="348" width="2" height="22" rx="1" fill="#36CE8E" />

        {/* Payment 3 */}
        <circle cx="90" cy="382" r="12" fill="#36CE8E" />
        <path d="M85 382 L88 385 L95 378" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <text x="118" y="378" fill="#1B4332" fontSize="12" fontWeight="600">$100 — March 15</text>
        <text x="118" y="394" fill="#7A9A85" fontSize="10">Paid on time</text>
        <rect x="640" y="372" width="50" height="20" rx="10" fill="#36CE8E" opacity="0.1" />
        <text x="665" y="386" textAnchor="middle" fill="#36CE8E" fontSize="8" fontWeight="600">Paid</text>

        <rect x="89" y="394" width="2" height="22" rx="1" fill="#DBEEE3" />

        {/* Payment 4 — upcoming */}
        <circle cx="90" cy="428" r="12" fill="white" stroke="#D0ED6F" strokeWidth="2.5" />
        <text x="90" y="432" textAnchor="middle" fill="#D0ED6F" fontSize="10" fontWeight="700">4</text>
        <text x="118" y="424" fill="#1B4332" fontSize="12" fontWeight="600">$100 — April 15</text>
        <text x="118" y="440" fill="#D0ED6F" fontSize="10" fontWeight="500">Coming up next</text>
        <rect x="640" y="418" width="50" height="20" rx="10" fill="#D0ED6F" opacity="0.12" />
        <text x="665" y="432" textAnchor="middle" fill="#4A6B55" fontSize="8" fontWeight="600">Due</text>

        <rect x="89" y="440" width="2" height="22" rx="1" fill="#DBEEE3" />

        {/* Payment 5 — future */}
        <circle cx="90" cy="474" r="12" fill="white" stroke="#DBEEE3" strokeWidth="2" />
        <text x="90" y="478" textAnchor="middle" fill="#DBEEE3" fontSize="10" fontWeight="700">5</text>
        <text x="118" y="470" fill="#7A9A85" fontSize="12">$100 — May 15</text>
        <text x="118" y="486" fill="#7A9A85" fontSize="10">Final payment</text>
        <rect x="632" y="464" width="64" height="20" rx="10" fill="#DBEEE3" opacity="0.25" />
        <text x="664" y="478" textAnchor="middle" fill="#7A9A85" fontSize="8" fontWeight="600">Pending</text>
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
