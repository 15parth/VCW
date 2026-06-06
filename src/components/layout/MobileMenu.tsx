import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/women', label: 'Women' },
  { path: '/men', label: 'Men' },
  { path: '/trending', label: 'Trending' },
  { path: '/haul', label: 'Haul' },
] as const;

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div
        className={`mobile-menu-overlay ${open ? 'mobile-menu-overlay--open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-head">
          <span className="logo">MAISON·V</span>
          <button type="button" className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>
        <ul className="mobile-menu-links">
          {NAV_ITEMS.map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path} end={path === '/'} onClick={onClose}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="mobile-menu-note">Resort 2026 — New arrivals live now</p>
      </aside>
    </>
  );
}
