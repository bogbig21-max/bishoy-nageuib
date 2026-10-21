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
        <div className="contact-info">
          <div>
            <h3>{t.cnt_head}</h3>
            <p>{t.cnt_p}</p>

            <ul className="contact-links">
              {/* Email */}
              <li>
                <div className="contact-link-main">
                  <i className="fa-solid fa-envelope"></i>
                  <a
                    href="mailto:beshoy.work@outlook.com"
                    title="Send Email"
                  >
                    beshoy.work@outlook.com
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
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
              <li>
                <div className="contact-link-main">
                  <i className="fa-brands fa-linkedin"></i>
                  <a
                    href="https://www.linkedin.com/in/beshoy-naguib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                  >
                    {t.cnt_linkedin}
                  </a>
                </div>
                <a
                  href="https://www.linkedin.com/in/beshoy-naguib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-copy-btn"
                  title="Open LinkedIn"
                  aria-label="Open LinkedIn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>

              {/* Wuzzuf */}
              <li>
                <div className="contact-link-main">
                  <i className="fa-solid fa-briefcase"></i>
                  <a
                    href="https://wuzzuf.net/me/--35b17d8b18"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Wuzzuf Profile"
                  >
                    {t.cnt_wuzzuf}
                  </a>
                </div>
                <a
                  href="https://wuzzuf.net/me/--35b17d8b18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-copy-btn"
                  title="Open Wuzzuf"
                  aria-label="Open Wuzzuf"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>

              {/* Phone */}
              <li>
                <div className="contact-link-main">
                  <i className="fa-solid fa-phone"></i>
                  <a
                    href="tel:+201273791926"
                    dir="ltr"
                    title="Call Phone Number"
                  >
                    +20 127 379 1926
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() =>
                    copyToClipboard('+201273791926', t.copy_phone_btn)
                  }
                  title={t.copy_phone_btn}
                  aria-label={t.copy_phone_btn}
                >
                  <i className="fa-solid fa-copy"></i>
                </button>
              </li>

              {/* WhatsApp */}
              <li>
                <div className="contact-link-main">
                  <i
                    className="fa-brands fa-whatsapp"
                    style={{ color: '#25d366', fontSize: '1.2rem' }}
                  ></i>
                  <a
                    href="https://wa.me/201273791926"
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    title="Open WhatsApp Chat"
                  >
                    {t.cnt_whatsapp}
                  </a>
                </div>
                <a
                  href="https://wa.me/201273791926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-copy-btn"
                  title="Open WhatsApp"
                  aria-label="Open WhatsApp"
                  style={{ color: '#25d366' }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>

              {/* Location */}
              <li>
                <div className="contact-link-main">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{t.cnt_addr}</span>
                </div>
              </li>
            </ul>
          </div>

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
