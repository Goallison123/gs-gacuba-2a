export interface SearchItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'contact' | 'team' | 'academic' | 'admission' | 'facility' | 'student-life' | 'news' | 'gallery' | 'faq' | 'action';
  categoryLabel: string;
  description: string;
  keywords: string[];
  page?: string;
  actionType?: 'navigate' | 'openAdmission' | 'openContact' | 'openProfile' | 'tel' | 'mailto' | 'copy';
  actionPayload?: string;
  badge?: string;
}

export const searchDatabase: SearchItem[] = [
  // --- Quick Actions ---
  {
    id: 'act-admission',
    title: 'Apply for Admission (2026 Academic Year)',
    subtitle: 'Digital Enrollment Form',
    category: 'action',
    categoryLabel: 'Action',
    description: 'Submit an online application for Ordinary Level (S1-S3), MPC/MS2 Sciences, or HGL Arts.',
    keywords: ['apply', 'admission', 'enroll', 'enrollment', 'register', 'application', 'form', 'join', 'intake', 'new student', 'registration'],
    actionType: 'openAdmission',
    badge: 'Fast Apply',
  },
  {
    id: 'act-contact',
    title: 'Contact Administration / Ask a Question',
    subtitle: 'Inquiry & Message Portal',
    category: 'action',
    categoryLabel: 'Action',
    description: 'Send a direct inquiry to the school leadership or admissions office.',
    keywords: ['ask', 'question', 'contact', 'message', 'inquiry', 'help', 'support', 'office', 'talk'],
    actionType: 'openContact',
    badge: 'Inquiry',
  },
  {
    id: 'act-portal',
    title: 'Student & Parent Portal Access',
    subtitle: 'Results, Attendance & Records',
    category: 'action',
    categoryLabel: 'Action',
    description: 'Check academic performance, term reports, application status, and announcements.',
    keywords: ['portal', 'login', 'student portal', 'parent portal', 'marks', 'results', 'grades', 'report card', 'account', 'profile'],
    actionType: 'openProfile',
    badge: 'Portal',
  },

  // --- Contacts & Location ---
  {
    id: 'cnt-phone-main',
    title: 'Official School Phone Line: +250 788 642 708',
    subtitle: 'Direct Administration Line',
    category: 'contact',
    categoryLabel: 'Contact',
    description: 'Call GS Gacuba II A front desk and administration for inquiries and admissions.',
    keywords: ['phone', 'call', 'telephone', 'mobile', 'contact', 'reach', 'number', 'hotline', '+250 788 642 708', '+250788642708', '0788642708'],
    actionType: 'tel',
    actionPayload: '+250788642708',
    badge: '+250 788 642 708',
  },
  {
    id: 'cnt-phone-alt',
    title: 'Admissions Hotline: +250 788 000 000',
    subtitle: 'Student Admissions & Registration',
    category: 'contact',
    categoryLabel: 'Contact',
    description: 'Direct phone line for enrollment inquiries and transfer applications.',
    keywords: ['phone', 'admissions phone', 'call school', 'contact number', 'hotline'],
    actionType: 'tel',
    actionPayload: '+250788000000',
    badge: '+250 788 000 000',
  },
  {
    id: 'cnt-email',
    title: 'Official Email: info@gsgacuba2a.rw',
    subtitle: 'Administration & Admissions Inbox',
    category: 'contact',
    categoryLabel: 'Contact',
    description: 'Send electronic mail regarding official transcripts, partnerships, or enrollment.',
    keywords: ['email', 'mail', 'inbox', 'write', 'letter', 'info@gsgacuba2a.rw', 'send email'],
    actionType: 'mailto',
    actionPayload: 'info@gsgacuba2a.rw',
    badge: 'Email',
  },
  {
    id: 'cnt-location',
    title: 'Campus Physical Location & Directions',
    subtitle: 'Rubavu District, Western Province, Rwanda',
    category: 'contact',
    categoryLabel: 'Location',
    description: 'Located in Gisenyi Sector, Rubavu District, Western Province near Lake Kivu scenic zone.',
    keywords: ['location', 'where', 'address', 'rubavu', 'gisenyi', 'western province', 'rwanda', 'lake kivu', 'map', 'directions', 'place', 'visit'],
    page: 'about',
    badge: 'Rubavu, Rwanda',
  },
  {
    id: 'cnt-hours',
    title: 'Working Hours & Office Schedule',
    subtitle: 'Monday to Friday: 7:30 AM – 5:00 PM CAT',
    category: 'contact',
    categoryLabel: 'Contact',
    description: 'Administrative offices and reception are open on weekdays. Weekend visits by appointment.',
    keywords: ['hours', 'working hours', 'opening time', 'closing time', 'schedule', 'time', 'open', 'office hours', 'weekdays'],
    page: 'about',
    badge: '7:30 AM - 5:00 PM',
  },

  // --- Leadership & Team ---
  {
    id: 'team-headmaster-ernest',
    title: 'HABUMUGISHA Ernest — Headmaster',
    subtitle: 'School Principal & Executive Leadership',
    category: 'team',
    categoryLabel: 'Leadership',
    description: 'Head of GS Gacuba II A, overseeing pedagogical strategy, institutional discipline, and excellence.',
    keywords: ['headmaster', 'ernest', 'habumugisha', 'principal', 'headteacher', 'director', 'leader', 'boss', 'administration', 'leadership', 'team'],
    page: 'about',
    badge: 'Headmaster',
  },
  {
    id: 'team-headmaster-murenzi',
    title: 'Murenzi Emmanuel — Principal & Academic Leader',
    subtitle: 'Executive Administration',
    category: 'team',
    categoryLabel: 'Leadership',
    description: 'Over 18 years of visionary leadership in secondary education administration across Rwanda.',
    keywords: ['murenzi', 'emmanuel', 'principal', 'leadership', 'headteacher', 'administrator', 'executive'],
    page: 'about',
    badge: 'Principal',
  },
  {
    id: 'team-uwimana-claire',
    title: 'Uwimana Claire — Deputy Headteacher (Academics)',
    subtitle: 'Academic Affairs & Curriculum',
    category: 'team',
    categoryLabel: 'Leadership',
    description: 'Dedicated to pedagogical innovation, teacher development, national exam performance, and STEM evaluation.',
    keywords: ['claire', 'uwimana', 'deputy', 'academics', 'curriculum', 'dean of studies', 'studies', 'teachers'],
    page: 'about',
    badge: 'Academic Dean',
  },
  {
    id: 'team-habimana-jean',
    title: 'Habimana Jean de Dieu — Deputy Headteacher (Discipline)',
    subtitle: 'Student Welfare & Discipline',
    category: 'team',
    categoryLabel: 'Leadership',
    description: 'Focuses on holistic student character formation, pastoral care, guidance counseling, and campus safety.',
    keywords: ['habimana', 'jean de dieu', 'discipline', 'welfare', 'student affairs', 'pastoral care', 'counseling', 'rules'],
    page: 'about',
    badge: 'Discipline & Welfare',
  },
  {
    id: 'team-dr-patrick',
    title: 'Dr. Nsengiyumva Patrick — Head of Sciences & STEM',
    subtitle: 'Science & ICT Department',
    category: 'team',
    categoryLabel: 'Leadership',
    description: 'Ph.D. in Chemistry, leader in laboratory pedagogy, modern science curriculum, and Science Fair mentorship.',
    keywords: ['patrick', 'nsengiyumva', 'science head', 'stem', 'physics teacher', 'chemistry teacher', 'lab director'],
    page: 'about',
    badge: 'STEM Head',
  },
  {
    id: 'team-chantal',
    title: 'Mukamugema Chantal — Head of Arts & Humanities',
    subtitle: 'Humanities & Languages',
    category: 'team',
    categoryLabel: 'Leadership',
    description: 'M.A. in Literature, championing debating clubs, linguistic proficiency in English/French, and cultural arts.',
    keywords: ['chantal', 'mukamugema', 'arts head', 'humanities', 'literature', 'languages', 'english', 'french', 'history'],
    page: 'about',
    badge: 'Arts Head',
  },
  {
    id: 'team-kwizera',
    title: 'Kwizera Aimable — Director of Sports & Co-curricular',
    subtitle: 'Athletics & Physical Education',
    category: 'team',
    categoryLabel: 'Leadership',
    description: 'Oversees football tournaments, volleyball championship programs, and school club federations.',
    keywords: ['kwizera', 'aimable', 'sports director', 'coach', 'athletics', 'football coach', 'clubs'],
    page: 'about',
    badge: 'Sports Director',
  },

  // --- Academic Streams & Programs ---
  {
    id: 'acad-olevel',
    title: 'Ordinary Level (O-Level / S1, S2, S3)',
    subtitle: 'Foundation Secondary Education',
    category: 'academic',
    categoryLabel: 'Academics',
    description: 'Comprehensive 3-year foundational curriculum covering Mathematics, Sciences, Languages, and Social Studies leading to national exams.',
    keywords: ['ordinary level', 'o-level', 'olevel', 's1', 's2', 's3', 'tronc commun', 'foundation', 'secondary', 'curriculum', 'reb'],
    page: 'home',
    badge: '3-Year Program',
  },
  {
    id: 'acad-mpc',
    title: 'MPC / MS2 Stream (Mathematics, Physics, Computer Science)',
    subtitle: 'Advanced Level Sciences',
    category: 'academic',
    categoryLabel: 'Academics',
    description: 'Intensive scientific training in calculus, physical principles, algorithm design, software programming, and laboratory practicals.',
    keywords: ['mpc', 'ms2', 'maths physics computer', 'mathematics', 'physics', 'computer science', 'coding', 'programming', 'stem', 'science stream', 's4', 's5', 's6'],
    page: 'home',
    badge: 'Science & Tech',
  },
  {
    id: 'acad-hgl',
    title: 'HGL Stream (History, Geography, Literature / Arts & Humanities)',
    subtitle: 'Advanced Level Arts & Humanities',
    category: 'academic',
    categoryLabel: 'Academics',
    description: 'Fosters critical thinking, diplomatic studies, economic geography, linguistics, law foundation, and creative literature.',
    keywords: ['hgl', 'history', 'geography', 'literature', 'arts', 'humanities', 'languages', 'law', 'diplomacy', 'social sciences', 'arts stream'],
    page: 'home',
    badge: 'Arts & Humanities',
  },
  {
    id: 'acad-curriculum',
    title: 'Competence-Based Curriculum (CBC) & National Exams',
    subtitle: 'Rwanda Education Board (REB) Standards',
    category: 'academic',
    categoryLabel: 'Academics',
    description: 'Strict adherence to national REB standards with continuous assessments, mock examinations, and practical skill development.',
    keywords: ['cbc', 'reb', 'curriculum', 'national exams', 'nesa', 'examination', 'grading', 'marks', 'academic standards'],
    page: 'about',
    badge: 'REB Accredited',
  },

  // --- Admissions & Enrollment ---
  {
    id: 'adm-requirements',
    title: 'Admissions Requirements & Application Checklist',
    subtitle: 'Documentation & Eligibility',
    category: 'admission',
    categoryLabel: 'Admissions',
    description: 'Required: Past academic report cards, Primary/O-Level National Examination results slip, Birth Certificate copy, and 2 passport photos.',
    keywords: ['admission requirements', 'documents needed', 'how to apply', 'checklist', 'certificate', 'report card', 'photos', 'criteria', 'eligibility'],
    actionType: 'openAdmission',
    badge: 'Requirements',
  },
  {
    id: 'adm-fees',
    title: 'School Fees, Tuition Structure & Payment Info',
    subtitle: 'Financial Transparency',
    category: 'admission',
    categoryLabel: 'Admissions',
    description: 'Affordable community tuition structure with transparent term installments and scholastic material breakdowns.',
    keywords: ['fees', 'tuition', 'cost', 'payment', 'price', 'how much', 'term fees', 'bank account', 'money', 'scholarship', 'assistance'],
    actionType: 'openContact',
    badge: 'Tuition Info',
  },

  // --- Campus Facilities ---
  {
    id: 'fac-ict-lab',
    title: 'Modern ICT & Computer Learning Center',
    subtitle: '50 Connected Workstations & Fiber Internet',
    category: 'facility',
    categoryLabel: 'Facilities',
    description: 'High-speed networked computer lab enabling coding, research, digital literacy, and e-learning platforms.',
    keywords: ['ict', 'computer lab', 'computers', 'internet', 'wifi', 'coding lab', 'technology', 'workstations', 'screens'],
    page: 'about',
    badge: '50 Workstations',
  },
  {
    id: 'fac-science-labs',
    title: 'Advanced Science Physics & Chemistry Laboratories',
    subtitle: 'Modern Practical Experiment Stations',
    category: 'facility',
    categoryLabel: 'Facilities',
    description: 'Fully equipped practical stations for chemistry, physics, and biology experiments with digital microscopes and safety lockers.',
    keywords: ['science lab', 'laboratory', 'chemistry lab', 'physics lab', 'biology lab', 'microscopes', 'experiments', 'practical stations'],
    page: 'about',
    badge: '60 Stations',
  },
  {
    id: 'fac-library',
    title: 'School Library & Digital Resource Center',
    subtitle: 'Over 10,000 Academic Books & Stacks',
    category: 'facility',
    categoryLabel: 'Facilities',
    description: 'A quiet, spacious sanctuary housing national syllabus textbooks, reference encyclopedias, literature, and study carrels.',
    keywords: ['library', 'books', 'reading', 'study room', 'quiet area', 'novels', 'encyclopedias', 'past papers', 'textbooks'],
    page: 'about',
    badge: '120 Readers',
  },
  {
    id: 'fac-sports',
    title: 'Multi-Sport Athletics Fields & Courts',
    subtitle: 'Football Pitch, Basketball & Volleyball Courts',
    category: 'facility',
    categoryLabel: 'Facilities',
    description: 'Standardized grass football pitch, all-weather volleyball court, and basketball grounds hosting championships.',
    keywords: ['sports', 'football pitch', 'soccer', 'basketball court', 'volleyball court', 'playground', 'athletics track', 'field'],
    page: 'gallery',
    badge: 'Sports Center',
  },
  {
    id: 'fac-hall',
    title: 'Main Assembly Hall & Cultural Amphitheatre',
    subtitle: '650 Seated Guest Capacity',
    category: 'facility',
    categoryLabel: 'Facilities',
    description: 'Multipurpose auditorium for school-wide assemblies, parent-teacher conferences, concerts, and cultural performances.',
    keywords: ['assembly hall', 'auditorium', 'theatre', 'hall', 'ceremony room', 'meeting room', 'stage'],
    page: 'about',
    badge: '650 Seats',
  },

  // --- Student Life & Co-curricular ---
  {
    id: 'life-itorero',
    title: 'Cultural Troupe & Rwandan Traditional Dance (Itorero)',
    subtitle: 'Cultural Heritage & Arts',
    category: 'student-life',
    categoryLabel: 'Student Life',
    description: 'Award-winning cultural dance troupe promoting Rwandan values, traditional drumming, and national arts celebrations.',
    keywords: ['itorero', 'dance', 'traditional dance', 'cultural troupe', 'culture', 'drumming', 'rwanda heritage', 'music', 'clubs'],
    page: 'gallery',
    badge: 'Cultural Troupe',
  },
  {
    id: 'life-debate',
    title: 'Debate, Public Speaking & Model UN Club',
    subtitle: 'Linguistic & Critical Thinking',
    category: 'student-life',
    categoryLabel: 'Student Life',
    description: 'Weekly parliamentary debates in English and French, regional inter-school competitions, and leadership forums.',
    keywords: ['debate', 'public speaking', 'model un', 'speech', 'languages', 'english club', 'french club'],
    page: 'gallery',
    badge: 'Debate Club',
  },
  {
    id: 'life-robotics',
    title: 'Robotics, Coding & Innovation Hub',
    subtitle: 'Tech & Hands-On Engineering',
    category: 'student-life',
    categoryLabel: 'Student Life',
    description: 'Student innovators building micro-controllers, software utilities, web projects, and participating in national hackathons.',
    keywords: ['robotics', 'coding club', 'programming', 'hackathon', 'innovation', 'software', 'technology club', 'stem club'],
    page: 'gallery',
    badge: 'Robotics & Code',
  },

  // --- Photo Gallery & Campus Life ---
  {
    id: 'gal-campus-views',
    title: 'Campus Views & Classroom Photos',
    subtitle: 'Visual Tour Collection',
    category: 'gallery',
    categoryLabel: 'Gallery',
    description: 'Browse high-resolution photographs of our Rubavu campus, learning rooms, and scenic landscapes.',
    keywords: ['photos', 'gallery', 'pictures', 'images', 'campus photos', 'classrooms', 'visual tour', 'look at school'],
    page: 'gallery',
    badge: 'Photo Gallery',
  },
  {
    id: 'gal-science-fair',
    title: 'Science Fair & Lab Demonstrations Gallery',
    subtitle: 'Student Practical Projects',
    category: 'gallery',
    categoryLabel: 'Gallery',
    description: 'Visual highlights of student laboratory chemistry experiments, physics demonstrations, and innovations.',
    keywords: ['science fair photos', 'lab pictures', 'experiments gallery', 'student photos'],
    page: 'gallery',
    badge: 'Photo Gallery',
  },

  // --- FAQs ---
  {
    id: 'faq-boarding',
    title: 'Is GS Gacuba II A Day School or Boarding School?',
    subtitle: 'School Operation Model',
    category: 'faq',
    categoryLabel: 'FAQ',
    description: 'GS Gacuba II A is primarily a modern day school with supervised evening study sessions and nutritious lunch catering.',
    keywords: ['boarding', 'day school', 'hostel', 'sleep at school', 'accommodation', 'lunch', 'canteen', 'evening study'],
    actionType: 'openContact',
    badge: 'FAQ',
  },
  {
    id: 'faq-uniform',
    title: 'School Uniform Policy & Dress Code',
    subtitle: 'Discipline & Attire',
    category: 'faq',
    categoryLabel: 'FAQ',
    description: 'Official school uniforms (shirts, sweaters, trousers/skirts, and sports kits) are issued through the bursar office upon registration.',
    keywords: ['uniform', 'clothes', 'dress code', 'shoes', 'sweater', 'sports kit', 'wear'],
    actionType: 'openContact',
    badge: 'FAQ',
  },
  {
    id: 'faq-transfer',
    title: 'Can a student transfer mid-year from another school?',
    subtitle: 'Transfer Protocol',
    category: 'faq',
    categoryLabel: 'FAQ',
    description: 'Yes, mid-year transfers are evaluated based on availability of stream seats and official recommendation letters from the prior school.',
    keywords: ['transfer', 'switch school', 'mid-year', 'change school', 'moving', 'join later'],
    actionType: 'openAdmission',
    badge: 'FAQ',
  }
];

export function searchSchool(query: string): SearchItem[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];

  const terms = clean.split(/\s+/).filter(Boolean);

  return searchDatabase.filter((item) => {
    const titleMatch = item.title.toLowerCase();
    const subMatch = (item.subtitle || '').toLowerCase();
    const descMatch = item.description.toLowerCase();
    const catMatch = item.categoryLabel.toLowerCase();
    const keywords = item.keywords.map((k) => k.toLowerCase());

    // Matches if all search terms appear in title, subtitle, desc, category, or keywords
    return terms.every((term) =>
      titleMatch.includes(term) ||
      subMatch.includes(term) ||
      descMatch.includes(term) ||
      catMatch.includes(term) ||
      keywords.some((kw) => kw.includes(term))
    );
  });
}
