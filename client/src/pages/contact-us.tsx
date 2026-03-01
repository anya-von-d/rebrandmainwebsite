import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="relative">
      <Navigation />
      <main className="bg-[#DBEEE3] min-h-screen pt-14">
        <div className="max-w-[700px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#0A1A10]/50 mb-4">
              Contact Us
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1B4332]">
              Get in Touch
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-sans text-base text-[#0A1A10]/70 max-w-[440px] mx-auto leading-relaxed"
            >
              Have a question, feedback, or just want to say hello? Drop us a message and we'll get back to you.
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4 max-w-[480px] mx-auto"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0A1A10]/10 rounded-lg text-sm text-[#0A1A10] placeholder:text-[#0A1A10]/40 focus:outline-none focus:ring-2 focus:ring-[#0A1A10]/20 transition-all font-sans"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0A1A10]/10 rounded-lg text-sm text-[#0A1A10] placeholder:text-[#0A1A10]/40 focus:outline-none focus:ring-2 focus:ring-[#0A1A10]/20 transition-all font-sans"
            />
            <textarea
              placeholder="Your message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0A1A10]/10 rounded-lg text-sm text-[#0A1A10] placeholder:text-[#0A1A10]/40 focus:outline-none focus:ring-2 focus:ring-[#0A1A10]/20 transition-all font-sans resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-[#0A1A10] hover:bg-[#0A1A10]/90 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all disabled:opacity-60 cursor-pointer font-sans"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
