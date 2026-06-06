import { Link } from 'react-router-dom';
import { useFloatingBar } from '../../hooks/useFloatingBar';

export function FloatingShopBar() {
  const show = useFloatingBar();

  return (
    <div className={`floating-bar ${show ? 'floating-bar--visible' : ''}`}>
      <div className="floating-bar-inner">
        <div>
          <span className="floating-bar-tag">Resort 2026</span>
          <strong>Discover pieces made to be kept.</strong>
        </div>
        <div className="floating-bar-actions">
          <Link to="/women" className="btn-dark">
            Shop Women
          </Link>
          <Link to="/haul" className="btn-outline">
            View Haul
          </Link>
        </div>
      </div>
    </div>
  );
}
