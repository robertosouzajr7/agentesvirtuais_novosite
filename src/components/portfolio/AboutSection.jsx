import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Users, ShieldCheck } from "lucide-react";

export default function AboutSection({ isDark }) {
  const stats = [
    { icon: Cpu, label: "Automações Criadas", value: "100+" },
    { icon: Users, label: "Clientes Satisfeitos", value: "30+" },
    { icon: Zap, label: "Horas Economizadas", value: "5k+" },
    { icon: ShieldCheck, label: "Projetos Seguros", value: "100%" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
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
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Nós
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`backdrop-blur-xl rounded-3xl p-8 ${
              isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
            }`}>
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className={`w-full h-full rounded-3xl flex items-center justify-center text-6xl ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}>
                    🤖
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              Construindo o Futuro da Automação
            </h3>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              Na Agentes Virtuais, somos apaixonados por tecnologia e inovação. Nossa missão é empoderar empresas através de soluções de inteligência artificial e automação que simplificam processos, otimizam a comunicação e geram resultados mensuráveis.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              Nossa equipe de especialistas combina conhecimento técnico profundo com uma abordagem estratégica para entender as necessidades únicas de cada cliente. Acreditamos que a tecnologia deve ser uma aliada, e não um obstáculo, para o crescimento do seu negócio.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`backdrop-blur-xl rounded-2xl p-6 text-center ${
                isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
              }`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className={`text-2xl font-bold mb-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}