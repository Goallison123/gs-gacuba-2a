import { AcademicProgram } from '../types/index.js';

export const academicProgramsData: AcademicProgram[] = [
  {
    id: 'olevel',
    title: 'Ordinary Level (S1 – S3)',
    level: 'Secondary Foundation',
    duration: '3 Academic Years',
    badge: 'Foundation Stream',
    iconName: 'BookOpen',
    description:
      'A holistic, competency-based secondary curriculum structured to build mastery in foundational sciences, humanities, mathematics, national languages, and digital technology skills.',
    curriculum: [
      'Mathematics & Physics Fundamentals',
      'Biology, Chemistry & Environmental Science',
      'English, French, Kinyarwanda & Swahili',
      'History, Citizenship & Geography',
      'Information & Communication Technology (ICT)',
      'Entrepreneurship & Financial Literacy',
    ],
    careers: [
      'Transition to Advanced Level STEM / Sciences',
      'Transition to Advanced Level Arts & Humanities',
      'Technical & Vocational Education (TVET)',
      'Junior Innovation & Leadership Programs',
    ],
  },
  {
    id: 'ms2',
    title: 'Advanced Level: Mathematics, Chemistry & Biology (MCB / MS2)',
    level: 'Upper Secondary Sciences',
    duration: '3 Academic Years',
    badge: 'Premier STEM Stream',
    iconName: 'Atom',
    description:
      'An intensive STEM combination tailored for aspiring physicians, pharmacists, biotechnologists, agricultural scientists, and health practitioners with rigorous laboratory hands-on training.',
    curriculum: [
      'Advanced Pure & Applied Mathematics',
      'Organic, Inorganic & Analytical Chemistry',
      'Cellular Biology, Genetics & Physiology',
      'Biochemistry & Experimental Science Practicals',
      'Scientific Research & Laboratory Methods',
      'Subsidiary Mathematics & General Studies',
    ],
    careers: [
      'Medicine, Surgery & Public Health',
      'Pharmacy & Biomedical Sciences',
      'Civil, Chemical & Agricultural Engineering',
      'Environmental Science & Biotechnology',
    ],
  },
  {
    id: 'arts',
    title: 'Advanced Level: Arts & Humanities (HEG / MEG)',
    level: 'Upper Secondary Humanities',
    duration: '3 Academic Years',
    badge: 'Leadership & Social Sciences',
    iconName: 'Compass',
    description:
      'A distinguished humanities combination focusing on History, Economics, Geography, and Literature to foster analytical rigor, policy acumen, and diplomatic and commercial leadership.',
    curriculum: [
      'Global & African History & Diplomacy',
      'Microeconomics, Macroeconomics & Development',
      'Physical & Human Economic Geography',
      'Literature in English & Critical Discourse',
      'Entrepreneurship & Business Innovation',
      'Ethics, Law & Public Policy Seminars',
    ],
    careers: [
      'Law, International Relations & Diplomacy',
      'Economics, Banking & Financial Analysis',
      'Urban Planning & Environmental Policy',
      'Journalism, Media & Communications',
    ],
  },
];
