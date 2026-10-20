import React from 'react';
import { Language, translations } from '../data/portfolioData';

interface LanguagesProps {
  currentLang: Language;
}

export const Languages: React.FC<LanguagesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="languages">
      <div className="section-title">
        <h2>{t.lang_title}</h2>
      </div>
      <div className="grid-2">
        <div className="card">
          <h3 style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>
            {t.lang_1_t}
          </h3>
          <p style={{ color: 'var(--accent)', fontSize: '0.88rem', fontWeight: 700 }}>
            {t.lang_1_d}
          </p>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>
            {t.lang_2_t}
          </h3>
          <p style={{ color: 'var(--accent)', fontSize: '0.88rem', fontWeight: 700 }}>
            {t.lang_2_d}
          </p>
        </div>
      </div>
    </section>
  );
};
