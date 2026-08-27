import { JobOpening } from '../types/index.js';

export const jobOpeningsData: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Physics & Mathematics Teacher',
    department: 'Sciences & STEM',
    type: 'Full-time',
    deadline: 'October 30, 2026',
    requirements: [
      'Bachelor’s Degree in Science Education (Physics/Mathematics)',
      'Minimum 3 years teaching experience in REB curriculum',
      'Proven track record in national examination preparation',
      'Fluent communication in English; digital literacy competencies',
    ],
    description:
      'Responsible for delivering advanced physics and calculus instruction to S4–S6 science combinations, leading laboratory sessions, and mentoring student science competition teams.',
    status: 'Open',
  },
  {
    id: 'job-2',
    title: 'ICT & Digital Literacy Lab Instructor',
    department: 'ICT & Technology',
    type: 'Full-time',
    deadline: 'November 15, 2026',
    requirements: [
      'Degree or Advanced Diploma in Computer Science / Information Technology / Education',
      'Experience managing computer networks, hardware, and e-learning portals',
      'Ability to instruct students in Python, web foundations, and office productivity tools',
    ],
    description:
      'Oversees daily operations of our 50-station computer laboratory, maintains hardware systems, and teaches introductory programming and digital research.',
    status: 'Open',
  },
  {
    id: 'job-3',
    title: 'Literature in English & Debating Coach',
    department: 'Humanities & Languages',
    type: 'Full-time',
    deadline: 'October 25, 2026',
    requirements: [
      'Bachelor of Education in English Language & Literature',
      'Passionate educator with proven experience directing school debating societies or drama clubs',
      'Strong organizational, editorial, and student mentorship skills',
    ],
    description:
      'Teaches upper secondary literature, facilitates critical essay writing clinics, and trains the school varsity debate and public speaking team.',
    status: 'Open',
  },
];
