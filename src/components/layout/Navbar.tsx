import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { useScrolled } from '../../hooks/useScrolled';
import { CartIcon } from '../ui/icons/CartIcon';
import { HeartIcon } from '../ui/icons/HeartIcon';
import { SearchIcon } from '../ui/icons/SearchIcon';
import { MobileMenu } from './MobileMenu';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/women', label: 'Women' },
  { path: '/men', label: 'Men' },
  { path: '/trending', label: 'Trending' },
  { path: '/haul', label: 'Haul' },
] as const;

export function Navbar() {
  const scrolled = useScrolled();
  const { cartCount, wishlist, openCart, showToast } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <NavLink to="/" className="logo" end>
          MAISON·V
        </NavLink>
        <ul className="nav-links nav-links--desktop">
          {NAV_ITEMS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button
            type="button"
            className="nav-icon nav-icon--search"
            aria-label="Search"
            onClick={() =>
              showToast({
                type: 'info',
                title: 'Search',
                subtitle: 'Coming soon — explore collections below.',
              })
            }
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className="nav-icon"
            aria-label="Wishlist"
            onClick={() =>
              showToast({
                type: 'info',
                title: 'Your wishlist',
                subtitle:
                  wishlist.length > 0
                    ? `${wishlist.length} saved piece${wishlist.length > 1 ? 's' : ''}`
                    : 'Save pieces you love with the heart icon.',
              })
            }
          >
            <HeartIcon />
            {wishlist.length > 0 && <span className="wish-badge">{wishlist.length}</span>}
          </button>
          <button type="button" className="cart-wrap nav-icon" aria-label="Cart" onClick={openCart}>
            <CartIcon />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
