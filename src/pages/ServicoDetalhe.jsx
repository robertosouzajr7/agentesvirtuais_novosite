import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../components/portfolio/serviceData";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { createPageUrl } from "@/utils";
import Logo from "../components/portfolio/Logo";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

export default function ServicoDetalhe() {
  const [service, setService] = useState(null);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = parseInt(params.get("id"), 10);
    const foundService = services.find((s) => s.id === serviceId);
    setService(foundService);

    if (foundService) {
      const phoneNumber = "5571992042802";
      const message = `Olá! Tenho interesse em fazer um orçamento para o serviço: *${foundService.title}*.`;
      setWhatsappUrl(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      );
    }
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
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 text-white"
          : ""
      }`}
    >
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
        <motion.div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to={createPageUrl("Home")}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar para o Início</span>
            </motion.div>
          </Link>
          <Logo size="text-xl" />
        </div>
      </header>

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Sobre a Solução
              </h2>
              <div className="prose prose-invert text-gray-300 max-w-none text-lg leading-relaxed">
                <p>{service.long_description}</p>
              </div>
            </div>
            <div>
              <div className="backdrop-blur-xl rounded-3xl p-6 border border-white/10 bg-white/5 sticky top-28">
                <h3 className="text-xl font-bold mb-4">Tecnologias</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Principais Funcionalidades
                </h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#25D366] text-white px-4 py-2.5 rounded-xl font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon /> Solicitar Orçamento
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
