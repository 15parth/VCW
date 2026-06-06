import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { PageLayout } from '../components/layout/PageLayout';
import { ArrowCta } from '../components/ui/ArrowCta';
import { FloatingShopBar } from '../components/ui/FloatingShopBar';
import { NewsletterStrip } from '../components/ui/NewsletterStrip';
import { PillFilter } from '../components/ui/PillFilter';
import { ProductCard } from '../components/ui/ProductCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHead } from '../components/ui/SectionHead';
import { TrustBar } from '../components/ui/TrustBar';
import { lookbookItems, WOMEN_CATEGORIES, womenProducts } from '../data/content';

export function WomenPage() {
  return (
    <PageLayout>
      <section className="w-hero">
        <div className="w-hero-left">
          <div>
            <div className="eyebrow">Women — Resort 2026</div>
            <h1 className="w-h1">
              Form
              <br />
              follows
              <br />
              <em>feeling.</em>
            </h1>
            <p className="w-desc">
              Clothes designed for the woman who dresses for herself. Natural fibers, considered
              cuts, unhurried craft — each piece made to accompany a full life.
            </p>
            <PillFilter categories={WOMEN_CATEGORIES} />
          </div>
          <ArrowCta label="Shop All Women" color="var(--umber)" />
        </div>
        <div className="w-hero-right">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80"
            alt="Women hero"
          />
          <div className="w-float">
            <p>New Arrival</p>
            <strong>Linen Column Dress</strong>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="w-products">
        <SectionHead
          label="72 Pieces — Resort 2026"
          actions={
            <div style={{ display: 'flex', gap: 16 }}>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'var(--bark)',
                  cursor: 'pointer',
                }}
              >
                Filter
              </span>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'var(--bark)',
                  cursor: 'pointer',
                }}
              >
                Sort
              </span>
            </div>
          }
        />
        <p className="section-sub">
          Filter by category, hover to preview alternate angles, and add your size straight to bag.
        </p>
        <div className="w-grid">
          {womenProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 70}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="w-lookbook">
        <div className="lb-head">
          <h2 className="lb-h">
            The <em>Quiet Hours</em> Lookbook
          </h2>
          <p className="lb-sub">
            An intimate study in restraint. Shot at first light in the Rajasthan desert — twelve
            looks for the woman who knows exactly who she is.
          </p>
        </div>
        <div className="lb-grid">
          {lookbookItems.map((look) => (
            <div key={look.id} className="lb-card">
              <img src={look.image} alt={look.name} loading="lazy" />
              <div className="lb-num">{look.number}</div>
              <div className="lb-info">
                <div className="lb-name">{look.name}</div>
                <div className="lb-price">{look.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-edit">
        <div className="w-edit-img">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80"
            alt="Journal"
            loading="lazy"
          />
        </div>
        <div className="w-edit-text">
          <div className="w-edit-eyebrow">The Journal — Spring 2026</div>
          <h2 className="w-edit-h">
            Travelling in
            <br />
            <em>fewer</em> things.
          </h2>
          <p className="w-edit-body">
            The art of the considered wardrobe. Four looks that carry you from arrival to evening,
            across three time zones and two hemispheres — with nothing left behind.
          </p>
          <Link to="/trending">
            <ArrowCta label="Read the Story" color="var(--umber)" />
          </Link>
        </div>
      </section>

      <NewsletterStrip />
      <Footer copyright="© 2026 Varnivaa." social={[{ label: 'Instagram', href: '#' }, { label: 'Pinterest', href: '#' }]} />
      <FloatingShopBar />
    </PageLayout>
  );
}
