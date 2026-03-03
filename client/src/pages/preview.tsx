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
        {/* Top nav bar */}
        <rect x="0" y="0" width="800" height="50" fill="#1B4332" />
        <text x="30" y="32" fill="white" fontSize="18" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>
        <rect x="620" y="15" width="60" height="20" rx="4" fill="#36CE8E" opacity="0.6" />
        <rect x="700" y="15" width="70" height="20" rx="4" fill="white" opacity="0.1" />

        {/* Sidebar */}
        <rect x="0" y="50" width="180" height="450" fill="#1B4332" opacity="0.95" />
        <rect x="20" y="75" width="140" height="32" rx="8" fill="#36CE8E" opacity="0.2" />
        <text x="40" y="96" fill="white" fontSize="12" opacity="0.8">Dashboard</text>
        <circle cx="32" cy="91" r="4" fill="#36CE8E" opacity="0.6" />
        <rect x="20" y="120" width="140" height="32" rx="8" fill="transparent" />
        <text x="40" y="141" fill="white" fontSize="12" opacity="0.4">My Loans</text>
        <rect x="20" y="165" width="140" height="32" rx="8" fill="transparent" />
        <text x="40" y="186" fill="white" fontSize="12" opacity="0.4">Contracts</text>
        <rect x="20" y="210" width="140" height="32" rx="8" fill="transparent" />
        <text x="40" y="231" fill="white" fontSize="12" opacity="0.4">Payments</text>
        <rect x="20" y="255" width="140" height="32" rx="8" fill="transparent" />
        <text x="40" y="276" fill="white" fontSize="12" opacity="0.4">Settings</text>

        {/* Main content area */}
        <rect x="180" y="50" width="620" height="450" fill="#F0FFF5" />

        {/* Welcome header */}
        <text x="210" y="95" fill="#1B4332" fontSize="20" fontWeight="700">Welcome back, Sarah</text>
        <text x="210" y="115" fill="#4A6B55" fontSize="12">Here's your lending overview</text>

        {/* Stat cards */}
        <rect x="210" y="135" width="180" height="90" rx="12" fill="white" />
        <rect x="210" y="135" width="180" height="4" rx="2" fill="#36CE8E" />
        <text x="230" y="165" fill="#4A6B55" fontSize="10">Active Loans</text>
        <text x="230" y="195" fill="#1B4332" fontSize="28" fontWeight="700">3</text>

        <rect x="410" y="135" width="180" height="90" rx="12" fill="white" />
        <rect x="410" y="135" width="180" height="4" rx="2" fill="#83F384" />
        <text x="430" y="165" fill="#4A6B55" fontSize="10">Total Lent</text>
        <text x="430" y="195" fill="#1B4332" fontSize="28" fontWeight="700">$2,450</text>

        <rect x="610" y="135" width="170" height="90" rx="12" fill="white" />
        <rect x="610" y="135" width="170" height="4" rx="2" fill="#D0ED6F" />
        <text x="630" y="165" fill="#4A6B55" fontSize="10">Repaid</text>
        <text x="630" y="195" fill="#1B4332" fontSize="28" fontWeight="700">$1,800</text>

        {/* Recent activity */}
        <text x="210" y="260" fill="#1B4332" fontSize="14" fontWeight="600">Recent Activity</text>
        <rect x="210" y="275" width="570" height="50" rx="8" fill="white" />
        <circle cx="240" cy="300" r="14" fill="#36CE8E" opacity="0.15" />
        <text x="240" y="304" textAnchor="middle" fill="#36CE8E" fontSize="11" fontWeight="600">M</text>
        <text x="265" y="295" fill="#1B4332" fontSize="12" fontWeight="500">Mike paid $50.00</text>
        <text x="265" y="310" fill="#4A6B55" fontSize="10">Monthly repayment · 2 hours ago</text>
        <rect x="700" y="290" width="60" height="22" rx="11" fill="#36CE8E" opacity="0.15" />
        <text x="730" y="305" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Received</text>

        <rect x="210" y="335" width="570" height="50" rx="8" fill="white" />
        <circle cx="240" cy="360" r="14" fill="#83F384" opacity="0.15" />
        <text x="240" y="364" textAnchor="middle" fill="#1B4332" fontSize="11" fontWeight="600">J</text>
        <text x="265" y="355" fill="#1B4332" fontSize="12" fontWeight="500">New loan created with Jake</text>
        <text x="265" y="370" fill="#4A6B55" fontSize="10">$500.00 · 5 monthly payments</text>
        <rect x="700" y="350" width="60" height="22" rx="11" fill="#D0ED6F" opacity="0.3" />
        <text x="730" y="365" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">New</text>

        <rect x="210" y="395" width="570" height="50" rx="8" fill="white" />
        <circle cx="240" cy="420" r="14" fill="#6EE8B5" opacity="0.15" />
        <text x="240" y="424" textAnchor="middle" fill="#1B4332" fontSize="11" fontWeight="600">S</text>
        <text x="265" y="415" fill="#1B4332" fontSize="12" fontWeight="500">Sarah completed all payments</text>
        <text x="265" y="430" fill="#4A6B55" fontSize="10">$1,000.00 loan fully repaid</text>
        <rect x="700" y="410" width="60" height="22" rx="11" fill="#36CE8E" opacity="0.15" />
        <text x="730" y="425" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Complete</text>
      </svg>
    ),
  },
  {
    title: "Create a Loan",
    description: "Set up a new loan with custom terms, repayment schedule, and optional interest.",
    color: "#83F384",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav bar */}
        <rect x="0" y="0" width="800" height="50" fill="#1B4332" />
        <text x="30" y="32" fill="white" fontSize="18" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>

        {/* Sidebar */}
        <rect x="0" y="50" width="180" height="450" fill="#1B4332" opacity="0.95" />
        <rect x="20" y="75" width="140" height="32" rx="8" fill="transparent" />
        <text x="40" y="96" fill="white" fontSize="12" opacity="0.4">Dashboard</text>
        <rect x="20" y="120" width="140" height="32" rx="8" fill="#36CE8E" opacity="0.2" />
        <text x="40" y="141" fill="white" fontSize="12" opacity="0.8">My Loans</text>
        <circle cx="32" cy="136" r="4" fill="#36CE8E" opacity="0.6" />

        {/* Main content */}
        <rect x="180" y="50" width="620" height="450" fill="#F0FFF5" />

        {/* Form header */}
        <text x="210" y="95" fill="#1B4332" fontSize="20" fontWeight="700">Create a New Loan</text>
        <text x="210" y="115" fill="#4A6B55" fontSize="12">Fill in the details below to set up a loan agreement</text>

        {/* Form card */}
        <rect x="210" y="135" width="400" height="340" rx="12" fill="white" />

        {/* Borrower field */}
        <text x="235" y="168" fill="#1B4332" fontSize="11" fontWeight="600">Borrower</text>
        <rect x="235" y="175" width="350" height="36" rx="8" fill="#F0FFF5" stroke="#DBEEE3" strokeWidth="1" />
        <text x="250" y="198" fill="#4A6B55" fontSize="12">mike@example.com</text>

        {/* Amount field */}
        <text x="235" y="232" fill="#1B4332" fontSize="11" fontWeight="600">Loan Amount</text>
        <rect x="235" y="239" width="350" height="36" rx="8" fill="#F0FFF5" stroke="#DBEEE3" strokeWidth="1" />
        <text x="250" y="262" fill="#1B4332" fontSize="14" fontWeight="600">$500.00</text>

        {/* Repayment schedule */}
        <text x="235" y="296" fill="#1B4332" fontSize="11" fontWeight="600">Repayment Schedule</text>
        <rect x="235" y="303" width="110" height="32" rx="8" fill="#36CE8E" opacity="0.15" />
        <text x="290" y="323" textAnchor="middle" fill="#1B4332" fontSize="11" fontWeight="500">Monthly</text>
        <rect x="355" y="303" width="110" height="32" rx="8" fill="#F0FFF5" stroke="#DBEEE3" strokeWidth="1" />
        <text x="410" y="323" textAnchor="middle" fill="#4A6B55" fontSize="11">Bi-weekly</text>
        <rect x="475" y="303" width="110" height="32" rx="8" fill="#F0FFF5" stroke="#DBEEE3" strokeWidth="1" />
        <text x="530" y="323" textAnchor="middle" fill="#4A6B55" fontSize="11">Weekly</text>

        {/* Interest */}
        <text x="235" y="360" fill="#1B4332" fontSize="11" fontWeight="600">Interest Rate</text>
        <rect x="235" y="367" width="165" height="36" rx="8" fill="#F0FFF5" stroke="#DBEEE3" strokeWidth="1" />
        <text x="250" y="390" fill="#1B4332" fontSize="12">0%</text>
        <rect x="410" y="367" width="175" height="36" rx="8" fill="#F0FFF5" stroke="#DBEEE3" strokeWidth="1" />
        <text x="425" y="390" fill="#4A6B55" fontSize="12">5 payments</text>

        {/* Submit button */}
        <rect x="235" y="420" width="350" height="40" rx="8" fill="#1B4332" />
        <text x="410" y="445" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">Send Loan Offer</text>

        {/* Summary card */}
        <rect x="630" y="135" width="150" height="200" rx="12" fill="white" />
        <text x="650" y="165" fill="#1B4332" fontSize="12" fontWeight="600">Summary</text>
        <rect x="650" y="175" width="110" height="1" fill="#DBEEE3" />
        <text x="650" y="200" fill="#4A6B55" fontSize="10">Amount</text>
        <text x="760" y="200" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">$500.00</text>
        <text x="650" y="222" fill="#4A6B55" fontSize="10">Interest</text>
        <text x="760" y="222" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">0%</text>
        <text x="650" y="244" fill="#4A6B55" fontSize="10">Payments</text>
        <text x="760" y="244" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">5 × $100</text>
        <text x="650" y="266" fill="#4A6B55" fontSize="10">Schedule</text>
        <text x="760" y="266" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">Monthly</text>
        <rect x="650" y="280" width="110" height="1" fill="#DBEEE3" />
        <text x="650" y="305" fill="#4A6B55" fontSize="10">Total</text>
        <text x="760" y="305" textAnchor="end" fill="#36CE8E" fontSize="13" fontWeight="700">$500.00</text>
      </svg>
    ),
  },
  {
    title: "Loan Overview",
    description: "Track every detail of an active loan — payments made, upcoming dues, and the full agreement.",
    color: "#6EE8B5",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav bar */}
        <rect x="0" y="0" width="800" height="50" fill="#1B4332" />
        <text x="30" y="32" fill="white" fontSize="18" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>

        {/* Sidebar */}
        <rect x="0" y="50" width="180" height="450" fill="#1B4332" opacity="0.95" />
        <rect x="20" y="120" width="140" height="32" rx="8" fill="#36CE8E" opacity="0.2" />
        <text x="40" y="141" fill="white" fontSize="12" opacity="0.8">My Loans</text>
        <circle cx="32" cy="136" r="4" fill="#36CE8E" opacity="0.6" />

        {/* Main content */}
        <rect x="180" y="50" width="620" height="450" fill="#F0FFF5" />

        {/* Loan header */}
        <text x="210" y="90" fill="#4A6B55" fontSize="11">← Back to My Loans</text>
        <text x="210" y="120" fill="#1B4332" fontSize="20" fontWeight="700">Loan with Mike</text>
        <rect x="370" y="105" width="60" height="22" rx="11" fill="#36CE8E" opacity="0.15" />
        <text x="400" y="120" textAnchor="middle" fill="#36CE8E" fontSize="10" fontWeight="600">Active</text>

        {/* Progress section */}
        <rect x="210" y="140" width="380" height="120" rx="12" fill="white" />
        <text x="235" y="168" fill="#1B4332" fontSize="13" fontWeight="600">Repayment Progress</text>
        <rect x="235" y="180" width="330" height="10" rx="5" fill="#DBEEE3" />
        <rect x="235" y="180" width="198" height="10" rx="5" fill="#36CE8E" />
        <text x="235" y="210" fill="#4A6B55" fontSize="11">3 of 5 payments completed</text>
        <text x="565" y="210" textAnchor="end" fill="#1B4332" fontSize="11" fontWeight="600">60%</text>
        <text x="235" y="240" fill="#4A6B55" fontSize="11">Remaining</text>
        <text x="565" y="240" textAnchor="end" fill="#1B4332" fontSize="16" fontWeight="700">$200.00</text>

        {/* Loan details */}
        <rect x="610" y="140" width="170" height="120" rx="12" fill="white" />
        <text x="630" y="168" fill="#1B4332" fontSize="13" fontWeight="600">Details</text>
        <text x="630" y="192" fill="#4A6B55" fontSize="10">Total Amount</text>
        <text x="760" y="192" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">$500.00</text>
        <text x="630" y="212" fill="#4A6B55" fontSize="10">Interest</text>
        <text x="760" y="212" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">0%</text>
        <text x="630" y="232" fill="#4A6B55" fontSize="10">Created</text>
        <text x="760" y="232" textAnchor="end" fill="#1B4332" fontSize="10" fontWeight="600">Jan 15, 2026</text>
        <text x="630" y="252" fill="#4A6B55" fontSize="10">Next Due</text>
        <text x="760" y="252" textAnchor="end" fill="#36CE8E" fontSize="10" fontWeight="600">Apr 15, 2026</text>

        {/* Payment history */}
        <text x="210" y="290" fill="#1B4332" fontSize="14" fontWeight="600">Payment History</text>

        <rect x="210" y="305" width="570" height="45" rx="8" fill="white" />
        <text x="235" y="332" fill="#1B4332" fontSize="12" fontWeight="500">Payment #3</text>
        <text x="420" y="332" fill="#4A6B55" fontSize="11">Mar 15, 2026</text>
        <text x="620" y="332" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <circle cx="750" cy="327" r="8" fill="#36CE8E" opacity="0.2" />
        <path d="M746 327 L749 330 L754 324" stroke="#36CE8E" strokeWidth="1.5" strokeLinecap="round" />

        <rect x="210" y="358" width="570" height="45" rx="8" fill="white" />
        <text x="235" y="385" fill="#1B4332" fontSize="12" fontWeight="500">Payment #2</text>
        <text x="420" y="385" fill="#4A6B55" fontSize="11">Feb 15, 2026</text>
        <text x="620" y="385" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <circle cx="750" cy="380" r="8" fill="#36CE8E" opacity="0.2" />
        <path d="M746 380 L749 383 L754 377" stroke="#36CE8E" strokeWidth="1.5" strokeLinecap="round" />

        <rect x="210" y="411" width="570" height="45" rx="8" fill="white" />
        <text x="235" y="438" fill="#1B4332" fontSize="12" fontWeight="500">Payment #1</text>
        <text x="420" y="438" fill="#4A6B55" fontSize="11">Jan 15, 2026</text>
        <text x="620" y="438" fill="#1B4332" fontSize="12" fontWeight="600">$100.00</text>
        <circle cx="750" cy="433" r="8" fill="#36CE8E" opacity="0.2" />
        <path d="M746 433 L749 436 L754 430" stroke="#36CE8E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Contracts",
    description: "View and manage all your loan agreements. Clear terms that both sides can access anytime.",
    color: "#D0ED6F",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav bar */}
        <rect x="0" y="0" width="800" height="50" fill="#1B4332" />
        <text x="30" y="32" fill="white" fontSize="18" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>

        {/* Sidebar */}
        <rect x="0" y="50" width="180" height="450" fill="#1B4332" opacity="0.95" />
        <rect x="20" y="165" width="140" height="32" rx="8" fill="#36CE8E" opacity="0.2" />
        <text x="40" y="186" fill="white" fontSize="12" opacity="0.8">Contracts</text>
        <circle cx="32" cy="181" r="4" fill="#36CE8E" opacity="0.6" />

        {/* Main content */}
        <rect x="180" y="50" width="620" height="450" fill="#F0FFF5" />

        {/* Header */}
        <text x="210" y="95" fill="#1B4332" fontSize="20" fontWeight="700">Contracts</text>
        <text x="210" y="115" fill="#4A6B55" fontSize="12">3 active agreements</text>

        {/* Filter tabs */}
        <rect x="210" y="130" width="60" height="28" rx="14" fill="#1B4332" />
        <text x="240" y="148" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">All</text>
        <rect x="280" y="130" width="60" height="28" rx="14" fill="white" />
        <text x="310" y="148" textAnchor="middle" fill="#4A6B55" fontSize="10">Active</text>
        <rect x="350" y="130" width="80" height="28" rx="14" fill="white" />
        <text x="390" y="148" textAnchor="middle" fill="#4A6B55" fontSize="10">Completed</text>

        {/* Contract card 1 */}
        <rect x="210" y="175" width="570" height="90" rx="12" fill="white" />
        <rect x="210" y="175" width="4" height="90" rx="2" fill="#36CE8E" />
        <circle cx="245" cy="210" r="18" fill="#36CE8E" opacity="0.1" />
        <text x="245" y="215" textAnchor="middle" fill="#1B4332" fontSize="14" fontWeight="600">M</text>
        <text x="275" y="205" fill="#1B4332" fontSize="14" fontWeight="600">Loan Agreement — Mike</text>
        <text x="275" y="222" fill="#4A6B55" fontSize="11">$500.00 · Monthly · 0% interest</text>
        <text x="275" y="245" fill="#4A6B55" fontSize="10">Created Jan 15, 2026 · 3/5 payments</text>
        <rect x="680" y="200" width="80" height="26" rx="13" fill="#36CE8E" opacity="0.15" />
        <text x="720" y="217" textAnchor="middle" fill="#36CE8E" fontSize="10" fontWeight="600">Active</text>

        {/* Contract card 2 */}
        <rect x="210" y="280" width="570" height="90" rx="12" fill="white" />
        <rect x="210" y="280" width="4" height="90" rx="2" fill="#83F384" />
        <circle cx="245" cy="315" r="18" fill="#83F384" opacity="0.1" />
        <text x="245" y="320" textAnchor="middle" fill="#1B4332" fontSize="14" fontWeight="600">J</text>
        <text x="275" y="310" fill="#1B4332" fontSize="14" fontWeight="600">Loan Agreement — Jake</text>
        <text x="275" y="327" fill="#4A6B55" fontSize="11">$1,000.00 · Bi-weekly · 2% interest</text>
        <text x="275" y="350" fill="#4A6B55" fontSize="10">Created Dec 1, 2025 · 8/10 payments</text>
        <rect x="680" y="305" width="80" height="26" rx="13" fill="#36CE8E" opacity="0.15" />
        <text x="720" y="322" textAnchor="middle" fill="#36CE8E" fontSize="10" fontWeight="600">Active</text>

        {/* Contract card 3 */}
        <rect x="210" y="385" width="570" height="90" rx="12" fill="white" />
        <rect x="210" y="385" width="4" height="90" rx="2" fill="#4A6B55" opacity="0.3" />
        <circle cx="245" cy="420" r="18" fill="#4A6B55" opacity="0.08" />
        <text x="245" y="425" textAnchor="middle" fill="#4A6B55" fontSize="14" fontWeight="600">S</text>
        <text x="275" y="415" fill="#1B4332" fontSize="14" fontWeight="600">Loan Agreement — Sarah</text>
        <text x="275" y="432" fill="#4A6B55" fontSize="11">$750.00 · Monthly · 0% interest</text>
        <text x="275" y="455" fill="#4A6B55" fontSize="10">Created Sep 10, 2025 · Fully repaid</text>
        <rect x="680" y="410" width="80" height="26" rx="13" fill="#4A6B55" opacity="0.1" />
        <text x="720" y="427" textAnchor="middle" fill="#4A6B55" fontSize="10" fontWeight="600">Complete</text>
      </svg>
    ),
  },
  {
    title: "Payment Schedule",
    description: "View upcoming and completed payments with a clear timeline of every instalment.",
    color: "#36CE8E",
    svg: (
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        {/* Top nav bar */}
        <rect x="0" y="0" width="800" height="50" fill="#1B4332" />
        <text x="30" y="32" fill="white" fontSize="18" fontWeight="700" fontFamily="serif" fontStyle="italic" opacity="0.9">Vony</text>

        {/* Sidebar */}
        <rect x="0" y="50" width="180" height="450" fill="#1B4332" opacity="0.95" />
        <rect x="20" y="210" width="140" height="32" rx="8" fill="#36CE8E" opacity="0.2" />
        <text x="40" y="231" fill="white" fontSize="12" opacity="0.8">Payments</text>
        <circle cx="32" cy="226" r="4" fill="#36CE8E" opacity="0.6" />

        {/* Main content */}
        <rect x="180" y="50" width="620" height="450" fill="#F0FFF5" />

        {/* Header */}
        <text x="210" y="95" fill="#1B4332" fontSize="20" fontWeight="700">Payment Schedule</text>
        <text x="210" y="115" fill="#4A6B55" fontSize="12">Loan with Mike · $500.00</text>

        {/* Timeline */}
        {/* Vertical line */}
        <rect x="240" y="140" width="2" height="320" fill="#DBEEE3" />

        {/* Payment 1 - completed */}
        <circle cx="241" cy="160" r="8" fill="#36CE8E" />
        <path d="M237 160 L240 163 L245 157" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="265" y="142" width="500" height="50" rx="10" fill="white" />
        <text x="285" y="163" fill="#1B4332" fontSize="12" fontWeight="600">Payment 1 — $100.00</text>
        <text x="285" y="180" fill="#4A6B55" fontSize="10">Paid on Jan 15, 2026</text>
        <rect x="690" y="155" width="55" height="20" rx="10" fill="#36CE8E" opacity="0.15" />
        <text x="717" y="169" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        {/* Payment 2 - completed */}
        <circle cx="241" cy="220" r="8" fill="#36CE8E" />
        <path d="M237 220 L240 223 L245 217" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="265" y="202" width="500" height="50" rx="10" fill="white" />
        <text x="285" y="223" fill="#1B4332" fontSize="12" fontWeight="600">Payment 2 — $100.00</text>
        <text x="285" y="240" fill="#4A6B55" fontSize="10">Paid on Feb 15, 2026</text>
        <rect x="690" y="215" width="55" height="20" rx="10" fill="#36CE8E" opacity="0.15" />
        <text x="717" y="229" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        {/* Payment 3 - completed */}
        <circle cx="241" cy="280" r="8" fill="#36CE8E" />
        <path d="M237 280 L240 283 L245 277" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="265" y="262" width="500" height="50" rx="10" fill="white" />
        <text x="285" y="283" fill="#1B4332" fontSize="12" fontWeight="600">Payment 3 — $100.00</text>
        <text x="285" y="300" fill="#4A6B55" fontSize="10">Paid on Mar 15, 2026</text>
        <rect x="690" y="275" width="55" height="20" rx="10" fill="#36CE8E" opacity="0.15" />
        <text x="717" y="289" textAnchor="middle" fill="#36CE8E" fontSize="9" fontWeight="600">Paid</text>

        {/* Payment 4 - upcoming */}
        <circle cx="241" cy="340" r="8" fill="white" stroke="#D0ED6F" strokeWidth="2" />
        <rect x="265" y="322" width="500" height="50" rx="10" fill="white" />
        <text x="285" y="343" fill="#1B4332" fontSize="12" fontWeight="600">Payment 4 — $100.00</text>
        <text x="285" y="360" fill="#4A6B55" fontSize="10">Due Apr 15, 2026</text>
        <rect x="690" y="335" width="55" height="20" rx="10" fill="#D0ED6F" opacity="0.3" />
        <text x="717" y="349" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">Due</text>

        {/* Payment 5 - upcoming */}
        <circle cx="241" cy="400" r="8" fill="white" stroke="#DBEEE3" strokeWidth="2" />
        <rect x="265" y="382" width="500" height="50" rx="10" fill="white" />
        <text x="285" y="403" fill="#1B4332" fontSize="12" fontWeight="600">Payment 5 — $100.00</text>
        <text x="285" y="420" fill="#4A6B55" fontSize="10">Due May 15, 2026</text>
        <rect x="690" y="395" width="55" height="20" rx="10" fill="#DBEEE3" opacity="0.5" />
        <text x="717" y="409" textAnchor="middle" fill="#4A6B55" fontSize="9" fontWeight="600">Pending</text>
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
