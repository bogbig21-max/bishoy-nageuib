import React, { useState } from 'react';
import {
  CourseCategory,
  courseList,
  Language,
  translations,
} from '../data/portfolioData';

interface CoursesProps {
  currentLang: Language;
}

export const Courses: React.FC<CoursesProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('all');
  const t = translations[currentLang];

  const filterTabs: { id: CourseCategory; label: string; count: number; icon: string }[] = [
    {
      id: 'all',
      label: t.crs_filter_all || 'All Credentials',
      count: courseList.length,
      icon: 'fa-solid fa-layer-group',
    },
    {
      id: 'accounting_erp',
      label: t.crs_filter_accounting_erp || 'Accounting & ERP Systems',
      count: courseList.filter((c) => c.category === 'accounting_erp').length,
      icon: 'fa-solid fa-file-invoice-dollar',
    },
    {
      id: 'banking',
      label: t.crs_filter_banking || 'Banking & Services',
      count: courseList.filter((c) => c.category === 'banking').length,
      icon: 'fa-solid fa-building-columns',
    },
    {
      id: 'tech_digital',
      label: t.crs_filter_tech || 'Digital & IT Skills',
      count: courseList.filter((c) => c.category === 'tech_digital').length,
      icon: 'fa-solid fa-microchip',
    },
    {
      id: 'languages',
      label: t.crs_filter_languages || 'Languages',
      count: courseList.filter((c) => c.category === 'languages').length,
      icon: 'fa-solid fa-language',
    },
  ];

  const filteredCourses =
    activeCategory === 'all'
      ? courseList
      : courseList.filter((c) => c.category === activeCategory);

  return (
    <section className="container" id="courses">
      <div className="section-title">
        <h2>{t.crs_title}</h2>
      </div>

      {/* 3D Filter Tabs */}
      <div className="courses-filter-tabs">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`course-filter-btn ${activeCategory === tab.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(tab.id)}
            aria-pressed={activeCategory === tab.id}
          >
            <i className={tab.icon} aria-hidden="true"></i>
            <span>{tab.label}</span>
            <span className="course-tab-count">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Organized Course Cards Grid */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div className="course-card-3d" key={course.id}>
            <div className="course-card-top">
              <div className="course-icon-badge">
                <i className={course.icon} aria-hidden="true"></i>
              </div>
              <span className="course-category-tag">
                {t[course.categoryKey] || course.category}
              </span>
            </div>

            <div className="course-card-body">
              <h3 className="course-card-title">{t[course.titleKey]}</h3>
              <p className="course-card-desc">{t[course.descKey]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
