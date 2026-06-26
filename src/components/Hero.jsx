export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content animate-fade-up">
          <div className="section-label">Next-Gen AI Data Automation</div>
          <h1 id="hero-heading">
            Automate data operations with{' '}
            <span className="gradient-text">AI agents</span> that never miss a signal.
          </h1>
          <p className="hero__sub">
            NexaFlow AI connects fragmented data, monitors business signals, and launches
            reliable automation workflows across your modern stack.
          </p>
          <div className="hero__actions">
            <a href="#pricing" className="btn-primary">Start Free Trial</a>
            <a href="#platform" className="btn-secondary">View Platform →</a>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Built for real-time teams, analysts, and operators
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__dashboard">
            <div className="hd__topbar">
              <span className="hd__dot hd__dot--red" />
              <span className="hd__dot hd__dot--yellow" />
              <span className="hd__dot hd__dot--green" />
              <span className="hd__title">NexaFlow Dashboard</span>
            </div>
            <div className="hd__body">
              <div className="hd__metric">
                <img src="/icons/arrow-trending-up.svg" className="hd__icon hd__icon--green" alt="" />
                <div>
                  <div className="hd__num">48,219</div>
                  <div className="hd__lbl">Tasks Automated</div>
                </div>
              </div>
              <div className="hd__metric">
                <img src="/icons/chart-pie.svg" className="hd__icon hd__icon--blue" alt="" />
                <div>
                  <div className="hd__num">99.9%</div>
                  <div className="hd__lbl">Uptime</div>
                </div>
              </div>
              <div className="hd__pipeline">
                <div className="hd__p-label">Active Pipelines</div>
                {['Customer Data Sync','Anomaly Detector','Invoice Automation'].map((n,i)=>(
                  <div key={n} className="hd__p-row" style={{animationDelay:`${i*.15}s`}}>
                    <span className="hd__p-dot" />
                    <span className="hd__p-name">{n}</span>
                    <span className="hd__p-status">Running</span>
                  </div>
                ))}
              </div>
              <div className="hd__bar-wrap">
                <div className="hd__bar-label">Workflow Health</div>
                <div className="hd__bars">
                  {[92,78,95,65,88].map((v,i)=>(
                    <div key={i} className="hd__bar" style={{'--h':`${v}%`,'--d':`${i*.1}s`}} />
                  ))}
                </div>
              </div>
              <div className="hd__bottom">
                <img src="/icons/link-solid.svg" className="hd__icon hd__icon--purple" alt="" />
                <span>12 integrations active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative; padding-top: 140px; padding-bottom: 5rem;
          min-height: 100vh; display: flex; align-items: center;
          overflow: hidden;
        }
        .hero__glow {
          position: absolute; top: -20%; left: 50%; transform: translateX(-50%);
          width: 800px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, rgba(0,180,216,0.06) 40%, transparent 70%);
          pointer-events: none; animation: glow 4s ease-in-out infinite;
        }
        .hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;
          align-items: center;
        }
        .hero__content { display: flex; flex-direction: column; gap: 1.5rem; }
        .hero__sub { font-size: 1.1rem; max-width: 520px; }
        .hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .hero__badge {
          display: inline-flex; align-items: center; gap: .5rem;
          font-size: .8rem; color: var(--text-muted);
          border: 1px solid var(--border);
          padding: .4rem .9rem; border-radius: 20px;
          background: var(--glass); width: fit-content;
        }
        .hero__badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
          animation: glow 2s ease-in-out infinite;
        }
        .hero__visual { display: flex; justify-content: center; align-items: center; }
        .hero__dashboard {
          width: 100%; max-width: 440px;
          background: var(--surface); border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl); overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5), var(--shadow-accent);
          animation: float 6s ease-in-out infinite;
        }
        .hd__topbar {
          display: flex; align-items: center; gap: .5rem;
          padding: .75rem 1rem; background: var(--surface2);
          border-bottom: 1px solid var(--border);
        }
        .hd__dot { width: 10px; height: 10px; border-radius: 50%; }
        .hd__dot--red { background: #ff5f57; }
        .hd__dot--yellow { background: #ffbd2e; }
        .hd__dot--green { background: #28c840; }
        .hd__title { font-size: .75rem; color: var(--text-dim); margin-left: .5rem; font-family: var(--font-mono); }
        .hd__body { padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; }
        .hd__metric {
          display: flex; align-items: center; gap: .75rem;
          background: var(--glass); border: 1px solid var(--border);
          border-radius: 10px; padding: .75rem 1rem;
        }
        .hd__icon { width: 20px; height: 20px; flex-shrink: 0; }
        .hd__icon--green { filter: invert(1) sepia(1) saturate(3) hue-rotate(100deg); }
        .hd__icon--blue { filter: invert(1) sepia(1) saturate(3) hue-rotate(180deg); }
        .hd__icon--purple { filter: invert(1) sepia(1) saturate(3) hue-rotate(240deg); }
        .hd__num { font-size: 1.25rem; font-weight: 700; color: var(--text); font-family: var(--font-mono); }
        .hd__lbl { font-size: .72rem; color: var(--text-muted); }
        .hd__pipeline { background: var(--glass); border: 1px solid var(--border); border-radius: 10px; padding: .75rem 1rem; }
        .hd__p-label { font-size: .7rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: .08em; margin-bottom: .5rem; }
        .hd__p-row {
          display: flex; align-items: center; gap: .5rem;
          padding: .35rem 0; font-size: .78rem;
          animation: fadeUp .4s ease-out both;
        }
        .hd__p-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .hd__p-name { flex: 1; color: var(--text-muted); }
        .hd__p-status { font-size: .65rem; font-weight: 700; color: var(--accent); background: rgba(0,229,160,0.1); padding: 2px 6px; border-radius: 4px; }
        .hd__bar-wrap { background: var(--glass); border: 1px solid var(--border); border-radius: 10px; padding: .75rem 1rem; }
        .hd__bar-label { font-size: .7rem; color: var(--text-muted); margin-bottom: .5rem; }
        .hd__bars { display: flex; align-items: flex-end; gap: 6px; height: 48px; }
        .hd__bar {
          flex: 1; height: var(--h);
          background: linear-gradient(to top, var(--accent), var(--accent2));
          border-radius: 3px 3px 0 0; opacity: .8;
          animation: fadeUp .5s var(--d) ease-out both;
        }
        .hd__bottom {
          display: flex; align-items: center; gap: .5rem;
          font-size: .78rem; color: var(--text-muted);
        }
        @media (max-width: 1024px) {
          .hero__inner { grid-template-columns: 1fr; gap: 3rem; }
          .hero__visual { order: -1; }
          .hero__dashboard { max-width: 360px; }
        }
        @media (max-width: 768px) {
          .hero { padding-top: 110px; min-height: auto; }
          .hero__dashboard { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
