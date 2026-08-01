'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-[#030504] flex items-center justify-center"
        >
          <motion.div
            className="text-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00ffaa] to-[#aa00ff] opacity-80 blur-md animate-pulse" />
            <p className="text-[#00ffaa] font-bold text-xl tracking-widest">SAHA BAR</p>
          </motion.div>
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </AnimatePresence>
  );
};

export default Preloader;