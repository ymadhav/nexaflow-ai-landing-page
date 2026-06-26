const steps = [
  {
    num: '01',
    icon: '/icons/link-solid.svg',
    title: 'Connect Your Data',
    desc: 'Plug in any data source—databases, APIs, files, SaaS tools—with 80+ pre-built connectors. NexaFlow normalizes everything into a unified schema automatically.',
  },
  {
    num: '02',
    icon: '/icons/search.svg',
    title: 'Detect Signals',
    desc: 'Our AI continuously scans your streams for anomalies, thresholds, and business events. Get intelligent alerts before issues escalate into incidents.',
  },
  {
    num: '03',
    icon: '/icons/cog-8-tooth.svg',
    title: 'Automate Action',
    desc: 'Trigger multi-step workflows, notifications, and integrations the moment a signal fires. Zero manual intervention, full audit trail, bulletproof retry logic.',
  },
];

export default function PlatformOverview() {
  return (
    <section id="platform" className="platform" aria-labelledby="platform-heading">
      <div className="container">
        <header className="platform__header">
          <div className="section-label">How It Works</div>
          <h2 id="platform-heading">
            From raw data to <span className="gradient-text">autonomous action</span>
          </h2>
          <p className="platform__sub">
            Three steps from integration to intelligent automation. No data engineering team required.
          </p>
        </header>

        <div className="platform__grid">
          {steps.map(({ num, icon, title, desc }) => (
            <article key={num} className="platform__card glass-card">
              <div className="platform__card-top">
                <div className="platform__icon-wrap">
                  <img src={icon} className="platform__icon" alt="" aria-hidden="true" />
                </div>
                <span className="platform__num">{num}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="platform__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .platform { background: linear-gradient(180deg, transparent, rgba(0,229,160,0.02) 50%, transparent); }
        .platform__header { text-align: center; max-width: 600px; margin: 0 auto 3.5rem; }
        .platform__sub { margin-top: .75rem; }
        .platform__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; position: relative; }
        .platform__grid::before {
          content: ''; position: absolute;
          top: 2.5rem; left: calc(33.33% + 1rem); right: calc(33.33% + 1rem);
          height: 1px; background: linear-gradient(90deg, var(--accent), var(--accent2));
          opacity: .3;
        }
        .platform__card {
          padding: 2rem 1.75rem;
          display: flex; flex-direction: column; gap: .75rem;
          position: relative; overflow: hidden;
          transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease;
        }
        .platform__card:hover {
          border-color: rgba(0,229,160,0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3), var(--shadow-accent);
        }
        .platform__card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: .5rem; }
        .platform__icon-wrap {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(0,229,160,0.08); border: 1px solid rgba(0,229,160,0.2);
          display: flex; align-items: center; justify-content: center;
        }
        .platform__icon { width: 22px; height: 22px; filter: invert(1) sepia(1) saturate(3) hue-rotate(100deg); }
        .platform__num { font-size: 2.5rem; font-weight: 900; color: rgba(255,255,255,0.06); font-family: var(--font-mono); line-height: 1; }
        .platform__card h3 { color: var(--text); }
        .platform__card p { font-size: .9rem; }
        .platform__line { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--accent), transparent); opacity: 0; transition: opacity .3s ease; }
        .platform__card:hover .platform__line { opacity: 1; }
        @media (max-width: 900px) { .platform__grid { grid-template-columns: 1fr; } .platform__grid::before { display: none; } }
      `}</style>
    </section>
  );
}
