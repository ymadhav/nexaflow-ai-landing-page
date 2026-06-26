import { useEffect, useRef } from 'react';

const metrics = [
  { value: 92, suffix: '%', label: 'Faster workflow routing', icon: '/icons/arrow-trending-up.svg' },
  { value: 48, suffix: 'K+', label: 'Automated tasks / month', icon: '/icons/cog-8-tooth.svg' },
  { value: 99.9, suffix: '%', label: 'Monitored uptime SLA', icon: '/icons/arrow-path.svg' },
  { value: 12, suffix: '+', label: 'Enterprise integrations', icon: '/icons/link.svg' },
];

function animateCount(el, target, duration = 1200) {
  const start = performance.now();
  const isDecimal = target !== Math.floor(target);
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = isDecimal ? target.toFixed(1) : target;
  };
  requestAnimationFrame(step);
}

export default function Metrics() {
  const refs = useRef([]);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (animated.current) return;
        if (entries[0].isIntersecting) {
          animated.current = true;
          refs.current.forEach((el, i) => {
            if (el) animateCount(el, metrics[i].value);
          });
        }
      },
      { threshold: 0.4 }
    );
    const section = document.getElementById('metrics-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics-section" className="metrics" aria-label="Platform metrics">
      <div className="container">
        <div className="metrics__grid">
          {metrics.map(({ value, suffix, label, icon }, i) => (
            <article key={label} className="metrics__card glass-card">
              <img src={icon} className="metrics__icon" alt="" aria-hidden="true" />
              <div className="metrics__val">
                <span ref={(el) => (refs.current[i] = el)} className="metrics__num">
                  {value}
                </span>
                <span className="metrics__suffix">{suffix}</span>
              </div>
              <p className="metrics__label">{label}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .metrics { padding: 3rem 0; }
        .metrics__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .metrics__card {
          padding: 1.5rem 1.25rem;
          display: flex; flex-direction: column; gap: .5rem;
          transition: border-color .2s ease, transform .2s ease;
        }
        .metrics__card:hover {
          border-color: rgba(0,229,160,0.25);
          transform: translateY(-3px);
        }
        .metrics__icon { width: 28px; height: 28px; filter: invert(1) sepia(1) saturate(3) hue-rotate(100deg); margin-bottom: .25rem; }
        .metrics__val { display: flex; align-items: baseline; gap: .1rem; }
        .metrics__num { font-size: 2.2rem; font-weight: 800; color: var(--text); font-family: var(--font-mono); line-height: 1; }
        .metrics__suffix { font-size: 1.1rem; font-weight: 700; color: var(--accent); }
        .metrics__label { font-size: .82rem; color: var(--text-muted); margin: 0; line-height: 1.4; }
        @media (max-width: 900px) { .metrics__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .metrics__grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
}
