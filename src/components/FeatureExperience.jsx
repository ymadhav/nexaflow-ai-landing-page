import { useState } from 'react';
import { features } from '../data/features.js';
import { useMediaQuery } from '../hooks/useMediaQuery.js';

export default function FeatureExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="features" className="features" aria-labelledby="features-heading">
      <div className="container">
        <header className="features__header">
          <div className="section-label">Platform Features</div>
          <h2 id="features-heading">
            Every tool your data stack <span className="gradient-text">actually needs</span>
          </h2>
          <p className="features__sub">
            Six core capabilities engineered for reliability, speed, and developer experience.
          </p>
        </header>

        {isMobile
          ? <Accordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          : <Bento activeIndex={activeIndex} setActiveIndex={setActiveIndex} />}
      </div>

      <style>{`
        .features__header { text-align: center; max-width: 600px; margin: 0 auto 3rem; }
        .features__sub { margin-top: .75rem; }

        /* ── BENTO ── */
        .bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 1.25rem;
        }
        .bento__card {
          position: relative; padding: 1.75rem;
          background: var(--glass); border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg); cursor: pointer; overflow: hidden;
          transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
          display: flex; flex-direction: column; gap: .75rem;
        }
        .bento__card--large { grid-column: span 2; }
        .bento__card:hover { border-color: rgba(0,229,160,0.2); transform: translateY(-2px); }
        .bento__card--active {
          border-color: rgba(0,229,160,0.65) !important;
          box-shadow:
            0 0 0 1px rgba(0,229,160,0.25),
            0 0 48px rgba(0,229,160,0.18),
            inset 0 0 32px rgba(0,229,160,0.05) !important;
          background: rgba(0,229,160,0.06) !important;
          transform: translateY(-3px);
        }
        .bento__icon-wrap {
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(0,229,160,0.08); border: 1px solid rgba(0,229,160,0.15);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: background .2s ease, border-color .2s ease;
        }
        .bento__card--active .bento__icon-wrap { background: rgba(0,229,160,0.15); border-color: rgba(0,229,160,0.4); }
        .bento__icon { width: 20px; height: 20px; filter: invert(1) sepia(1) saturate(3) hue-rotate(100deg); }
        .bento__tag { align-self: flex-start; }
        .bento__title { font-size: 1rem; font-weight: 700; color: var(--text); line-height: 1.3; }
        .bento__desc { font-size: .85rem; color: var(--text-muted); line-height: 1.6; }
        .bento__detail {
          font-size: .8rem; color: var(--text-dim); line-height: 1.5;
          max-height: 0; overflow: hidden; opacity: 0;
          transition: max-height .35s ease-in-out, opacity .3s ease;
          font-family: var(--font-mono);
          border-top: 1px solid transparent;
          padding-top: 0;
        }
        .bento__card--active .bento__detail {
          max-height: 100px; opacity: 1;
          border-top-color: var(--border); padding-top: .75rem;
        }
        .bento__glow {
          position: absolute; inset: -1px; border-radius: inherit;
          background: linear-gradient(135deg, rgba(0,229,160,0.09), transparent 55%);
          opacity: 0; transition: opacity .25s ease;
          pointer-events: none;
        }
        .bento__card--active .bento__glow { opacity: 1; }
        /* Accent left-edge strip on active card */
        .bento__card::after {
          content: '';
          position: absolute; top: 12%; bottom: 12%; left: 0;
          width: 3px; border-radius: 0 3px 3px 0;
          background: var(--accent);
          opacity: 0; transition: opacity .25s ease;
        }
        .bento__card--active::after { opacity: 1; }

        /* ── ACCORDION ── */
        .accordion { display: flex; flex-direction: column; gap: .5rem; }
        .accordion__item {
          background: var(--glass); border: 1px solid var(--glass-border);
          border-radius: var(--radius); overflow: hidden;
          transition: border-color .2s ease;
        }
        .accordion__item--active { border-color: rgba(0,229,160,0.4); }
        .accordion__btn {
          width: 100%; display: flex; align-items: center; gap: .75rem;
          padding: 1rem 1.25rem; background: none; text-align: left;
          color: var(--text); font-weight: 600; font-size: .95rem;
          transition: background .2s ease, color .2s ease;
        }
        .accordion__item--active .accordion__btn {
          background: rgba(0,229,160,0.07);
          color: var(--accent);
        }
        .accordion__btn-icon { width: 20px; height: 20px; filter: invert(1) sepia(1) saturate(3) hue-rotate(100deg); flex-shrink: 0; }
        .accordion__btn-title { flex: 1; }
        .accordion__chevron {
          width: 16px; height: 16px; flex-shrink: 0;
          border: none; background: none; filter: invert(1) opacity(.5);
          transition: transform .25s ease; pointer-events: none;
        }
        .accordion__item--active .accordion__chevron { transform: rotate(180deg); }
        .accordion__body {
          max-height: 0; overflow: hidden;
          transition: max-height .35s ease-in-out, opacity .3s ease;
          opacity: 0;
        }
        .accordion__item--active .accordion__body { max-height: 300px; opacity: 1; }
        .accordion__content { padding: 0 1.25rem 1.25rem; }
        .accordion__content p { font-size: .88rem; margin-bottom: .5rem; }
        .accordion__content small { font-size: .78rem; color: var(--text-dim); font-family: var(--font-mono); display: block; line-height: 1.5; }
      `}</style>
    </section>
  );
}

function Bento({ activeIndex, setActiveIndex }) {
  return (
    <div className="bento" role="list">
      {features.map((f, i) => (
        <article
          key={f.id}
          role="listitem"
          className={`bento__card${f.span === 'large' ? ' bento__card--large' : ''}${activeIndex === i ? ' bento__card--active' : ''}`}
          onClick={() => setActiveIndex(i)}
          onMouseEnter={() => setActiveIndex(i)}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveIndex(i); } }}
          aria-label={f.title}
        >
          <div className="bento__glow" aria-hidden="true" />
          <div className="bento__icon-wrap">
            <img src={f.icon} className="bento__icon" alt="" aria-hidden="true" />
          </div>
          <span className="tag bento__tag">{f.tag}</span>
          <h3 className="bento__title">{f.title}</h3>
          <p className="bento__desc">{f.description}</p>
          <p className="bento__detail">{f.detail}</p>
        </article>
      ))}
    </div>
  );
}

function Accordion({ activeIndex, setActiveIndex }) {
  const toggle = (i) => setActiveIndex(activeIndex === i ? -1 : i);

  return (
    <div className="accordion">
      {features.map((f, i) => {
        const isOpen = activeIndex === i;
        const panelId = `accordion-panel-${f.id}`;
        const btnId = `accordion-btn-${f.id}`;
        return (
          <div
            key={f.id}
            className={`accordion__item${isOpen ? ' accordion__item--active' : ''}`}
          >
            <button
              id={btnId}
              className="accordion__btn"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
              onKeyDown={(e) => { if (e.key === 'Escape') setActiveIndex(-1); }}
            >
              <img src={f.icon} className="accordion__btn-icon" alt="" aria-hidden="true" />
              <span className="accordion__btn-title">{f.title}</span>
              <span className="tag" style={{ fontSize: '.65rem' }}>{f.tag}</span>
              <img src="/icons/chevron-down.svg" className="accordion__chevron" alt="" aria-hidden="true" />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="accordion__body"
            >
              <div className="accordion__content">
                <p>{f.description}</p>
                <small>{f.detail}</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
