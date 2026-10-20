import React from 'react';
import { educationList, Language, translations } from '../data/portfolioData';

interface EducationProps {
  currentLang: Language;
}

export const Education: React.FC<EducationProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="education">
      <div className="section-title">
        <h2>{t.edu_title}</h2>
      </div>
      <div className="grid-3">
        {educationList.map((edu, index) => (
          <div className="card" key={index}>
            <div className="card-header-icon">
              <div className="card-icon">
                <i className={edu.icon}></i>
              </div>
              <span className="card-tag">{t[edu.tagKey]}</span>
            </div>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.15rem' }}>
              {t[edu.titleKey]}
            </h3>
            <h4 style={{ color: 'var(--accent)', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              {t[edu.instKey]}
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              {t[edu.descKey]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
