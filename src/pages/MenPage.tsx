import { Footer } from '../components/layout/Footer';
import { PageLayout } from '../components/layout/PageLayout';
import { ArrowCta } from '../components/ui/ArrowCta';
import { ProductCard } from '../components/ui/ProductCard';
import { SectionHead } from '../components/ui/SectionHead';
import { craftStats, menEssentials, menFeatured } from '../data/content';

export function MenPage() {
  const [tallLeft, stackedShort, tallRight] = [
    menFeatured[0],
    menFeatured.slice(1, 3),
    menFeatured[3],
  ];

  return (
    <PageLayout>
      <section className="m-hero">
        <img
          src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1400&q=80"
          alt="Men hero"
        />
        <div className="m-overlay" />
        <div className="m-content">
          <div className="m-season">Menswear — Archive No. 3 · Spring 2026</div>
          <h1 className="m-h1">
            Built to
            <br />
            <em>last</em>
            <br />
            the season.
          </h1>
          <p className="m-sub">
            Structured, unhurried, uncompromising. Clothing that improves with age — crafted from
            materials that earn their presence on your body, season after season.
          </p>
          <div className="m-actions">
            <button type="button" className="btn-cream">
              Shop the Collection
            </button>
            <button type="button" className="btn-outline-cream">
              View Lookbook
            </button>
          </div>
        </div>
        <div className="m-dots">
          <div className="mdot on" />
          <div className="mdot" />
          <div className="mdot" />
        </div>
      </section>

      <section className="m-feat">
        <SectionHead label="Archive No. 3" linkLabel="View All 52 Pieces" />
        <div className="m-pgrid">
          <div className="mprod" style={{ gridRow: 'span 2' }}>
            <img className="mprod-tall" src={tallLeft.image} alt={tallLeft.name} loading="lazy" />
            <div className="mprod-label">
              {tallLeft.tag && <div className="mprod-tag">{tallLeft.tag}</div>}
              <div className="mprod-name">{tallLeft.name}</div>
              <div className="mprod-price">{tallLeft.price}</div>
            </div>
          </div>
          <div className="m-stacked">
            {stackedShort.map((product) => (
              <div key={product.id} className="mprod">
                <img className="mprod-short" src={product.image} alt={product.name} loading="lazy" />
                <div className="mprod-label">
                  {product.tag && <div className="mprod-tag">{product.tag}</div>}
                  <div className="mprod-name">{product.name}</div>
                  <div className="mprod-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mprod" style={{ gridRow: 'span 2' }}>
            <img className="mprod-tall" src={tallRight.image} alt={tallRight.name} loading="lazy" />
            <div className="mprod-label">
              <div className="mprod-name">{tallRight.name}</div>
              <div className="mprod-price">{tallRight.price}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-craft">
        <div className="m-craft-text">
          <div className="m-craft-eyebrow">The Craft</div>
          <h2 className="m-craft-h">
            Woven in
            <br />
            <em>Portugal.</em>
            <br />
            Worn everywhere.
          </h2>
          <p className="m-craft-body">
            Every fabric in our men&apos;s line is sourced from mills weaving for over a century. We
            visit every supplier, touch every cloth, reject everything that doesn&apos;t earn its
            weight.
          </p>
          <ArrowCta label="About Our Process" color="var(--umber)" />
          <div className="m-stats">
            {craftStats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-n">{stat.value}</div>
                <div className="stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="m-craft-img">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Craft"
            loading="lazy"
          />
        </div>
      </section>

      <section className="m-essentials">
        <SectionHead label="The Essentials" linkLabel="Shop All" />
        <div className="grid-4">
          {menEssentials.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer copyright="© 2026 Varnivaa." social={[{ label: 'Instagram', href: '#' }, { label: 'Pinterest', href: '#' }]} />
    </PageLayout>
  );
}
