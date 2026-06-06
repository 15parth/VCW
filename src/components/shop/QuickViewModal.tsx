import { useEffect, useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { getProductSizes } from '../../utils/product';

export function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addToCart, toggleWishlist, isWishlisted } =
    useShop();
  const [selectedSize, setSelectedSize] = useState('');
  const [imageHover, setImageHover] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(getProductSizes(quickViewProduct)[1] ?? 'M');
      setImageHover(false);
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const sizes = getProductSizes(quickViewProduct);
  const wishlisted = isWishlisted(quickViewProduct.id);
  const hoverImage = quickViewProduct.secondaryImage ?? quickViewProduct.image;

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize);
    closeQuickView();
  };

  return (
    <div className="qv-overlay" onClick={closeQuickView}>
      <div className="qv-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button type="button" className="qv-close" onClick={closeQuickView} aria-label="Close">
          ×
        </button>
        <div
          className="qv-image"
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        >
          <img
            src={imageHover ? hoverImage : quickViewProduct.image}
            alt={quickViewProduct.name}
          />
          {quickViewProduct.tag && <span className="qv-tag">{quickViewProduct.tag}</span>}
        </div>
        <div className="qv-content">
          <p className="qv-eyebrow">Varnivaa — Resort 2026</p>
          <h2>{quickViewProduct.name}</h2>
          <p className="qv-price">{quickViewProduct.price}</p>
          <p className="qv-copy">
            Natural fibres, considered cut, hand-finished in Portugal. A piece made to be worn
            across seasons — unhurried, uncompromising.
          </p>
          {quickViewProduct.viewers && (
            <p className="qv-urgency">
              <span className="qv-pulse" />
              {quickViewProduct.viewers} people viewing this piece
            </p>
          )}
          <div className="qv-sizes">
            <span>Select size</span>
            <div className="qv-size-row">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`qv-size${selectedSize === size ? ' active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="qv-actions">
            <button type="button" className="btn-dark" onClick={handleAdd}>
              Add to Bag
            </button>
            <button
              type="button"
              className={`qv-wish${wishlisted ? ' active' : ''}`}
              onClick={() => toggleWishlist(quickViewProduct.id)}
              aria-label="Toggle wishlist"
            >
              ♥
            </button>
          </div>
          <ul className="qv-perks">
            <li>Complimentary delivery above ₹12,000</li>
            <li>30-day effortless returns</li>
            <li>Handcrafted in small batches</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
