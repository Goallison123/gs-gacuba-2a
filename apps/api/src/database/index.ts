import { AdmissionApplication, ContactInquiry, NewsArticle, SchoolEvent } from '../types/index.js';

class InMemoryDatabase {
  private admissions: AdmissionApplication[] = [];
  private inquiries: ContactInquiry[] = [];
  private news: NewsArticle[] = [
    {
      id: 'news-1',
      title: 'GS Gacuba Excels in 2025 National Examinations',
      slug: 'gs-gacuba-excels-in-2025-national-examinations',
      summary: 'Our students achieved an outstanding 98% pass rate in the recent National Examination Council assessments.',
      content: 'We celebrate our diligent students and committed educators for their exemplary dedication. Groupe Scolaire Gacuba II A continues to set benchmarks in academic distinction in Rubavu District.',
      category: 'Academic',
      author: 'Principal Office',
      publishedAt: '2026-02-15',
      imageUrl: '/assets/c1786.png',
      featured: true,
    },
    {
      id: 'news-2',
      title: 'Commissioning of New State-of-the-Art Computer & Science Lab',
      slug: 'commissioning-of-new-computer-science-lab',
      summary: 'Enhanced high-speed digital workstations and modern chemistry apparatus installed for secondary streams.',
      content: 'In alignment with the national digital literacy transformation, GS Gacuba II A has inaugurated 40 new networked computing terminals and modernized science workstations.',
      category: 'Campus',
      author: 'ICT Department',
      publishedAt: '2026-01-28',
      imageUrl: '/assets/046d0.png',
      featured: false,
    },
    {
      id: 'news-3',
      title: 'Inter-School Athletics & Volleyball Championship Victory',
      slug: 'inter-school-athletics-volleyball-championship',
      summary: 'GS Gacuba sports teams lift the Rubavu District inter-schools gold trophy.',
      content: 'Our boys and girls sports contingents demonstrated remarkable teamwork and discipline, taking top honors in regional athletics and volleyball tournaments.',
      category: 'Sports',
      author: 'Sports Department',
      publishedAt: '2026-01-10',
      imageUrl: '/assets/ba963.png',
      featured: false,
    }
  ];

  private events: SchoolEvent[] = [
    {
      id: 'evt-1',
      title: 'Term 2 Academic & Parents Consultation Day',
      description: 'Comprehensive academic progress review sessions between parents, guardians, and subject teachers.',
      date: '2026-09-12',
      time: '08:30 AM - 03:00 PM',
      location: 'Main Assembly Hall',
      category: 'Parent-Teacher',
    },
    {
      id: 'evt-2',
      title: 'Annual Science & Innovation Fair 2026',
      description: 'Student engineering, robotics, and biology project exhibitions with regional school participation.',
      date: '2026-10-05',
      time: '09:00 AM - 04:30 PM',
      location: 'Science Complex Grounds',
      category: 'Academic',
    },
    {
      id: 'evt-3',
      title: 'Cultural Heritage & Arts Festival',
      description: 'Celebration of Rwandan traditional dance (Itorero), poetry recitation, drama, and modern choir performances.',
      date: '2026-11-14',
      time: '01:00 PM - 06:00 PM',
      location: 'School Amphitheatre',
      category: 'Ceremony',
    }
  ];

  // Admissions
  addAdmission(application: Omit<AdmissionApplication, 'id' | 'status' | 'submittedAt'>): AdmissionApplication {
    const newRecord: AdmissionApplication = {
      ...application,
      id: `ADM-${Date.now().toString().slice(-6)}`,
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };
    this.admissions.push(newRecord);
    return newRecord;
  }

  getAdmissions(): AdmissionApplication[] {
    return this.admissions;
  }

  // Inquiries
  addInquiry(inquiry: Omit<ContactInquiry, 'id' | 'status' | 'submittedAt'>): ContactInquiry {
    const newRecord: ContactInquiry = {
      ...inquiry,
      id: `INQ-${Date.now().toString().slice(-6)}`,
      status: 'unread',
      submittedAt: new Date().toISOString(),
    };
    this.inquiries.push(newRecord);
    return newRecord;
  }

  getInquiries(): ContactInquiry[] {
    return this.inquiries;
  }

  // News
  getNews(): NewsArticle[] {
    return this.news;
  }

  getNewsById(id: string): NewsArticle | undefined {
    return this.news.find((n) => n.id === id || n.slug === id);
  }

  // Events
  getEvents(): SchoolEvent[] {
    return this.events;
  }
}

export const db = new InMemoryDatabase();
