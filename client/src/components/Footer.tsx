import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F14] py-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg text-[#F0F0F5] mb-1">
              <span className="font-serif font-bold uppercase tracking-tight">Anya</span>{" "}
              <span className="font-display italic tracking-wide text-[#0066FF]">von Diessl</span>
            </p>
            <p className="font-mono text-xs text-[#8888A0] max-w-[480px]">
              Graduate student at Stanford University pursuing AI research with a focus on medical imaging and precision healthcare.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:anya2025@stanford.edu"
              className="font-mono text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors"
            >
              anya2025@stanford.edu
            </a>
            <a
              href="https://www.linkedin.com/in/anya-von-diessl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#222233] flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-[#555566]">
            Palo Alto, CA
          </p>
          <p className="font-mono text-[11px] text-[#555566]">
            &copy; 2025 Anya von Diessl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
