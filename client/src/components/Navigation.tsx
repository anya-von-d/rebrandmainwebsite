import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Background', href: '#coursework' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOverHero, setIsOverHero] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsOverHero(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'education', 'coursework', 'contact'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    // Small delay to let the menu close animation start before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* Navigation bar — solid rectangle, always visible */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-colors duration-300 ${
          isOverHero && !isMenuOpen
            ? 'bg-[#0A0A0F] border-b border-[#1a1a2e]'
            : 'bg-[#FAFAFA] border-b border-[#E0E0E8]'
        }`}
      >
        <div className="w-full px-6 md:px-10 grid grid-cols-3 items-center">
          {/* Left — empty spacer for symmetry */}
          <div />

          {/* Center — Logo */}
          <div className="flex justify-center">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-display italic text-2xl tracking-wide transition-colors duration-300 ${
                isOverHero && !isMenuOpen ? 'text-[#F0F0F5]' : 'text-[#0A0A0A]'
              }`}
            >
              avd
            </a>
          </div>

          {/* Right — Hamburger button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-8 h-8 flex items-center justify-center transition-colors duration-300 ${
                isOverHero && !isMenuOpen ? 'text-[#F0F0F5]' : 'text-[#0A0A0A]'
              }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066FF] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAFAFA]"
          >
            {/* Menu content — centered navigation links */}
            <div className="flex flex-col items-center justify-center h-full pt-14">
              <nav className="flex flex-col items-center gap-2">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block font-display italic text-5xl md:text-6xl lg:text-7xl py-2 transition-colors duration-200 ${
                          isActive
                            ? 'text-[#0066FF]'
                            : 'text-[#0A0A0A] hover:text-[#0066FF]'
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom info in overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-10 left-0 right-0 flex justify-between items-end px-6 md:px-10"
              >
                <p className="font-mono text-[11px] text-[#888899] uppercase tracking-[0.06em]">
                  Anya von Diessl
                </p>
                <p className="font-mono text-[11px] text-[#888899] uppercase tracking-[0.06em]">
                  Stanford CS &middot; AI
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
