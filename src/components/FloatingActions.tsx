import React, { useState, useEffect } from 'react';
import { Language, translations } from '../data/portfolioData';

interface FloatingActionsProps {
  currentLang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ currentLang }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setShowBackToTop(winScroll > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl = `https://wa.me/201273791926?text=${encodeURIComponent(t.whatsapp_msg)}`;

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating Action Container */}
      <div className="floating-actions-container">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            type="button"
            className="floating-btn back-to-top-btn"
            onClick={scrollToTop}
            title={t.scroll_top}
            aria-label={t.scroll_top}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        )}

        {/* WhatsApp Floating Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          title={t.whatsapp_tooltip}
          aria-label={t.whatsapp_tooltip}
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span className="floating-tooltip">{t.whatsapp_tooltip}</span>
        </a>
      </div>
    </>
  );
};
