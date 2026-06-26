const links = {
  Product: ['Platform Overview', 'Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="nf-logo" aria-label="NexaFlow AI home">
            <span className="nf-logo__icon" aria-hidden="true">⬡</span>
            <span className="nf-logo__text">NexaFlow <span className="nf-logo__ai">AI</span></span>
          </a>
          <p className="footer__tagline">
            AI-driven data automation for modern teams. Connect, detect, automate.
          </p>
          <div className="footer__status">
            <span className="footer__status-dot" aria-hidden="true" />
            <span>All systems operational</span>
          </div>
        </div>

        {Object.entries(links).map(([group, items]) => (
          <nav key={group} aria-label={`${group} links`} className="footer__nav">
            <h3 className="footer__nav-title">{group}</h3>
            <ul role="list">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} NexaFlow AI, Inc. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link footer__link--sm">Privacy</a>
            <a href="#" className="footer__link footer__link--sm">Terms</a>
            <a href="#" className="footer__link footer__link--sm">Security</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer { border-top: 1px solid var(--border); padding-top: 4rem; }
        .footer__inner {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem; padding-bottom: 3rem;
        }
        .footer__brand { display: flex; flex-direction: column; gap: .75rem; }
        .nf-logo { display: flex; align-items: center; gap: .5rem; font-weight: 800; font-size: 1.05rem; width: fit-content; }
        .nf-logo__icon { font-size: 1.3rem; color: var(--accent); }
        .nf-logo__ai { color: var(--accent); }
        .footer__tagline { font-size: .85rem; color: var(--text-muted); line-height: 1.6; max-width: 260px; margin: 0; }
        .footer__status { display: flex; align-items: center; gap: .4rem; font-size: .78rem; color: var(--text-muted); }
        .footer__status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: glow 2s ease-in-out infinite; }
        .footer__nav-title { font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text); margin-bottom: 1rem; }
        .footer__nav ul { list-style: none; display: flex; flex-direction: column; gap: .5rem; }
        .footer__link { font-size: .87rem; color: var(--text-muted); transition: color .15s ease; }
        .footer__link:hover { color: var(--text); }
        .footer__bottom { border-top: 1px solid var(--border); padding: 1.25rem 0; }
        .footer__bottom-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: .75rem; }
        .footer__copy { font-size: .8rem; color: var(--text-dim); margin: 0; }
        .footer__bottom-links { display: flex; gap: 1.5rem; }
        .footer__link--sm { font-size: .8rem; }
        @media (max-width: 900px) { .footer__inner { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .footer__inner { grid-template-columns: 1fr; } .footer__bottom-inner { flex-direction: column; align-items: flex-start; } }
      `}</style>
    </footer>
  );
}
