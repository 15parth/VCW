import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SectionHeadProps {
  label: string;
  linkLabel?: string;
  linkTo?: string;
  onLinkClick?: () => void;
  actions?: ReactNode;
}

export function SectionHead({ label, linkLabel, linkTo, onLinkClick, actions }: SectionHeadProps) {
  const linkContent =
    linkLabel &&
    (linkTo ? (
      <Link to={linkTo} className="sec-link">
        {linkLabel}
      </Link>
    ) : (
      <span className="sec-link" onClick={onLinkClick} role={onLinkClick ? 'button' : undefined}>
        {linkLabel}
      </span>
    ));

  return (
    <div className="sec-head">
      <span className="sec-label">{label}</span>
      {actions ?? linkContent}
    </div>
  );
}
