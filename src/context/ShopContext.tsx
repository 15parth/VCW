import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem, Product, ToastMessage } from '../types';
import { formatPrice, parsePrice } from '../utils/product';

const FREE_SHIPPING_THRESHOLD = 12000;

interface ShopContextValue {
  cart: CartItem[];
  wishlist: string[];
  cartOpen: boolean;
  quickViewProduct: Product | null;
  toasts: ToastMessage[];
  cartCount: number;
  subtotal: number;
  freeShippingRemaining: number;
  freeShippingUnlocked: boolean;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  openCart: () => void;
  closeCart: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  dismissToast: (id: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 3800);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const addToCart = useCallback(
    (product: Product, size: string) => {
      setCart((prev) => {
        const existing = prev.find(
          (item) => item.product.id === product.id && item.size === size,
        );
        if (existing) {
          return prev.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }
        return [...prev, { product, size, quantity: 1 }];
      });
      setCartOpen(true);
      showToast({
        type: 'success',
        title: 'Added to your bag',
        subtitle: `${product.name} · Size ${size}`,
      });
    },
    [showToast],
  );

  const removeFromCart = useCallback((productId: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size)),
    );
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    if (quantity < 1) {
      setCart((prev) =>
        prev.filter((item) => !(item.product.id === productId && item.size === size)),
      );
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const toggleWishlist = useCallback(
    (productId: string) => {
      setWishlist((prev) => {
        const exists = prev.includes(productId);
        if (exists) {
          showToast({ type: 'info', title: 'Removed from wishlist' });
          return prev.filter((id) => id !== productId);
        }
        showToast({ type: 'success', title: 'Saved to wishlist' });
        return [...prev, productId];
      });
    },
    [showToast],
  );

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist],
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + parsePrice(item.product.price) * item.quantity, 0),
    [cart],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;

  const value = useMemo<ShopContextValue>(
    () => ({
      cart,
      wishlist,
      cartOpen,
      quickViewProduct,
      toasts,
      cartCount,
      subtotal,
      freeShippingRemaining,
      freeShippingUnlocked,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isWishlisted,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      openQuickView: setQuickViewProduct,
      closeQuickView: () => setQuickViewProduct(null),
      showToast,
      dismissToast,
    }),
    [
      cart,
      wishlist,
      cartOpen,
      quickViewProduct,
      toasts,
      cartCount,
      subtotal,
      freeShippingRemaining,
      freeShippingUnlocked,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isWishlisted,
      showToast,
      dismissToast,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within ShopProvider');
  return context;
}

export { formatPrice, FREE_SHIPPING_THRESHOLD };
