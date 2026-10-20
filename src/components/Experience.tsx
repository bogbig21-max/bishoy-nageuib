import React from 'react';
import { experienceList, Language, translations } from '../data/portfolioData';

interface ExperienceProps {
  currentLang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="experience">
      <div className="section-title">
        <h2>{t.exp_title}</h2>
      </div>
      <div className="timeline">
        {experienceList.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{t[exp.dateKey]}</div>
              <h3 className="timeline-title">{t[exp.titleKey]}</h3>
              <ul className="timeline-list">
                {exp.bulletKeys.map((bKey, bIndex) => (
                  <li key={bIndex}>{t[bKey]}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
