import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Bot, 
  GitMerge, 
} from "lucide-react";

export default function SkillsSection({ isDark }) {
  const skillCategories = [
    {
      title: "Inteligência Artificial",
      icon: Cpu,
      skills: [
        { name: "OpenAI & GPT-4", level: 98 },
        { name: "IA Generativa (LLMs)", level: 95 },
        { name: "Processamento de Linguagem Natural", level: 90 },
        { name: "Análise de Dados com IA", level: 88 }
      ]
    },
    {
      title: "Plataformas de Automação",
      icon: GitMerge,
      skills: [
        { name: "N8N", level: 99 },
        { name: "Make (Integromat)", level: 90 },
        { name: "Zapier", level: 85 },
        { name: "Desenvolvimento de APIs", level: 92 }
      ]
    },
    {
      title: "Chatbots & Atendimento",
      icon: Bot,
      skills: [
        { name: "WhatsApp Business API", level: 95 },
        { name: "Dialogflow (Google)", level: 90 },
        { name: "Typebot", level: 88 },
        { name: "Integração com CRMs", level: 94 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20">
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
              Tecnologias
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            As ferramentas e plataformas que usamos para construir soluções de ponta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`backdrop-blur-xl rounded-3xl p-8 ${
                isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDark ? "bg-gray-800" : "bg-gray-200"
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}