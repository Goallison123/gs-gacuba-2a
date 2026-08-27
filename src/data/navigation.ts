import { NavItem } from '../types/index.js';

export const navigationLinks: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Academics', page: 'academics' },
  { label: 'Admissions', page: 'admissions' },
  { label: 'Student Life', page: 'student-life' },
  { label: 'Facilities', page: 'facilities' },
  { label: 'Leadership', page: 'leadership' },
  { label: 'News & Events', page: 'news' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Contact', page: 'contact' },
];

export const secondaryLinks = [
  { label: 'Careers', page: 'careers' as const },
  { label: 'FAQs', page: 'faq' as const },
  { label: 'Events Calendar', page: 'events' as const },
];
