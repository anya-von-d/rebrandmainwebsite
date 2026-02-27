import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollHighlight from "@/components/ScrollHighlight";

const faqItems = [
  {
    question: "Is Vony a bank?",
    answer:
      "No. Vony is not a bank and does not hold or transfer money. We provide a platform for creating and managing loan agreements between friends and family. All payments are handled directly between parties.",
  },
  {
    question: "How is my data protected?",
    answer:
      "We use bank-level encryption (AES-256) to protect all your personal and loan data. Your information is stored securely and is never shared with third parties. We're fully GDPR compliant.",
  },
  {
    question: "Is Vony free to use?",
    answer:
      "Yes! Creating loan agreements, tracking repayments, and managing your contracts is completely free. There are no hidden fees, no premium tiers, and no surprises.",
  },
  {
    question: "What if someone doesn't repay?",
    answer:
      "Vony provides clear documentation of loan agreements and payment history. While we can't enforce repayment, having a transparent record helps resolve disputes. You can send reminders and track all activity in the app.",
  },
  {
    question: "How is Vony different from Venmo or PayPal?",
    answer:
      "Unlike payment apps, Vony focuses on the agreement and tracking side of lending — not the money transfer. We help you set terms, create contracts, track repayments, and maintain accountability. Think of it as the paperwork for informal loans.",
  },
  {
    question: "Can I set interest on loans?",
    answer:
      "Yes. You can choose to add interest or keep it at 0%. Vony lets you set custom rates and automatically calculates repayment schedules. Both parties see the full breakdown before agreeing.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up, create a loan offer by entering the amount and terms, and send it to the borrower. Once they accept, Vony generates a digital contract and starts tracking repayments automatically.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-[#E8FCF0] py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-[800px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
            FAQ
          </p>
          <ScrollHighlight
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95]"
            colorFrom="#98D8AA"
            colorTo="#1B4332"
          >
            Common Questions
          </ScrollHighlight>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 bg-[#D6F5E2] rounded-xl overflow-hidden data-[state=open]:bg-[#C8EED6]"
              >
                <AccordionTrigger className="px-6 py-5 text-left font-sans font-semibold text-[15px] text-[#0A1A10] hover:no-underline hover:text-[#00A86B] transition-colors [&[data-state=open]]:text-[#00A86B]">
                  <span className="flex items-center gap-3">
                    <span className="w-1 h-6 rounded-full bg-[#00A86B] opacity-0 data-[state=open]:opacity-100 transition-opacity flex-shrink-0 hidden md:block" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 font-sans text-sm text-[#4A6B55] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
