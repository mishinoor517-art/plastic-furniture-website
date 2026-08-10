interface ChairIllustrationProps {
  color?: string;
  className?: string;
}

export default function ChairIllustration({ color = "#111111", className = "h-full w-full" }: ChairIllustrationProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 600 450" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="chairShadow" x1="0" x2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <ellipse cx="300" cy="365" rx="160" ry="38" fill="url(#chairShadow)" />

        <g transform="translate(0 12)">
          <path
            d="M210 118C210 96 227 78 250 78H350C373 78 390 96 390 118V170L378 195C371 206 358 213 344 213H256C242 213 229 206 222 195L210 170V118Z"
            fill={color}
            stroke="#D8D8D8"
            strokeWidth="4"
          />

          <path
            d="M365 125L415 118C430 116 443 126 445 141C447 157 437 170 422 171L384 175L365 125Z"
            fill={color}
            stroke="#D8D8D8"
            strokeWidth="4"
          />

          <path
            d="M205 126L155 119C140 117 127 127 125 142C123 158 133 171 147 172L186 176L205 126Z"
            fill={color}
            stroke="#D8D8D8"
            strokeWidth="4"
          />

          <path
            d="M283 213H317L344 297C347 307 339 317 329 317H271C261 317 253 307 256 297L283 213Z"
            fill={color}
            stroke="#D8D8D8"
            strokeWidth="4"
          />

          <path
            d="M300 105C300 95 308 87 318 87H334C345 87 353 95 353 105V137C353 148 345 156 334 156H318C308 156 300 148 300 137V105Z"
            fill="#F4F4F4"
            stroke="#D8D8D8"
            strokeWidth="3"
          />

          <g fill="#B5B7B8" stroke="#A1A3A6" strokeWidth="3">
            <rect x="182" y="310" width="20" height="96" rx="10" />
            <rect x="352" y="310" width="20" height="96" rx="10" />
            <rect x="275" y="318" width="20" height="96" rx="10" />
          </g>

          <g fill="#8A8C8F" stroke="#7C7F82" strokeWidth="2">
            <path d="M180 405H208L198 422H173L180 405Z" />
            <path d="M350 405H378L368 422H343L350 405Z" />
            <path d="M270 415H299L289 432H263L270 415Z" />
          </g>

          <ellipse cx="263" cy="112" rx="42" ry="18" fill="#FFFFFF" fillOpacity="0.48" />
          <ellipse cx="342" cy="132" rx="28" ry="10" fill="#FFFFFF" fillOpacity="0.24" />
        </g>
      </svg>
    </div>
  );
}
