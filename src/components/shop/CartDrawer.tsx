import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, useShop } from '../../context/ShopContext';

export function CartDrawer() {
  const {
    cart,
    cartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingRemaining,
    freeShippingUnlocked,
  } = useShop();

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [cartOpen]);

  const progress = Math.min(100, (subtotal / 12000) * 100);

  return (
    <>
      <div
        className={`cart-overlay ${cartOpen ? 'cart-overlay--open' : ''}`}
        onClick={closeCart}
        aria-hidden={!cartOpen}
      />
      <aside className={`cart-drawer ${cartOpen ? 'cart-drawer--open' : ''}`} aria-label="Shopping bag">
        <div className="cart-drawer-head">
          <div>
            <h2>Your Bag</h2>
            <p>{cart.length === 0 ? 'Curated pieces await' : `${cart.length} item${cart.length > 1 ? 's' : ''} selected`}</p>
          </div>
          <button type="button" className="cart-drawer-close" onClick={closeCart} aria-label="Close bag">
            ×
          </button>
        </div>

        <div className="cart-shipping">
          <div className="cart-shipping-top">
            <span>{freeShippingUnlocked ? 'Complimentary delivery unlocked' : 'Complimentary delivery'}</span>
            <span>{freeShippingUnlocked ? '✓' : formatPrice(freeShippingRemaining)} to go</span>
          </div>
          <div className="cart-shipping-bar">
            <div className="cart-shipping-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your bag is beautifully empty.</p>
              <span>Explore the Resort 2026 collection and find something worth keeping.</span>
              <Link to="/women" className="btn-dark" onClick={closeCart}>
                Shop Women
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="cart-line">
                <img src={item.product.image} alt={item.product.name} />
                <div className="cart-line-info">
                  <strong>{item.product.name}</strong>
                  <span>Size {item.size}</span>
                  <span>{item.product.price}</span>
                  <div className="cart-qty">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="cart-line-remove"
                  onClick={() => removeFromCart(item.product.id, item.size)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-foot">
            <div className="cart-total">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p className="cart-note">Taxes and shipping calculated at checkout.</p>
            <button type="button" className="btn-dark cart-checkout">
              Proceed to Checkout
            </button>
            <button type="button" className="cart-continue" onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
