import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menuOpen]);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Proof', href: '#testimonials' },
  ];

  return (
    <header className={`nf-header${scrolled ? ' nf-header--scrolled' : ''}`} role="banner">
      <div className="container nf-header__inner" ref={menuRef}>
        <a href="#" className="nf-logo" aria-label="NexaFlow AI home">
          <span className="nf-logo__icon" aria-hidden="true">⬡</span>
          <span className="nf-logo__text">NexaFlow <span className="nf-logo__ai">AI</span></span>
        </a>

        <nav className="nf-nav" aria-label="Main navigation">
          <ul className="nf-nav__list" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="nf-nav__link" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#pricing" className="btn-primary nf-header__cta">
          Start Automating
        </a>

        <button
          className={`nf-hamburger${menuOpen ? ' nf-hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nf-mobile-menu${menuOpen ? ' nf-mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="nf-mobile-menu__link" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#pricing" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}
             onClick={() => setMenuOpen(false)}>
            Start Automating
          </a>
        </nav>
      </div>

      <style>{`
        .nf-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
          border-bottom: 1px solid transparent;
        }
        .nf-header--scrolled {
          background: rgba(5,5,8,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom-color: var(--border);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4);
        }
        .nf-header__inner {
          display: flex; align-items: center; gap: 2rem;
          height: 68px;
        }
        .nf-logo {
          display: flex; align-items: center; gap: .5rem;
          font-weight: 800; font-size: 1.1rem; letter-spacing: -.02em;
          flex-shrink: 0;
        }
        .nf-logo__icon { font-size: 1.4rem; color: var(--accent); }
        .nf-logo__ai { color: var(--accent); }
        .nf-nav { margin-left: auto; }
        .nf-nav__list {
          display: flex; list-style: none; gap: .25rem;
        }
        .nf-nav__link {
          display: block; padding: .5rem .9rem;
          font-size: .9rem; font-weight: 500; color: var(--text-muted);
          border-radius: 6px;
          transition: color .15s ease, background .15s ease;
        }
        .nf-nav__link:hover { color: var(--text); background: var(--glass); }
        .nf-header__cta { font-size: .85rem; padding: .6rem 1.25rem; flex-shrink: 0; }
        .nf-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; padding: 8px; margin-left: auto;
        }
        .nf-hamburger span {
          display: block; width: 22px; height: 2px;
          background: var(--text); border-radius: 2px;
          transition: all .25s ease-out; transform-origin: center;
        }
        .nf-hamburger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nf-hamburger--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nf-hamburger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .nf-mobile-menu {
          display: none; overflow: hidden;
          max-height: 0; transition: max-height .35s ease-in-out;
          background: rgba(5,5,8,0.97);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(20px);
        }
        .nf-mobile-menu--open { max-height: 400px; }
        .nf-mobile-menu nav { padding: 1rem 1.25rem 1.5rem; }
        .nf-mobile-menu ul { list-style: none; display: flex; flex-direction: column; gap: .25rem; }
        .nf-mobile-menu__link {
          display: block; padding: .75rem 1rem;
          font-size: 1rem; font-weight: 500; color: var(--text-muted);
          border-radius: 8px; transition: all .15s ease;
        }
        .nf-mobile-menu__link:hover { color: var(--text); background: var(--glass); }
        @media (max-width: 768px) {
          .nf-nav, .nf-header__cta { display: none; }
          .nf-hamburger { display: flex; }
          .nf-mobile-menu { display: block; }
        }
      `}</style>
    </header>
  );
}
