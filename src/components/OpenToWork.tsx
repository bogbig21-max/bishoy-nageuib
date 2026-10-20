import React from 'react';
import { Language, translations } from '../data/portfolioData';

interface OpenToWorkProps {
  currentLang: Language;
}

export const OpenToWork: React.FC<OpenToWorkProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="open-to-work">
      <div className="open-to-work-card">
        <div className="open-to-work-header">
          <div className="open-to-work-icon">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div>
            <h2 style={{ color: 'var(--primary)', fontSize: '1.45rem', fontWeight: 800 }}>
              {t.otw_title}
            </h2>
            <span
              className="card-tag"
              style={{ display: 'inline-block', marginTop: '4px' }}
            >
              {t.otw_tag}
            </span>
          </div>
        </div>
        <p className="open-to-work-text">
          {t.otw_text}
        </p>
        <a href="#contact" className="btn btn-primary">
          <i className="fa-solid fa-paper-plane"></i>
          <span>{t.otw_btn}</span>
        </a>
      </div>
    </section>
  );
};
