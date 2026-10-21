import React, { useState } from 'react';
import { Language, translations } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

interface ContactProps {
  currentLang: Language;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ currentLang, onShowToast }) => {
  const t = translations[currentLang];

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        onShowToast(`${label}: ${t.copied_toast}`);
      })
      .catch(() => {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        onShowToast(`${label}: ${t.copied_toast}`);
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formSubject || !formMessage) {
      return;
    }

    const bodyText = `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`;
    const mailtoUrl = `mailto:beshoy.work@outlook.com?subject=${encodeURIComponent(
      formSubject
    )}&body=${encodeURIComponent(bodyText)}`;

    setFormSubmitted(true);
    window.location.href = mailtoUrl;
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
              <li>
                <div className="contact-link-main">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:beshoy.work@outlook.com">beshoy.work@outlook.com</a>
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
              <li>
                <div className="contact-link-main">
                  <i className="fa-brands fa-linkedin"></i>
                  <a
                    href="https://www.linkedin.com/in/beshoy-naguib/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.cnt_linkedin}
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-link-main">
                  <i
                    className="fa-solid fa-briefcase"
                    style={{ color: 'var(--accent)' }}
                  ></i>
                  <a
                    href="https://wuzzuf.net/me/--35b17d8b18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.cnt_wuzzuf}
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-link-main">
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+201273791926" dir="ltr">
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
                  >
                    {t.cnt_whatsapp}
                  </a>
                </div>
              </li>
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

        <div className="contact-form">
          <form onSubmit={handleSubmit} id="contactForm">
            <div className="form-group">
              <label htmlFor="formName">{t.f_name}</label>
              <input
                type="text"
                id="formName"
                placeholder={t.f_name_ph}
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="formEmail">{t.f_mail}</label>
              <input
                type="email"
                id="formEmail"
                placeholder={t.f_mail_ph}
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="formSubject">{t.f_sub}</label>
              <input
                type="text"
                id="formSubject"
                placeholder={t.f_sub_ph}
                value={formSubject}
                onChange={(e) => setFormSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="formMessage">{t.f_msg}</label>
              <textarea
                id="formMessage"
                rows={4}
                placeholder={t.f_msg_ph}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span>{t.f_btn}</span>
            </button>
            {formSubmitted && (
              <p
                style={{
                  marginTop: '0.8rem',
                  fontSize: '0.85rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {t.form_success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
