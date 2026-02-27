import { useState } from 'react';
import { motion } from 'framer-motion';
import { gerarPdfPrompts } from '@/lib/generatePromptPdf';
import {
  Download,
  FileText,
  Sparkles,
  Star,
  ChevronDown,
  ExternalLink,
  ImageIcon,
  Wand2,
  Zap,
} from 'lucide-react';

const CENARIOS = [
  {
    icon: '🎬',
    titulo: 'Selfie com Personagem Disney',
    descricao: 'Apareça ao lado de personagens famosos em cenas cinematográficas',
    tag: 'BÔNUS',
    tagColor: 'from-yellow-400 to-orange-400',
  },
  {
    icon: '💼',
    titulo: 'Perfil Profissional para Instagram',
    descricao: 'Foto de perfil com qualidade de estúdio profissional',
    tag: 'CENÁRIO 1',
    tagColor: 'from-blue-400 to-indigo-500',
  },
  {
    icon: '✨',
    titulo: 'Ensaio Fotográfico de Alta Moda',
    descricao: 'Editorial fashion com roupas finas e ambientes luxuosos',
    tag: 'CENÁRIO 2',
    tagColor: 'from-purple-400 to-pink-500',
  },
  {
    icon: '⚓',
    titulo: 'Estilo Old Money',
    descricao: 'Elegância atemporal com estética de riqueza herdada',
    tag: 'CENÁRIO 3',
    tagColor: 'from-emerald-400 to-teal-500',
  },
];

const COMPATIVEL = [
  { name: 'Midjourney', icon: '🎨' },
  { name: 'Leonardo AI', icon: '🤖' },
  { name: 'DALL-E 3', icon: '⚡' },
  { name: 'Stable Diffusion', icon: '🌊' },
];

function CenarioCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.tagColor} text-white`}
            >
              {item.tag}
            </span>
          </div>
          <p className="font-semibold text-white text-sm leading-snug">{item.titulo}</p>
          <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.descricao}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DownloadPage() {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [showCenarios, setShowCenarios] = useState(false);

  async function handleDownload() {
    if (downloading || downloaded) return;
    setDownloading(true);
    try {
      await new Promise((r) => setTimeout(r, 400));
      gerarPdfPrompts();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-[#0c0820] px-4 py-8 pb-16">
      {/* Orbs de fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-indigo-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-violet-700/15 blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm mx-auto flex flex-col items-center gap-5">
        {/* Avatar / Marca */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="flex flex-col items-center gap-3 pt-2"
        >
          {/* Logo circle */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-500/40">
              <Sparkles className="w-9 h-9 text-white" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs">
              ✦
            </span>
          </div>

          {/* Nome da marca */}
          <div className="text-center">
            <h1 className="text-white font-bold text-lg leading-tight tracking-wide">
              Agentes Virtuais
            </h1>
            <p className="text-purple-300/70 text-xs">@agentesvirtuais</p>
          </div>
        </motion.div>

        {/* Título do recurso */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-white font-extrabold text-2xl leading-tight">
            Pack de Prompts
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
              para Criar Imagens com IA
            </span>
          </h2>
          <p className="text-white/50 text-sm mt-2 leading-relaxed">
            Transforme qualquer foto sua em imagens profissionais e impressionantes usando
            Inteligência Artificial.
          </p>
        </motion.div>

        {/* Card principal de download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="w-full rounded-3xl bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border border-purple-500/30 backdrop-blur-md overflow-hidden"
        >
          {/* Cabeçalho do card */}
          <div className="px-5 pt-5 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Pack de Prompts IA</p>
                <p className="text-white/40 text-xs">PDF • 4 cenários • Grátis</p>
              </div>
              <div className="ml-auto">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-[10px] font-black px-2.5 py-1 rounded-full">
                  GRÁTIS
                </span>
              </div>
            </div>
          </div>

          {/* Destaques */}
          <div className="px-5 py-4 grid grid-cols-3 gap-3">
            {[
              { icon: <ImageIcon className="w-4 h-4" />, label: '4 Cenários' },
              { icon: <Wand2 className="w-4 h-4" />, label: 'Pronto p/ Usar' },
              { icon: <Zap className="w-4 h-4" />, label: 'Alto Impacto' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 bg-white/5 rounded-xl py-2.5 px-1"
              >
                <span className="text-purple-300">{icon}</span>
                <span className="text-white/70 text-[10px] font-medium text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Botão de Download */}
          <div className="px-5 pb-5">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-sm transition-all duration-300 relative overflow-hidden ${
                downloaded
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {downloading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span>Gerando PDF...</span>
                </>
              ) : downloaded ? (
                <>
                  <span className="text-lg">✓</span>
                  <span>Download concluído!</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Baixar Pack Gratuitamente</span>
                </>
              )}
            </button>
            <p className="text-white/30 text-[10px] text-center mt-2">
              PDF gerado instantaneamente • Sem e-mail necessário
            </p>
          </div>
        </motion.div>

        {/* Cenários — expandível */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="w-full"
        >
          <button
            onClick={() => setShowCenarios(!showCenarios)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold">O que está incluído?</span>
            </div>
            <motion.div animate={{ rotate: showCenarios ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4 text-white/50" />
            </motion.div>
          </button>

          {showCenarios && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mt-2 flex flex-col gap-2"
            >
              {CENARIOS.map((item, i) => (
                <CenarioCard key={item.titulo} item={item} index={i} />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Compatibilidade */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.4 }}
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-4"
        >
          <p className="text-white/50 text-xs font-medium text-center mb-3">
            Compatível com os principais geradores de IA
          </p>
          <div className="grid grid-cols-4 gap-2">
            {COMPATIVEL.map(({ name, icon }) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <span className="text-xl">{icon}</span>
                <span className="text-white/40 text-[9px] text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Link de volta ao site */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center gap-2 text-purple-400/70 text-xs hover:text-purple-300 transition-colors mt-1"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Visitar agentesvirtuais.com.br
        </motion.a>

        {/* Rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="text-white/20 text-[10px] text-center mt-2"
        >
          © 2024 Agentes Virtuais. Todos os direitos reservados.
        </motion.p>
      </div>
    </div>
  );
}
