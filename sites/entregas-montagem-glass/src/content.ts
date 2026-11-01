// Todo o texto do site está aqui. Campos com "EDITAR" são provisórios.

export const site = {
  // EDITAR: nome do negócio
  brand: "Entrega & Montagem",
  // Letra do logótipo (círculo de vidro no canto)
  logoLetter: "e",
  whatsapp: "351932689884",
};

export const whatsappLink = (text = "Olá! Gostava de pedir um orçamento para entrega e/ou montagem de móveis.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const videos = {
  // Vídeo de fundo do topo (do prompt). EDITAR: troca por um vídeo teu,
  // por exemplo gerado com a Higgsfield (carrinha, caixas, montagem).
  // ATENÇÃO: se o vídeo estiver noutro domínio, junta esse domínio a "media-src"
  // em vercel.json, public/_headers e security-headers.json (segurança CSP).
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4",
  // Vídeo de fundo da secção de serviços (opcional; vazio = fundo com brilho)
  services: "",
};

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Zona", href: "#zona" },
  { label: "Contacto", href: whatsappLink() },
];

export const hero = {
  badgeTag: "Novo",
  badge: "Marcações abertas esta semana — vagas limitadas",
  title: "Do carrinho à tua sala, entregue e montado",
  lead: "Recolho as tuas compras do IKEA ou de outra loja, entrego em casa e deixo tudo montado. Grande Lisboa e Setúbal.",
  primary: "Pedir orçamento",
  secondary: "Ver serviços",
  cta: "Pedir orçamento",
  stats: [
    { icon: "pin", label: "Grande Lisboa e Setúbal" },
    { icon: "clock", label: "Entrega e montagem no mesmo dia" },
    { icon: "spark", label: "Orçamento grátis no WhatsApp" },
  ],
};

export const services = {
  label: "Serviços",
  title: "Tudo tratado, do início ao fim",
  lead: "Um só contacto para recolher, transportar, entregar e montar. Sem surpresas no preço.",
  items: [
    { icon: "bag", title: "Recolha", text: "Levanto as tuas compras na loja ou no ponto de recolha, mesmo encomendas online." },
    { icon: "truck", title: "Transporte", text: "Carrinha própria, móveis protegidos e hora combinada contigo." },
    { icon: "house", title: "Entrega", text: "Subo ao andar e deixo tudo na divisão certa. Levo as embalagens." },
    { icon: "wrench", title: "Montagem", text: "Roupeiros, camas, cómodas e estantes montados, nivelados e fixados." },
  ],
  areaTitle: "Zona de serviço",
  area: ["Lisboa", "Oeiras", "Cascais", "Sintra", "Amadora", "Loures", "Almada", "Seixal", "Barreiro", "Montijo", "Palmela", "Setúbal"],
  cta: "Pedir orçamento no WhatsApp",
  disclaimer: "Serviço independente, sem qualquer ligação ao IKEA. IKEA é uma marca registada da Inter IKEA Systems B.V.",
};
