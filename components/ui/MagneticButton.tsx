'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const MagneticButton: React.FC<Props> = ({ href, children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.5, y: y * 0.5 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <Link href={href} className={`inline-block ${className}`} data-cursor-hover>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="btn-magnetic group"
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default MagneticButton;