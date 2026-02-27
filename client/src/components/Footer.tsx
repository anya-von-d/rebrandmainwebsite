export default function Footer() {
  return (
    <footer className="bg-[#071A0E] py-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg text-[#E8F5ED] mb-1">
              <span className="font-display italic tracking-wide text-[#50C878]">Vony</span>
            </p>
            <p className="font-mono text-xs text-[#98D8AA] max-w-[480px]">
              Lending between friends, made simple.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@vony.app"
              className="font-mono text-xs text-[#7A9A85] hover:text-[#50C878] transition-colors"
            >
              hello@vony.app
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#1B4332] flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-[#4A6B55]">
            &copy; 2025 Vony. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#0D9B76]">Privacy</span>
            <span className="font-mono text-[11px] text-[#4A6B55]">&middot;</span>
            <span className="font-mono text-[11px] text-[#0D9B76]">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
