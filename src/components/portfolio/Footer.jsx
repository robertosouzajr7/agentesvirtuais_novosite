import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ isDark }) {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const navLinks = [
    { id: "about", label: "Sobre" },
    { id: "skills", label: "Tecnologias" },
    { id: "projects", label: "Soluções" },
    { id: "contact", label: "Contato" }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className={`px-6 py-12 mt-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`w-full h-px mb-12 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          {/* Logo & Bio */}
          <div className="md:col-span-1">
            <Logo size="text-2xl" />
            <p className="mt-4 max-w-xs">
              Especialistas em IA e automação, construindo experiências digitais inteligentes e eficientes.
            </p>
             <p className="mt-4">CNPJ: 28.254.073/0001-29</p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="hover:text-blue-500 transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-1">
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contato
            </h3>
             <ul className="space-y-2 mb-4">
                <li><a href="mailto:suporte@agentesvirtuais.com" className="hover:text-blue-500">suporte@agentesvirtuais.com</a></li>
                <li><a href="tel:+557135990996" className="hover:text-blue-500">(71) 3599-0996</a></li>
                <li>Rua Vereador Zezéu Ribeiro, Boca da Mata, Salvador, Bahia</li>
             </ul>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className={`p-3 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`w-full h-px my-8 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>

        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Agentes Virtuais. Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}