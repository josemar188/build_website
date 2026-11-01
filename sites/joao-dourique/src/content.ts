// Todo o texto do site está aqui. Para mudar um texto, edita este ficheiro.
// Campos com "EDITAR" são provisórios e devem ser confirmados com o restaurante.

export const site = {
  name: "João d'Ourique",
  kind: "Restaurante",
  // EDITAR: confirmar (no Google aparece "PC 5 de Outubro 4")
  address: "Praça 5 de Outubro, 4",
  postal: "2845-225 Amora",
  phoneDisplay: "212 222 059",
  phoneHref: "tel:+351212222059",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Restaurante+Jo%C3%A3o+d%27Ourique+Amora",
  rating: "4,2",
  reviews: "675",
  priceRange: "10–20 € por pessoa",
  // EDITAR: confirmar dias de abertura e dia de descanso
  hours: [
    { label: "Almoço", value: "até às 15:00" },
    { label: "Jantar", value: "a partir das 19:00" },
  ],
  // EDITAR: links reais (deixa "" para esconder)
  instagram: "",
  facebook: "",
};

export const nav = [
  { href: "#casa", label: "A Casa" },
  { href: "#cozinha", label: "A Cozinha" },
  { href: "#ementa", label: "A Ementa" },
  { href: "#contactos", label: "Contactos" },
];

export const hero = {
  eyebrow: "Restaurante · Amora, Seixal",
  title: "Elegância Intemporal",
  lead: "Cozinha portuguesa de sempre, servida com tempo e com vista para a Baía do Seixal.",
  primary: "Reservar mesa",
  secondary: "Ver a ementa",
  photoAlt: "Tachos de batata com presunto e ovo, servidos à mesa",
};

export const house = {
  label: "A Casa",
  title: "Uma mesa portuguesa, à beira da baía",
  // EDITAR: história real do restaurante (ano de abertura, família, etc.)
  paragraphs: [
    "No João d'Ourique, a cozinha portuguesa é tratada com o respeito que merece: bons produtos, receitas de sempre e o tempo certo para cada prato.",
    "Para um almoço sem pressa ou um jantar entre amigos, recebemos cada mesa como se fosse a primeira, com a baía como pano de fundo.",
  ],
  highlights: [
    { title: "Almoço e jantar", text: "Todos os momentos à mesa" },
    { title: "Vista para a baía", text: "Destacada por quem nos visita" },
    { title: "10–20 €", text: "Por pessoa, em média" },
  ],
};

export const kitchen = {
  label: "A Cozinha",
  title: "A Alquimia dos Sabores",
  lead: "Do petisco para partilhar ao prato que conforta, cada receita nasce do produto e da tradição.",
  items: [
    {
      image: "petiscos",
      alt: "Tachos de batata frita com presunto, ovo e migas, prontos a partilhar",
      title: "Petiscos para partilhar",
      text: "Tachos generosos que chegam à mesa a fumegar, feitos para dividir.",
    },
    {
      image: "bitoque",
      alt: "Bitoque com ovo estrelado, batata frita, arroz e salada",
      title: "Os clássicos da casa",
      text: "Pratos portugueses de sempre, com a dose e o sabor de casa.",
    },
  ],
  fish: "O peixe é dos pratos mais elogiados por quem nos visita.",
};

export type MenuItem = { name: string; description?: string; price?: string };

// EDITAR: ementa de exemplo. Substitui pelos pratos e preços reais.
// Preço vazio ("") = o preço não aparece.
export const menu = {
  label: "A Ementa",
  title: "A Nossa Ementa",
  note: "A ementa pode variar consoante a época e o mercado. Pergunte pelos pratos do dia.",
  categories: [
    {
      name: "Entradas e Petiscos",
      items: [
        { name: "Pão, manteiga e azeitonas", description: "Para começar à portuguesa", price: "" },
        { name: "Batatas com presunto e ovo", description: "Batata frita, presunto, ovo e migas", price: "" },
        { name: "Amêijoas à Bulhão Pato", description: "Alho, coentros e limão", price: "" },
        { name: "Pica-pau", description: "Para partilhar", price: "" },
      ],
    },
    {
      name: "Peixe",
      items: [
        { name: "Peixe grelhado do dia", description: "Conforme o mercado", price: "" },
        { name: "Bacalhau à casa", description: "Receita da cozinha", price: "" },
        { name: "Polvo à lagareiro", description: "Batata a murro e azeite", price: "" },
      ],
    },
    {
      name: "Carne",
      items: [
        { name: "Bitoque da casa", description: "Ovo estrelado, batata frita, arroz e salada", price: "" },
        { name: "Secretos de porco preto", description: "Grelhados na brasa", price: "" },
        { name: "Bife à portuguesa", description: "Com molho da casa", price: "" },
      ],
    },
    {
      name: "Sobremesas",
      items: [
        { name: "Doce da casa", description: "Pergunte pela sugestão do dia", price: "" },
        { name: "Mousse de chocolate", price: "" },
        { name: "Fruta da época", price: "" },
      ],
    },
  ] as { name: string; items: MenuItem[] }[],
};

export const reservation = {
  label: "Reservas",
  title: "A Sua Mesa Espera por Si",
  text: "Reserve por telefone e diga-nos quantos são e a que horas chegam. Tratamos do resto.",
  button: "Ligar para reservar",
};

export const footer = {
  hoursTitle: "Horário",
  contactTitle: "Contactos",
  findTitle: "Onde estamos",
  directions: "Ver no mapa",
  rights: "Todos os direitos reservados.",
};
