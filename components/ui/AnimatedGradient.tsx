'use client';

import React from 'react';

const AnimatedGradient: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 animated-gradient opacity-70" />
      <div className="fixed inset-0 -z-5 opacity-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M30 0v60M0 30h60" stroke="%23ff0000" stroke-width="0.5" opacity="0.1"/%3E%3C/svg%3E")',
      }} />
    </>
  );
};

export default AnimatedGradient;