import React, { useState, useEffect } from 'react';
import { Language, translations } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OpenToWork } from './components/OpenToWork';
import { CareerObjective } from './components/CareerObjective';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Courses } from './components/Courses';
import { DocumentsGallery } from './components/DocumentsGallery';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { CvModal } from './components/CvModal';
import { FloatingActions } from './components/FloatingActions';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize language, text direction, and page title/meta
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[currentLang];
    document.title = t.page_title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.hero_desc);
    }
  }, [currentLang]);

  // Synchronize theme attribute on body
  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Bar & Floating Quick Actions */}
      <FloatingActions currentLang={currentLang} />

      {/* Main Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero
          currentLang={currentLang}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
        <OpenToWork currentLang={currentLang} />
        <CareerObjective currentLang={currentLang} />
        <Education currentLang={currentLang} />
        <Experience currentLang={currentLang} />
        <Skills currentLang={currentLang} />
        <Courses currentLang={currentLang} />
        <DocumentsGallery
          currentLang={currentLang}
          onOpenModal={(img) => setSelectedImage(img)}
        />
        <Languages currentLang={currentLang} />
        <Contact currentLang={currentLang} onShowToast={showToast} />
      </main>

      <Footer currentLang={currentLang} />

      {/* Image Lightbox Modal */}
      <ImageModal
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
        currentLang={currentLang}
      />

      {/* Interactive CV Viewer Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        currentLang={currentLang}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
