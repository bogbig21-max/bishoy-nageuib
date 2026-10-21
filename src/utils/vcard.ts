/**
 * Utility to generate and download a standard vCard (.vcf) for Beshoy Naguib
 */
export const downloadVCard = () => {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:George;Beshoy;Naguib;;',
    'FN:Beshoy Naguib George',
    'ORG:Financial Accounting & Banking Services',
    'TITLE:Financial Accountant | Banking & Customer Service Specialist',
    'TEL;TYPE=CELL,VOICE,WHATSAPP:+201273791926',
    'EMAIL;TYPE=PREF,INTERNET:beshoy.work@outlook.com',
    'URL:https://bishoy-nageuib.vercel.app',
    'ADR;TYPE=WORK:;;Shubra El-Kheima;Qalyubia;;Egypt',
    'NOTE:MBA in Finance & Investment (Excellent) | Housing & Development Bank (HDB) Experience | Bayt Al-Khobara',
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Beshoy_Naguib_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
