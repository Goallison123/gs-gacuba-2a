# Software Requirements Specification (SRS)

## 1. Project Overview
Groupe Scolaire Gacuba II A (G.S. Gacuba) is a premier educational institution located in Rubavu District, Western Province, Rwanda. This project delivers an institutional web platform to showcase academic excellence, facilitate admissions, highlight campus life, provide real-time updates to students and parents, and offer digital contact channels.

## 2. Stakeholder Personas
- **Prospective Parents & Students**: Seeking admission requirements, academic stream information (Ordinary Level, MS2, Arts & Humanities, Sciences), fee structures, facilities, and campus culture.
- **Current Students & Parents**: Looking for academic calendars, event announcements, examination timetables, and teacher/administration contacts.
- **Alumni & Community Members**: Following school development, news, community outreach, and alumni initiatives.
- **School Administration & Faculty**: Publishing announcements, managing admissions inquiries, and updating institutional information.

## 3. Functional Requirements
- **FR-01: Multi-Page Navigation**: Complete dedicated pages for Home, About Us, Academics, Admissions, Student Life, Facilities, Leadership, News, Events, Gallery, Careers, FAQs, and Contact Us.
- **FR-02: Interactive Admissions Engine**: Multi-step application submission form with client-side validation, level selection (O-Level, A-Level / MS2 / Arts), document checklist, and confirmation feedback.
- **FR-03: Contact & Inquiry System**: Dynamic contact form with department selection (General, Admissions, Principal's Office, Accounts), validation, and live submission feedback.
- **FR-04: Academic Programs Explorer**: Deep dive into curriculum, subject combinations, teaching methodologies, and faculty credentials.
- **FR-05: Campus Facilities Showcase**: Interactive facility directory with high-resolution imagery, capacity details, and amenity specifications (Science Labs, Computer Lab, Library, Sports Grounds).
- **FR-06: News & Announcements Portal**: Searchable, categorizable news releases with publication dates, author tags, and detailed article views.
- **FR-07: Interactive Calendar & Events**: Upcoming school events with date filtering, category badges, venue information, and "Add to Calendar" hooks.
- **FR-08: Media Gallery**: Categorized photo gallery with lightbox modal, filterable by Campus, Academics, Sports, Cultural, and Ceremonies.
- **FR-09: FAQ Hub**: Searchable and accordion-based frequently asked questions covering enrollment, fees, boarding/day scholar policies, and uniforms.
- **FR-10: Newsletter Subscription**: Email capture for community updates with double-entry safety.

## 4. Non-Functional Requirements
- **NFR-01: Performance**: Core Web Vitals score > 90, Initial load time under 1.5s on 4G networks.
- **NFR-02: Responsiveness**: Seamless experience across 320px mobile up to 2560px ultra-wide displays.
- **NFR-03: Accessibility**: Full compliance with WCAG 2.2 Level AA guidelines.
- **NFR-04: SEO**: High discoverability on search engines with rich snippet metadata and semantic markup.
- **NFR-05: Security**: Strict input validation, CSP headers, zero hardcoded secrets, and secure form handlers.
