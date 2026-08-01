'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO, OPENING_HOURS, SOCIAL_LINKS } from '@/lib/constants';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#aa00ff]">KONTAKT</h1>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold text-[#00ffaa] mb-4">Adresa</h2>
            <p className="text-gray-300">{BUSINESS_INFO.address}</p>
            <p className="text-gray-400">{BUSINESS_INFO.email}</p>
          </div>
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold text-[#00ffaa] mb-4">Hodiny</h2>
            {OPENING_HOURS.map((h, i) => (
              <div key={i} className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">{h.day}</span>
                <span className="text-[#00ffaa]">{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <MagneticButton href={SOCIAL_LINKS.instagram}>
            <span>Instagram</span>
            <span className="arrow ml-2">→</span>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}