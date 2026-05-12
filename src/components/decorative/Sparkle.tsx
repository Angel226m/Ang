interface SparkleProps {
  className?: string;
  delay?: number;
}

export function Sparkle({ className = '', delay = 0 }: SparkleProps) {
  return (
    <svg
      className={`text-brand-gold animate-sparkle ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}