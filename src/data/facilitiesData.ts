import { Facility } from '../types/index.js';

export const facilitiesData: Facility[] = [
  {
    id: 'fac-1',
    title: 'Advanced Science & Physics/Chemistry Laboratories',
    category: 'Academic',
    description:
      'Fully equipped practical stations for chemistry, physics, and biological experiments, featuring modern fume hoods, precision measuring instruments, and digital microscopes.',
    capacity: '60 Students per session',
    features: ['High-precision optical microscopes', 'Chemical reagent safety lockers', 'Individual student gas & water ports', 'Interactive digital projector screen'],
    imageUrl: '/assets/046d0.png',
  },
  {
    id: 'fac-2',
    title: 'Modern ICT & Computer Learning Center',
    category: 'Technology',
    description:
      'High-speed networked computer lab enabling coding, research, digital literacy, and e-learning platforms in alignment with Rwanda’s Vision 2050 digital skills mandate.',
    capacity: '50 Connected Workstations',
    features: ['Fiber-optic high-speed internet', 'Modern Core i7 workstations', 'Smart digital whiteboard', 'Curriculum software & offline encyclopedias'],
    imageUrl: '/assets/c1786.png',
  },
  {
    id: 'fac-3',
    title: 'School Library & Digital Resource Center',
    category: 'Academic',
    description:
      'A quiet, spacious sanctuary housing over 10,000 academic titles, national syllabus textbooks, reference encyclopedias, literature, and digital tablets.',
    capacity: '120 Readers',
    features: ['Quiet study carrels', 'E-reader tablet station', 'Comprehensive national examination archive', 'Fiction & international literature stacks'],
    imageUrl: '/assets/e0d1a.png',
  },
  {
    id: 'fac-4',
    title: 'Multi-Sport Athletics Fields & Courts',
    category: 'Sports',
    description:
      'Standardized grass football pitch, all-weather volleyball court, and basketball grounds hosting inter-school championships and physical education lessons.',
    capacity: '800 Spectators',
    features: ['Regulation football field', 'Two tournament-grade volleyball courts', 'Changing rooms and athletic gear store', 'Surrounding running track'],
    imageUrl: '/assets/ba963.png',
  },
  {
    id: 'fac-5',
    title: 'Main Assembly Hall & Cultural Amphitheatre',
    category: 'Community',
    description:
      'Multipurpose auditorium for school-wide assemblies, parent-teacher conferences, national examinations, musical concerts, and Itorero cultural performances.',
    capacity: '650 Seated Guests',
    features: ['High-clarity acoustic sound system', 'Elevated performance stage', 'Ventilated natural lighting architecture', 'Audio-visual presentation equipment'],
    imageUrl: '/assets/0b754.png',
  },
];
