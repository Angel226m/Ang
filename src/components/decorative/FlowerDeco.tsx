interface FlowerDecoProps {
  className?: string;
  color?: string;
}

export function FlowerDeco({ className = '', color = '#FFB6C8' }: FlowerDecoProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={color}
    >
      <circle cx="10" cy="5" r="3" />
      <circle cx="14" cy="9" r="3" />
      <circle cx="12" cy="14" r="3" />
      <circle cx="8" cy="14" r="3" />
      <circle cx="6" cy="9" r="3" />
      <circle cx="10" cy="10" r="2" fill="#F0D080" />
    </svg>
  );
}