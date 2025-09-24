import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, setIsDark, isMobile = false }) {
  // Não renderizar o botão fixo se estiver no modo mobile, pois ele já está na nav
  if (!isMobile) {
    return (
      <motion.div 
        className="fixed top-6 right-6 z-50 hidden md:block" // Esconder no mobile
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className={`p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
            isDark 
              ? "bg-white/5 border-white/10 hover:bg-white/10" 
              : "bg-black/5 border-black/10 hover:bg-black/10"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-purple-600" />
            )}
          </motion.div>
        </motion.button>
      </motion.div>
    );
  }

  // Renderizar apenas o botão para ser usado dentro da nav mobile
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className={`p-2 rounded-xl transition-colors ${
        isDark ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-black/10"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-purple-600" />
        )}
      </motion.div>
    </motion.button>
  );
}