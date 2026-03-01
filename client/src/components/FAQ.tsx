import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollHighlight from "@/components/ScrollHighlight";

const cardBgColors = ["#D0ED6F", "#83F384", "#6EE8B5"];

const faqItems = [
  {
    question: "Is Vony a bank?",
    answer:
      "No. Vony is not a bank and does not hold or transfer money. We provide a platform for creating and managing loan agreements between friends and family. All payments are handled directly between parties.",
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
      "Unlike payment apps, Vony focuses on the agreement and tracking side of lending, not the money transfer. We help you set terms, create contracts, track repayments, and maintain accountability. Think of it as the paperwork for informal loans.",
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
      className="bg-[#DBEEE3] pt-8 md:pt-12 pb-14 md:pb-20 lg:pb-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
          {/* Left — Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7A9A85] mb-4">
              FAQ
            </p>
            <ScrollHighlight
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[0.95]"
              colorFrom="#98D8AA"
              colorTo="#1B4332"
            >
              Common
              <br />
              Questions
            </ScrollHighlight>
          </motion.div>

          {/* Right — Accordion in box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-[#DBFFEB] rounded-2xl p-6 md:p-8 lg:p-10">
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-0 rounded-xl overflow-hidden"
                    style={{ backgroundColor: cardBgColors[index % cardBgColors.length] }}
                  >
                    <AccordionTrigger className="px-6 py-5 text-left font-sans font-semibold text-[15px] text-[#0A1A10] hover:no-underline hover:text-[#0A1A10]/70 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 font-sans text-sm text-[#0A1A10]/70 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
