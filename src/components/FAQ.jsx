import { useState } from 'react';
import { faqItems } from '../data/faq.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <div className="container faq__inner">
        <header className="faq__header">
          <div className="section-label">FAQ</div>
          <h2 id="faq-heading">
            Common <span className="gradient-text">questions</span>
          </h2>
          <p>Everything you need to know before automating with NexaFlow.</p>
        </header>

        <div className="faq__list" role="list">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${item.id}`;
            const btnId = `faq-btn-${item.id}`;
            return (
              <div key={item.id} className={`faq__item${isOpen ? ' faq__item--open' : ''}`} role="listitem">
                <button
                  id={btnId}
                  className="faq__btn"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => { if (e.key === 'Escape') setOpenIndex(null); }}
                >
                  <span className="faq__question">{item.question}</span>
                  <span className="faq__chevron" aria-hidden="true">
                    <img src="/icons/chevron-down.svg" alt="" width="16" height="16" />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="faq__body"
                >
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq__inner {
          display: grid; grid-template-columns: 340px 1fr; gap: 4rem; align-items: start;
        }
        .faq__header { position: sticky; top: 90px; }
        .faq__header p { margin-top: .75rem; font-size: .9rem; }
        .faq__list { display: flex; flex-direction: column; gap: .75rem; }
        .faq__item {
          background: var(--glass); border: 1px solid var(--glass-border);
          border-radius: var(--radius); overflow: hidden;
          transition: border-color .2s ease;
        }
        .faq__item--open { border-color: rgba(0,229,160,0.3); }
        .faq__btn {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between; gap: 1rem;
          padding: 1.1rem 1.25rem; background: none; text-align: left;
          color: var(--text); font-weight: 600; font-size: .95rem;
          transition: color .15s ease;
        }
        .faq__btn:hover { color: var(--accent); }
        .faq__item--open .faq__btn { color: var(--accent); }
        .faq__question { flex: 1; line-height: 1.4; }
        .faq__chevron {
          flex-shrink: 0; display: flex; align-items: center; justify-content: center;
          filter: invert(1) opacity(.5); transition: transform .25s ease, filter .2s ease;
        }
        .faq__item--open .faq__chevron { transform: rotate(180deg); filter: invert(70%) sepia(80%) saturate(400%) hue-rotate(100deg); }
        .faq__body {
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease-in-out, opacity .3s ease;
          opacity: 0;
        }
        .faq__item--open .faq__body { max-height: 300px; opacity: 1; }
        .faq__answer {
          padding: 0 1.25rem 1.25rem;
          font-size: .88rem; line-height: 1.75;
          color: var(--text-muted);
          border-top: 1px solid var(--border); padding-top: .9rem;
        }
        @media (max-width: 900px) {
          .faq__inner { grid-template-columns: 1fr; gap: 2rem; }
          .faq__header { position: static; }
        }
      `}</style>
    </section>
  );
}
