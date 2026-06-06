import { useShop } from '../../context/ShopContext';

export function ToastContainer() {
  const { toasts, dismissToast } = useShop();

  return (
    <div className="toast-stack" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast--${toast.type}`}>
          <div className="toast-icon">{toast.type === 'success' ? '✓' : '♡'}</div>
          <div className="toast-copy">
            <strong>{toast.title}</strong>
            {toast.subtitle && <span>{toast.subtitle}</span>}
          </div>
          <button
            type="button"
            className="toast-close"
            onClick={() => dismissToast(toast.id)}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
