// Todo o texto do site está aqui. Campos com "EDITAR" são provisórios e
// devem ser confirmados com o restaurante antes de publicar.

export const site = {
  name: "Rota dos Petiscos",
  tagline: "Terra & Mar",
  place: "Amora, Seixal",
  // EDITAR: morada exata e código postal
  address: "Amora",
  postal: "2845 Amora",
  // EDITAR: telefone real (formato para mostrar e formato para ligar)
  phoneDisplay: "000 000 000",
  phoneHref: "tel:+351000000000",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Rota+dos+Petiscos+Terra+%26+Mar+Amora",
  rating: "4,3",
  reviews: "775",
  priceRange: "15–30 € por pessoa",
  // EDITAR: confirmar dias e hora de abertura (no Google: fecha às 00:00)
  hours: [{ label: "Todos os dias", value: "até à meia-noite" }],
  instagram: "",
  facebook: "",
};

export const nav = [
  { href: "#ementa", label: "Ementa" },
  { href: "#espaco", label: "O Espaço" },
  { href: "#visita", label: "Visita" },
];

export const hero = {
  kicker: "Amora · Seixal",
  title: "Petiscos de terra e mar,",
  titleItalic: "à mesa e sem pressa.",
  cta: "Reservar mesa",
  imageAlt: "Esplanada do Rota dos Petiscos ao fim do dia, com mesas postas, chapéus vermelhos e aquecedores",
};

export const intro = {
  label: "A casa",
  text:
    "No Rota dos Petiscos, a mesa enche-se devagar: tábuas para partilhar, grelhados no ponto, marisco fresco e as sangrias que já são a nossa assinatura. Uma casa descontraída em Amora, com esplanada aquecida e portas abertas até à meia-noite.",
  facts: [
    { label: "Horário", value: "Até à meia-noite" },
    { label: "Preço médio", value: "15–30 €" },
    { label: "Google", value: "4,3 · 775 avaliações" },
  ],
};

type Dish = { name: string; note?: string };

export const menu = {
  label: "Ementa",
  title: "Duas rotas, uma mesa",
  terra: {
    name: "Terra",
    image: "espetada-pendurada",
    imageAlt: "Espetada pendurada de vazia, camarão e ananás grelhado",
    dishes: [
      { name: "Naco da vazia com ananás grelhado", note: "O clássico da casa, para partilhar" },
      { name: "Espetada pendurada", note: "Vazia, camarão e ananás, servida na vertical" },
      { name: "Lagartos grelhados", note: "Com arroz, batata frita e molho da casa" },
      { name: "Moelas", note: "Um dos petiscos mais pedidos" },
      { name: "Bitoque", note: "Bife, ovo estrelado, arroz e batata frita" },
    ] as Dish[],
  },
  mar: {
    name: "Mar",
    image: "camarao",
    imageAlt: "Tacho de camarão salteado com alho e coentros",
    dishes: [
      { name: "Tábua de marisco", note: "Para celebrar, chega à mesa com fogo de artifício" },
      { name: "Camarão salteado", note: "Alho, azeite e coentros" },
      { name: "Espetada de camarão e lulas", note: "Com pimento, arroz e batata frita" },
      { name: "Lulas no tacho", note: "Com arroz branco e batata frita" },
      { name: "Amêijoas", note: "Para molhar o pão" },
    ] as Dish[],
  },
  // EDITAR: confirmar nomes dos pratos; os preços estão no Google/na ementa física
  note: "Ementa completa e preços no restaurante. Os pratos podem variar consoante o mercado.",
};

export const celebrate = {
  label: "Para celebrar",
  title: "Uma tábua de marisco que chega com fogo de artifício.",
  text: "Aniversários, jantares de grupo ou só porque sim: avise-nos ao reservar e preparamos a mesa.",
  imageAlt: "Tábua de marisco em dois andares com camarão, sapateira e salada, com um fogo de artifício aceso",
};

export const drinks = {
  label: "Sangrias da casa",
  title: "A bebida de que todos falam",
  text: "A sangria de maracujá é a mais elogiada por quem nos visita, e a de caipirinha não fica atrás. Em jarro, para a mesa toda.",
  items: [
    { image: "sangria-maracuja", alt: "Dois copos de sangria de maracujá num brinde", name: "Sangria de maracujá" },
    { image: "sangria-caipirinha", alt: "Jarro de sangria de caipirinha com gelo e lima", name: "Sangria de caipirinha" },
  ],
};

export const gallery = {
  label: "Da cozinha",
  items: [
    { image: "espetada-camarao", alt: "Espetada de camarão e lulas com arroz e batata frita" },
    { image: "lulas", alt: "Lulas com molho, arroz branco e batata frita" },
    { image: "batata-doce", alt: "Batata doce frita num cesto de rede preto" },
    { image: "moelas", alt: "Frigideira de moelas com molho de tomate e cesto de batata frita" },
    { image: "cheesecake", alt: "Fatia de cheesecake de frutos vermelhos, com o letreiro ROTA ao fundo" },
    { image: "bitoque", alt: "Bitoque com ovo estrelado, arroz e batata frita" },
  ],
};

export const space = {
  label: "O espaço",
  title: "Esplanada aquecida e sala acolhedora",
  text:
    "Lá fora, a esplanada com aquecedores convida a ficar até tarde. Lá dentro, a sala com a parede verde e o letreiro ROTA recebe famílias, amigos e grupos.",
  image: "naco-vazia",
  imageAlt: "Naco da vazia com ananás grelhado em primeiro plano e a sala com o letreiro ROTA ao fundo",
};

// Avaliações reais do Google (texto visível nas capturas)
export const reviews = [
  { quote: "Simplesmente maravilhoso! Excelente qualidade, ótimo atendimento…", author: "Rafaela Anjos", stars: 5 },
  { quote: "Bom ambiente e petiscos top!! Sangria de caipirinha excelente!!", author: "Anabela Gonçalves", stars: 5 },
];

export const visit = {
  label: "Visita",
  title: "A sua mesa está à espera",
  text: "Reserve por telefone, sobretudo ao fim de semana e para grupos.",
  cta: "Ligar para reservar",
  directions: "Como chegar",
};
