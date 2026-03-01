import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollHighlight from '@/components/ScrollHighlight';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={sectionRef} className="bg-[#36CE8E] py-20 md:py-28 relative">
      <div className="max-w-[700px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#0A1A10]/50 mb-4">
            Get Started
          </p>
          <ScrollHighlight
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
            colorFrom="rgba(10,26,16,0.4)"
            colorTo="#0A1A10"
          >
            Ready to Make Lending Simple?
          </ScrollHighlight>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-sans text-base text-[#0A1A10]/70 max-w-[440px] mx-auto leading-relaxed"
          >
            Remove the awkwardness from lending money to friends and family. Set clear terms, track every payment, and protect your relationships.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href="https://lend-with-vony.com/home"
              className="inline-block bg-[#0A1A10] hover:bg-[#0A1A10]/90 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all shadow-lg shadow-[#0A1A10]/20"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
