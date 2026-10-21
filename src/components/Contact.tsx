import React from 'react';
import { Language, translations } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

interface ContactProps {
  currentLang: Language;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ currentLang, onShowToast }) => {
  const t = translations[currentLang];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        onShowToast(`${label}: ${t.copied_toast}`);
      })
      .catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        onShowToast(`${label}: ${t.copied_toast}`);
      });
  };

  return (
    <section className="container" id="contact">
      <div className="section-title">
        <h2>{t.cnt_title}</h2>
      </div>

      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-card-header">
            <h3>{t.cnt_head}</h3>
            <p>{t.cnt_p}</p>
          </div>

          <ul className="contact-links">
            {/* Phone */}
            <li className="contact-link-item">
              <a
                href="tel:+201273791926"
                className="contact-link-main"
                title={t.copy_phone_btn}
              >
                <div className="contact-icon phone-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">
                    {currentLang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </span>
                  <span className="contact-value" dir="ltr">
                    +20 127 379 1926
                  </span>
                </div>
              </a>
              <button
                type="button"
                className="contact-action-btn"
                onClick={() => copyToClipboard('+201273791926', t.copy_phone_btn)}
                title={t.copy_phone_btn}
                aria-label={t.copy_phone_btn}
              >
                <i className="fa-solid fa-copy"></i>
              </button>
            </li>

            {/* WhatsApp */}
            <li className="contact-link-item">
              <a
                href="https://wa.me/201273791926"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-main"
                title="WhatsApp"
              >
                <div className="contact-icon whatsapp-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">
                    {currentLang === 'ar' ? 'واتساب' : 'WhatsApp'}
                  </span>
                  <span className="contact-value" dir="ltr">
                    +20 127 379 1926
                  </span>
                </div>
              </a>
              <a
                href="https://wa.me/201273791926"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn whatsapp-action"
                title="Open WhatsApp"
                aria-label="Open WhatsApp"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>

            {/* Email */}
            <li className="contact-link-item">
              <a
                href="mailto:beshoy.work@outlook.com"
                className="contact-link-main"
                title="Send Email"
              >
                <div className="contact-icon email-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">
                    {currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </span>
                  <span className="contact-value" dir="ltr">
                    beshoy.work@outlook.com
                  </span>
                </div>
              </a>
              <button
                type="button"
                className="contact-action-btn"
                onClick={() =>
                  copyToClipboard('beshoy.work@outlook.com', t.copy_email_btn)
                }
                title={t.copy_email_btn}
                aria-label={t.copy_email_btn}
              >
                <i className="fa-solid fa-copy"></i>
              </button>
            </li>

            {/* LinkedIn */}
            <li className="contact-link-item">
              <a
                href="https://www.linkedin.com/in/beshoy-naguib/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-main"
                title="LinkedIn Profile"
              >
                <div className="contact-icon linkedin-icon">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">{t.cnt_linkedin}</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/beshoy-naguib/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn"
                title="Open LinkedIn"
                aria-label="Open LinkedIn"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>

            {/* Wuzzuf */}
            <li className="contact-link-item">
              <a
                href="https://wuzzuf.net/me/--35b17d8b18"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-main"
                title="Wuzzuf Profile"
              >
                <div className="contact-icon wuzzuf-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">Wuzzuf</span>
                  <span className="contact-value">{t.cnt_wuzzuf}</span>
                </div>
              </a>
              <a
                href="https://wuzzuf.net/me/--35b17d8b18"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn"
                title="Open Wuzzuf"
                aria-label="Open Wuzzuf"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>

            {/* Location */}
            <li className="contact-link-item">
              <div className="contact-link-main">
                <div className="contact-icon location-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-info-text">
                  <span className="contact-label">
                    {currentLang === 'ar' ? 'العنوان والموقع' : 'Location & Address'}
                  </span>
                  <span className="contact-value">{t.cnt_addr}</span>
                </div>
              </div>
            </li>
          </ul>

          <div className="contact-vcard-wrapper">
            <button
              type="button"
              className="btn btn-outline vcard-download-btn"
              onClick={downloadVCard}
            >
              <i className="fa-solid fa-address-card"></i>
              <span>{t.btn_save_vcard}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
