import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { PageLayout } from '../components/layout/PageLayout';
import { ArrowCta } from '../components/ui/ArrowCta';
import { FloatingShopBar } from '../components/ui/FloatingShopBar';
import { NewsletterStrip } from '../components/ui/NewsletterStrip';
import { ProductCard } from '../components/ui/ProductCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHead } from '../components/ui/SectionHead';
import { TestimonialCarousel } from '../components/ui/TestimonialCarousel';
import { Ticker } from '../components/ui/Ticker';
import { TrustBar } from '../components/ui/TrustBar';
import { gramImages, homeArrivals, homeCollections, testimonials } from '../data/content';

export function HomePage() {
  return (
    <PageLayout>
      <section className="home-hero">
        <div className="home-hero-left">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80"
            alt="Hero campaign"
          />
          <div className="hero-caption">
            <p>Featured Piece</p>
            <strong>Linen Column Dress — ₹ 28,500</strong>
          </div>
          <div className="hero-scroll-hint">
            <div className="scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
        <div className="home-hero-right">
          <div className="hero-stagger">
            <div className="eyebrow hero-anim" style={{ animationDelay: '.1s' }}>
              Resort Collection — 2026
            </div>
            <h1 className="hero-h1">
              <span className="hero-anim" style={{ animationDelay: '.2s' }}>
                Dressed
              </span>
              <br />
              <span className="hero-anim" style={{ animationDelay: '.35s' }}>
                in <em>studied</em>
              </span>
              <br />
              <span className="hero-anim" style={{ animationDelay: '.5s' }}>
                restraint.
              </span>
            </h1>
            <p className="hero-body hero-anim" style={{ animationDelay: '.65s' }}>
              Clothing conceived at the intersection of function and feeling. Each piece a considered
              gesture toward the essential — unhurried, uncompromising, made to last.
            </p>
            <div className="hero-actions hero-anim" style={{ animationDelay: '.8s' }}>
              <Link to="/women" className="btn-dark btn-luxe">
                Shop Women
              </Link>
              <Link to="/men" className="btn-outline btn-luxe">
                Shop Men
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <Ticker />

      <ScrollReveal>
        <section className="home-colls">
          <SectionHead label="Collections" linkLabel="View All" linkTo="/women" />
          <div className="coll-grid">
            {homeCollections.map((collection, index) => (
              <ScrollReveal key={collection.id} delay={index * 90}>
                <Link
                  to={collection.path}
                  className={`coll-item coll-${collection.variant}`}
                >
                  <div className="coll-img-wrap">
                    <img src={collection.image} alt={collection.name} loading="lazy" />
                    <div className="coll-overlay">
                      <span>Explore Collection</span>
                      <div className="arrow-line" />
                    </div>
                  </div>
                  <div className="coll-meta">
                    <div className="coll-name">{collection.name}</div>
                    <div className="coll-sub">{collection.subtitle}</div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="home-arrivals">
          <SectionHead label="New Arrivals" linkLabel="View All" linkTo="/women" />
          <p className="section-sub">
            Pieces our community keeps returning for — limited runs, natural fibres, made to last
            beyond the season.
          </p>
          <div className="grid-4">
            {homeArrivals.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 80}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="home-story">
          <div className="story-img">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80"
              alt="Brand story"
              loading="lazy"
            />
            <div className="story-img-overlay" />
          </div>
          <div className="story-text">
            <div className="story-eyebrow">Our Philosophy</div>
            <h2 className="story-h">
              Made slowly.
              <br />
              <em>Worn</em> forever.
            </h2>
            <p className="story-body">
              We believe in making less, but better. Every garment is crafted with intention — from
              the sourcing of natural fibres to the final hand-finishing stitch. Nothing superfluous,
              nothing accidental.
            </p>
            <ArrowCta label="Our Story" color="var(--sand)" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="home-testi">
          <SectionHead label="What Our Community Says" />
          <TestimonialCarousel items={testimonials} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="gram-section">
          <SectionHead label="@varnivaa — Community" linkLabel="Follow Us" />
          <div className="gram-grid">
            {gramImages.map((src, index) => (
              <div key={src} className="gram-cell" style={{ transitionDelay: `${index * 50}ms` }}>
                <img src={src} alt={`Community highlight ${index + 1}`} loading="lazy" />
                <div className="gram-over">
                  <div className="gram-icon" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <NewsletterStrip />
      <Footer />
      <FloatingShopBar />
    </PageLayout>
  );
}
