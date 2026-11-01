// Carrinha de entregas desenhada em SVG (vista de lado, virada para a direita):
// cabine vermelha, caixa de carga cinzenta, vidros azul-claro.
// Coordenadas locais: 220 × 120. Rodas centradas em (44, 100) e (176, 100).

export const VAN_WHEELS = [44, 176] as const;

const red = "#d3161c";
const redDark = "#a90f14";
const glass = "#8fd3ea";

export function VanBody() {
  return (
    <g>
      {/* caixa de carga */}
      <rect x="0" y="0" width="150" height="92" rx="6" fill="#dcdcdc" />
      <rect x="0" y="0" width="150" height="12" rx="6" fill="#ebebeb" />
      <rect x="0" y="80" width="150" height="12" fill="#c6c6c6" />
      <path d="M5 8v76" stroke="#cbcbcb" strokeWidth="2" />
      {/* chassis */}
      <rect x="0" y="90" width="218" height="7" rx="3" fill="#3b3b3b" />
      {/* cabine */}
      <path d="M150 22h33c7 0 13 3 17 9l15 25c2 3 3 7 3 11v30h-68z" fill={red} />
      <path d="M150 80h68v17h-68z" fill={redDark} />
      <path d="M157 30h24c4 0 8 2 10 5l13 21h-47z" fill={glass} />
      <path d="M162 34h9l-8 17h-6z" fill="#fff" opacity="0.6" />
      <path d="M193 58v38" stroke={redDark} strokeWidth="2" />
      <rect x="180" y="64" width="9" height="3" rx="1.5" fill="#7d0b0f" />
      <rect x="198" y="38" width="6" height="11" rx="2" fill={redDark} />
      <path d="M211 68h7v11h-9z" fill="#fff6cf" />
      <rect x="208" y="88" width="13" height="8" rx="2" fill="#c9c9c9" />
    </g>
  );
}

/** Roda estática (para ilustrações sem movimento). */
export function VanWheel({ cx }: { cx: number }) {
  return (
    <g transform={`translate(${cx} 100)`}>
      <circle r="20" fill="#1f1f1f" />
      <circle r="10" fill="#d6d6d6" />
      <circle r="4" fill="#a9a9a9" />
    </g>
  );
}

/** Carrinha completa e estática. */
export function VanStatic() {
  return (
    <g>
      <ellipse cx="112" cy="121" rx="114" ry="6" fill="#000" opacity="0.1" />
      <VanBody />
      {VAN_WHEELS.map((cx) => (
        <VanWheel key={cx} cx={cx} />
      ))}
    </g>
  );
}
