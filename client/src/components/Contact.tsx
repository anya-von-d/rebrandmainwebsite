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
    <section id="contact" ref={sectionRef} className="bg-[var(--bg)] py-20 md:py-24 relative">
      <CursorGlow />
      <div className="max-w-[900px] mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#7A9A85] mb-4"
        >
          CONTACT
        </motion.p>
        <ScrollHighlight
          className="font-display italic text-3xl md:text-4xl lg:text-5xl mb-3"
          colorFrom="#98D8AA"
          colorTo="#1B4332"
        >
          Get in touch
        </ScrollHighlight>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[1px] origin-left mb-10"
          style={{ background: "linear-gradient(to right, #00A86B, #50C878, #0D9B76)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-base text-[#4A6B55] leading-relaxed mb-8">
              Have a question about Vony? We'd love to hear from you. Fill out the form and we'll get back to you shortly.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@vony.app"
                className="flex items-center gap-3 text-sm text-[#4A6B55] hover:text-[#50C878] transition-colors group"
              >
                <Mail size={16} className="text-[#0D9B76] group-hover:text-[#50C878] transition-colors" />
                <span className="font-mono">hello@vony.app</span>
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
              className="w-full px-4 py-3 bg-[#F5FAF6] border border-[#C8DCCE] rounded-lg text-sm text-[#0A1A10] placeholder:text-[#7A9A85] focus:outline-none focus:border-[#50C878] focus:ring-1 focus:ring-[#50C878] transition-colors"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-[#F5FAF6] border border-[#C8DCCE] rounded-lg text-sm text-[#0A1A10] placeholder:text-[#7A9A85] focus:outline-none focus:border-[#50C878] focus:ring-1 focus:ring-[#50C878] transition-colors"
            />
            <textarea
              placeholder="Message *"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 bg-[#F5FAF6] border border-[#C8DCCE] rounded-lg text-sm text-[#0A1A10] placeholder:text-[#7A9A85] focus:outline-none focus:border-[#50C878] focus:ring-1 focus:ring-[#50C878] transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-gradient-to-r from-[#00A86B] to-[#0D9B76] hover:from-[#008F5A] hover:to-[#087A5C] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all disabled:opacity-60 shadow-sm shadow-[#00A86B]/20"
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
