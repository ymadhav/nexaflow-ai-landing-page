import { testimonials } from '../data/testimonials.js';

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <header className="testimonials__header">
          <div className="section-label">Social Proof</div>
          <h2 id="testimonials-heading">
            Trusted by teams <span className="gradient-text">moving fast</span>
          </h2>
        </header>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article key={t.id} className="tcard glass-card" aria-label={`Testimonial from ${t.name}`}>
              <Stars count={t.rating} />
              <blockquote className="tcard__quote">
                <p>"{t.quote}"</p>
              </blockquote>
              <footer className="tcard__footer">
                <div className="tcard__avatar" style={{ '--color': t.color }} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div className="tcard__name">{t.name}</div>
                  <div className="tcard__role">{t.title} · {t.company}</div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials__header { text-align: center; margin-bottom: 3rem; }
        .testimonials__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .tcard {
          padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem;
          transition: border-color .25s ease, transform .25s ease;
        }
        .tcard:hover { border-color: rgba(255,255,255,0.15); transform: translateY(-3px); }
        .stars { color: #fbbf24; font-size: 1.05rem; letter-spacing: .1em; }
        .tcard__quote p { font-size: .92rem; color: var(--text-muted); line-height: 1.7; font-style: italic; margin: 0; }
        .tcard__footer { display: flex; align-items: center; gap: .85rem; margin-top: auto; }
        .tcard__avatar {
          width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
          background: color-mix(in srgb, var(--color) 15%, transparent);
          border: 1.5px solid var(--color);
          display: flex; align-items: center; justify-content: center;
          font-size: .8rem; font-weight: 700; color: var(--color);
        }
        .tcard__name { font-weight: 700; font-size: .9rem; color: var(--text); }
        .tcard__role { font-size: .78rem; color: var(--text-muted); }
        @media (max-width: 900px) { .testimonials__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
