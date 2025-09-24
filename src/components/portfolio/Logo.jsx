import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = 'text-2xl' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path d="M12 4H24C26.2091 4 28 5.79086 28 8V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24V16" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4V16C12 17.1046 11.1046 18 10 18H4" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className={`font-bold ${size} bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap`}>
        Agentes Virtuais
      </span>
    </motion.div>
  );
}