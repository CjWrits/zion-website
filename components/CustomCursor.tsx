'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div ref={cursorRef} className="hidden md:block pointer-events-none fixed z-50 -rotate-45">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* Main body */}
        <path d="M24 4L28 24L24 42L20 24L24 4Z" fill="url(#body)" />
        
        {/* Wings */}
        <path d="M20 16L12 22L20 24Z" fill="url(#wing)" />
        <path d="M28 16L36 22L28 24Z" fill="url(#wing)" />
        
        {/* Cockpit */}
        <ellipse cx="24" cy="12" rx="3" ry="5" fill="url(#cockpit)" />
        <ellipse cx="24" cy="12" rx="2" ry="3" fill="#E0F2FE" opacity="0.6" />
        
        {/* Engine details */}
        <rect x="22" y="28" width="4" height="8" rx="1" fill="#1E3A8A" />
        <circle cx="22" cy="36" r="1.5" fill="#EF4444" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="26" cy="36" r="1.5" fill="#EF4444" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="0.2s" repeatCount="indefinite" />
        </circle>
        
        {/* Flame trail */}
        <ellipse cx="24" cy="40" rx="5" ry="8" fill="url(#flame)" opacity="0.9">
          <animate attributeName="ry" values="8;12;8" dur="0.15s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0.6;0.9" dur="0.15s" repeatCount="indefinite" />
        </ellipse>
        
        {/* Outer glow */}
        <ellipse cx="24" cy="42" rx="6" ry="10" fill="#F59E0B" opacity="0.4">
          <animate attributeName="ry" values="10;14;10" dur="0.2s" repeatCount="indefinite" />
        </ellipse>
        
        <defs>
          <linearGradient id="body" x1="24" y1="4" x2="24" y2="42">
            <stop stopColor="#93C5FD" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="wing" x1="24" y1="16" x2="24" y2="24">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="cockpit" x1="24" y1="8" x2="24" y2="16">
            <stop stopColor="#DBEAFE" />
            <stop offset="1" stopColor="#93C5FD" />
          </linearGradient>
          <radialGradient id="flame" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="30%" stopColor="#FCD34D" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#DC2626" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
