import React from 'react';
import { DocumentItem, documents, Language, translations } from '../data/portfolioData';

interface DocumentsGalleryProps {
  currentLang: Language;
  onOpenModal: (imageSrc: string) => void;
}

export const DocumentsGallery: React.FC<DocumentsGalleryProps> = ({
  currentLang,
  onOpenModal,
}) => {
  const t = translations[currentLang];

  return (
    <section className="container" id="documents">
      <div className="section-title">
        <h2>{t.doc_title}</h2>
      </div>
      <div className="grid-3">
        {documents.map((doc: DocumentItem) => (
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
                className="btn btn-outline"
                style={{
                  color: 'var(--primary)',
                  borderColor: 'var(--border-color)',
                  width: '100%',
                  justifyContent: 'center',
                }}
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
