import { useEffect, useState } from 'react';
import type { Testimonial } from '../../types';

interface TestimonialCarouselProps {
  items: Testimonial[];
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <div className="testi-carousel">
      <div className="testi-carousel-track">
        {items.map((item, index) => (
          <article
            key={item.id}
            className={`testi-slide ${index === active ? 'testi-slide--active' : ''}`}
          >
            <div className="testi-stars">★★★★★</div>
            <div className="testi-bar" />
            <p className="testi-q">&ldquo;{item.quote}&rdquo;</p>
            <div className="testi-auth">{item.author}</div>
          </article>
        ))}
      </div>
      <div className="testi-dots">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`testi-dot${index === active ? ' active' : ''}`}
            onClick={() => setActive(index)}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
