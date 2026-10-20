import React from 'react';
import { Language, translations } from '../data/portfolioData';

interface CareerObjectiveProps {
  currentLang: Language;
}

export const CareerObjective: React.FC<CareerObjectiveProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="about">
      <div className="section-title">
        <h2>{t.about_title}</h2>
      </div>
      <div className="card" style={{ borderInlineStart: '4px solid var(--accent)' }}>
        <p
          style={{ fontSize: '1.05rem', lineHeight: 1.9 }}
          dangerouslySetInnerHTML={{ __html: t.about_text }}
        />
      </div>
    </section>
  );
};
