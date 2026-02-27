import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollHighlight from '@/components/ScrollHighlight';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '' });
    toast({
      title: "You're on the list!",
      description: "We'll let you know as soon as Vony is ready.",
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="bg-[#DBEEE3] py-20 md:py-28 relative">
      <div className="max-w-[700px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#7A9A85] mb-4">
            Get Early Access
          </p>
          <ScrollHighlight
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
            colorFrom="#98D8AA"
            colorTo="#1B4332"
          >
            Be the First to Try Vony
          </ScrollHighlight>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-sans text-base text-[#4A6B55] max-w-[440px] mx-auto leading-relaxed"
          >
            Join the waitlist and we'll notify you as soon as Vony launches. No spam, just one email when we're ready.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4 max-w-[480px] mx-auto"
        >
          <input
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 bg-[#C8E8D4] rounded-lg text-sm text-[#0A1A10] placeholder:text-[#7A9A85] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 transition-all"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 bg-[#C8E8D4] rounded-lg text-sm text-[#0A1A10] placeholder:text-[#7A9A85] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#0A1A10] hover:bg-[#0A1A10]/90 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all disabled:opacity-60 cursor-pointer"
          >
            <Send size={16} />
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </button>
          <p className="font-mono text-[10px] text-[#7A9A85] text-center tracking-wide">
            Free forever &middot; No credit card required
          </p>
        </motion.form>
      </div>
    </section>
  );
}
