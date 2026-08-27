import { NewsItem, SchoolEventItem } from '../types/index.js';

export const newsArticlesData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'GS Gacuba Excels in 2025 National Examinations With 98.6% Pass Rate',
    slug: 'gs-gacuba-excels-in-2025-national-examinations',
    date: 'February 15, 2026',
    category: 'Academic',
    summary: 'Our O-Level and A-Level candidates achieved record-breaking distinctions across STEM, Languages, and Humanities combinations.',
    content: `Groupe Scolaire Gacuba II A celebrates another historic milestone as the National Examination and School Inspection Authority (NESA) releases the 2025 examination results.

Our senior candidates recorded a stellar 98.6% transition rate into higher education, with remarkable top marks in Mathematics, Chemistry, Biology, and Economics. Headteacher Murenzi Emmanuel commended the learners for their relentless discipline and the faculty for their dedicated weekend tutoring programs.

"This remarkable achievement is a testament to our institution's culture of rigorous academic dedication, teacher mentorship, and parental support," remarked the Principal. Special commendation ceremonies will be held this coming month to honor top performers with merit scholarships.`,
    author: 'Office of the Principal',
    imageUrl: '/assets/c1786.png',
    featured: true,
  },
  {
    id: 'news-2',
    title: 'Commissioning of 50-Seat High Speed Digital Computer Laboratory',
    slug: 'commissioning-of-high-speed-digital-computer-lab',
    date: 'January 28, 2026',
    category: 'Campus',
    summary: 'GS Gacuba II A officially opens its renovated ICT hub equipped with fiber broadband and digital science simulations.',
    content: `In partnership with district educational authorities and community benefactors, GS Gacuba II A has officially commissioned a modernized ICT center.

The lab features 50 modern workstations, high-speed fiber connectivity, and specialized curriculum-aligned software for mathematics visualizations and physics experiments. The facility will be utilized by both lower secondary and upper secondary science classes, enabling students to gain vital coding and digital research competencies.`,
    author: 'ICT Department',
    imageUrl: '/assets/046d0.png',
    featured: false,
  },
  {
    id: 'news-3',
    title: 'Volleyball & Athletics Teams Crowned Rubavu Inter-School Champions',
    slug: 'volleyball-athletics-teams-crowned-champions',
    date: 'January 12, 2026',
    category: 'Sports',
    summary: 'Our student athletes brought home double championship trophies following an exhilarating inter-school tournament weekend.',
    content: `The GS Gacuba athletic contingent showcased extraordinary stamina, teamwork, and sportsmanship at the 2026 Rubavu District Secondary Schools Sports Gala.

Our girls' volleyball team triumphed in the finals with a 3-1 set victory, while the boys' 4x100m relay and long-distance runners captured gold and silver medals respectively. Coach Kwizera Aimable praised the students for balancing sports excellence with strict study schedules.`,
    author: 'Sports Department',
    imageUrl: '/assets/ba963.png',
    featured: false,
  },
  {
    id: 'news-4',
    title: 'Annual Science & Environmental Innovation Fair Showcases Student Inventions',
    slug: 'annual-science-environmental-innovation-fair',
    date: 'December 18, 2025',
    category: 'Awards',
    summary: 'Student teams present solar irrigation prototypes and biodegradable packaging concepts at the school amphitheatre.',
    content: `Over 45 innovative student research projects were exhibited during our 2025 Science & Innovation Expo. Judges from local engineering faculties awarded top honors to S5 MS2 students who created a solar-powered soil moisture monitoring device designed for smallholder farmers in the Western Province.`,
    author: 'Science Club',
    imageUrl: '/assets/720a5.png',
    featured: false,
  },
];

export const schoolEventsData: SchoolEventItem[] = [
  {
    id: 'evt-1',
    title: 'Term 2 Academic Consultation & Parents Conference',
    date: 'Sept 18, 2026',
    time: '08:00 AM – 03:30 PM',
    location: 'Main Assembly Hall & Classrooms',
    category: 'Parent-Teacher',
    description: 'One-on-one progress review meetings between subject educators, class mentors, and parents/guardians.',
    highlight: true,
  },
  {
    id: 'evt-2',
    title: 'Annual Inter-House Sports Gala & Athletics Day',
    date: 'Oct 10, 2026',
    time: '09:00 AM – 05:00 PM',
    location: 'School Athletics Grounds',
    category: 'Sports',
    description: 'Track and field events, football finals, volleyball showdowns, and traditional tug-of-war competitions.',
    highlight: false,
  },
  {
    id: 'evt-3',
    title: 'National Science Fair & Robotics Exhibition',
    date: 'Oct 24, 2026',
    time: '09:30 AM – 04:00 PM',
    location: 'Science Complex',
    category: 'Academic',
    description: 'Demonstrations by student STEM teams featuring robotics, chemistry reactions, and ecological solutions.',
    highlight: false,
  },
  {
    id: 'evt-4',
    title: 'Itorero Cultural Heritage & Traditional Dance Gala',
    date: 'Nov 14, 2026',
    time: '01:30 PM – 06:00 PM',
    location: 'School Cultural Amphitheatre',
    category: 'Ceremony',
    description: 'Celebration of Rwandan cultural values, poetry (Umusizi), drumming, and traditional dance choreography.',
    highlight: true,
  },
  {
    id: 'evt-5',
    title: 'Graduation & Prize Giving Day for Class of 2026',
    date: 'Dec 05, 2026',
    time: '10:00 AM – 03:00 PM',
    location: 'Main Assembly Grounds',
    category: 'Ceremony',
    description: 'Honoring completing S3 and S6 candidates with merit certificates, trophies, and alumni welcomes.',
    highlight: false,
  },
];
