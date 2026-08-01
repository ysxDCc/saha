'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setWidth(`${latest * 100}%`);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ width }}
    />
  );
};

export default ScrollProgress;