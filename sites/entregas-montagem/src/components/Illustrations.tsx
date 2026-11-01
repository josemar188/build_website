// Ilustrações originais do site (sem fotos de bancos de imagens).
// Usam as cores do tema, por isso mudam se a paleta mudar em globals.css.

const wood = "#c99a6b";
const woodDark = "#a97b4f";
const card = "#d9ad74";
const cardDark = "#b98a52";
const steel = "#9aa7a1";
const white = "#ffffff";
const edge = "#d5ddd8";

type Props = { className?: string; label: string };

/** Cómoda a meio da montagem, com gaveta no chão, caixa de ferramentas e instruções. */
export function AssemblyIllustration({ className, label }: Props) {
  return (
    <svg viewBox="0 0 480 320" className={className} role="img" aria-label={label}>
      <rect width="480" height="320" fill="var(--color-mint)" />
      <circle cx="400" cy="60" r="90" fill="var(--color-paper)" opacity="0.6" />
      {/* chão */}
      <rect y="268" width="480" height="52" fill="var(--color-paper)" />
      <path d="M0 268h480" stroke={edge} strokeWidth="2" />
      <ellipse cx="205" cy="272" rx="110" ry="8" fill="var(--color-forest)" opacity="0.08" />

      {/* cómoda */}
      <rect x="112" y="82" width="186" height="16" rx="3" fill={wood} />
      <rect x="112" y="94" width="186" height="4" fill={woodDark} opacity="0.5" />
      <rect x="120" y="98" width="170" height="168" fill={white} stroke={edge} strokeWidth="2" />
      <rect x="120" y="260" width="10" height="10" fill={woodDark} />
      <rect x="280" y="260" width="10" height="10" fill={woodDark} />
      {/* gaveta de cima */}
      <rect x="128" y="106" width="154" height="46" rx="3" fill={white} stroke={edge} strokeWidth="2" />
      <rect x="186" y="126" width="38" height="6" rx="3" fill={woodDark} />
      {/* espaço vazio com calhas */}
      <rect x="128" y="160" width="154" height="42" fill="#eef2ef" />
      <rect x="128" y="168" width="168" height="5" rx="2" fill={steel} />
      <rect x="128" y="190" width="168" height="5" rx="2" fill={steel} />
      <path d="M302 164l12-6M304 178l14 0M302 192l12 6" stroke="var(--color-green)" strokeWidth="3" strokeLinecap="round" />
      {/* gaveta de baixo */}
      <rect x="128" y="210" width="154" height="46" rx="3" fill={white} stroke={edge} strokeWidth="2" />
      <rect x="186" y="230" width="38" height="6" rx="3" fill={woodDark} />

      {/* gaveta solta no chão */}
      <path d="M330 236l22-14h104l-22 14z" fill="#eef2ef" stroke={edge} strokeWidth="2" />
      <rect x="330" y="236" width="104" height="38" rx="2" fill={white} stroke={edge} strokeWidth="2" />
      <path d="M434 236l22-14v38l-22 14z" fill="#e4eae6" stroke={edge} strokeWidth="2" />
      <rect x="364" y="252" width="36" height="6" rx="3" fill={woodDark} />

      {/* caixa de ferramentas */}
      <rect x="30" y="236" width="84" height="38" rx="5" fill="var(--color-orange)" />
      <rect x="30" y="236" width="84" height="12" rx="5" fill="#ea7a3c" />
      <rect x="58" y="226" width="28" height="12" rx="4" fill="none" stroke="var(--color-forest)" strokeWidth="5" />
      <rect x="66" y="246" width="12" height="8" rx="2" fill="var(--color-forest)" />

      {/* chave de fendas */}
      <g transform="rotate(-18 250 292)">
        <rect x="212" y="286" width="34" height="12" rx="6" fill="var(--color-orange)" />
        <rect x="246" y="289.5" width="46" height="5" rx="2" fill={steel} />
      </g>
      {/* parafusos */}
      {[[300, 296], [314, 300], [326, 294]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3.5" fill="var(--color-ink-soft)" />
      ))}
      {/* folha de instruções */}
      <g transform="rotate(8 120 296)">
        <rect x="92" y="280" width="62" height="34" rx="2" fill={white} stroke={edge} strokeWidth="2" />
        <rect x="100" y="288" width="20" height="18" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" />
        <path d="M126 290h20M126 297h16M126 304h20" stroke="var(--color-muted)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/** Carrinha de entregas com a porta aberta e um carrinho de mão com caixas. */
export function DeliveryIllustration({ className, label }: Props) {
  return (
    <svg viewBox="0 0 480 320" className={className} role="img" aria-label={label}>
      <rect width="480" height="320" fill="var(--color-orange-soft)" />
      <circle cx="80" cy="60" r="90" fill="var(--color-paper)" opacity="0.6" />
      {/* passeio e estrada */}
      <rect y="262" width="480" height="58" fill="var(--color-paper)" />
      <path d="M0 262h480" stroke={edge} strokeWidth="2" />
      <ellipse cx="330" cy="268" rx="150" ry="8" fill="var(--color-forest)" opacity="0.1" />

      {/* carrinha: caixa de carga */}
      <rect x="200" y="86" width="196" height="150" rx="12" fill="var(--color-forest)" />
      <rect x="200" y="182" width="196" height="12" fill="var(--color-mint)" opacity="0.9" />
      <rect x="222" y="112" width="40" height="40" rx="10" fill="var(--color-green)" />
      <path d="M242 120l13 7v14l-13 7-13-7v-14z" fill="none" stroke="var(--color-mint)" strokeWidth="3" strokeLinejoin="round" />
      {/* cabine */}
      <path d="M396 120h44c8 0 14 4 18 11l18 34c2 4 3 8 3 12v47c0 6-5 12-12 12h-71z" fill="var(--color-forest)" />
      <path d="M404 132h32c4 0 7 2 9 6l14 27h-55z" fill="var(--color-mint)" opacity="0.85" />
      <rect x="462" y="206" width="18" height="10" rx="3" fill="#f6c14b" />
      <rect x="404" y="182" width="14" height="4" rx="2" fill="var(--color-mint)" />
      {/* porta traseira aberta */}
      <path d="M200 92l-22 10v128l22 4z" fill="#14503f" />
      <rect x="184" y="150" width="4" height="22" rx="2" fill="var(--color-mint)" />
      {/* rodas */}
      {[256, 418].map((x) => (
        <g key={x}>
          <circle cx={x} cy="238" r="26" fill="var(--color-ink)" />
          <circle cx={x} cy="238" r="11" fill={steel} />
        </g>
      ))}

      {/* carrinho de mão com caixas */}
      <path d="M58 118v132h58" fill="none" stroke="var(--color-ink-soft)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 112l8 6" stroke="var(--color-ink-soft)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="74" cy="254" r="11" fill="var(--color-ink)" />
      <circle cx="74" cy="254" r="4" fill={steel} />
      <rect x="64" y="186" width="70" height="60" rx="3" fill={card} />
      <rect x="64" y="186" width="70" height="10" fill={cardDark} />
      <rect x="94" y="186" width="10" height="60" fill="#e8c897" opacity="0.7" />
      <rect x="68" y="134" width="60" height="50" rx="3" fill={card} />
      <rect x="68" y="134" width="60" height="9" fill={cardDark} />
      <rect x="93" y="134" width="10" height="50" fill="#e8c897" opacity="0.7" />
      <path d="M78 166h18M78 172h12" stroke={cardDark} strokeWidth="2" strokeLinecap="round" />

      {/* colchão embrulhado encostado */}
      <g transform="rotate(-8 160 180)">
        <rect x="138" y="112" width="40" height="146" rx="12" fill={white} stroke={edge} strokeWidth="2" />
        <path d="M138 140h40M138 176h40M138 212h40" stroke="#cfe3ee" strokeWidth="5" opacity="0.9" />
        <path d="M146 120c6 20 6 40 0 60" stroke="#e7f1f6" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>

      {/* caixa pequena no passeio */}
      <rect x="20" y="226" width="34" height="30" rx="2" fill={card} />
      <rect x="32" y="226" width="8" height="30" fill="#e8c897" opacity="0.7" />
    </svg>
  );
}

/** Telemóvel com mapa e rota até casa, carrinha atrás e caixas à frente. */
export function OrderIllustration({ className, label }: Props) {
  return (
    <svg viewBox="0 0 480 340" className={className} role="img" aria-label={label}>
      <ellipse cx="250" cy="318" rx="210" ry="12" fill="var(--color-forest)" opacity="0.08" />

      {/* carrinha atrás */}
      <rect x="170" y="96" width="210" height="170" rx="16" fill={white} stroke={edge} strokeWidth="3" />
      <path d="M380 128h40c9 0 16 5 20 12l22 40c2 4 3 9 3 13v61c0 7-6 13-13 13h-72z" fill={white} stroke={edge} strokeWidth="3" />
      <path d="M390 140h28c5 0 9 3 11 7l18 33h-57z" fill="var(--color-mint)" />
      <rect x="170" y="210" width="295" height="14" fill="var(--color-green)" />
      <rect x="452" y="232" width="16" height="10" rx="3" fill="#f6c14b" />
      {[230, 420].map((x) => (
        <g key={x}>
          <circle cx={x} cy="276" r="28" fill="var(--color-ink)" />
          <circle cx={x} cy="276" r="12" fill={steel} />
        </g>
      ))}

      {/* telemóvel */}
      <rect x="58" y="20" width="150" height="286" rx="24" fill="var(--color-forest)" />
      <rect x="68" y="44" width="130" height="236" rx="8" fill="#f1f5f2" />
      <rect x="116" y="30" width="34" height="5" rx="2.5" fill="#14503f" />
      <circle cx="133" cy="293" r="7" fill="#14503f" />
      {/* mapa */}
      <rect x="78" y="56" width="44" height="34" rx="3" fill="#dde6e1" />
      <rect x="130" y="56" width="58" height="22" rx="3" fill="#dde6e1" />
      <rect x="78" y="100" width="30" height="60" rx="3" fill="#dde6e1" />
      <rect x="146" y="88" width="42" height="50" rx="3" fill="#dde6e1" />
      <rect x="78" y="172" width="60" height="40" rx="3" fill="#dde6e1" />
      <rect x="150" y="150" width="38" height="78" rx="3" fill="#dde6e1" />
      <rect x="78" y="224" width="44" height="44" rx="3" fill="#dde6e1" />
      <path d="M100 252V166h36v-40h-8" fill="none" stroke="var(--color-green)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 10" />
      <path d="M100 252V166h36v-40" fill="none" stroke="var(--color-green)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <circle cx="100" cy="252" r="7" fill={white} stroke="var(--color-green)" strokeWidth="4" />
      {/* marcador */}
      <path d="M136 72c-13 0-22 9-22 21 0 16 22 37 22 37s22-21 22-37c0-12-9-21-22-21z" fill="var(--color-orange)" />
      <circle cx="136" cy="93" r="8" fill={white} />

      {/* caixas à frente */}
      <rect x="20" y="246" width="72" height="62" rx="3" fill={card} />
      <rect x="20" y="246" width="72" height="11" fill={cardDark} />
      <rect x="50" y="246" width="12" height="62" fill="#e8c897" opacity="0.7" />
      <path d="M20 246l-10-16h60l22 16z" fill="#e3bb85" />
      <rect x="230" y="236" width="86" height="72" rx="3" fill={card} />
      <rect x="230" y="236" width="86" height="12" fill={cardDark} />
      <rect x="266" y="236" width="14" height="72" fill="#e8c897" opacity="0.7" />
      <rect x="196" y="268" width="56" height="42" rx="3" fill={card} stroke={cardDark} strokeWidth="2" />
      <rect x="219" y="268" width="10" height="42" fill="#e8c897" opacity="0.7" />
    </svg>
  );
}
