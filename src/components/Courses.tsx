import React from 'react';
import { courseList, Language, translations } from '../data/portfolioData';

interface CoursesProps {
  currentLang: Language;
}

export const Courses: React.FC<CoursesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="courses">
      <div className="section-title">
        <h2>{t.crs_title}</h2>
      </div>
      <div className="grid-2">
        {courseList.map((course, index) => (
          <div className="card" key={index}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              {t[course.titleKey]}
            </h3>
            <p style={{ color: 'var(--accent)', fontSize: '0.88rem', fontWeight: 700 }}>
              {t[course.descKey]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
