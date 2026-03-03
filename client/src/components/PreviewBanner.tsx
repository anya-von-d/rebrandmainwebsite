import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function PreviewBanner() {
  return (
    <section className="bg-[#1B4332] py-14 md:py-16">
      <div className="max-w-[700px] mx-auto px-6 md:px-12 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#50C878]/60 mb-4">
          Preview
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
          See Vony in Action
        </h2>
        <p className="font-sans text-base text-white/50 max-w-[440px] mx-auto leading-relaxed mb-8">
          Take a look at the portal before you sign up. Browse through the key screens and see how simple lending can be.
        </p>
        <a
          href="/preview"
          className="inline-flex items-center gap-2 bg-[#36CE8E] hover:bg-[#36CE8E]/85 text-[#0A1A10] px-7 py-3 rounded-lg font-semibold text-base transition-all shadow-lg shadow-black/20"
        >
          <Eye size={18} />
          Preview the Portal
        </a>
      </div>
    </section>
  );
}
