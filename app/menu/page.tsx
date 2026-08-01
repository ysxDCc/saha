'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MENU_ITEMS, SPECIAL_OF_MONTH } from '@/lib/constants';

export default function Menu() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#aa00ff]">MENU</h1>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(MENU_ITEMS).map(([key, cat], i) => (
            <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10">
              <h2 className="text-2xl font-bold text-[#00ffaa] mb-4">{cat.title}</h2>
              <p className="text-gray-300">{cat.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 glass-card p-8 text-center">
          <p className="text-[#aa00ff] font-bold">Špeciál mesiaca: {SPECIAL_OF_MONTH.name}</p>
          <p className="text-gray-400 text-sm">{SPECIAL_OF_MONTH.description}</p>
        </div>
      </div>
    </div>
  );
}