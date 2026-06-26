import { memo, useRef, useEffect, useCallback } from 'react';
import { pricingMatrix, currencyMatrix, billingMatrix } from '../data/pricing.js';
import { computePrice } from '../utils/pricingEngine.js';

// Static ordered arrays for iteration
const tiers = Object.entries(pricingMatrix);          // [[key, tier], ...]
const currencies = Object.keys(currencyMatrix);        // ['USD','INR','EUR']
const billings = Object.keys(billingMatrix);           // ['monthly','annual']

const Pricing = memo(function Pricing() {
  // ─── Refs for current state values (no re-render on change) ───
  const billingRef    = useRef('monthly');
  const currencyRef   = useRef('USD');

  // ─── Refs for DOM nodes ───
  const priceSpanRefs    = useRef({});   // { starter: el, growth: el, scale: el }
  const suffixSpanRefs   = useRef({});
  const billingBtnRefs   = useRef({});   // { monthly: el, annual: el }
  const currencyBtnRefs  = useRef({});   // { USD: el, INR: el, EUR: el }
  const saveBadgeRefs    = useRef({});   // tier key → save badge el

  // ─── Core DOM updater — touches only price text nodes ───
  const updatePrices = useCallback(() => {
    const cur = currencyMatrix[currencyRef.current];
    const bil = billingMatrix[billingRef.current];
    tiers.forEach(([key, tier]) => {
      const priceEl  = priceSpanRefs.current[key];
      const suffixEl = suffixSpanRefs.current[key];
      if (!priceEl) return;
      const { formatted } = computePrice(tier.baseMonthlyUSD, cur, bil);
      priceEl.textContent  = cur.symbol + formatted;
      if (suffixEl) suffixEl.textContent = bil.suffix;
    });
  }, []);

  // ─── Billing click handler — pure DOM, zero setState ───
  const handleBilling = useCallback((selected) => {
    billingRef.current = selected;
    // update button visual state
    billings.forEach((key) => {
      const el = billingBtnRefs.current[key];
      if (!el) return;
      const active = key === selected;
      el.setAttribute('aria-pressed', String(active));
      el.classList.toggle('pricing__billing-btn--active', active);
    });
    // update prices
    updatePrices();
  }, [updatePrices]);

  // ─── Currency click handler — pure DOM, zero setState ───
  const handleCurrency = useCallback((selected) => {
    currencyRef.current = selected;
    currencies.forEach((key) => {
      const el = currencyBtnRefs.current[key];
      if (!el) return;
      const active = key === selected;
      el.setAttribute('aria-pressed', String(active));
      el.classList.toggle('pricing__currency-btn--active', active);
    });
    updatePrices();
  }, [updatePrices]);

  // ─── Sync initial DOM state after mount ───
  useEffect(() => {
    updatePrices();
  }, [updatePrices]);

  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="pricing__header">
          <div className="section-label">Pricing</div>
          <h2 id="pricing-heading">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="pricing__sub">Scale your automation without scaling your bill.</p>
          <p className="pricing__helper">
            Prices are calculated dynamically from a multi-currency pricing matrix.
            Annual billing applies a flat 20% discount.
          </p>
        </header>

        {/* ─── Controls: billing toggle + currency switch ─── */}
        <div className="pricing__controls">

          {/* Billing toggle */}
          <div className="pricing__billing" role="group" aria-label="Billing cycle">
            {billings.map((key) => {
              const val = billingMatrix[key];
              const isDefault = key === 'monthly';
              return (
                <button
                  key={key}
                  ref={(el) => { billingBtnRefs.current[key] = el; }}
                  className={`pricing__billing-btn${isDefault ? ' pricing__billing-btn--active' : ''}`}
                  aria-pressed={isDefault ? 'true' : 'false'}
                  onClick={() => handleBilling(key)}
                >
                  {val.label}
                  {val.badge && (
                    <span className="pricing__badge">{val.badge}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Currency segmented switch */}
          <div className="pricing__currency" role="group" aria-label="Currency">
            {currencies.map((key) => {
              const cur = currencyMatrix[key];
              const isDefault = key === 'USD';
              return (
                <button
                  key={key}
                  ref={(el) => { currencyBtnRefs.current[key] = el; }}
                  className={`pricing__currency-btn${isDefault ? ' pricing__currency-btn--active' : ''}`}
                  aria-pressed={isDefault ? 'true' : 'false'}
                  onClick={() => handleCurrency(key)}
                >
                  {cur.symbol} {key}
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Pricing cards — static JSX, only price spans are mutated ─── */}
        <div className="pricing__grid">
          {tiers.map(([key, tier]) => {
            // Compute initial prices once at render time (USD, monthly defaults)
            const defaultCur = currencyMatrix['USD'];
            const defaultBil = billingMatrix['monthly'];
            const { formatted: initFormatted } = computePrice(
              tier.baseMonthlyUSD, defaultCur, defaultBil
            );

            return (
              <article
                key={key}
                className={`pricing__card glass-card${tier.popular ? ' pricing__card--popular' : ''}`}
                aria-label={`${tier.label} plan`}
              >
                {tier.popular && (
                  <div className="pricing__popular-badge" aria-label="Most popular plan">
                    Most Popular
                  </div>
                )}

                <div className="pricing__tier-header">
                  <h3 className="pricing__tier-name">{tier.label}</h3>
                  <p className="pricing__tier-desc">{tier.description}</p>
                </div>

                <div className="pricing__price-row">
                  {/* This span is the ONLY thing mutated on billing/currency change */}
                  <span
                    ref={(el) => { priceSpanRefs.current[key] = el; }}
                    className="pricing__price"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    ${initFormatted}
                  </span>
                  <span
                    ref={(el) => { suffixSpanRefs.current[key] = el; }}
                    className="pricing__suffix"
                  >
                    /mo
                  </span>
                </div>

                <ul className="pricing__features" aria-label={`${tier.label} plan features`}>
                  {tier.features.map((f) => (
                    <li key={f} className="pricing__feature">
                      <span className="pricing__check" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={tier.popular ? 'btn-primary pricing__cta' : 'btn-secondary pricing__cta'}
                  aria-label={`Get started with ${tier.label} plan`}
                >
                  {tier.popular ? 'Get Started' : 'Start Free'}
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .pricing {
          background: linear-gradient(180deg, transparent, rgba(0,180,216,0.02) 50%, transparent);
        }
        .pricing__header { text-align: center; max-width: 580px; margin: 0 auto 2.5rem; }
        .pricing__sub { margin-top: .5rem; }
        .pricing__helper {
          margin-top: .5rem;
          font-size: .78rem;
          color: var(--text-dim);
          line-height: 1.6;
          font-family: var(--font-mono);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: .5rem .85rem;
          background: rgba(255,255,255,0.02);
          display: inline-block;
        }

        .pricing__controls {
          display: flex; flex-wrap: wrap; gap: 1rem;
          justify-content: center; margin-bottom: 3rem;
        }

        .pricing__billing,
        .pricing__currency {
          display: flex;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
        }

        .pricing__billing-btn,
        .pricing__currency-btn {
          padding: .5rem 1.25rem;
          font-size: .85rem; font-weight: 600;
          color: var(--text-muted);
          background: none;
          transition: background .15s ease, color .15s ease;
          display: flex; align-items: center; gap: .4rem;
          border-right: 1px solid var(--border);
          cursor: pointer;
        }
        .pricing__billing-btn:last-child,
        .pricing__currency-btn:last-child { border-right: none; }

        .pricing__billing-btn--active,
        .pricing__currency-btn--active {
          background: rgba(0,229,160,0.12);
          color: var(--accent);
        }
        .pricing__billing-btn:focus-visible,
        .pricing__currency-btn:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: -2px;
        }

        .pricing__badge {
          font-size: .6rem; font-weight: 700; text-transform: uppercase;
          background: var(--accent); color: #050508;
          padding: 2px 5px; border-radius: 3px; letter-spacing: .04em;
        }

        .pricing__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: start;
        }

        .pricing__card {
          padding: 2rem 1.75rem;
          display: flex; flex-direction: column; gap: 1.25rem;
          position: relative;
          transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease;
        }
        .pricing__card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow);
        }
        .pricing__card--popular {
          border-color: rgba(0,229,160,0.4) !important;
          background: rgba(0,229,160,0.03) !important;
          box-shadow: 0 0 60px rgba(0,229,160,0.08);
        }

        .pricing__popular-badge {
          position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
          background: var(--accent); color: #050508;
          font-size: .7rem; font-weight: 800; letter-spacing: .08em;
          text-transform: uppercase; padding: .3rem .9rem;
          border-radius: 0 0 8px 8px;
          white-space: nowrap;
        }

        .pricing__tier-header { padding-top: .5rem; }
        .pricing__tier-name {
          font-size: 1.15rem; font-weight: 700; color: var(--text); margin-bottom: .25rem;
        }
        .pricing__tier-desc { font-size: .82rem; color: var(--text-muted); margin: 0; }

        .pricing__price-row { display: flex; align-items: baseline; gap: .2rem; }
        .pricing__price {
          font-size: 2.6rem; font-weight: 900;
          color: var(--text); font-family: var(--font-mono); line-height: 1;
          /* transitions should NOT be added here — we update textContent, not CSS */
        }
        .pricing__suffix { font-size: .9rem; color: var(--text-muted); }

        .pricing__features {
          list-style: none; display: flex; flex-direction: column;
          gap: .6rem; flex: 1;
        }
        .pricing__feature {
          display: flex; align-items: flex-start; gap: .6rem;
          font-size: .85rem; color: var(--text-muted); line-height: 1.4;
        }
        .pricing__check {
          color: var(--accent); font-weight: 700; flex-shrink: 0; margin-top: .05em;
        }
        .pricing__cta { width: 100%; justify-content: center; margin-top: auto; }

        @media (max-width: 900px) {
          .pricing__grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
        }
        @media (max-width: 480px) {
          .pricing__controls { flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
});

export default Pricing;
