
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle"; // Importar o ThemeToggle

const navItems = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Tecnologias" },
  { id: "projects", label: "Soluções" },
  { id: "contact", label: "Contato" }
];

export default function Navigation({ activeSection, isDark, setIsDark }) { // Receber props para o ThemeToggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className={`flex items-center gap-4 md:gap-6 backdrop-blur-xl rounded-full border px-3 md:px-4 py-2 shadow-lg ${
          isDark 
            ? "bg-gray-900/40 border-white/10 shadow-black/20" 
            : "bg-white/40 border-black/10 shadow-gray-300/30"
        }`}>
          <Logo size="text-lg md:text-xl" />
          
          <div className="flex items-center space-x-1">
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

      {/* Mobile Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
      >
        <div className={`flex items-center justify-between backdrop-blur-xl rounded-2xl border px-4 py-3 shadow-lg ${
          isDark 
            ? "bg-gray-900/40 border-white/10 shadow-black/20" 
            : "bg-white/40 border-black/10 shadow-gray-300/30"
        }`}>
          <Logo size="text-lg" />
          
          <div className="flex items-center gap-2"> {/* Added div to group ThemeToggle and Menu button */}
            {/* Theme Toggle para Mobile */}
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} isMobile={true} />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isDark ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-black/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-full left-0 right-0 mt-2 backdrop-blur-xl rounded-2xl border shadow-lg overflow-hidden ${
                isDark 
                  ? "bg-gray-900/95 border-white/10 shadow-black/20" 
                  : "bg-white/95 border-black/10 shadow-gray-300/30"
              }`}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-6 py-4 text-left font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? (isDark ? "text-white bg-white/10" : "text-gray-900 bg-black/5")
                      : (isDark ? "text-gray-300 hover:text-white hover:bg-white/5" : "text-gray-600 hover:text-gray-900 hover:bg-black/5")
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 absolute left-0 top-0"
                      layoutId="activeMobileTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
