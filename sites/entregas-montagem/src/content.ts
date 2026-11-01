// Todo o texto do site está aqui. Para mudar um texto, edita este ficheiro.
// Os campos marcados com "EDITAR" são provisórios e devem ser substituídos.

export const site = {
  // EDITAR: nome do negócio
  brand: "Entrega & Montagem",
  // EDITAR: primeiro nome de quem faz o serviço (deixa "" para esconder)
  ownerName: "",
  // Número de WhatsApp com indicativo, só algarismos
  whatsapp: "351932689884",
  // EDITAR: formas de pagamento aceites
  payments: ["MB WAY", "Transferência", "Numerário"],
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const quickMessage = "Olá! Gostava de pedir um orçamento para entrega e/ou montagem de móveis.";

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#zona", label: "Zona" },
  { href: "#perguntas", label: "Perguntas" },
];

export const hero = {
  eyebrow: "Grande Lisboa e Setúbal",
  // Título em dois tons: a primeira parte a cinzento, a segunda a preto
  title: "Os teus móveis,",
  titleAccent: "entregues e montados.",
  label: "Entrega & Montagem",
  lead:
    "Recolho as tuas compras do IKEA (ou de outra loja), entrego em casa e deixo tudo montado, nivelado e sem embalagens.",
  primary: "Pedir orçamento",
  secondary: "Ver serviços",
  meet: "Sou eu que vou a tua casa.",
  photoAlt: "Retrato do responsável pelas entregas e montagens, a sorrir, com a Ponte 25 de Abril ao fundo",
  tags: ["Entrega", "Montagem", "Fixação à parede", "Sem embalagens"],
};

export const journey = {
  label: "A viagem dos teus móveis",
  title: "Da loja até tua casa, já montado",
  hint: "Faz scroll para acompanhar a entrega",
  steps: [
    { title: "Recolha", text: "Levanto as tuas compras na loja e carrego tudo na carrinha, bem protegido." },
    { title: "A caminho", text: "Atravesso Lisboa ou a Margem Sul até à tua morada, à hora combinada." },
    { title: "Entrega", text: "Descarrego e levo tudo para dentro de casa, até à divisão certa." },
    { title: "Montagem", text: "Monto, nivelo e deixo tudo pronto a usar. Tu só tens de aproveitar." },
  ],
};

export type IconName = "truck" | "tools" | "box" | "wall" | "recycle" | "undo";

export const services = {
  label: "Serviços",
  title: "Tudo o que precisas, do carrinho à sala",
  items: [
    {
      icon: "truck" as IconName,
      name: "Entrega",
      text: "Recolho na loja ou no ponto de levantamento e entrego em tua casa, com subida ao andar incluída.",
      points: ["Recolha na loja ou encomenda online", "Transporte protegido", "Subida ao andar"],
    },
    {
      icon: "tools" as IconName,
      name: "Montagem",
      text: "Monto roupeiros, camas, cómodas, estantes, secretárias e muito mais, seguindo as instruções à risca.",
      points: ["Ferramenta profissional", "Móveis nivelados e alinhados", "Verificação final contigo"],
    },
    {
      icon: "box" as IconName,
      name: "Entrega + Montagem",
      text: "O pacote completo: compras, levo e monto no mesmo dia. A forma mais simples e vantajosa.",
      points: ["Um só contacto", "Tudo no mesmo dia", "Melhor preço"],
      highlight: "Mais pedido",
    },
  ],
  extrasTitle: "Também posso",
  extras: [
    { icon: "wall" as IconName, name: "Fixar à parede", text: "Estantes e roupeiros presos com segurança, ideal com crianças." },
    { icon: "recycle" as IconName, name: "Levar as embalagens", text: "Cartões e plásticos saem comigo e vão para reciclagem." },
    { icon: "undo" as IconName, name: "Desmontar móveis antigos", text: "Para dar espaço aos novos ou para mudanças." },
  ],
};

export const process = {
  label: "Como funciona",
  title: "Três passos e está feito",
  steps: [
    { title: "Envia a lista", text: "Manda pelo WhatsApp a lista de compras ou o carrinho, a morada e o dia que preferes." },
    { title: "Recebe o orçamento", text: "Respondo com o preço fechado e combinamos a hora. Sem surpresas." },
    { title: "Relaxa", text: "Entrego, monto, arrumo as embalagens e só saio quando estiver tudo como queres." },
  ],
};

export const area = {
  label: "Zona de serviço",
  title: "Grande Lisboa e Setúbal",
  text: "Trabalho em toda a Área Metropolitana de Lisboa, nas duas margens do Tejo. Se a tua localidade não estiver na lista, pergunta na mesma.",
  north: { name: "Margem Norte", places: ["Lisboa", "Oeiras", "Cascais", "Sintra", "Amadora", "Odivelas", "Loures", "Vila Franca de Xira", "Mafra"] },
  south: { name: "Margem Sul", places: ["Almada", "Seixal", "Barreiro", "Moita", "Montijo", "Alcochete", "Sesimbra", "Palmela", "Setúbal"] },
};

export const about = {
  label: "Quem vai a tua casa",
  title: "Um profissional de confiança, não uma empresa anónima",
  paragraphs: [
    "Sou eu que faço a recolha, a entrega e a montagem. Falas sempre com a mesma pessoa, do primeiro contacto até ao último parafuso.",
    "Trato a tua casa como se fosse a minha: protejo o chão, arrumo no fim e só dou o trabalho por terminado quando estiveres satisfeito.",
  ],
  stats: [
    // EDITAR: substitui por números reais ou apaga
    { value: "Pontual", label: "Hora combinada é hora cumprida" },
    { value: "Cuidadoso", label: "Chão protegido e casa arrumada" },
    { value: "Direto", label: "Falas sempre comigo" },
  ],
};

export const faq = {
  label: "Perguntas frequentes",
  title: "Antes de pedires",
  items: [
    {
      q: "Quanto custa?",
      a: "Depende do número e tamanho dos móveis, da distância e do andar. Envia a lista pelo WhatsApp e recebes um preço fechado, sem compromisso.",
    },
    {
      q: "Comprei online. Podem recolher a encomenda por mim?",
      a: "Sim. Envia-me os dados do levantamento e eu trato da recolha e da entrega na tua morada.",
    },
    {
      q: "Só fazem montagem, sem entrega?",
      a: "Sim. Se já tens os móveis em casa, vou só montar.",
    },
    {
      q: "Quanto tempo demora uma montagem?",
      a: "Uma cómoda ou cama demora normalmente 30 a 90 minutos. Um roupeiro grande pode levar algumas horas. Dou-te uma estimativa no orçamento.",
    },
    {
      q: "Como posso pagar?",
      a: `Aceito ${site.payments.join(", ")}. O pagamento é feito no fim do serviço.`,
    },
  ],
};

export const quote = {
  label: "Pedir orçamento",
  title: "Diz-me o que precisas",
  text: "Preenche o essencial e o WhatsApp abre com a mensagem pronta a enviar. Respondo o mais depressa possível.",
  fields: {
    name: "Nome",
    service: "Serviço",
    place: "Localidade",
    placePlaceholder: "Ex.: Almada",
    date: "Data preferida",
    floor: "Andar e elevador",
    floorPlaceholder: "Ex.: 3.º andar, com elevador",
    items: "O que compraste?",
    itemsPlaceholder: "Ex.: 1 roupeiro de 2 portas, 1 cama de casal, 2 mesas de cabeceira",
    optional: "opcional",
  },
  services: ["Entrega + Montagem", "Só entrega", "Só montagem"],
  submit: "Abrir WhatsApp com o pedido",
  required: "Preenche o nome, o serviço e a localidade.",
  note: "Os teus dados só são usados para preparar a mensagem. Nada é guardado neste site.",
};

export const footer = {
  disclaimer:
    "Serviço independente, sem qualquer ligação ao IKEA. IKEA é uma marca registada da Inter IKEA Systems B.V.",
  rights: "Todos os direitos reservados.",
};
