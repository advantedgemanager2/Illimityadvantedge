interface AcumenBirdProps {
  size?: number;
  className?: string;
  variant?: "idle" | "active";
}

export default function AcumenBird({
  size = 32,
  className = "",
  variant = "idle",
}: AcumenBirdProps) {
  const src = variant === "active" ? "/acumen-active.png" : "/acumen-idle.png";

  return (
    <img
      src={src}
      alt="Acumen"
      width={size}
      height={size}
      className={`acumen-breathe object-contain ${className}`}
      draggable={false}
    />
  );
}
