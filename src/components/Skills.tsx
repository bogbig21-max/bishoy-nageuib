import React from 'react';
import { Language, skillCategories, translations } from '../data/portfolioData';

interface SkillsProps {
  currentLang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="skills">
      <div className="section-title">
        <h2>{t.sk_title}</h2>
      </div>
      <div className="grid-2">
        {skillCategories.map((cat, index) => (
          <div className="card" key={index}>
            <div className="skill-category">
              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className={cat.icon} style={{ color: 'var(--accent)' }}></i>
                <span>{t[cat.titleKey]}</span>
              </h4>
              <ul className="skills-list">
                {cat.skills.map((sKey) => (
                  <li key={sKey}>{t[sKey]}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
