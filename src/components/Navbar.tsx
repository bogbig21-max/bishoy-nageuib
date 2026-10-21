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
  const [activeSection, setActiveSection] = useState<string>('home');
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const t = translations[currentLang];

  const navLinks = [
    { href: '#home', id: 'home', label: t.nav_home, icon: 'fa-solid fa-house' },
    { href: '#open-to-work', id: 'open-to-work', label: t.nav_open_work, icon: 'fa-solid fa-briefcase' },
    { href: '#about', id: 'about', label: t.nav_about, icon: 'fa-solid fa-bullseye' },
    { href: '#education', id: 'education', label: t.nav_edu, icon: 'fa-solid fa-graduation-cap' },
    { href: '#experience', id: 'experience', label: t.nav_exp, icon: 'fa-solid fa-laptop-file' },
    { href: '#skills', id: 'skills', label: t.nav_skills, icon: 'fa-solid fa-star' },
    { href: '#courses', id: 'courses', label: t.nav_courses, icon: 'fa-solid fa-certificate' },
    { href: '#documents', id: 'documents', label: t.nav_docs, icon: 'fa-solid fa-folder-open' },
    { href: '#contact', id: 'contact', label: t.nav_contact, icon: 'fa-solid fa-envelope' },
  ];

  // Active section scroll tracking
  useEffect(() => {
    const sectionIds = [
      'home',
      'open-to-work',
      'about',
      'education',
      'experience',
      'skills',
      'courses',
      'documents',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    const handleMouseDown = (event: MouseEvent) => {
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

    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isMenuOpen]);

  const currentSectionItem =
    navLinks.find((l) => l.id === activeSection) || navLinks[0];

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-container">
          {/* Brand & Desktop Active Section Tracker */}
          <div className="nav-brand-group">
            <a href="#home" className="brand">
              <i className="fa-solid fa-briefcase"></i>
              <span>{t.brand_name}</span> <span className="brand-dot">.</span>
            </a>

            {/* Dynamic Active Section Indicator (Desktop Only) */}
            <div
              className="nav-tracker-badge"
              title={`${t.nav_now_viewing}: ${currentSectionItem.label}`}
              aria-live="polite"
            >
              <span className="tracker-ping" aria-hidden="true"></span>
              <i className={currentSectionItem.icon} aria-hidden="true"></i>
              <span className="tracker-text">{currentSectionItem.label}</span>
            </div>
          </div>

          {/* Action & Controls Zone */}
          <div className="nav-controls">
            {/* Open to Work 3D Badge (Large screens / Tablets) */}
            <a
              href="#open-to-work"
              className="nav-otw-btn"
              title={t.nav_open_work}
            >
              <span className="nav-otw-dot" aria-hidden="true"></span>
              <i className="fa-solid fa-user-check"></i>
              <span className="nav-otw-text">{t.nav_otw_badge}</span>
            </a>

            {/* Quick Contact 3D CTA Button (Large screens) */}
            <a
              href="#contact"
              className="nav-quick-contact-btn"
              title={t.nav_contact}
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span className="nav-contact-text">{t.nav_quick_contact}</span>
            </a>

            {/* Language Toggle Button (Always visible, responsive) */}
            <button
              className="control-btn nav-lang-btn"
              onClick={onToggleLang}
              title={currentLang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              type="button"
              aria-label="Toggle Language"
            >
              <i className="fa-solid fa-globe"></i>
              <span className="lang-text">{currentLang === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Theme Toggle Button (Always visible) */}
            <button
              className="control-btn nav-theme-btn"
              onClick={onToggleTheme}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            {/* Responsive Hamburger menu button (☰) */}
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
          {/* Quick Open to Work Indicator in Drawer */}
          <a
            href="#open-to-work"
            className="drawer-otw-banner"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="drawer-otw-left">
              <span className="nav-otw-dot"></span>
              <span className="drawer-otw-title">{t.nav_open_work}</span>
            </div>
            <span className="drawer-otw-badge">{t.otw_tag}</span>
          </a>

          <ul className="drawer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`drawer-link-item ${activeSection === link.id ? 'active' : ''}`}
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
