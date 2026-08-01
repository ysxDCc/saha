'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import TextScramble from '@/components/ui/TextScramble';
import CountUp from '@/components/ui/CountUp';
import { OPENING_HOURS, SPECIAL_OF_MONTH } from '@/lib/constants';

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const specialRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const { scrollYProgress: specialScroll } = useScroll({ target: specialRef, offset: ['start end', 'end start'] });
  const specialScale = useTransform(specialScroll, [0, 0.5], [0.9, 1]);
  const specialOpacity = useTransform(specialScroll, [0, 0.5], [0.4, 1]);

  const slides = [
    { img: 'https://saha.bar/wp-content/uploads/2025/01/IMG_0453-scaled.jpg', text: 'Zážitok za hranicou reality' },
    { img: 'https://saha.bar/wp-content/uploads/2025/01/IMG_3656-scaled.jpg', text: 'Energia, ktorú pocítite' },
    { img: 'https://saha.bar/wp-content/uploads/2025/01/F7F8FE40-8822-48E7-BC85-6207C9BED2D0.jpg', text: 'Nezabudnuteľné noci' },
  ];

  useEffect(() => {
    const interval = setInterval(() => setSlide(prev => (prev + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const stats = [
    { end: 500, suffix: '+', label: 'Spokojných hostí' },
    { end: 50, suffix: '+', label: 'Remeselných drinkov' },
    { end: 3, suffix: '', label: 'Roky tradície' },
    { end: 4, suffix: ':00', label: 'Do rána' },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img src={slides[slide].img} className="w-full h-full object-cover opacity-25" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-[#030504]/60 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#00ffaa]/5 blur-3xl"
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#aa00ff]/8 blur-3xl"
          animate={{ x: [0, -40, 30, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#aa00ff] mb-6"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                SAHA BAR
              </motion.h1>
              <div className="text-xl md:text-2xl font-light text-[#e0f7ec]/70 mb-12 tracking-wider h-10">
                <TextScramble text={slides[slide].text} />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 justify-center"
          >
            <MagneticButton href="/about" className="group">
              <span>Objaviť</span>
              <span className="arrow ml-2">→</span>
              <div className="glow-burst" />
            </MagneticButton>
            <MagneticButton href="/menu" className="!border-[#aa00ff] !text-[#aa00ff] hover:!bg-[#aa00ff] group">
              <span>Menu</span>
              <div className="glow-burst" />
            </MagneticButton>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}>
              <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                slide === i ? 'bg-[#00ffaa] scale-125 shadow-lg shadow-[#00ffaa]/50' : 'bg-white/20 hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section className="relative -mt-16 z-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-4xl mx-auto p-10 md:p-12"
        >
          <h2 className="text-[#00ffaa] font-bold text-sm mb-8 tracking-widest stagger-item">
            [ REZERVÁCIA ]
          </h2>
          <form className="flex flex-wrap gap-4 items-end">
            {['Meno', 'Email', 'Dátum', 'Počet osôb'].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 min-w-[130px]"
              >
                <input
                  type={i === 1 ? 'email' : i === 2 ? 'date' : i === 3 ? 'number' : 'text'}
                  placeholder={label}
                  className="w-full bg-transparent border-b-2 border-[#00ffaa]/30 text-white px-3 py-3 text-sm focus:outline-none focus:border-[#00ffaa] transition-colors hover:border-[#00ffaa]/50"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex-1 min-w-[120px]"
            >
              <button
                type="submit"
                className="relative w-full bg-[#00ffaa] text-black font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#aa00ff] transition-colors rounded-full overflow-hidden group"
              >
                <span className="relative z-10">Odoslať</span>
                <div className="glow-burst" />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center stagger-item"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-5xl md:text-6xl font-black text-[#00ffaa] mb-2">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOURS + IMAGES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 flex flex-col justify-center"
          >
            <h3 className="text-[#00ffaa] font-bold text-sm mb-8 tracking-widest">[ HODINY ]</h3>
            {OPENING_HOURS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-between text-sm mb-3 cursor-default hover:text-[#00ffaa] transition-colors"
              >
                <span className="text-gray-400">{h.day}</span>
                <span className="text-[#00ffaa]">{h.hours}</span>
              </motion.div>
            ))}
            <MagneticButton href="/contact" className="mt-8 group">
              <span>Nájsť nás</span>
              <span className="arrow ml-2">→</span>
              <div className="glow-burst" />
            </MagneticButton>
          </motion.div>

          {[
            'https://saha.bar/wp-content/uploads/2025/01/583F0FB3-5BC9-4430-8C18-3062B7A99C27.jpg',
            'https://saha.bar/wp-content/uploads/2025/12/SAHA-BAR-724x1024.jpg',
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="glass-card overflow-hidden h-80 group"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.02}deg) rotateY(${mousePos.x * 0.02}deg)`,
              }}
            >
              <img
                src={img}
                className="liquid-img w-full h-full object-cover"
                alt=""
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030504]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPECIAL – now fully responsive */}
      <section ref={specialRef} className="py-28 px-6 overflow-hidden">
        <motion.div
          style={{ scale: specialScale, opacity: specialOpacity }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-[#aa00ff] font-bold text-xs tracking-widest mb-4 stagger-item">ŠPECIÁL MESIACA</p>
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 stagger-item leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {SPECIAL_OF_MONTH.name}
            </motion.h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 stagger-item leading-relaxed">
              {SPECIAL_OF_MONTH.description}
            </p>
            <MagneticButton href="/menu" className="group">
              <span>Detail</span>
              <span className="arrow ml-2">→</span>
              <div className="glow-burst" />
            </MagneticButton>
          </div>
          <motion.div
            className="glass-card overflow-hidden w-full aspect-[4/5] md:aspect-[4/3] lg:h-[500px] lg:aspect-auto"
            whileHover={{ scale: 1.02 }}
            style={{
              transform: `perspective(1200px) rotateY(${mousePos.x * 0.03}deg)`,
            }}
          >
            <img
              src="https://saha.bar/wp-content/uploads/2025/01/30A6409B-6D43-439F-8AA8-74FD2DCC008B.jpg"
              className="liquid-img w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* MENU CARDS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Domáce', desc: 'Tradičné špeciality.' },
            { img: 'https://saha.bar/wp-content/uploads/2025/01/Snimka-obrazovky-2025-01-14-o-23.21.10.png' },
            { title: 'Limonády', desc: 'Čerstvé ovocné limonády.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -6 }}
              className={item.img ? 'glass-card overflow-hidden h-80' : 'glass-card p-10 flex flex-col justify-between h-80'}
            >
              {item.img ? (
                <>
                  <img src={item.img} className="liquid-img w-full h-full object-cover" alt="" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold text-lg">Menu</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00ffaa] mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                  <MagneticButton href="/menu" className="text-sm group">
                    <span>Viac</span>
                    <span className="arrow ml-1">→</span>
                    <div className="glow-burst" />
                  </MagneticButton>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}