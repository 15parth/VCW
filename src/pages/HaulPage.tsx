import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Footer } from '../components/layout/Footer';
import { PageLayout } from '../components/layout/PageLayout';
import { FloatingShopBar } from '../components/ui/FloatingShopBar';
import { NewsletterStrip } from '../components/ui/NewsletterStrip';
import { ProductCard } from '../components/ui/ProductCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHead } from '../components/ui/SectionHead';
import { bundles, haulProducts, saleItems } from '../data/content';
import type { Product } from '../types';

export function HaulPage() {
  const { addToCart } = useShop();

  const addBundle = (bundle: (typeof bundles)[number]) => {
    const product: Product = {
      id: bundle.id,
      name: bundle.name,
      price: bundle.price,
      image: bundle.images[0],
      tag: bundle.tag,
    };
    addToCart(product, 'Bundle');
  };

  const scrollToProducts = () => {
    document.getElementById('haul-prod')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageLayout>
      <section className="haul-hero">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80"
          alt="Haul hero"
        />
        <div className="haul-overlay" />
        <div className="haul-hero-content">
          <div className="haul-tag">Seasonal Haul — Resort 2026</div>
          <h1 className="haul-h1">
            Everything
            <br />
            you <em>need</em>
            <br />
            this season.
          </h1>
          <p className="haul-desc">
            Curated drops, limited bundles, and our biggest discounts of the year — all in one
            place. Updated every Thursday.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn-cream" onClick={scrollToProducts}>
              Shop the Haul
            </button>
            <Link to="/trending" className="btn-outline-cream">
              See What&apos;s Trending
            </Link>
          </div>
        </div>
      </section>

      <section className="haul-intro">
        <div className="haul-intro-label">
          <em>This week&apos;s</em> drop is live.
        </div>
        <div className="haul-intro-text">
          <p style={{ marginBottom: 16 }}>
            Each Thursday we release a new haul — a tightly edited selection of new arrivals,
            end-of-season pieces, and exclusive bundles at exceptional value. No filler, no noise.
            Just the best things we make, made available.
          </p>
          <p>
            This week: 24 pieces across womenswear and menswear, three exclusive bundles, and our
            archive sale running at up to 40% off.
          </p>
        </div>
      </section>

      <section className="haul-products" id="haul-prod">
        <SectionHead label="This Week's Drop — 24 Pieces" linkLabel="View All" />
        <div className="haul-grid">
          {haulProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 60}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="haul-sale">
        <SectionHead label="Archive Sale — Up to 40% Off" linkLabel="View All Sale" />
        <div className="sale-grid">
          {saleItems.map((item) => (
            <div key={item.id} className="sale-card">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="sale-badge">{item.discount}</div>
              <div className="sale-info">
                <div className="sale-name">{item.name}</div>
                <div className="sale-prices">
                  <span className="sale-new">{item.newPrice}</span>
                  <span className="sale-old">{item.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="haul-bundle">
        <SectionHead label="Curated Bundles" linkLabel="All Bundles" />
        <div className="bundle-grid">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="bundle-card">
              <div className="bundle-imgs">
                <img src={bundle.images[0]} alt="" loading="lazy" />
                <img src={bundle.images[1]} alt="" loading="lazy" />
              </div>
              <div className="bundle-info">
                <div className="bundle-tag">{bundle.tag}</div>
                <div className="bundle-name">{bundle.name}</div>
                <div className="bundle-desc">{bundle.description}</div>
                <div>
                  <span className="bundle-price">{bundle.price}</span>
                  <span className="bundle-old">{bundle.oldPrice}</span>
                </div>
                <button
                  type="button"
                  className="btn-dark btn-luxe"
                  style={{ marginTop: 16, fontSize: 10, padding: '11px 24px' }}
                  onClick={() => addBundle(bundle)}
                >
                  Add Bundle to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterStrip />
      <Footer copyright="© 2026 Maison V." social={[{ label: 'Instagram', href: '#' }, { label: 'Pinterest', href: '#' }]} />
      <FloatingShopBar />
    </PageLayout>
  );
}
