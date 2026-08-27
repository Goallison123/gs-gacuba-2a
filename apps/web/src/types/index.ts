export type PageId =
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'student-life'
  | 'facilities'
  | 'leadership'
  | 'news'
  | 'events'
  | 'gallery'
  | 'careers'
  | 'faq'
  | 'contact';

export interface NavItem {
  label: string;
  page: PageId;
  description?: string;
  children?: { label: string; page: PageId; hash?: string; description?: string }[];
}

export interface AcademicProgram {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  curriculum: string[];
  careers: string[];
  badge: string;
  iconName: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  bio: string;
  imageUrl: string;
  email?: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Academic' | 'Sports' | 'Technology' | 'Community';
  description: string;
  features: string[];
  capacity: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: 'Academic' | 'Sports' | 'Campus' | 'Awards';
  summary: string;
  content: string;
  author: string;
  imageUrl: string;
  featured?: boolean;
}

export interface SchoolEventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Academic' | 'Sports' | 'Ceremony' | 'Parent-Teacher' | 'Community';
  description: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Sports' | 'Cultural' | 'Ceremonies';
  imageUrl: string;
  description: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Fees & Scholarships' | 'Campus Life';
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Contract' | 'Part-time';
  deadline: string;
  requirements: string[];
  description: string;
  status: 'Open' | 'Closed';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  relation: string; // e.g. "Parent of S3 Student", "Alumnus (Class of 2023)"
  avatarUrl?: string;
}
