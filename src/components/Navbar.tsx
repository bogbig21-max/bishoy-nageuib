import React, { useState, useEffect, useRef } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const t = translations[currentLang];

  const navLinks = [
    { href: '#home', label: t.nav_home, icon: 'fa-solid fa-house' },
    { href: '#open-to-work', label: t.nav_open_work, icon: 'fa-solid fa-briefcase' },
    { href: '#about', label: t.nav_about, icon: 'fa-solid fa-bullseye' },
    { href: '#education', label: t.nav_edu, icon: 'fa-solid fa-graduation-cap' },
    { href: '#experience', label: t.nav_exp, icon: 'fa-solid fa-laptop-file' },
    { href: '#skills', label: t.nav_skills, icon: 'fa-solid fa-star' },
    { href: '#courses', label: t.nav_courses, icon: 'fa-solid fa-certificate' },
    { href: '#documents', label: t.nav_docs, icon: 'fa-solid fa-folder-open' },
    { href: '#contact', label: t.nav_contact, icon: 'fa-solid fa-envelope' },
  ];

  // Close on Escape key and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close when clicking outside drawer and hamburger toggle button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!isMenuOpen) return;
      const target = event.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="brand">
            <i className="fa-solid fa-briefcase"></i>
            <span>{t.brand_name}</span> <span>.</span>
          </a>

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

            {/* Responsive Three-line Hamburger menu icon (☰) */}
            <button
              ref={toggleBtnRef}
              className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Navigation Menu"
              aria-expanded={isMenuOpen}
              type="button"
              title="Menu (☰)"
            >
              <span className="hamburger-icon-lines" aria-hidden="true">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for outside click detection */}
      <div
        className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Hamburger Navigation Drawer */}
      <aside
        ref={drawerRef}
        className={`hamburger-drawer ${isMenuOpen ? 'open' : ''}`}
        aria-label="Site Navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer-header">
          <div className="drawer-brand">
            <i className="fa-solid fa-briefcase"></i>
            <span>{t.brand_name}</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="drawer-nav">
          <ul className="drawer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="drawer-link-item"
                >
                  <span className="drawer-link-icon">
                    <i className={link.icon}></i>
                  </span>
                  <span className="drawer-link-text">{link.label}</span>
                  <i className="fa-solid fa-chevron-right drawer-chevron"></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer-footer">
          <a
            href="#contact"
            className="btn btn-primary drawer-contact-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fa-solid fa-paper-plane"></i>
            <span>{t.nav_contact}</span>
          </a>
        </div>
      </aside>
    </>
  );
};
