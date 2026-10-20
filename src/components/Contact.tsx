import React, { useState } from 'react';
import { Language, translations } from '../data/portfolioData';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

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
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:beshoy.work@outlook.com">beshoy.work@outlook.com</a>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
                <a
                  href="https://www.linkedin.com/in/beshoy-naguib/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cnt_linkedin}
                </a>
              </li>
              <li>
                <i className="fa-solid fa-briefcase" style={{ color: 'var(--accent)' }}></i>
                <a
                  href="https://wuzzuf.net/me/--35b17d8b18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cnt_wuzzuf}
                </a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+201273791926" dir="ltr">
                  +20 127 379 1926
                </a>
              </li>
              <li>
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
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>{t.cnt_addr}</span>
              </li>
            </ul>
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
