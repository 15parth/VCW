import { useState, type FormEvent } from 'react';
import { useShop } from '../../context/ShopContext';

export function NewsletterStrip() {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast({
      type: 'success',
      title: 'Welcome to the atelier',
      subtitle: 'Early access to drops, reserved for you.',
    });
    setEmail('');
  };

  return (
    <section className="newsletter-strip">
      <div className="newsletter-inner">
        <div className="newsletter-copy">
          <p className="newsletter-eyebrow">The Inner Circle</p>
          <h2>
            Be first to the <em>drop.</em>
          </h2>
          <p>
            Thursday hauls, private sales, and journal stories — delivered quietly to your inbox.
            No noise, only what matters.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
            required
          />
          <button type="submit" className="btn-dark">
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
