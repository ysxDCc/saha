'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MagneticButton from '@/components/ui/MagneticButton';

const links = [
  { href: '/', label: 'Úvod' },
  { href: '/about', label: 'O nás' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Rezervácie' },
  { href: '/contact', label: 'Kontakt' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass !bg-black/60 !backdrop-blur-3xl' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors duration-300 text-xs tracking-[0.3em] uppercase font-medium"
          >
            SAHA BAR
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                  pathname === l.href
                    ? 'text-[#d4af37]'
                    : 'text-[#f5f1e8]/40 hover:text-[#d4af37]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <MagneticButton
              href="/reservations"
              className="!py-2 !px-6 !text-[11px] !tracking-[0.2em]"
            >
              <span>Rezervácie</span>
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#d4af37]/60 hover:text-[#d4af37] transition-colors text-xl"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-10"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-light text-[#f5f1e8]/40 hover:text-[#d4af37] transition-colors"
                  style={{ fontFamily: 'Cormorant, serif' }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;