'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { OPENING_HOURS, BUSINESS_INFO } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#d4af37]/10 py-24 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] shimmer" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://saha.bar/wp-content/uploads/2024/11/logo-saha.png.png"
              alt="SAHA BAR"
              className="h-5 mb-6 opacity-30"
              loading="lazy"
            />
            <p className="text-[#f5f1e8]/20 text-[11px] leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[10px] tracking-[0.5em] text-[#d4af37]/50 uppercase mb-6">
              Navigácia
            </p>
            <div className="space-y-3">
              {['Úvod', 'O nás', 'Menu', 'Rezervácie', 'Kontakt'].map((l) => (
                <Link
                  key={l}
                  href={l === 'Úvod' ? '/' : `/${l.toLowerCase().replace(' ', '-')}`}
                  className="block text-[#f5f1e8]/20 text-[11px] hover:text-[#d4af37]/70 transition-colors duration-300"
                >
                  {l}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[10px] tracking-[0.5em] text-[#d4af37]/50 uppercase mb-6">
              Hodiny
            </p>
            <div className="space-y-3">
              {OPENING_HOURS.map((s, i) => (
                <div key={i}>
                  <p className="text-[#f5f1e8]/20 text-[10px]">{s.day}</p>
                  <p className="text-[#f5f1e8]/40 text-[11px]">{s.hours}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[10px] tracking-[0.5em] text-[#d4af37]/50 uppercase mb-6">
              Instagram
            </p>
            <div className="glass p-1 zoom-img cursor-pointer rounded-xl overflow-hidden">
              <img
                src="https://saha.bar/wp-content/uploads/2025/01/Vizitka-Prispevok-na-Instagram-edited-683x1024.png"
                alt="Instagram"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
        <div className="mt-20 pt-8 border-t border-[#d4af37]/10 text-center">
          <p className="text-[#f5f1e8]/10 text-[8px] tracking-[0.6em] uppercase">
            © {new Date().getFullYear()} SAHA BAR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;