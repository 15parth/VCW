import { Footer } from '../components/layout/Footer';
import { PageLayout } from '../components/layout/PageLayout';
import { ArrowCta } from '../components/ui/ArrowCta';
import { SectionHead } from '../components/ui/SectionHead';
import { articles, colorSwatches, trendReport } from '../data/content';

export function TrendingPage() {
  return (
    <PageLayout>
      <section className="tr-hero">
        <div className="tr-hero-left">
          <div>
            <div className="tr-issue">The Journal — Issue 06, Spring 2026</div>
            <h1 className="tr-h1">
              The season of
              <br />
              <em>considered</em>
              <br />
              dressing.
            </h1>
            <p className="tr-body">
              Six trends, four stories, one colour palette — everything you need to understand what
              this season is really about, and how to wear it with conviction.
            </p>
            <ArrowCta label="Read the Issue" color="var(--umber)" />
          </div>
          <div className="tr-meta">
            <div>
              <div className="tr-meta-lbl">Key Colour</div>
              <div className="tr-meta-val">Desert Sand</div>
            </div>
            <div>
              <div className="tr-meta-lbl">Key Silhouette</div>
              <div className="tr-meta-val">The Long Line</div>
            </div>
            <div>
              <div className="tr-meta-lbl">Key Fabric</div>
              <div className="tr-meta-val">Washed Linen</div>
            </div>
          </div>
        </div>
        <div className="tr-hero-right">
          <div className="tr-main">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80"
              alt="Trending hero"
            />
          </div>
          <div className="tr-strip">
            <div className="tr-strip-cell">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="tr-strip-cell" style={{ borderLeft: '4px solid var(--ivory)' }}>
              <img
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="tr-articles">
        <SectionHead label="Features" linkLabel="All Articles" />
        <div className="art-grid">
          {articles.map((article) => (
            <div key={article.id} className="art-card">
              <div className="art-img">
                <img src={article.image} alt="" loading="lazy" />
              </div>
              <div className="art-cat">{article.category}</div>
              <h2 className="art-title">{article.title}</h2>
              <p className="art-excerpt">{article.excerpt}</p>
              <div className="art-by">
                By {article.author} &nbsp;·&nbsp; {article.readTime}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tr-report">
        <SectionHead label="SS26 Trend Report" linkLabel="See Full Report" />
        <div className="tr-rgrid">
          {trendReport.map((item) => (
            <div key={item.id} className="rcard">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="rcard-info">
                <div className="rcard-trend">{item.trend}</div>
                <div className="rcard-name">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tr-palette">
        <div className="pal-top">
          <div>
            <h2 className="pal-h">
              The SS26
              <br />
              <em>colour story.</em>
            </h2>
            <p className="pal-body">
              Six tones that tell the whole season — from desert dust to deep shade. Each sits in
              perfect relation to the next, a palette for layering and effortless coherence.
            </p>
          </div>
          <ArrowCta label="Shop the Palette" color="var(--umber)" />
        </div>
        <div className="swatches">
          {colorSwatches.map((swatch) => (
            <div key={swatch.id} className="sw">
              <div className={`sw-color ${swatch.className}`} />
              <div className="sw-name">{swatch.name}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer copyright="© 2026 Maison V." social={[{ label: 'Instagram', href: '#' }, { label: 'Pinterest', href: '#' }]} />
    </PageLayout>
  );
}
