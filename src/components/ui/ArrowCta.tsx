import type { CSSProperties, MouseEventHandler } from 'react';

interface ArrowCtaProps {
  label: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function ArrowCta({ label, color, onClick }: ArrowCtaProps) {
  const style: CSSProperties | undefined = color ? { color } : undefined;

  return (
    <div className="arrow-cta" style={style} onClick={onClick} role={onClick ? 'button' : undefined}>
      <span className="lbl">{label}</span>
      <div className="arrow-line" />
    </div>
  );
}
