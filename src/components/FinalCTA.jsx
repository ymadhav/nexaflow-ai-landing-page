export default function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="cta-heading">
      <div className="final-cta__glow" aria-hidden="true" />
      <div className="container final-cta__inner">
        <div className="section-label">Get Started Today</div>
        <h2 id="cta-heading">
          Ready to remove manual <span className="gradient-text">data work?</span>
        </h2>
        <p className="final-cta__sub">
          Join hundreds of teams automating their data operations with NexaFlow AI.
          No credit card required to start.
        </p>
        <div className="final-cta__actions">
          <a href="#pricing" className="btn-primary final-cta__btn">
            Launch NexaFlow AI →
          </a>
          <a href="#features" className="btn-secondary">
            See All Features
          </a>
        </div>
        <div className="final-cta__trust">
          {['SOC 2 Certified','99.9% Uptime SLA','No credit card required','Cancel anytime'].map((label) => (
            <span key={label} className="final-cta__trust-item">
              <span aria-hidden="true" className="final-cta__trust-check">✓</span>
              {label}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .final-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(180deg, transparent, rgba(0,229,160,0.04) 40%, rgba(0,180,216,0.03) 80%, transparent);
          text-align: center; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
        }
        .final-cta__glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(0,229,160,0.1) 0%, transparent 70%);
          pointer-events: none; animation: glow 5s ease-in-out infinite;
        }
        .final-cta__inner {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
          max-width: 680px; margin: 0 auto;
        }
        .final-cta__sub { font-size: 1.05rem; max-width: 520px; }
        .final-cta__actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
        .final-cta__btn { font-size: 1rem; padding: .9rem 2.25rem; }
        .final-cta__trust {
          display: flex; flex-wrap: wrap; gap: 1.25rem; justify-content: center;
          margin-top: .5rem;
        }
        .final-cta__trust-item { font-size: .82rem; color: var(--text-muted); display: flex; align-items: center; gap: .35rem; }
        .final-cta__trust-check { color: var(--accent); font-weight: 700; }
      `}</style>
    </section>
  );
}
