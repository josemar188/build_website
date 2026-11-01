// Todo o texto do site está aqui. Para mudar um texto, edita este ficheiro.
// Os campos marcados com "EDITAR" são provisórios e devem ser substituídos
// pelos dados reais.

export const locales = ["pt", "uk"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const site = {
  // EDITAR: nome completo como deve aparecer no site
  name: "Lia",
  // EDITAR: email de contacto real
  email: "contacto@exemplo.com",
  instagram: "https://www.instagram.com/lia_moskitos/",
  instagramHandle: "@lia_moskitos",
};

type Dictionary = {
  langName: string;
  switchLabel: string;
  meta: { title: string; description: string };
  nav: { about: string; services: string; topics: string; process: string; faq: string; contact: string };
  cta: string;
  menu: string;
  skip: string;
  close: string;
  hero: {
    eyebrow: string;
    titleStart: string;
    titleEmphasis: string;
    titleEnd: string;
    lead: string;
    secondary: string;
    badge: string;
    photoAlt: string;
  };
  about: { label: string; title: string; paragraphs: string[]; quote: string };
  services: {
    label: string;
    title: string;
    intro: string;
    items: { name: string; duration: string; description: string }[];
    priceNote: string;
  };
  topics: { label: string; title: string; items: { name: string; text: string }[] };
  screen: { label: string; title: string; text: string; examples: string[]; link: string };
  process: { label: string; title: string; steps: { title: string; text: string }[] };
  faq: { label: string; title: string; items: { q: string; a: string }[] };
  contact: { label: string; title: string; text: string; button: string; note: string };
  footer: { rights: string; disclaimer: string };
};

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    langName: "Português",
    switchLabel: "Українською",
    meta: {
      title: "Lia — Psicóloga · Consultas online",
      description:
        "Consultas de psicologia online, em português e ucraniano. Um espaço seguro para compreender o que sentes e mudar a forma como te relacionas contigo e com os outros.",
    },
    nav: {
      about: "Sobre mim",
      services: "Consultas",
      topics: "Temas",
      process: "Como funciona",
      faq: "Perguntas",
      contact: "Contacto",
    },
    cta: "Marcar consulta",
    menu: "Abrir menu",
    skip: "Saltar para o conteúdo",
    close: "Fechar menu",
    hero: {
      eyebrow: "Psicóloga · Consultas online",
      titleStart: "Há histórias que",
      titleEmphasis: "merecem",
      titleEnd: "ser compreendidas.",
      lead:
        "Um espaço calmo e confidencial para olhares para dentro, perceberes os teus padrões e encontrares uma forma mais leve de viver contigo e com os outros.",
      secondary: "Conhecer as consultas",
      badge: "Online · Onde estiveres",
      photoAlt: "Retrato de Lia, psicóloga, com luz quente de fim de tarde",
    },
    about: {
      label: "Sobre mim",
      title: "Olá, sou a Lia.",
      paragraphs: [
        "Sou psicóloga e acompanho adultos que querem compreender melhor as suas emoções, relações e escolhas. Acredito que nada do que sentimos aparece por acaso: cada reação tem uma história.",
        "No meu trabalho junto rigor clínico e uma linguagem próxima. No Instagram, analiso personagens de séries e filmes para mostrar como a psicologia está presente no dia a dia. Em consulta, o foco és tu.",
      ],
      quote: "“Não precisas de estar em crise para merecer cuidado.”",
    },
    services: {
      label: "Consultas",
      title: "Acompanhamento psicológico online",
      intro: "Todas as sessões são feitas por videochamada, com total confidencialidade, a partir de qualquer lugar.",
      items: [
        {
          name: "Primeira consulta",
          duration: "50 min",
          description:
            "Um primeiro encontro para nos conhecermos, perceber o que te traz e definirmos juntas o caminho a seguir.",
        },
        {
          name: "Consulta individual",
          duration: "50 min",
          description:
            "Sessões regulares para trabalhar emoções, relações, padrões que se repetem e momentos de mudança.",
        },
        {
          name: "Acompanhamento continuado",
          duration: "Semanal ou quinzenal",
          description:
            "Um processo mais profundo e estável, para quem quer compreender a sua história e mudar de forma duradoura.",
        },
      ],
      priceNote: "Valores e horários disponíveis por email.",
    },
    topics: {
      label: "Temas",
      title: "Com o que posso ajudar",
      items: [
        { name: "Ansiedade e frustração", text: "Quando a tensão constante e a sensação de “nunca chega” ocupam demasiado espaço." },
        { name: "Relações e codependência", text: "Padrões que se repetem, medo de perder o outro, dificuldade em impor limites." },
        { name: "Síndrome da “boa menina”", text: "Dizer sempre que sim, agradar a todos e esquecer o que tu própria queres." },
        { name: "Perdas e recomeços", text: "Fins de relação, luto e a difícil arte de deixar ir o que já não serve." },
        { name: "Maternidade", text: "As mudanças de identidade, o cansaço e as emoções que ninguém nos contou." },
        { name: "Autoconhecimento", text: "Perceber os teus mecanismos de defesa e porque reages como reages." },
      ],
    },
    screen: {
      label: "Psicologia no ecrã",
      title: "Personagens que nos ajudam a ver-nos",
      text:
        "No Instagram, uso séries e filmes para explicar estruturas de personalidade, mecanismos de defesa e dinâmicas relacionais, de forma acessível e sem julgamentos.",
      examples: ["Euphoria", "Shameless", "Adolescence", "Legend"],
      link: "Ver no Instagram",
    },
    process: {
      label: "Como funciona",
      title: "Três passos simples",
      steps: [
        { title: "Escreve-me", text: "Envia um email com uma breve descrição do que te traz e da tua disponibilidade." },
        { title: "Marcamos", text: "Respondo com horários possíveis e enviamos a ligação para a videochamada." },
        { title: "Começamos", text: "Na primeira sessão conhecemo-nos e decidimos juntas como continuar." },
      ],
    },
    faq: {
      label: "Perguntas frequentes",
      title: "Antes de marcar",
      items: [
        {
          q: "Como funcionam as consultas online?",
          a: "Por videochamada, numa plataforma segura. Só precisas de um lugar tranquilo, auscultadores e uma ligação estável à internet.",
        },
        {
          q: "As consultas online são tão eficazes como as presenciais?",
          a: "Sim. Para a maioria das pessoas, o acompanhamento online é tão eficaz como o presencial, com a vantagem de poderes estar num espaço onde te sentes segura.",
        },
        {
          q: "Com que frequência são as sessões?",
          a: "Normalmente semanais ou quinzenais. Decidimos juntas o ritmo que faz sentido para ti.",
        },
        {
          q: "O que digo em consulta é confidencial?",
          a: "Sempre. Tudo o que partilhas fica entre nós, de acordo com o código deontológico da profissão.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Vamos conversar?",
      text: "Dar o primeiro passo é muitas vezes o mais difícil. Escreve-me e respondo-te com calma, normalmente em 48 horas.",
      button: "Enviar email",
      note: "Em situação de emergência, liga para o 112.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      disclaimer: "Este site não substitui serviços de emergência.",
    },
  },

  uk: {
    langName: "Українська",
    switchLabel: "Português",
    meta: {
      title: "Ліа — Психолог · Онлайн-консультації",
      description:
        "Онлайн-консультації психолога українською та португальською. Безпечний простір, щоб зрозуміти свої почуття та змінити стосунки із собою й іншими.",
    },
    nav: {
      about: "Про мене",
      services: "Консультації",
      topics: "Теми",
      process: "Як це працює",
      faq: "Питання",
      contact: "Контакти",
    },
    cta: "Записатися",
    menu: "Відкрити меню",
    skip: "Перейти до змісту",
    close: "Закрити меню",
    hero: {
      eyebrow: "Психолог · Онлайн-консультації",
      titleStart: "Є історії, які",
      titleEmphasis: "варто",
      titleEnd: "зрозуміти.",
      lead:
        "Спокійний і конфіденційний простір, щоб зазирнути всередину себе, побачити свої патерни та знайти легший спосіб жити із собою та з іншими.",
      secondary: "Про консультації",
      badge: "Онлайн · Де б ви не були",
      photoAlt: "Портрет психологині Ліі в теплому вечірньому світлі",
    },
    about: {
      label: "Про мене",
      title: "Привіт, я Ліа.",
      paragraphs: [
        "Я психолог і супроводжую дорослих, які хочуть краще розуміти свої емоції, стосунки та вибори. Я вірю, що ніщо з того, що ми відчуваємо, не з’являється випадково: кожна реакція має свою історію.",
        "У роботі я поєдную клінічну точність і живу, зрозумілу мову. В Instagram я розбираю персонажів серіалів і фільмів, щоб показати, як психологія присутня в повсякденні. На консультації у фокусі — ви.",
      ],
      quote: "«Не обов’язково бути в кризі, щоб заслуговувати на турботу».",
    },
    services: {
      label: "Консультації",
      title: "Психологічний супровід онлайн",
      intro: "Усі сесії проходять у форматі відеозв’язку, повністю конфіденційно, з будь-якої точки світу.",
      items: [
        {
          name: "Перша консультація",
          duration: "50 хв",
          description:
            "Перша зустріч, щоб познайомитися, зрозуміти ваш запит і разом визначити подальший шлях.",
        },
        {
          name: "Індивідуальна консультація",
          duration: "50 хв",
          description:
            "Регулярні сесії для роботи з емоціями, стосунками, повторюваними сценаріями та періодами змін.",
        },
        {
          name: "Тривалий супровід",
          duration: "Щотижня або раз на два тижні",
          description:
            "Глибший і стабільніший процес для тих, хто хоче зрозуміти свою історію та змінитися надовго.",
        },
      ],
      priceNote: "Вартість і вільні години — за запитом на email.",
    },
    topics: {
      label: "Теми",
      title: "З чим я можу допомогти",
      items: [
        { name: "Тривога та фрустрація", text: "Коли постійна напруга й відчуття «цього завжди замало» займають забагато місця." },
        { name: "Стосунки та співзалежність", text: "Сценарії, що повторюються, страх втратити іншого, складність із кордонами." },
        { name: "Синдром «хорошої дівчинки»", text: "Завжди казати «так», догоджати всім і забувати, чого хочете ви самі." },
        { name: "Втрати та нові початки", text: "Розставання, горе та непросте вміння відпускати те, що вже не служить." },
        { name: "Материнство", text: "Зміна ідентичності, втома та емоції, про які нам ніхто не розповідав." },
        { name: "Самопізнання", text: "Зрозуміти свої захисні механізми та чому ви реагуєте саме так." },
      ],
    },
    screen: {
      label: "Психологія на екрані",
      title: "Персонажі, які допомагають побачити себе",
      text:
        "В Instagram я використовую серіали й фільми, щоб пояснювати структури особистості, захисні механізми та динаміку стосунків — доступно й без осуду.",
      examples: ["Euphoria", "Shameless", "Adolescence", "Legend"],
      link: "Дивитися в Instagram",
    },
    process: {
      label: "Як це працює",
      title: "Три прості кроки",
      steps: [
        { title: "Напишіть мені", text: "Надішліть email з коротким описом вашого запиту та зручним для вас часом." },
        { title: "Домовляємося", text: "Я відповім з можливими варіантами часу та надішлю посилання на відеозв’язок." },
        { title: "Починаємо", text: "На першій сесії ми знайомимося й разом вирішуємо, як рухатися далі." },
      ],
    },
    faq: {
      label: "Часті питання",
      title: "Перед записом",
      items: [
        {
          q: "Як проходять онлайн-консультації?",
          a: "Через відеозв’язок на захищеній платформі. Вам потрібні лише тихе місце, навушники та стабільний інтернет.",
        },
        {
          q: "Чи такі ж ефективні онлайн-консультації, як і очні?",
          a: "Так. Для більшості людей онлайн-супровід такий самий ефективний, як і очний, а ще ви можете бути там, де почуваєтеся в безпеці.",
        },
        {
          q: "Як часто проходять сесії?",
          a: "Зазвичай щотижня або раз на два тижні. Ритм ми обираємо разом.",
        },
        {
          q: "Чи конфіденційне те, що я розповідаю?",
          a: "Завжди. Усе, чим ви ділитеся, залишається між нами відповідно до етичного кодексу професії.",
        },
      ],
    },
    contact: {
      label: "Контакти",
      title: "Поговоримо?",
      text: "Перший крок часто найважчий. Напишіть мені — я спокійно відповім, зазвичай протягом 48 годин.",
      button: "Написати email",
      note: "У разі надзвичайної ситуації телефонуйте 112.",
    },
    footer: {
      rights: "Усі права захищені.",
      disclaimer: "Цей сайт не замінює екстрені служби.",
    },
  },
};
