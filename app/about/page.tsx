'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '@/lib/constants';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#aa00ff]">O NÁS</h1>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-10">
            <h2 className="text-2xl font-bold text-[#00ffaa] mb-4">Kto sme</h2>
            <p className="text-gray-300">{BUSINESS_INFO.description}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-10">
            <h2 className="text-2xl font-bold text-[#00ffaa] mb-4">Filozofia</h2>
            <p className="text-gray-300">Každý drink je umenie. Používame len najkvalitnejšie suroviny.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}