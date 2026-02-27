import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gerarPdfPrompts } from '@/lib/generatePromptPdf';
import { SendEmail } from '@/api/integrations';
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
  User,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
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

function InputField({ icon: Icon, label, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white/60 text-xs font-medium pl-1">{label}</label>
      <div className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border bg-white/5 backdrop-blur-sm transition-colors ${
        error ? 'border-red-500/60' : 'border-white/10 focus-within:border-purple-500/60'
      }`}>
        <Icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-white text-sm placeholder-white/20 outline-none"
        />
      </div>
      {error && <p className="text-red-400 text-[10px] pl-1">{error}</p>}
    </div>
  );
}

export default function DownloadPage() {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [submitting, setSubmitting] = useState(false);
  const [showCenarios, setShowCenarios] = useState(false);

  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.nome.trim()) errs.nome = 'Informe seu nome';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Informe um e-mail válido';
    if (!form.telefone.trim() || form.telefone.replace(/\D/g, '').length < 10)
      errs.telefone = 'Informe um telefone válido';
    return errs;
  }

  function handlePhone(e) {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    setForm((f) => ({ ...f, telefone: v }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      // Envia lead por e-mail
      await SendEmail({
        to: 'suporte@agentesvirtuais.com',
        subject: '🎯 Novo Lead — Pack de Prompts IA',
        body: `
Novo lead captado na página de Download!\n
Nome: ${form.nome}
E-mail: ${form.email}
Telefone: ${form.telefone}
Data: ${new Date().toLocaleString('pt-BR')}
        `.trim(),
      });
    } catch (_) {
      // Mesmo se o e-mail falhar, libera o download
    } finally {
      setSubmitting(false);
      setStep('success');
      setTimeout(() => gerarPdfPrompts(), 300);
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
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-500/40">
              <Sparkles className="w-9 h-9 text-white" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs">
              ✦
            </span>
          </div>
          <div className="text-center">
            <h1 className="text-white font-bold text-lg leading-tight tracking-wide">
              Agentes Virtuais
            </h1>
            <p className="text-purple-300/70 text-xs">@agentesvirtuais</p>
          </div>
        </motion.div>

        {/* Título */}
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

        {/* Card principal — Form ou Sucesso */}
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

          {/* Formulário ou Sucesso */}
          <div className="px-5 pb-5">
            <AnimatePresence mode="wait">
              {step === 'form' ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                >
                  <p className="text-white/50 text-xs text-center mb-1">
                    Preencha para liberar o download gratuito
                  </p>

                  <InputField
                    icon={User}
                    label="Nome completo"
                    value={form.nome}
                    onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                    placeholder="Seu nome"
                    error={errors.nome}
                  />
                  <InputField
                    icon={Mail}
                    label="E-mail"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="seu@email.com"
                    error={errors.email}
                  />
                  <InputField
                    icon={Phone}
                    label="WhatsApp / Telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={handlePhone}
                    placeholder="(00) 00000-0000"
                    error={errors.telefone}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:scale-100"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Processando...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        <span>Quero meu Pack Grátis</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-white/20 text-[10px] text-center">
                    Seus dados estão seguros. Não enviamos spam.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-2"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-base">Download iniciado!</p>
                    <p className="text-white/50 text-xs mt-1">
                      Seu PDF está sendo gerado. Obrigado, {form.nome.split(' ')[0]}!
                    </p>
                  </div>
                  <button
                    onClick={() => gerarPdfPrompts()}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm bg-green-500 text-white hover:bg-green-400 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Baixar novamente
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
