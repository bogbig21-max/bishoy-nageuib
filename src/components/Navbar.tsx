import React, { useState } from 'react';
import { Language, translations } from '../data/portfolioData';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  isDark,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navLinks = [
    { href: '#home', label: t.nav_home },
    { href: '#open-to-work', label: t.nav_open_work },
    { href: '#about', label: t.nav_about },
    { href: '#education', label: t.nav_edu },
    { href: '#experience', label: t.nav_exp },
    { href: '#skills', label: t.nav_skills },
    { href: '#courses', label: t.nav_courses },
    { href: '#documents', label: t.nav_docs },
    { href: '#contact', label: t.nav_contact },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="brand">
          <i className="fa-solid fa-briefcase"></i>
          <span>{t.brand_name}</span> <span>.</span>
        </a>

        <div className={`nav-center ${mobileMenuOpen ? 'active' : ''}`} id="navCenter">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-controls">
          <button
            className="control-btn"
            onClick={onToggleTheme}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            type="button"
          >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <button
            className="control-btn"
            onClick={onToggleLang}
            title={currentLang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            type="button"
          >
            <i className="fa-solid fa-globe"></i>{' '}
            <span>{currentLang === 'en' ? 'عربي' : 'English'}</span>
          </button>

          <button
            className="nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            type="button"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
