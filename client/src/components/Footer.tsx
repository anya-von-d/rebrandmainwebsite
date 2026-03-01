
export default function Footer() {
  return (
    <footer className="bg-[#1B4332] py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-display italic text-2xl text-white tracking-wide mb-3">
              Vony
            </p>
            <p className="font-sans text-sm text-white/40 max-w-[280px] leading-relaxed">
              Lending between friends, made simple. Create clear agreements,
              track repayments, and keep relationships strong.
            </p>
            <a
              href="/contact-us"
              className="inline-block mt-5 px-5 py-2.5 rounded-lg bg-[#36CE8E] text-[#0A1A10] font-sans text-sm font-semibold hover:bg-[#36CE8E]/85 transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Product & Company */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 mb-4">
                Product
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#about" className="font-sans text-sm text-white/50 hover:text-[#50C878] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="font-sans text-sm text-white/50 hover:text-[#50C878] transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#features" className="font-sans text-sm text-white/50 hover:text-[#50C878] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#faq" className="font-sans text-sm text-white/50 hover:text-[#50C878] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 mb-4">
                Company
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#contact" className="font-sans text-sm text-white/50 hover:text-[#50C878] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <span className="font-sans text-sm text-white/50 hover:text-[#50C878] transition-colors cursor-pointer">
                    Privacy
                  </span>
                </li>
                <li>
                  <span className="font-sans text-sm text-white/50 hover:text-[#50C878] transition-colors cursor-pointer">
                    Terms
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 mb-4">
              Connect
            </p>
            <a
              href="mailto:hello@vony-lending.com"
              className="font-mono text-sm text-white/50 hover:text-[#50C878] transition-colors block"
            >
              hello@vony-lending.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-white/25">
            &copy; 2026 Vony. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-white/25">
            Made with care for friendships everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
