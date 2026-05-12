interface BowDecoProps {
  className?: string;
}

export function BowDeco({ className = '' }: BowDecoProps) {
  return (
    <svg
      className={`text-brand-pink-deep ${className}`}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="currentColor"
    >
      <path d="M20 5C15 5 10 10 10 15C10 12 12 10 15 10C18 10 20 12 20 15C20 12 22 10 25 10C28 10 30 12 30 15C30 10 25 5 20 5Z" />
      <path d="M10 20C5 20 0 25 0 30C0 25 5 20 10 20Z" />
      <path d="M30 20C35 20 40 25 40 30C40 25 35 20 30 20Z" />
      <circle cx="20" cy="25" r="3" fill="currentColor" />
    </svg>
  );
}