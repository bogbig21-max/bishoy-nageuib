import React from 'react';
import { Language, translations } from '../data/portfolioData';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer>
      <p>
        &copy; 2026 | <strong>{t.hero_name}</strong> &bull; {t.footer_rights}
      </p>
    </footer>
  );
};
