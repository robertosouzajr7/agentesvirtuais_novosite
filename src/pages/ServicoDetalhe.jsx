import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../components/portfolio/serviceData";
import { ArrowLeft, ExternalLink, Bot, CheckCircle } from "lucide-react";
import { createPageUrl } from "@/utils";
import Logo from "../components/portfolio/Logo";

export default function ServicoDetalhe() {
  const [service, setService] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = parseInt(params.get("id"), 10);
    const foundService = services.find(s => s.id === serviceId);
    setService(foundService);
  }, [location.search]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Carregando serviço ou serviço não encontrado...
      </div>
    );
  }
  
  const isDark = true; // A página de detalhes do serviço tem sempre o tema escuro para consistência

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isDark ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 text-white" : ""
    }`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to={createPageUrl("Home")}>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5"/>
                    <span>Voltar para o Início</span>
                </motion.div>
            </Link>
            <Logo size="text-xl" />
        </div>
      </header>

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10"
          >
            <div className="p-2 bg-gray-800 flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Sobre a Solução</h2>
              <div className="prose prose-invert text-gray-300 max-w-none text-lg leading-relaxed">
                  <p>{service.long_description}</p>
              </div>
            </div>
            <div>
              <div className="backdrop-blur-xl rounded-3xl p-6 border border-white/10 bg-white/5 sticky top-28">
                <h3 className="text-xl font-bold mb-4">Tecnologias</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-4">Principais Funcionalidades</h3>
                <ul className="space-y-3 mb-6">
                    {service.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4">
                    <a href="#contact" onClick={(e) => { e.preventDefault(); const homeUrl = createPageUrl('Home'); window.location.href = `${homeUrl}#contact`; }} className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl font-medium hover:scale-105 transition-transform">
                        <Bot className="w-4 h-4 inline mr-2"/> Solicitar Orçamento
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}