export interface AdmissionApplication {
  id: string;
  studentName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  gradeLevel: string;
  previousSchool: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  residentialAddress: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  submittedAt: string;
}

export interface ContactInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'resolved';
  submittedAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  featured?: boolean;
}

export interface SchoolEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
