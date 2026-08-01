'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservations() {
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '2' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert('Rezervácia odoslaná!'); };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#aa00ff]">REZERVÁCIE</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {['Meno', 'Email', 'Dátum', 'Počet osôb'].map((label, i) => (
              <input
                key={i}
                type={i === 1 ? 'email' : i === 2 ? 'date' : i === 3 ? 'number' : 'text'}
                placeholder={label}
                value={Object.values(form)[i]}
                onChange={(e) => setForm({ ...form, [Object.keys(form)[i]]: e.target.value })}
                className="w-full bg-transparent border-b-2 border-[#00ffaa]/30 text-white px-3 py-3 focus:outline-none focus:border-[#00ffaa] transition-colors"
                required
              />
            ))}
            <button type="submit" className="w-full bg-[#00ffaa] text-black font-bold py-4 uppercase tracking-widest hover:bg-[#aa00ff] transition-colors rounded-full">
              Odoslať
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}