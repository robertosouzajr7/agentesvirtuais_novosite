import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Tecnologias" },
  { id: "projects", label: "Soluções" },
  { id: "contact", label: "Contato" }
];

export default function Navigation({ activeSection, isDark }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className={`flex items-center gap-4 md:gap-6 backdrop-blur-xl rounded-full border px-3 md:px-4 py-2 shadow-lg ${
        isDark 
          ? "bg-gray-900/40 border-white/10 shadow-black/20" 
          : "bg-white/40 border-black/10 shadow-gray-300/30"
      }`}>
        <Logo size="text-lg md:text-xl" />
        
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                activeSection === item.id
                  ? (isDark ? "text-white" : "text-gray-900")
                  : (isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900")
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-full ${
                    isDark ? "bg-white/10" : "bg-black/10"
                  }`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}