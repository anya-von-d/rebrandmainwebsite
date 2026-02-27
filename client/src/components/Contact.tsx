import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CursorGlow from '@/components/CursorGlow';
import ScrollHighlight from '@/components/ScrollHighlight';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="bg-[var(--bg)] py-20 md:py-28 relative">
      <CursorGlow />
      <div className="max-w-[900px] mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#888899] mb-4"
        >
          CONTACT
        </motion.p>
        <ScrollHighlight
          className="font-display italic text-3xl md:text-4xl lg:text-5xl mb-3"
          colorFrom="#C8C8D0"
          colorTo="#0A0A0A"
        >
          Get in touch
        </ScrollHighlight>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[1px] bg-[#E0E0E8] origin-left mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-base text-[#555566] leading-relaxed mb-8">
              Have any questions? Reach out to me from this contact form and I will get back to you shortly.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:anya2025@stanford.edu"
                className="flex items-center gap-3 text-sm text-[#555566] hover:text-[#0066FF] transition-colors group"
              >
                <Mail size={16} className="text-[#888899] group-hover:text-[#0066FF] transition-colors" />
                <span className="font-mono">anya2025@stanford.edu</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-white border border-[#E0E0E8] rounded-lg text-sm text-[#0A0A0A] placeholder:text-[#888899] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-white border border-[#E0E0E8] rounded-lg text-sm text-[#0A0A0A] placeholder:text-[#888899] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
            />
            <textarea
              placeholder="Message *"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 bg-white border border-[#E0E0E8] rounded-lg text-sm text-[#0A0A0A] placeholder:text-[#888899] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:opacity-60"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
