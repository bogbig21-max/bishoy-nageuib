export type Language = 'en' | 'ar';

export interface DocumentItem {
  id: string;
  image: string;
  titleKey: string;
  descKey: string;
}

export interface CourseItem {
  titleKey: string;
  descKey: string;
}

export interface EducationItem {
  tagKey: string;
  titleKey: string;
  instKey: string;
  descKey: string;
  icon: string;
}

export interface ExperienceItem {
  dateKey: string;
  titleKey: string;
  bulletKeys: string[];
}

export interface SkillCategory {
  titleKey: string;
  icon: string;
  skills: string[];
}

export const documents: DocumentItem[] = [
  // 1. MBA
  {
    id: 'mba',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (6)_7.jpeg',
    titleKey: 'doc_1_t',
    descKey: 'doc_1_d',
  },
  // 2. BIS
  {
    id: 'bis',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (10)_7.jpeg',
    titleKey: 'doc_2_t',
    descKey: 'doc_2_d',
  },
  // 3. Tafaseel BPO (HDB Project) - Experience Certificate
  {
    id: 'tafaseel-bpo',
    image: '/assets/aistudio/Picsart_26-10-20_19-38-55-509_f804f2f3.jpg',
    titleKey: 'doc_tafaseel_t',
    descKey: 'doc_tafaseel_d',
  },
  // 4. Bayt Al-Khibra - Financial & Tax Accounting Experience Certificate
  {
    id: 'bayt-alkhibra',
    image: '/assets/aistudio/Picsart_26-10-20_21-23-27-538_23ce90de.jpg',
    titleKey: 'doc_bayt_khibra_t',
    descKey: 'doc_bayt_khibra_d',
  },
  // 5. Heaven Academy - PFA Certificate
  {
    id: 'heaven-pfa',
    image: '/assets/aistudio/Picsart_26-10-20_21-25-46-167_68333fd0.jpg',
    titleKey: 'doc_pfa_heaven_t',
    descKey: 'doc_pfa_heaven_d',
  },
  // 6. Heaven Academy - Oracle Financial & Odoo Certificate
  {
    id: 'heaven-oracle-odoo',
    image: '/assets/aistudio/Screenshot_2026-10-20-21-34-22-28_680d03679600f7af0b4c700c6b270fe7_285f8c91.jpg',
    titleKey: 'doc_oracle_odoo_heaven_t',
    descKey: 'doc_oracle_odoo_heaven_d',
  },
  // 7. FDTC
  {
    id: 'fdtc',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (9)_7.jpeg',
    titleKey: 'doc_3_t',
    descKey: 'doc_3_d',
  },
  // 8. Banque Misr
  {
    id: 'banque-misr',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (2)_7.jpeg',
    titleKey: 'doc_4_t',
    descKey: 'doc_4_d',
  },
  // 9. Syndicate
  {
    id: 'syndicate',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (7)_5.jpeg',
    titleKey: 'doc_5_t',
    descKey: 'doc_5_d',
  },
  // 10. DBA Card
  {
    id: 'dba-card',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (8)_6.jpeg',
    titleKey: 'doc_6_t',
    descKey: 'doc_6_d',
  },
  // 11. SQL Course
  {
    id: 'sql',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (1).jpeg',
    titleKey: 'doc_7_t',
    descKey: 'doc_7_d',
  },
  // 12. Military Service
  {
    id: 'military',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM (3).jpeg',
    titleKey: 'doc_8_t',
    descKey: 'doc_8_d',
  },
  // 13. C++ Course
  {
    id: 'cpp',
    image: '/WhatsApp Image 2026-08-27 at 3.58.47 PM.jpeg',
    titleKey: 'doc_9_t',
    descKey: 'doc_9_d',
  },
];

export const educationList: EducationItem[] = [
  {
    tagKey: 'edu_1_tag',
    titleKey: 'edu_1_title',
    instKey: 'edu_1_inst',
    descKey: 'edu_1_major',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    tagKey: 'edu_2_tag',
    titleKey: 'edu_2_title',
    instKey: 'edu_2_inst',
    descKey: 'edu_2_desc',
    icon: 'fa-solid fa-award',
  },
  {
    tagKey: 'edu_3_tag',
    titleKey: 'edu_3_title',
    instKey: 'edu_3_inst',
    descKey: 'edu_3_desc',
    icon: 'fa-solid fa-user-graduate',
  },
];

// Experience list without Agricultural Company, keeping all legitimate experiences
export const experienceList: ExperienceItem[] = [
  {
    dateKey: 'exp_2_date',
    titleKey: 'exp_2_title',
    bulletKeys: [
      'exp_2_li1',
      'exp_2_li2',
      'exp_2_li3',
      'exp_2_li4',
      'exp_2_li5',
      'exp_2_li6',
      'exp_2_li7',
      'exp_2_li8',
    ],
  },
  {
    dateKey: 'exp_khibra_date',
    titleKey: 'exp_khibra_title',
    bulletKeys: [
      'exp_khibra_li1',
      'exp_khibra_li2',
      'exp_khibra_li3',
      'exp_khibra_li4',
    ],
  },
  {
    dateKey: 'exp_3_date',
    titleKey: 'exp_3_title',
    bulletKeys: [
      'exp_3_li1',
      'exp_3_li2',
      'exp_3_li3',
      'exp_3_li4',
      'exp_3_li5',
      'exp_3_li6',
      'exp_3_li7',
      'exp_3_li8',
      'exp_3_li9',
    ],
  },
  {
    dateKey: 'exp_4_date',
    titleKey: 'exp_4_title',
    bulletKeys: [
      'exp_4_li1',
      'exp_4_li2',
      'exp_4_li3',
      'exp_4_li4',
      'exp_4_li5',
    ],
  },
  {
    dateKey: 'exp_5_date',
    titleKey: 'exp_5_title',
    bulletKeys: [
      'exp_5_li1',
      'exp_5_li2',
      'exp_5_li3',
      'exp_5_li4',
    ],
  },
  {
    dateKey: 'exp_6_date',
    titleKey: 'exp_6_title',
    bulletKeys: [
      'exp_6_li1',
      'exp_6_li2',
      'exp_6_li3',
      'exp_6_li4',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    titleKey: 'sk_h1',
    icon: 'fa-solid fa-calculator',
    skills: [
      'sk_s1', 'sk_s2', 'sk_s3', 'sk_s4', 'sk_s5',
      'sk_s6', 'sk_s7', 'sk_s8', 'sk_s9', 'sk_s10'
    ],
  },
  {
    titleKey: 'sk_h2',
    icon: 'fa-solid fa-headset',
    skills: [
      'sk_s11', 'sk_s12', 'sk_s13', 'sk_s14',
      'sk_s15', 'sk_s16', 'sk_s17', 'sk_s18'
    ],
  },
  {
    titleKey: 'sk_h3',
    icon: 'fa-solid fa-tasks',
    skills: [
      'sk_s19', 'sk_s20', 'sk_s21', 'sk_s22',
      'sk_s23', 'sk_s24', 'sk_s25', 'sk_s26'
    ],
  },
  {
    titleKey: 'sk_h4',
    icon: 'fa-solid fa-laptop-code',
    skills: [
      'sk_s27', 'sk_s28', 'sk_s29', 'sk_s30',
      'sk_s31', 'sk_s32', 'sk_s33', 'sk_s34'
    ],
  },
];

export const courseList: CourseItem[] = [
  { titleKey: 'crs_1_t', descKey: 'crs_1_d' },
  { titleKey: 'crs_2_t', descKey: 'crs_2_d' },
  { titleKey: 'crs_3_t', descKey: 'crs_3_d' },
  { titleKey: 'crs_4_t', descKey: 'crs_4_d' },
  { titleKey: 'crs_5_t', descKey: 'crs_5_d' },
  { titleKey: 'crs_6_t', descKey: 'crs_6_d' },
  { titleKey: 'crs_7_t', descKey: 'crs_7_d' },
  { titleKey: 'crs_8_t', descKey: 'crs_8_d' },
  { titleKey: 'crs_9_t', descKey: 'crs_9_d' },
  { titleKey: 'crs_10_t', descKey: 'crs_10_d' },
  { titleKey: 'crs_11_t', descKey: 'crs_11_d' },
  { titleKey: 'crs_12_t', descKey: 'crs_12_d' },
];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    brand_name: "Bishoy Nageuib",
    page_title: "Bishoy Nageuib | Professional Portfolio & CV",
    nav_home: "Home",
    nav_open_work: "Open to Work",
    nav_about: "Career Objective",
    nav_edu: "Education",
    nav_exp: "Experience",
    nav_skills: "Skills",
    nav_courses: "Courses & Certificates",
    nav_docs: "Documents",
    nav_contact: "Contact",
    hero_name: "Bishoy Nageuib",
    hero_title: "Financial Accountant | Banking & Customer Service Specialist | Administrator",
    hero_desc: "Professional portfolio and CV focusing on Financial Accounting, Banking Services, Customer Service, and Administration.",
    btn_download_cv: "Download Official CV (PDF)",
    btn_open_work: "Open to Opportunities",
    pill_work: "Open to Work",
    pill_about: "Objective",
    pill_edu: "Education",
    pill_exp: "Experience",
    pill_skills: "Skills",
    pill_docs: "Documents",
    pill_contact: "Contact",
    otw_title: "Open to Work",
    otw_tag: "Ready for Immediate Joining",
    otw_text: "Financial Accountant | Banking Experience | Administrator\nHolding an MBA in Finance and Investment with an Excellent grade, and currently pursuing a DBA. I possess practical experience in financial accounting, banking customer service at Housing and Development Bank (HDB), and academic administration, with experience in financial transactions, reporting, data management, and documentation.\nTargeting professional opportunities in: Financial Accounting | Banking Roles | Administrative Roles.",
    otw_btn: "Contact me regarding a professional opportunity",
    about_title: "Career Objective",
    about_text: "Seeking to build a career in financial accounting, the banking sector, and administration, leveraging my academic background in finance, investment, and business administration alongside my diverse practical experience.<br><br>I aspire to work in an organized professional environment where I can apply my skills in financial transactions, reporting, data management, documentation, organization, and follow-up, while continuing to develop my expertise and take on greater professional responsibilities.",
    edu_title: "Education",
    edu_1_tag: "March 2026 - Present",
    edu_1_title: "Doctor of Business Administration (DBA)",
    edu_1_inst: "Tanta University",
    edu_1_major: "Major: Business Administration",
    edu_2_tag: "Grade: Excellent",
    edu_2_title: "Master of Business Administration (MBA)",
    edu_2_inst: "Tanta University",
    edu_2_desc: "Major: Finance and Investment (Feb 2026)",
    edu_3_tag: "Class Rank: 4th (90%)",
    edu_3_title: "Bachelor of Management Information Systems (BIS)",
    edu_3_inst: "Higher Institute for Computers and Management Information Systems, Shubra El-Kheima",
    edu_3_desc: "Graduation Year: 2023 (Project: Excellent)",

    // Experience with exact duration next to (Concurrent)
    exp_title: "Work Experience",

    // 1. Tafaseel BPO - HDB Project
    exp_2_date: "Jul 30, 2025 - Aug 1, 2026 (1 Year - Concurrent)",
    exp_2_title: "Customer Service Representative (Call Center) — Tafaseel BPO International (Housing & Development Bank HDB Project)",
    exp_2_li1: "Supervised the daily performance of the team, reviewed team members' work, and provided guidance to improve service quality and productivity.",
    exp_2_li2: "Monitored team performance, identified errors, and coached team members to ensure compliance with banking procedures and quality standards.",
    exp_2_li3: "Handled inbound customer calls and provided professional support for banking products and services.",
    exp_2_li4: "Assisted customers with account inquiries, debit and credit card services, digital banking, and transaction-related requests.",
    exp_2_li5: "Resolved customer complaints while maintaining high customer satisfaction and service quality standards.",
    exp_2_li6: "Verified customer information and followed KYC, compliance, and bank policies during all customer interactions.",
    exp_2_li7: "Documented customer interactions accurately using CRM and banking systems.",
    exp_2_li8: "Maintained confidentiality of customer information and ensured compliance with banking regulations.",

    // 2. Bayt Al-Khibra
    exp_khibra_date: "Oct 1, 2024 - Sep 30, 2026 (2 Years - Concurrent)",
    exp_khibra_title: "Financial & Tax Accountant — Bayt Al-Khibra for Financial & Tax Consultations (Certified Public Accountant Mohamed Karam)",
    exp_khibra_li1: "Provided technical accounting guidance and entered financial operations into accounting ledgers following standard accounting methodologies.",
    exp_khibra_li2: "Designed computerized documentary and ledger accounting systems to enhance financial recording accuracy.",
    exp_khibra_li3: "Prepared inventory adjustments, closing accounts, and various financial statements according to Egyptian Accounting Standards (EAS).",
    exp_khibra_li4: "Demonstrated high efficiency and professionalism in executing assigned financial tasks, tax reviews, and audit preparations.",

    // 3. MCV Academy
    exp_3_date: "Dec 2024 - Oct 2025 (11 Months - Concurrent)",
    exp_3_title: "Academic Officer — MCV Academy, El Salheya El Gedida, Egypt",
    exp_3_li1: "Entered attendance and grades accurately using Excel and digital management systems.",
    exp_3_li2: "Managed student records and generated performance and attendance reports for senior management.",
    exp_3_li3: "Developed an organized academic archiving system, reducing retrieval time by 30%.",
    exp_3_li4: "Prepared exams, monitored student performance, and conducted satisfaction surveys.",
    exp_3_li5: "Evaluated instructor performance and provided recommendations to management.",
    exp_3_li6: "Coordinated schedules to prevent classroom and instructor conflicts.",
    exp_3_li7: "Proposed and implemented digital solutions to reduce paperwork and improve workflow.",
    exp_3_li8: "Prepared weekly academic and attendance reports for senior management.",
    exp_3_li9: "Trained junior staff on Excel reporting and digital record management.",

    // 4. Military Service
    exp_4_date: "2024 (1 Year)",
    exp_4_title: "Military Service — Computer Soldier, Egypt",
    exp_4_li1: "Executed administrative tasks using Microsoft Office efficiently.",
    exp_4_li2: "Prepared and organized reports and documentation with high accuracy.",
    exp_4_li3: "Worked effectively under pressure in a structured, disciplined environment.",
    exp_4_li4: "Developed teamwork, communication, and discipline skills.",
    exp_4_li5: "Assisted in setting up and maintaining IT systems for administrative operations.",

    // 5. Kriazi
    exp_5_date: "Part-time",
    exp_5_title: "Part-time Supervisor — Kriazi Company, Egypt",
    exp_5_li1: "Supervised daily operations, ensuring tasks were completed efficiently.",
    exp_5_li2: "Coordinated workers' activities to achieve daily targets.",
    exp_5_li3: "Managed operational issues and reported performance to management.",
    exp_5_li4: "Improved workflow efficiency and staff coordination by introducing daily checklists.",

    // 6. Local Shop
    exp_6_date: "Technical Experience",
    exp_6_title: "Sales and Computer Technician — Local Computer Shop, Egypt",
    exp_6_li1: "Sold computers and accessories while providing technical consultations.",
    exp_6_li2: "Maintained and repaired hardware and software efficiently.",
    exp_6_li3: "Enhanced customer service and technical communication skills.",
    exp_6_li4: "Provided training to customers on software and device usage.",

    // Skills
    sk_title: "Skills",
    sk_h1: "Accounting & Finance",
    sk_h2: "Banking & Customer Service",
    sk_h3: "Administrative & Operations",
    sk_h4: "Software & Digital Skills",
    sk_s1: "General Accounting & Financial Transactions",
    sk_s2: "Journal Entries & Accounting Cycle",
    sk_s3: "Accounts Payable & Accounts Receivable",
    sk_s4: "Bank Reconciliation & Cash Reconciliation",
    sk_s5: "Cash Handling & Expense Management",
    sk_s6: "Payroll Preparation & Employee Payments",
    sk_s7: "Inventory Records & Reconciliation",
    sk_s8: "Financial Reporting & Data Analysis",
    sk_s9: "Income Statement, Balance Sheet & Cash Flow",
    sk_s10: "Financial Documentation & Record Keeping",
    sk_s11: "Banking Customer Service & Account Support",
    sk_s12: "Banking Transactions & Digital Banking Services",
    sk_s13: "Customer Relationship Management",
    sk_s14: "Handling Customer Inquiries, Complaints & Service Requests",
    sk_s15: "Professional Telephone Communication",
    sk_s16: "Problem Solving & Issue Resolution",
    sk_s17: "Customer Request Follow-up & Escalation",
    sk_s18: "Accurate Documentation of Customer Interactions",
    sk_s19: "Administrative Operations & Office Support",
    sk_s20: "Documentation, Filing & Archiving",
    sk_s21: "Data Entry & Data Management",
    sk_s22: "Report Preparation & Excel-Based Tracking",
    sk_s23: "Attendance & Administrative Records",
    sk_s24: "Scheduling, Coordination & Follow-up",
    sk_s25: "Document Control & Record Organization",
    sk_s26: "Supporting Exams, Surveys & Administrative Activities",
    sk_s27: "Microsoft Excel - Advanced",
    sk_s28: "Microsoft Word",
    sk_s29: "Microsoft PowerPoint",
    sk_s30: "Microsoft Outlook",
    sk_s31: "Microsoft Access",
    sk_s32: "Google Workspace - Drive, Docs & Sheets",
    sk_s33: "Oracle Financial",
    sk_s34: "Odoo ERP",

    // Courses & Certs
    crs_title: "Certificates & Courses",
    crs_1_t: "English Language Course - TOEFL Preparation",
    crs_1_d: "Armed Forces Institute of Languages (AFIL), Kobry El-Qobba, Egypt | 2026 - Present (Concurrent)",
    crs_2_t: "Fundamentals of Digital Transformation Certificate (FDTC)",
    crs_2_d: "Tanta University | Aug 2025 - Jul 2030",
    crs_3_t: "Online Banking Operations Course",
    crs_3_d: "Supreme Council of Universities / Banque Misr | 2025",
    crs_4_t: "Professional Financial Accountant (PFA) Certificate",
    crs_4_d: "Heaven Academy | Aug 2026 - Oct 2026 (Concurrent)",
    crs_5_t: "SAP ERP Training",
    crs_5_d: "September 2026",
    crs_6_t: "Oracle Financial & Odoo ERP Training",
    crs_6_d: "Heaven Academy | October 2026 (Concurrent)",
    crs_7_t: "Customer Service Experience Certificate (HDB Project)",
    crs_7_d: "Tafaseel BPO International | Jul 30, 2025 - Aug 1, 2026 (1 Year - Concurrent)",
    crs_8_t: "Advanced Microsoft Excel Training",
    crs_8_d: "September 2026",
    crs_9_t: "Accounting & Tax Experience Certificate",
    crs_9_d: "Bayt Al-Khibra for Financial & Tax Consultations (CPA Mohamed Karam) | Oct 1, 2024 - Sep 30, 2026 (2 Years - Concurrent)",
    crs_10_t: "Microsoft Outlook Training",
    crs_10_d: "September 2026",
    crs_11_t: "Google Workspace & Google Drive Training",
    crs_11_d: "2024",
    crs_12_t: "ICDL Certificate",
    crs_12_d: "2024",

    // Documents
    doc_title: "Certificates & Documents Gallery",
    doc_1_t: "Master of Business Administration (MBA)",
    doc_1_d: "Tanta University - Finance & Investment",
    doc_2_t: "Bachelor Degree (BIS)",
    doc_2_d: "Higher Institute - Excellent Grade",

    doc_tafaseel_t: "Customer Service Experience Certificate — Tafaseel BPO",
    doc_tafaseel_d: "Call Center Representative | HDB Project (Jul 30, 2025 - Aug 1, 2026 - Concurrent)",

    doc_bayt_khibra_t: "Accounting & Tax Experience Certificate — Bayt Al-Khibra",
    doc_bayt_khibra_d: "Certified Public Accountant Mohamed Karam (Oct 1, 2024 - Sep 30, 2026 - Concurrent)",

    doc_pfa_heaven_t: "Professional Financial Accountant (PFA) — Heaven Academy",
    doc_pfa_heaven_d: "Professional Financial Course (Aug 2026 - Oct 2026 - Concurrent)",

    doc_oracle_odoo_heaven_t: "Oracle Financial & Odoo ERP — Heaven Academy",
    doc_oracle_odoo_heaven_d: "ERP Financial Systems Course (October 2026 - Concurrent)",

    doc_3_t: "Digital Transformation Certificate (FDTC)",
    doc_3_d: "Supreme Council of Universities & Tanta University",
    doc_4_t: "Banque Misr Training Certificate",
    doc_4_d: "Certified Summer Banking Internship",
    doc_5_t: "Commercial Professions Syndicate ID",
    doc_5_d: "Organization & Administration Section",
    doc_6_t: "DBA Researcher Card",
    doc_6_d: "Tanta University - Faculty of Commerce",
    doc_7_t: "SQL Course Certificate",
    doc_7_d: "Programming Hub - SQL Fundamentals",
    doc_8_t: "Military Service Certificate",
    doc_8_d: "Ministry of Defense - Police Sector",
    doc_9_t: "C++ Course Certificate",
    doc_9_d: "Programming Hub - C++ Fundamentals",
    btn_full: "View Full Size",
    btn_download_doc: "Download Document",

    // Languages
    lang_title: "Languages",
    lang_1_t: "Arabic",
    lang_1_d: "Native Language",
    lang_2_t: "English",
    lang_2_d: "Good command of English (Currently studying TOEFL Preparation)",

    // Contact
    cnt_title: "Contact",
    cnt_head: "Contact Information",
    cnt_p: "Open to discussing career opportunities and professional engagements.",
    cnt_addr: "Mit Ghamr, Dakahlia | Shubra El Kheima, Qalyubia, Egypt",
    cnt_linkedin: "LinkedIn Profile",
    cnt_wuzzuf: "Wuzzuf Profile",
    cnt_whatsapp: "+20 127 379 1926 (WhatsApp)",
    f_name: "Full Name",
    f_name_ph: "Enter your full name",
    f_mail: "Email Address",
    f_mail_ph: "example@email.com",
    f_sub: "Subject",
    f_sub_ph: "Message subject",
    f_msg: "Message",
    f_msg_ph: "Write your message here...",
    f_btn: "Send Message",
    form_success: "Thank you! Your email client will open with your message details.",
    form_missing: "Please fill in all fields before sending.",

    // Footer & Lightbox
    footer_rights: "All Rights Reserved",
    modal_close: "Close Preview"
  },
  ar: {
    brand_name: "بيشوي نجيب",
    page_title: "بيشوي نجيب جورج | الملف المهني والسيرة الذاتية",
    nav_home: "الرئيسية",
    nav_open_work: "فرص العمل",
    nav_about: "الهدف الوظيفي",
    nav_edu: "التعليم",
    nav_exp: "الخبرات",
    nav_skills: "المهارات",
    nav_courses: "الدورات والشهادات",
    nav_docs: "المستندات",
    nav_contact: "التواصل",
    hero_name: "بيشوي نجيب",
    hero_title: "محاسب مالي | أخصائي خدمات مصرفية وخدمة عملاء | إداري",
    hero_desc: "الملف المهني والسيرة الذاتية الخاصة بي في مجالات المحاسبة المالية، الخدمات المصرفية، خدمة العملاء، والعمليات الإدارية.",
    btn_download_cv: "تحميل السيرة الذاتية (PDF)",
    btn_open_work: "متاح لفرص العمل",
    pill_work: "فرص العمل",
    pill_about: "الهدف",
    pill_edu: "التعليم",
    pill_exp: "الخبرات",
    pill_skills: "المهارات",
    pill_docs: "المستندات",
    pill_contact: "التواصل",
    otw_title: "متاح لفرص العمل",
    otw_tag: "متاح للانضمام الفوري",
    otw_text: "محاسب مالي | خبرة مصرفية | إداري\nحاصل على ماجستير إدارة الأعمال (MBA) في التمويل والاستثمار بتقدير ممتاز، وأدرس حاليًا دكتوراه إدارة الأعمال (DBA). أمتلك خبرة عملية في المحاسبة المالية، وخدمة العملاء المصرفية في بنك التعمير والإسكان (HDB)، والإدارة الأكاديمية، مع خبرة في المعاملات المالية، وإعداد التقارير، وإدارة البيانات، والتوثيق.\nأستهدف فرصًا مهنية في:\nالمحاسبة المالية | الوظائف المصرفية | الوظائف الإدارية",
    otw_btn: "تواصل معي بخصوص فرصة مهنية",
    about_title: "الهدف الوظيفي",
    about_text: "أسعى إلى بناء مسار مهني في المحاسبة المالية، والقطاع المصرفي، والإدارة، مستفيدًا من خلفيتي الأكاديمية في التمويل والاستثمار وإدارة الأعمال وخبرتي العملية المتنوعة.<br><br>أطمح إلى العمل في بيئة مهنية منظمة أستطيع من خلالها تطبيق مهاراتي في المعاملات المالية، وإعداد التقارير، وإدارة البيانات، والتوثيق، والتنظيم والمتابعة، مع الاستمرار في تطوير خبراتي وتحمل مسؤوليات مهنية أكبر.",
    edu_title: "التعليم",
    edu_1_tag: "مارس 2026 - حتى الآن",
    edu_1_title: "دكتوراه إدارة الأعمال (DBA)",
    edu_1_inst: "جامعة طنطا",
    edu_1_major: "التخصص: إدارة الأعمال",
    edu_2_tag: "التقدير: ممتاز",
    edu_2_title: "ماجستير إدارة الأعمال (MBA)",
    edu_2_inst: "جامعة طنطا",
    edu_2_desc: "التخصص: التمويل والاستثمار (فبراير 2026)",
    edu_3_tag: "الترتيب: الرابع (90%)",
    edu_3_title: "بكالوريوس نظم معلومات إدارية (BIS)",
    edu_3_inst: "المعهد العالي للحاسبات ونظم المعلومات - شبرا الخيمة",
    edu_3_desc: "سنة التخرج: 2023 (مشروع التخرج: ممتاز)",

    // Experience with exact duration next to (متزامن)
    exp_title: "الخبرات العملية",

    // 1. Tafaseel BPO - HDB Project
    exp_2_date: "30 يوليو 2025 - 1 أغسطس 2026 (سنة كاملة - متزامن)",
    exp_2_title: "ممثل خدمة عملاء - كول سنتر — شركة تفاصيل بي بي او الدولية (مشروع بنك التعمير والإسكان)",
    exp_2_li1: "الإشراف على الأداء اليومي للفريق، ومراجعة أعمال الأعضاء، وتوجيههم لتحسين جودة الخدمة والإنتاجية.",
    exp_2_li2: "مراقبة أداء الفريق، وتحديد الأخطاء، وتوجيه الأعضاء لضمان الالتزام بالإجراءات المصرفية ومعايير الجودة.",
    exp_2_li3: "التعامل مع مكالمات العملاء الواردة وتقديم دعم احترافي للمنتجات والخدمات المصرفية.",
    exp_2_li4: "مساعدة العملاء في الاستفسارات عن الحسابات، خدمات بطاقات الائتمان والخصم، الخدمات المصرفية الرقمية، والطلبات المتعلقة بالمعاملات.",
    exp_2_li5: "حل شكاوى العملاء مع الحفاظ على مستويات عالية من رضا العملاء ومعايير جودة الخدمة.",
    exp_2_li6: "التحقق من بيانات العملاء والالتزام بسياسات اعرف عميلك (KYC)، والامتثال، وسياسات البنك خلال جميع تفاعلات العملاء.",
    exp_2_li7: "توثيق تفاعلات العملاء بدقة باستخدام أنظمة إدارة علاقات العملاء (CRM) والأنظمة المصرفية.",
    exp_2_li8: "الحفاظ على سرية معلومات العملاء وضمان الالتزام باللوائح المصرفية.",

    // 2. Bayt Al-Khibra
    exp_khibra_date: "1 أكتوبر 2024 - 30 سبتمبر 2026 (سنتان - متزامن)",
    exp_khibra_title: "محاسب مالي وضريبي — مكتب بيت الخبراء للاستشارات المالية والضريبية (محاسب قانوني محمد كرم عبد المحسن)",
    exp_khibra_li1: "التوجيه الفني المحاسبي وتسجيل العمليات بالدفاتر المحاسبية طبقا للطرق المحاسبية المختلفة.",
    exp_khibra_li2: "تصميم النظم المحاسبية المستندية والدفترية باستخدام الكمبيوتر.",
    exp_khibra_li3: "اعداد التسويات الجردية والحسابات الختامية والقوائم المالية المختلفة طبقا للمعايير المحاسبية المصرية.",
    exp_khibra_li4: "إنجاز المهام بكفاءة وفاعلية عالية بالتعاون مع الزملاء والالتزام بحسن السير والسلوك والمهنية العالية.",

    // 3. MCV Academy
    exp_3_date: "ديسمبر 2024 - أكتوبر 2025 (11 شهراً - متزامن)",
    exp_3_title: "مسؤول أكاديمي — أكاديمية MCV، الصالحية الجديدة، مصر",
    exp_3_li1: "إدخال الحضور والدرجات بدقة باستخدام برنامج Excel وأنظمة الإدارة الرقمية.",
    exp_3_li2: "إدارة سجلات الطلاب وإعداد تقارير الأداء والحضور للإدارة العليا.",
    exp_3_li3: "تطوير نظام أرشفة أكاديمي منظم، مما قلل وقت الاسترجاع بنسبة 30%.",
    exp_3_li4: "إعداد الامتحانات، ومراقبة أداء الطلاب، وإجراء استطلاعات الرضا.",
    exp_3_li5: "تقييم أداء المحاضرين وتقديم التوصيات للإدارة.",
    exp_3_li6: "تنسيق الجداول الزمنية لمنع تعارض الفصول والمحاضرين.",
    exp_3_li7: "اقتراح وتطبيق حلول رقمية لتقليل الأعمال الورقية وتحسين سير العمل.",
    exp_3_li8: "إعداد التقارير الأسبوعية الأكاديمية وتقارير الحضور للإدارة العليا.",
    exp_3_li9: "تدريب الموظفين الجدد على إعداد التقارير باستخدام Excel وإدارة السجلات الرقمية.",

    // 4. Military Service
    exp_4_date: "2024 (سنة كاملة)",
    exp_4_title: "الخدمة العسكرية — جندي حاسب آلي، مصر",
    exp_4_li1: "تنفيذ المهام الإدارية باستخدام Microsoft Office بكفاءة.",
    exp_4_li2: "إعداد وتنظيم التقارير والوثائق بدقة عالية.",
    exp_4_li3: "العمل بفاعلية تحت الضغط في بيئة منظمة وانضباطية.",
    exp_4_li4: "تطوير مهارات العمل الجماعي، التواصل، والانضباط.",
    exp_4_li5: "المساعدة في إعداد وصيانة أنظمة تكنولوجيا المعلومات للعمليات الإدارية.",

    // 5. Kriazi
    exp_5_date: "دوام جزئي",
    exp_5_title: "مشرف بدوام جزئي — شركة كريازي، مصر",
    exp_5_li1: "الإشراف على العمليات اليومية لضمان إنجاز المهام بكفاءة.",
    exp_5_li2: "تنسيق أنشطة العمال لتحقيق الأهداف اليومية.",
    exp_5_li3: "إدارة المشكلات التشغيلية والإبلاغ عن الأداء للإدارة.",
    exp_5_li4: "تحسين كفاءة سير العمل وتنسيق الموظفين من خلال إدخال قوائم المراجعة اليومية.",

    // 6. Local Shop
    exp_6_date: "خبرة تقنية وعملية",
    exp_6_title: "فني مبيعات وحاسب آلي — محل حاسبات محلي، مصر",
    exp_6_li1: "بيع أجهزة الكمبيوتر والملحقات مع تقديم الاستشارات الفنية.",
    exp_6_li2: "صيانة وإصلاح الأجهزة والبرمجيات بكفاءة.",
    exp_6_li3: "تعزيز خدمة العملاء ومهارات التواصل التقني.",
    exp_6_li4: "تقديم التدريب للعملاء على استخدام البرامج والأجهزة.",

    // Skills
    sk_title: "المهارات",
    sk_h1: "المحاسبة والمالية",
    sk_h2: "خدمة العملاء والخدمات المصرفية",
    sk_h3: "العمليات الإدارية",
    sk_h4: "المهارات الرقمية والبرمجية",
    sk_s1: "المحاسبة العامة والمعاملات المالية",
    sk_s2: "قيود اليومية والدورة المحاسبية",
    sk_s3: "حسابات الدائنين والمدينين",
    sk_s4: "التسويات البنكية وتسوية النقدية",
    sk_s5: "إدارة النقدية والمصروفات",
    sk_s6: "إعداد الرواتب ومدفوعات الموظفين",
    sk_s7: "سجلات المخزون والتسويات",
    sk_s8: "التقارير المالية وتحليل البيانات",
    sk_s9: "قائمة الدخل، الميزانية العمومية التدفقات النقدية",
    sk_s10: "التوثيق المالي حفظ السجلات",
    sk_s11: "خدمة العملاء المصرفية ودعم الحسابات",
    sk_s12: "المعاملات المصرفية والخدمات الرقمية",
    sk_s13: "إدارة علاقات العملاء (CRM)",
    sk_s14: "التعامل مع استفسارات وشكاوى العملاء",
    sk_s15: "التواصل الهاتفى الاحترافي",
    sk_s16: "حل المشكلات وتسوية النزاعات",
    sk_s17: "متابعة طلبات العملاء وتصعيدها",
    sk_s18: "التوثيق الدقيق لتفاعلات العملاء",
    sk_s19: "العمليات الإدارية والدعم المكتبى",
    sk_s20: "التوثيق، الترتيب والأرشفة",
    sk_s21: "إدخال وإدارة البيانات",
    sk_s22: "إعداد التقارير والمتابعة باستخدام Excel",
    sk_s23: "السجلات الإدارية وسجلات الحضور",
    sk_s24: "الجدولة، التنسيق والمتابعة",
    sk_s25: "الرقابة على المستندات وتنظيم السجلات",
    sk_s26: "دعم الامتحانات، الاستطلاعات والأنشطة الإدارية",
    sk_s27: "Microsoft Excel - متقدم",
    sk_s28: "Microsoft Word",
    sk_s29: "Microsoft PowerPoint",
    sk_s30: "Microsoft Outlook",
    sk_s31: "Microsoft Access",
    sk_s32: "Google Workspace - Drive, Docs & Sheets",
    sk_s33: "Oracle Financial",
    sk_s34: "Odoo ERP",

    // Courses & Certs
    crs_title: "الشهادات والدورات",
    crs_1_t: "دورة اللغة الإنجليزية (التحضير لاختبار TOEFL)",
    crs_1_d: "معهد اللغات للقوات المسلحة (AFIL)، كوبري القبة، مصر | 2026 - حتى الآن (متزامن)",
    crs_2_t: "شهادة أساسيات التحول الرقمي (FDTC)",
    crs_2_d: "جامعة طنطا | أغسطس 2025 - يوليو 2030",
    crs_3_t: "دورة العمليات المصرفية عبر الإنترنت",
    crs_3_d: "المجلس الأعلى للجامعات / بنك مصر | 2025",
    crs_4_t: "شهادة المحاسب المالي المحترف (PFA)",
    crs_4_d: "أكاديمية هيفين (Heaven Academy) | أغسطس 2026 - أكتوبر 2026 (متزامن)",
    crs_5_t: "تدريب نظام SAP ERP",
    crs_5_d: "سبتمبر 2026",
    crs_6_t: "تدريب نظام Oracle Financial و Odoo ERP",
    crs_6_d: "أكاديمية هيفين (Heaven Academy) | أكتوبر 2026 (متزامن)",
    crs_7_t: "شهادة خبرة خدمة عملاء مصرفية (مشروع بنك التعمير والإسكان)",
    crs_7_d: "شركة تفاصيل بي بي او الدولية | 30 يوليو 2025 - 1 أغسطس 2026 (سنة كاملة - متزامن)",
    crs_8_t: "تدريب متقدم على Microsoft Excel",
    crs_8_d: "سبتمبر 2026",
    crs_9_t: "شهادة خبرة محاسبية وضريبية",
    crs_9_d: "مكتب بيت الخبراء للاستشارات المالية والضريبية (محاسب قانوني محمد كرم) | 1 أكتوبر 2024 - 30 سبتمبر 2026 (سنتان - متزامن)",
    crs_10_t: "تدريب Microsoft Outlook",
    crs_10_d: "سبتمبر 2026",
    crs_11_t: "تدريب Google Workspace & Google Drive",
    crs_11_d: "2024",
    crs_12_t: "شهادة ICDL",
    crs_12_d: "2024",

    // Documents
    doc_title: "معرض الشهادات والمستندات",
    doc_1_t: "ماجستير إدارة الأعمال (MBA)",
    doc_1_d: "جامعة طنطا - تمويل واستثمار",
    doc_2_t: "بكالوريوس نظم معلومات (BIS)",
    doc_2_d: "المعهد العالي - بتقدير ممتاز",

    doc_tafaseel_t: "شهادة خبرة خدمة عملاء — شركة تفاصيل بي بي او الدولية",
    doc_tafaseel_d: "ممثل خدمة عملاء كول سنتر | مشروع بنك التعمير والإسكان (30 يوليو 2025 - 1 أغسطس 2026 - متزامن)",

    doc_bayt_khibra_t: "شهادة خبرة محاسبية وضريبية — مكتب بيت الخبراء",
    doc_bayt_khibra_d: "محاسب قانوني محمد كرم عبد المحسن (1 أكتوبر 2024 - 30 سبتمبر 2026 - متزامن)",

    doc_pfa_heaven_t: "شهادة المحاسب المالي المحترف (PFA) — أكاديمية هيفين",
    doc_pfa_heaven_d: "دورة محاسبية معتمدة (أغسطس 2026 - أكتوبر 2026 - متزامن)",

    doc_oracle_odoo_heaven_t: "شهادة Oracle Financial و Odoo ERP — أكاديمية هيفين",
    doc_oracle_odoo_heaven_d: "تدريب أنظمة ERP المالية (أكتوبر 2026 - متزامن)",

    doc_3_t: "شهادة التحول الرقمي (FDTC)",
    doc_3_d: "المجلس الأعلى للجامعات وجامعة طنطا",
    doc_4_t: "شهادة تدريب بنك مصر",
    doc_4_d: "التدريب الصيفي المصرفي المعتمد",
    doc_5_t: "عضوية نقابة التجاريين",
    doc_5_d: "شعبة تنظيم وإدارة",
    doc_6_t: "بطاقة باحث دكتوراه (DBA)",
    doc_6_d: "جامعة طنطا - كلية التجارة",
    doc_7_t: "شهادة دورة SQL",
    doc_7_d: "Programming Hub - أساسيات قواعد البيانات",
    doc_8_t: "شهادة تأدية الخدمة العسكرية",
    doc_8_d: "وزارة الدفاع - قطاع الشرطة",
    doc_9_t: "شهادة دورة C++",
    doc_9_d: "Programming Hub - أساسيات البرمجة",
    btn_full: "عرض بالحجم الكامل",
    btn_download_doc: "تحميل المستند",

    // Languages
    lang_title: "اللغات",
    lang_1_t: "اللغة العربية",
    lang_1_d: "اللغة الأم",
    lang_2_t: "اللغة الإنجليزية",
    lang_2_d: "مستوى جيد (قيد الدراسة للتحضير لاختبار TOEFL)",

    // Contact
    cnt_title: "التواصل",
    cnt_head: "بيانات التواصل",
    cnt_p: "مستعد لمناقشة الفرص الوظيفية والشراكات المهنية.",
    cnt_addr: "ميت غمر، الدقهلية | شبرا الخيمة، القليوبية، مصر",
    cnt_linkedin: "حساب لينكد إن (LinkedIn)",
    cnt_wuzzuf: "حساب وظف (Wuzzuf)",
    cnt_whatsapp: "+20 127 379 1926 (واتساب)",
    f_name: "الاسم بالكامل",
    f_name_ph: "أدخل اسمك بالكامل",
    f_mail: "البريد الإلكتروني",
    f_mail_ph: "example@email.com",
    f_sub: "الموضوع",
    f_sub_ph: "موضوع الرسالة",
    f_msg: "الرسالة",
    f_msg_ph: "اكتب رسالتك هنا...",
    f_btn: "إرسال الرسالة",
    form_success: "شكرًا لك! سيتم فتح بريدك الإلكتروني لإرسال تفاصيل الرسالة.",
    form_missing: "يرجى ملء جميع الحقول المطلوبة قبل الإرسال.",

    // Footer & Lightbox
    footer_rights: "جميع الحقوق محفوظة",
    modal_close: "إغلاق المعاينة"
  }
};
