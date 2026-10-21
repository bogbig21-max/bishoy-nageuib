import React from 'react';
import { Language, translations } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

interface HeroProps {
  currentLang: Language;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenCvModal }) => {
  const t = translations[currentLang];

  return (
    <header className="hero" id="home">
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <img
            src="/1.jpg.JPG"
            alt="Bishoy Nageuib"
            className="hero-img"
            loading="eager"
          />
        </div>

        <div className="hero-text">
          <h1>{t.hero_name}</h1>
          <h3>{t.hero_title}</h3>
          <p>{t.hero_desc}</p>

          <div className="hero-cta">
            <a
              href="/assets/aistudio/cv_Beshoy_Naguib_George_ecf2ba0b.pdf"
              download="cv_Beshoy_Naguib_George.pdf"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download"></i>
              <span>{t.btn_download_cv}</span>
            </a>

            <button
              type="button"
              onClick={onOpenCvModal}
              className="btn btn-outline"
            >
              <i className="fa-solid fa-eye"></i>
              <span>{t.btn_preview_cv}</span>
            </button>

            <button
              type="button"
              onClick={downloadVCard}
              className="btn btn-outline"
              title={t.btn_save_vcard}
            >
              <i className="fa-solid fa-address-card"></i>
              <span>{t.btn_save_vcard}</span>
            </button>

            <a href="#open-to-work" className="btn btn-outline">
              <i className="fa-solid fa-handshake"></i>
              <span>{t.btn_open_work}</span>
            </a>
          </div>

          {/* Quick Section Navigation Pills */}
          <div className="hero-quick-links">
            <a href="#open-to-work" className="quick-link-pill">
              <i className="fa-solid fa-briefcase"></i>
              <span>{t.pill_work}</span>
            </a>
            <a href="#about" className="quick-link-pill">
              <i className="fa-solid fa-bullseye"></i>
              <span>{t.pill_about}</span>
            </a>
            <a href="#education" className="quick-link-pill">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>{t.pill_edu}</span>
            </a>
            <a href="#experience" className="quick-link-pill">
              <i className="fa-solid fa-laptop-file"></i>
              <span>{t.pill_exp}</span>
            </a>
            <a href="#skills" className="quick-link-pill">
              <i className="fa-solid fa-star"></i>
              <span>{t.pill_skills}</span>
            </a>
            <a href="#documents" className="quick-link-pill">
              <i className="fa-solid fa-folder-open"></i>
              <span>{t.pill_docs}</span>
            </a>
            <a href="#contact" className="quick-link-pill">
              <i className="fa-solid fa-envelope"></i>
              <span>{t.pill_contact}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
