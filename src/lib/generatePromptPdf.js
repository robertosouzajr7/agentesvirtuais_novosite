import { jsPDF } from 'jspdf';

const PROMPTS = [
  {
    id: 1,
    cenario: 'CENÁRIO BÔNUS — Selfie com Personagem de Animação',
    titulo: 'Selfie em Cinema com Personagem Disney',
    descricao:
      'Crie uma selfie ao lado de uma personagem famosa de animação em um cenário cinematográfico.',
    prompt: `Create an ultra-realistic selfie photo. Use the uploaded image as the exact character reference — do not modify, alter, or adjust any facial features, hairstyle, clothing, or accessories of the person in the uploaded image.

Add Judy Hopps from Zootopia (Disney character) standing next to the real person.

Scene: A dark, crowded movie theater. A large cinema screen in the background is showing a scene from Zootopia. Cinematic lighting with warm ambient glow.

Composition: Selfie angle. The real person from the uploaded image (preserve all original features exactly) is taking a selfie together with Judy Hopps. Both subjects are in sharp focus. Ultra-HD, 8K quality, hyper-realistic photography style with natural light mixed with screen glow, shallow depth of field.

IMPORTANT: The human subject must look identical to the uploaded reference image — no changes to hairstyle, clothing, accessories, or facial details. The only added element should be the Zootopia character integrated naturally into the scene.`,
    instrucoes: [
      'Faça upload da sua foto no gerador de IA (Midjourney, Leonardo AI, etc.)',
      'Cole o prompt acima e adicione a referência da sua imagem',
      'Gere a imagem e ajuste conforme necessário',
      'Você pode trocar "Judy Hopps" por qualquer outro personagem de animação',
    ],
  },
  {
    id: 2,
    cenario: 'CENÁRIO 1',
    titulo: 'Imagem de Perfil Profissional para Instagram',
    descricao:
      'Transforme sua foto em uma imagem de perfil profissional e impactante para redes sociais.',
    prompt: `Create an ultra-realistic professional headshot photograph. Use the uploaded image as the exact character reference — do not modify, alter, or adjust any facial features, hairstyle, clothing, or accessories of the person in the uploaded image.

Transform the setting into a premium corporate environment: clean, minimalist studio backdrop (light neutral gray or white gradient). Soft, professionally diffused studio lighting from a key light at 45-degree angle with a fill light to eliminate harsh shadows. The person appears confident, polished, and approachable.

Composition: Portrait framing (head and shoulders), slight 3/4 angle facing camera with a genuine, warm smile. Eyes sharp and engaging. Skin texture rendered naturally — no over-smoothing. Subtle vignette around edges.

Technical specs: Ultra-HD, 8K quality, hyper-realistic photography, shot as if on a professional Canon EOS R5 with an 85mm f/1.4 lens, shallow depth of field. Color grading: slightly warm tones for approachability, contrast enhanced subtly for a polished look.

IMPORTANT: The human subject must look identical to the uploaded reference image — preserve all facial features, skin tone, eye color, hairstyle, and expression style exactly. Only the background and lighting should be adjusted to reflect a professional studio headshot environment. If the original clothing is casual, keep it — or allow for a natural upgrade to a clean, simple business-casual outfit that blends seamlessly.`,
    instrucoes: [
      'Faça upload da sua melhor foto com boa iluminação e posição frontal',
      'Prefira fotos em que seu rosto esteja bem visível e nítido',
      'Cole o prompt acima no gerador de IA de sua preferência',
      'Para melhores resultados, use Midjourney v6, Leonardo AI ou DALL-E 3',
      'Ajuste as cores finais com um editor como Lightroom ou VSCO',
    ],
  },
  {
    id: 3,
    cenario: 'CENÁRIO 2',
    titulo: 'Ensaio Fotográfico Profissional com Estilo de Alta Moda',
    descricao:
      'Crie imagens de nível editorial com roupas refinadas e ambientes luxuosos dignos de revista.',
    prompt: `Create an ultra-realistic high-fashion editorial photograph. Use the uploaded image as the exact character reference — do not modify, alter, or adjust any facial features or body structure of the person in the uploaded image.

The person is styled in premium designer fashion: a perfectly tailored suit (Armani, Tom Ford, or Bottega Veneta aesthetic for men) or an elegant couture dress (Valentino or Dior silhouette for women) in muted, sophisticated tones — charcoal, ivory, camel, or deep emerald. Subtle luxury accessories: a minimalist mechanical watch, discreet fine jewelry, or a structured leather bag. Hair is impeccably styled, makeup (if applicable) is refined and polished.

Setting: An upscale architectural environment — a grand marble-floored penthouse with panoramic floor-to-ceiling city views, a contemporary art gallery with white walls and dramatic lighting, or an opulent hotel lobby with Art Deco details.

Lighting: Split between natural light streaming through tall windows and a professional soft box fill light. Warm, golden tones. Bokeh background with the architectural details subtly visible.

Composition: Editorial fashion photography angle — three-quarter or full-body shot. Dynamic, purposeful pose with elegance and authority: standing confidently, leaning against a marble column, or seated in a designer chair. Ultra-HD, 8K, shot as if on a Hasselblad H6D with a 100mm f/2.2 lens. Color grading: cinematic, slightly desaturated highlights with warm mid-tones.

IMPORTANT: The human subject must look identical to the uploaded reference image — all facial features, skin tone, eye color, and body type preserved exactly as in the reference photo. Only the clothing, setting, and lighting context should be elevated to reflect high-fashion editorial standards.`,
    instrucoes: [
      'Use uma foto de corpo inteiro ou meio corpo para melhores resultados',
      'Fotos com boa qualidade e iluminação natural funcionam melhor',
      'Você pode personalizar as marcas e estilos mencionados no prompt',
      'Experimente diferentes cenários: galeria de arte, hotel, penthouse',
      'Ideal para feed do Instagram, LinkedIn premium ou portfólio profissional',
    ],
  },
  {
    id: 4,
    cenario: 'CENÁRIO 3',
    titulo: 'Estilo Old Money — Elegância Atemporal',
    descricao:
      'Transmita sofisticação herdada e riqueza discreta com o estilo estético Old Money mais buscado nas redes.',
    prompt: `Create an ultra-realistic old money lifestyle photograph. Use the uploaded image as the exact character reference — do not modify, alter, or adjust any facial features, hairstyle, or body type of the person in the uploaded image.

The person is styled in classic old money fashion that speaks of inherited elegance: a perfectly fitted Oxford button-down shirt or cable-knit polo in muted heritage tones — navy, cream, forest green, camel, or burgundy. Paired with tailored chinos or linen trousers, loafers (Gucci horsebit or classic Sperry boat shoes), and a simple, understated leather watch (Patek Philippe or vintage Rolex aesthetic). Accessories are minimal and inherited-looking: a signet ring, pearl earrings, or a fine silk scarf. Hair is naturally styled — effortlessly put-together, as if they woke up looking this way.

Setting: A classic old money environment that radiates timeless heritage — choose one:
• A manicured English estate garden with hedgerows and a stone manor in the background
• The deck of a vintage wooden sailboat with sun-bleached wood and nautical ropes
• A private mahogany library with leather-bound books, warm lamp light, and Persian rugs
• A horse stable with well-groomed thoroughbreds on a countryside estate

Lighting: Natural golden hour sunlight — warm, honey-toned, slightly diffused. Film-like quality with subtle grain.

Composition: Candid yet composed — as if caught in a genuine moment of leisure: looking slightly off-camera with quiet confidence, a subtle knowing smile, or absorbed in a book. 3/4 or full body. Ultra-HD, 8K, shot as if on a vintage Leica M film camera. Color grading: warm, muted, slightly desaturated tones — timeless and classic, not trendy.

IMPORTANT: The human subject must look identical to the uploaded reference image — preserve all facial features, skin tone, eye shape, hairstyle, and body type exactly as in the reference photo. Only the styling, environment, and color treatment should reflect the old money aesthetic.`,
    instrucoes: [
      'Use uma foto bem iluminada e de boa resolução como referência',
      'Fotos ao ar livre com luz natural produzem os melhores resultados',
      'Experimente os 4 cenários diferentes descritos no prompt',
      'Ajuste os tons de cor pós-geração para reforçar o estilo retrô e aquecido',
      'Perfeito para rebranding pessoal, feed estético e crescimento no Instagram',
    ],
  },
];

export function gerarPdfPrompts() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const W = 210;
  const H = 297;
  const marginX = 14;
  const contentW = W - marginX * 2;

  // ── CAPA ──────────────────────────────────────────────────────────────────
  // Fundo gradiente simulado via retângulos
  doc.setFillColor(15, 10, 35);
  doc.rect(0, 0, W, H, 'F');

  doc.setFillColor(88, 28, 220);
  doc.roundedRect(marginX, 30, contentW, 200, 8, 8, 'F');

  doc.setFillColor(139, 68, 255);
  doc.roundedRect(marginX + 4, 34, contentW - 8, 192, 6, 6, 'F');

  // Estrelas decorativas
  doc.setFillColor(255, 255, 255);
  [[30, 15], [170, 20], [195, 10], [20, 240], [185, 250], [100, 12]].forEach(([x, y]) => {
    doc.circle(x, y, 0.8, 'F');
  });

  // Ícone central (estrela)
  doc.setFillColor(255, 215, 0);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 215, 0);
  doc.text('✦', W / 2, 80, { align: 'center' });

  // Título principal
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('PACK DE PROMPTS', W / 2, 110, { align: 'center' });
  doc.text('PARA CRIAR IMAGENS', W / 2, 122, { align: 'center' });

  doc.setFillColor(255, 215, 0);
  doc.roundedRect(marginX + 20, 130, contentW - 40, 14, 4, 4, 'F');
  doc.setTextColor(15, 10, 35);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('COM INTELIGÊNCIA ARTIFICIAL', W / 2, 139, { align: 'center' });

  // Subtítulo
  doc.setTextColor(220, 200, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Transforme suas fotos em imagens profissionais e impressionantes', W / 2, 160, {
    align: 'center',
  });
  doc.text('usando os melhores geradores de imagem com IA', W / 2, 167, { align: 'center' });

  // Número de cenários
  doc.setFillColor(255, 255, 255, 0.15);
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.3);
  doc.roundedRect(marginX + 30, 180, contentW - 60, 30, 4, 4, 'D');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('4 CENÁRIOS PRONTOS PARA USAR', W / 2, 193, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(200, 180, 255);
  doc.text('Midjourney • Leonardo AI • DALL-E • Stable Diffusion', W / 2, 202, {
    align: 'center',
  });

  // Rodapé da capa
  doc.setTextColor(160, 130, 220);
  doc.setFontSize(8);
  doc.text('© Agentes Virtuais — agentesvirtuais.com.br', W / 2, H - 12, { align: 'center' });

  // ── PÁGINAS DE CADA PROMPT ────────────────────────────────────────────────
  PROMPTS.forEach((item, idx) => {
    doc.addPage();

    // Fundo escuro
    doc.setFillColor(12, 8, 28);
    doc.rect(0, 0, W, H, 'F');

    // Barra superior colorida
    doc.setFillColor(88, 28, 220);
    doc.rect(0, 0, W, 18, 'F');

    // Número e cenário
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(item.cenario, marginX, 12);
    doc.text(`${idx + 1} / ${PROMPTS.length}`, W - marginX, 12, { align: 'right' });

    // Título
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 215, 0);
    const tituloLines = doc.splitTextToSize(item.titulo, contentW);
    doc.text(tituloLines, marginX, 30);

    let cursorY = 30 + tituloLines.length * 7 + 2;

    // Descrição
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(200, 180, 255);
    const descLines = doc.splitTextToSize(item.descricao, contentW);
    doc.text(descLines, marginX, cursorY);
    cursorY += descLines.length * 5 + 6;

    // Separador
    doc.setDrawColor(88, 28, 220);
    doc.setLineWidth(0.5);
    doc.line(marginX, cursorY, W - marginX, cursorY);
    cursorY += 6;

    // Rótulo do prompt
    doc.setFillColor(88, 28, 220);
    doc.roundedRect(marginX, cursorY, 28, 6, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text('PROMPT', marginX + 4, cursorY + 4);
    cursorY += 9;

    // Caixa do prompt
    const promptLines = doc.splitTextToSize(item.prompt, contentW - 8);
    const promptBoxH = promptLines.length * 4.2 + 8;
    doc.setFillColor(25, 15, 55);
    doc.setDrawColor(88, 28, 220);
    doc.setLineWidth(0.4);
    doc.roundedRect(marginX, cursorY, contentW, promptBoxH, 3, 3, 'FD');
    doc.setTextColor(220, 200, 255);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.text(promptLines, marginX + 4, cursorY + 5);
    cursorY += promptBoxH + 8;

    // Rótulo de instruções
    doc.setFillColor(255, 215, 0);
    doc.roundedRect(marginX, cursorY, 40, 6, 2, 2, 'F');
    doc.setTextColor(15, 10, 35);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text('COMO USAR', marginX + 4, cursorY + 4);
    cursorY += 9;

    // Lista de instruções
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    item.instrucoes.forEach((instrucao, i) => {
      doc.setFillColor(255, 215, 0);
      doc.circle(marginX + 2.5, cursorY - 1, 2, 'F');
      doc.setTextColor(15, 10, 35);
      doc.setFontSize(6.5);
      doc.text(`${i + 1}`, marginX + 2.5, cursorY - 1, { align: 'center' });

      doc.setTextColor(220, 200, 255);
      doc.setFontSize(8);
      const instLines = doc.splitTextToSize(instrucao, contentW - 10);
      doc.text(instLines, marginX + 7, cursorY);
      cursorY += instLines.length * 4.5 + 2;
    });

    // Dica final
    cursorY += 4;
    doc.setFillColor(20, 12, 45);
    doc.setDrawColor(255, 215, 0);
    doc.setLineWidth(0.3);
    doc.roundedRect(marginX, cursorY, contentW, 12, 3, 3, 'FD');
    doc.setTextColor(255, 215, 0);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.text('💡 Dica:', marginX + 4, cursorY + 5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(220, 200, 255);
    const dicas = [
      'Quanto mais detalhada sua foto de referência, mais fiel será o resultado.',
      'Iluminação natural e enquadramento limpo melhoram muito a qualidade.',
      'Experimente combinar diferentes cenários para criar conteúdo único.',
      'Use sempre a versão mais recente do gerador para melhores resultados.',
    ];
    doc.text(dicas[idx] || dicas[0], marginX + 16, cursorY + 5, {
      maxWidth: contentW - 20,
    });

    // Rodapé
    doc.setDrawColor(88, 28, 220);
    doc.setLineWidth(0.3);
    doc.line(marginX, H - 14, W - marginX, H - 14);
    doc.setTextColor(120, 90, 180);
    doc.setFontSize(7);
    doc.text('© Agentes Virtuais — agentesvirtuais.com.br', W / 2, H - 8, { align: 'center' });
  });

  // ── PÁGINA FINAL — COMO USAR ──────────────────────────────────────────────
  doc.addPage();
  doc.setFillColor(12, 8, 28);
  doc.rect(0, 0, W, H, 'F');

  doc.setFillColor(88, 28, 220);
  doc.rect(0, 0, W, 18, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('GUIA RÁPIDO', marginX, 12);

  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 215, 0);
  doc.text('Como Usar Este Pack', marginX, 32);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(200, 180, 255);
  doc.text(
    'Siga estes passos simples para criar imagens incríveis com IA:',
    marginX,
    40
  );

  const passos = [
    {
      num: '1',
      titulo: 'Escolha seu Gerador de IA',
      desc: 'Recomendamos: Midjourney v6 (melhor qualidade), Leonardo AI (gratuito), DALL-E 3 via ChatGPT, ou Stable Diffusion.',
    },
    {
      num: '2',
      titulo: 'Prepare sua Foto de Referência',
      desc: 'Use uma foto nítida, com boa iluminação e fundo simples. O rosto deve estar bem visível e focado. Resolução mínima recomendada: 1080x1080px.',
    },
    {
      num: '3',
      titulo: 'Faça o Upload da Foto',
      desc: 'Na plataforma escolhida, faça o upload da sua foto como "imagem de referência" ou "character reference" (no Midjourney use --cref).',
    },
    {
      num: '4',
      titulo: 'Cole o Prompt',
      desc: 'Copie o prompt do cenário desejado e cole na plataforma. Não modifique a parte de preservação de feições — ela é essencial para manter sua aparência.',
    },
    {
      num: '5',
      titulo: 'Gere e Refine',
      desc: 'Gere 4 variações e escolha a melhor. Use as ferramentas de upscale e refinamento disponíveis. Ajuste o prompt se necessário.',
    },
    {
      num: '6',
      titulo: 'Pós-processamento',
      desc: 'Finalize com Lightroom, VSCO, ou Snapseed. Ajuste brilho, contraste e saturação para o resultado perfeito para seu feed.',
    },
  ];

  let y = 52;
  passos.forEach((passo) => {
    doc.setFillColor(88, 28, 220);
    doc.circle(marginX + 4, y + 1, 4, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(passo.num, marginX + 4, y + 3, { align: 'center' });

    doc.setTextColor(255, 215, 0);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(passo.titulo, marginX + 11, y + 1);

    doc.setTextColor(200, 180, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const descLines = doc.splitTextToSize(passo.desc, contentW - 12);
    doc.text(descLines, marginX + 11, y + 6);
    y += descLines.length * 4.5 + 12;
  });

  // CTA final
  doc.setFillColor(88, 28, 220);
  doc.roundedRect(marginX, y + 4, contentW, 24, 4, 4, 'F');
  doc.setTextColor(255, 215, 0);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Quer resultados ainda melhores?', W / 2, y + 14, { align: 'center' });
  doc.setTextColor(220, 200, 255);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(
    'Conheça nossos agentes de IA personalizados em agentesvirtuais.com.br',
    W / 2,
    y + 21,
    { align: 'center' }
  );

  // Rodapé
  doc.setDrawColor(88, 28, 220);
  doc.setLineWidth(0.3);
  doc.line(marginX, H - 14, W - marginX, H - 14);
  doc.setTextColor(120, 90, 180);
  doc.setFontSize(7);
  doc.text('© Agentes Virtuais — agentesvirtuais.com.br', W / 2, H - 8, { align: 'center' });

  // Salva e dispara download
  doc.save('Pack-Prompts-IA-Agentes-Virtuais.pdf');
}
