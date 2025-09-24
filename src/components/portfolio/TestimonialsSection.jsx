import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection({ isDark }) {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      role: "CEO, Loja Inovadora",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face",
      content: "O chatbot para WhatsApp que a Agentes Virtuais desenvolveu revolucionou nosso atendimento. As vendas aumentaram e os clientes estão mais satisfeitos.",
      rating: 5
    },
    {
      id: 2,
      name: "Maria Oliveira",
      role: "Diretora de Operações, LogTech",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
      content: "A automação de processos com N8N economizou centenas de horas da nossa equipe. Um trabalho impecável, técnico e muito bem executado.",
      rating: 5
    },
    {
      id: 3,
      name: "Carlos Pereira",
      role: "Fundador, Startup de Saúde",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "Os assistentes de IA analisam nossos dados e geram insights que nunca teríamos sozinhos. A Agentes Virtuais é uma parceira estratégica para nosso crescimento.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen flex items-center px-6 py-20">
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
            O que os Clientes{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Dizem
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Não acredite apenas na nossa palavra - veja o que nossos clientes têm a dizer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`backdrop-blur-xl rounded-3xl p-8 relative ${
                isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
              }`}
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}