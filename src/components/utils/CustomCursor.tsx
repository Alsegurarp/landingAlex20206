'use client';

import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type MousePosition = {
  x: number;
  y: number;
};

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useGSAP(() => {
    const cursor = document.querySelector('.cursor');
    
    // Only run animation if cursor element exists
    if (!cursor) return;

    const mouseMoved = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMoved);

    // GSAP animate cursor position reactively
    gsap.to(cursor, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.2,
      ease: 'power2.out',
    });

    return () => {
      window.removeEventListener('mousemove', mouseMoved);
    };
  }, [mousePosition]);

  return (
    <div className="hidden lg:flex cursor h-4 w-4 rounded-full bg-black fixed z-50" />
  );
};

export default CustomCursor;


