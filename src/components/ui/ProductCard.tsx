import { useState, type MouseEvent } from 'react';
import { useShop } from '../../context/ShopContext';
import type { Product } from '../../types';
import { getProductSizes } from '../../utils/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openQuickView, toggleWishlist, isWishlisted } = useShop();
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = getProductSizes(product);
  const wishlisted = isWishlisted(product.id);
  const hoverImage = product.secondaryImage ?? product.image;
  const isLowStock = product.tag?.toLowerCase().includes('low') || product.tag?.toLowerCase().includes('last');

  const handleQuickAdd = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedSize) {
      addToCart(product, selectedSize);
      return;
    }
    openQuickView(product);
  };

  return (
    <article
      className={`pcard${hovered ? ' pcard--hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setSelectedSize('');
      }}
      onClick={() => openQuickView(product)}
    >
      <div className="pcard-img" style={{ aspectRatio: product.aspectRatio ?? '2/3' }}>
        <img
          className={`pcard-img-primary${hovered && product.secondaryImage ? ' hidden' : ''}`}
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        {product.secondaryImage && (
          <img
            className={`pcard-img-secondary${hovered ? ' visible' : ''}`}
            src={hoverImage}
            alt=""
            loading="lazy"
            aria-hidden
          />
        )}
        <button
          type="button"
          className={`pcard-wish${wishlisted ? ' active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          ♥
        </button>
        {isLowStock && <span className="pcard-stock">Almost gone</span>}
        <div className="pcard-size-row" onClick={(e) => e.stopPropagation()}>
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`pcard-size${selectedSize === size ? ' active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button type="button" className="quick-add" onClick={handleQuickAdd}>
          {selectedSize ? `Add ${selectedSize} to Bag` : 'Quick Add'}
        </button>
      </div>
      <div className="pcard-meta">
        {product.tag && <div className="pcard-tag">{product.tag}</div>}
        <div className="pcard-name">{product.name}</div>
        <div className="pcard-price-row">
          <span className="pcard-price">{product.price}</span>
          {product.viewers && (
            <span className="pcard-viewers">{product.viewers} viewing</span>
          )}
        </div>
      </div>
    </article>
  );
}
