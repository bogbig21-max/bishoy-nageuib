import React, { useState } from 'react';
import {
  DocumentCategory,
  DocumentItem,
  documents,
  Language,
  translations,
} from '../data/portfolioData';

interface DocumentsGalleryProps {
  currentLang: Language;
  onOpenModal: (imageSrc: string) => void;
}

export const DocumentsGallery: React.FC<DocumentsGalleryProps> = ({
  currentLang,
  onOpenModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<DocumentCategory>('all');
  const t = translations[currentLang];

  const filterTabs: { id: DocumentCategory; label: string; count: number }[] = [
    { id: 'all', label: t.filter_all, count: documents.length },
    {
      id: 'academic',
      label: t.filter_academic,
      count: documents.filter((d) => d.category === 'academic').length,
    },
    {
      id: 'experience',
      label: t.filter_experience,
      count: documents.filter((d) => d.category === 'experience').length,
    },
    {
      id: 'courses',
      label: t.filter_courses,
      count: documents.filter((d) => d.category === 'courses').length,
    },
    {
      id: 'official',
      label: t.filter_official,
      count: documents.filter((d) => d.category === 'official').length,
    },
  ];

  const filteredDocs =
    activeFilter === 'all'
      ? documents
      : documents.filter((doc) => doc.category === activeFilter);

  return (
    <section className="container" id="documents">
      <div className="section-title">
        <h2>{t.doc_title}</h2>
      </div>

      {/* Filter Tabs */}
      <div className="doc-filter-tabs">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`filter-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab.id)}
          >
            <span>{tab.label}</span>
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Document Grid */}
      <div className="grid-3">
        {filteredDocs.map((doc: DocumentItem) => (
          <div className="doc-card" key={doc.id}>
            <div className="doc-preview">
              <img
                src={doc.image}
                alt={t[doc.titleKey]}
                loading="lazy"
              />
              <div className="doc-overlay">
                <button
                  type="button"
                  onClick={() => onOpenModal(doc.image)}
                  title={t.btn_full}
                  aria-label={t.btn_full}
                >
                  <i className="fa-solid fa-expand"></i>
                </button>
                <a
                  href={doc.image}
                  download
                  title={t.btn_download_doc}
                  aria-label={t.btn_download_doc}
                >
                  <i className="fa-solid fa-download"></i>
                </a>
              </div>
            </div>
            <div className="doc-body">
              <div>
                <h4>{t[doc.titleKey]}</h4>
                <p>{t[doc.descKey]}</p>
              </div>
              <button
                type="button"
                className="btn btn-outline doc-view-btn"
                onClick={() => onOpenModal(doc.image)}
              >
                <i className="fa-solid fa-eye"></i>
                <span>{t.btn_full}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
