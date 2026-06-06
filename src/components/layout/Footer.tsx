import { Link } from 'react-router-dom';

interface FooterProps {
  copyright?: string;
  social?: Array<{ label: string; href: string }>;
}

const SHOP_LINKS = [
  { to: '/women', label: 'Women' },
  { to: '/men', label: 'Men' },
  { to: '/trending', label: 'Trending' },
  { to: '/haul', label: 'Haul' },
] as const;

const ATELIER_LINKS = [
  { to: '#', label: 'Our Story' },
  { to: '#', label: 'Craft & Process' },
  { to: '/trending', label: 'The Journal' },
  { to: '#', label: 'Sustainability' },
] as const;

const SERVICE_LINKS = [
  { to: '#', label: 'Contact' },
  { to: '#', label: 'Size Guide' },
  { to: '#', label: 'Returns' },
  { to: '#', label: 'Stores' },
] as const;

const DEFAULT_SOCIAL = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export function Footer({
  copyright = '© 2026 Varnivaa. All rights reserved.',
  social = DEFAULT_SOCIAL,
}: FooterProps) {
  return (
    <footer>
      <div className="ft-grid">
        <div className="ft-brand">
          <span className="logo">Varnivaa</span>
          <p className="ft-tagline">
            &ldquo;Clothing that asks nothing of you, except that you wear it well.&rdquo;
          </p>
        </div>
        <div className="ft-col">
          <h4>Shop</h4>
          <ul>
            {SHOP_LINKS.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h4>Atelier</h4>
          <ul>
            {ATELIER_LINKS.map(({ to, label }) => (
              <li key={label}>
                {to.startsWith('/') ? <Link to={to}>{label}</Link> : <a href={to}>{label}</a>}
              </li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h4>Service</h4>
          <ul>
            {SERVICE_LINKS.map(({ to, label }) => (
              <li key={label}>
                <a href={to}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ft-base">
        <span className="ft-copy">{copyright}</span>
        <div className="ft-soc">
          {social.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
