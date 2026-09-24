interface IconProps {
  name: string;
  className?: string;
}

const common = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function SectionIcon({ name, className }: IconProps) {
  const props = { ...common, className };
  switch (name) {
    case 'wc':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 8.5h3.2a1.8 1.8 0 0 1 0 3.6H9m0 0h1.6a1.8 1.8 0 0 1 0 3.6H9m0-7.2V8.5M9 16V12" />
          <circle cx="15.5" cy="9" r="1" />
          <path d="M15.5 11v5" />
        </svg>
      );
    case 'parking':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 16V8h3.2a2.4 2.4 0 0 1 0 4.8H9" />
        </svg>
      );
    case 'dining':
      return (
        <svg {...props}>
          <path d="M7 3v7a2 2 0 0 0 2 2v9M5 3v6a2 2 0 0 0 4 0V3M7 12v9" />
          <path d="M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" />
        </svg>
      );
    case 'lodging':
      return (
        <svg {...props}>
          <path d="M3 21V8l6-4 6 4 6-4v17" />
          <path d="M3 13h18M9 21v-5h6v5" />
        </svg>
      );
    case 'market':
      return (
        <svg {...props}>
          <path d="M4 9h16l-1 11H5L4 9z" />
          <path d="M8 9V6a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case 'fuel':
      return (
        <svg {...props}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 9h2.5a1.5 1.5 0 0 1 1.5 1.5V15a2 2 0 0 0 0 4h-4" />
          <path d="M6 11h6M6 14h6" />
        </svg>
      );
    case 'monument':
      return (
        <svg {...props}>
          <path d="M12 3l4 3v3H8V6l4-3zM8 9v9M16 9v9M6 21h12M6 21v-3M18 21v-3M10 12h4" />
        </svg>
      );
    case 'waste':
      return (
        <svg {...props}>
          <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
          <path d="M10 11v6M14 11v6" />
        </svg>
      );
    case 'wildlife':
      return (
        <svg {...props}>
          <path d="M5 19c4 0 4-9 7-9s3 9 7 9" />
          <circle cx="12" cy="8" r="2" />
          <path d="M10 6l-1-3M14 6l1-3" />
        </svg>
      );
    case 'water':
      return (
        <svg {...props}>
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
        </svg>
      );
    case 'events':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
