import React, { useEffect, useRef } from 'react';
import { Language, translations } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const CvModal: React.FC<CvModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const t = translations[currentLang];
  const cvPath = '/assets/aistudio/cv_Beshoy_Naguib_George_ecf2ba0b.pdf';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.focus();
        iframeRef.current.contentWindow.print();
      } catch (err) {
        window.open(cvPath, '_blank');
      }
    } else {
      window.open(cvPath, '_blank');
    }
  };

  return (
    <div className="cv-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="cv-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cv-modal-header">
          <div className="cv-modal-title">
            <i className="fa-solid fa-file-pdf"></i>
            <span>{t.cv_modal_title}</span>
          </div>

          <div className="cv-modal-actions">
            <a
              href={cvPath}
              download="cv_Beshoy_Naguib_George.pdf"
              className="btn btn-outline cv-header-btn"
              title={t.cv_modal_download}
            >
              <i className="fa-solid fa-download"></i>
              <span>{t.cv_modal_download}</span>
            </a>

            <button
              type="button"
              className="btn btn-outline cv-header-btn"
              onClick={handlePrint}
              title={t.cv_modal_print}
            >
              <i className="fa-solid fa-print"></i>
              <span>{t.cv_modal_print}</span>
            </button>

            <button
              type="button"
              className="cv-modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div className="cv-modal-body">
          <iframe
            ref={iframeRef}
            src={`${cvPath}#toolbar=1&navpanes=0`}
            title={t.cv_modal_title}
            className="cv-iframe"
          />
        </div>
      </div>
    </div>
  );
};
