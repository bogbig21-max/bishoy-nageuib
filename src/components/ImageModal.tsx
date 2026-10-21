import React, { useEffect } from 'react';
import { Language, translations } from '../data/portfolioData';

interface ImageModalProps {
  imageSrc: string | null;
  onClose: () => void;
  currentLang: Language;
}

export const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose, currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    if (!imageSrc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageSrc, onClose]);

  if (!imageSrc) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.doc_title}
    >
      <button
        type="button"
        className="modal-close-btn"
        onClick={onClose}
        aria-label={t.modal_close}
        title={t.modal_close}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img
        src={imageSrc}
        alt={t.doc_title}
        className="modal-content-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
