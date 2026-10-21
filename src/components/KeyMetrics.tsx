import React from 'react';
import { Language, translations } from '../data/portfolioData';

interface KeyMetricsProps {
  currentLang: Language;
}

export const KeyMetrics: React.FC<KeyMetricsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const metrics = [
    {
      icon: 'fa-solid fa-business-time',
      value: t.metric_exp_val,
      label: t.metric_exp_lbl,
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      value: t.metric_edu_val,
      label: t.metric_edu_lbl,
    },
    {
      icon: 'fa-solid fa-certificate',
      value: t.metric_certs_val,
      label: t.metric_certs_lbl,
    },
    {
      icon: 'fa-solid fa-building-columns',
      value: t.metric_bank_val,
      label: t.metric_bank_lbl,
    },
  ];

  return (
    <section className="key-metrics-section">
      <div className="metrics-container">
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div className="metric-card" key={idx}>
              <div className="metric-icon-wrapper">
                <i className={m.icon}></i>
              </div>
              <div className="metric-content">
                <div className="metric-val">{m.value}</div>
                <div className="metric-lbl">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
