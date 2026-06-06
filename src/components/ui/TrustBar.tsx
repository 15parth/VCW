const TRUST_ITEMS = [
  { icon: '◇', label: 'Free Delivery', sub: 'Above ₹12,000' },
  { icon: '↺', label: '30-Day Returns', sub: 'Effortless & free' },
  { icon: '✦', label: 'Handcrafted', sub: 'Small batches' },
  { icon: '◈', label: 'Secure Checkout', sub: 'Encrypted payment' },
] as const;

export function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-bar-inner">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="trust-item">
            <span className="trust-icon">{item.icon}</span>
            <div>
              <strong>{item.label}</strong>
              <span>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
