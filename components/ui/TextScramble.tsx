'use client';

import React, { useEffect, useState } from 'react';

interface Props {
  text: string;
  className?: string;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

const TextScramble: React.FC<Props> = ({ text, className = '' }) => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let frame = 0;
    let resolveFunc: (() => void) | null = null;
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];

    const update = () => {
      let output = '';
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span class="text-[#00ffaa]">${char}</span>`;
        } else {
          output += from;
        }
      }
      setDisplay(output);
      if (complete === queue.length) {
        if (resolveFunc) resolveFunc();
      } else {
        frame++;
        requestAnimationFrame(update);
      }
    };

    const start = () => {
      const length = Math.max(text.length, 1);
      queue.push({
        from: '',
        to: text,
        start: 0,
        end: 20 + Math.floor(Math.random() * 10),
      });
      frame = 0;
      update();
    };

    start();

    return () => {
      resolveFunc = null;
    };
  }, [text]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: display }} />;
};

export default TextScramble;