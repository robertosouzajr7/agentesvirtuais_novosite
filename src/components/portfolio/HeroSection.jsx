
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ isDark }) {
  const [displayText, setDisplayText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ["Automações com IA", "Chatbots Inteligentes", "Integrações com N8N"];
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforme seu Negócio com{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              IA
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-light mb-4 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}>
            Criamos{" "}
            <span className="font-medium text-blue-500 min-w-[300px] md:min-w-[450px] inline-block text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Automatizamos processos e criamos experiências incríveis com assistentes virtuais e integrações poderosas.
            Vamos inovar juntos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl backdrop-blur-xl border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Bot className="w-5 h-5 mr-2" />
            Nossas Soluções
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className={`px-8 py-3 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
              isDark 
                ? "border-white/20 text-gray-200 hover:bg-white/10 hover:text-white"
                : "border-black/20 text-gray-900 hover:bg-black/5"
            }`}
             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Fale Conosco
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`p-2 rounded-full backdrop-blur-xl ${
              isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
