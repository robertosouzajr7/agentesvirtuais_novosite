import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { services } from "./serviceData";

export default function ProjectsSection({ isDark }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "Todas as Soluções" },
    { key: "ia", label: "Inteligência Artificial" },
    { key: "automacao", label: "Automação" }
  ];

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Nossas{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Soluções
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Explore como podemos transformar sua empresa. Clique para ver os detalhes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
                    : isDark
                    ? "border-white/20 text-gray-300 hover:bg-white/5"
                    : "border-black/20 text-gray-700 hover:bg-black/5"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Link to={createPageUrl(`ServicoDetalhe?id=${service.id}`)}>
                  <div className={`block backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${
                    isDark 
                      ? "bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10" 
                      : "bg-black/5 border border-black/10 hover:border-blue-500/50 hover:bg-black/10"
                  } hover:shadow-2xl hover:shadow-blue-500/10`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm mb-4 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-3 py-1 text-xs rounded-full ${
                                isDark
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-blue-500/10 text-blue-600"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-medium text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Ver Detalhes <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}