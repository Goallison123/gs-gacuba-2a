# Changelog

All notable changes to the GS Gacuba II A platform are documented in this file.

## [2.3.0] - 2026-08-28
### Updated & Refined
- **Page Readiness Scope**: Defined **Home**, **About Us**, and **Gallery** as the three active, fully realized pages.
- **Streamlined Coming Soon Card**: Implemented a minimalist `ComingSoonPage` for upcoming routes (*News, Academics, Admissions, Student Life, Facilities, Leadership, Careers, FAQ, Contact*) featuring a text-only "Coming Soon" badge, section header, descriptive text, and two direct action buttons: "Back to Home" and "Apply for Admission".
- **Gallery Hero Exact Asset**: Integrated the exact transparent peeping student photo (`peeping-student.png`) positioned along the bottom-left edge as a natural foreground element with proper responsive layout and non-overlapping typography.
- **Direct School Inquiries ("Ask" Feature)**: Clarified and refactored the "Ask" button into `ContactModal` — a direct administrative & admissions communication modal for parents and students to submit inquiries to GS Gacuba II A administration and academic departments.
- **HTML Meta & Title Synchronization**: Aligned `index.html` `<title>`, `<meta name="description">`, and OpenGraph tags with `metadata.json`.

## [2.2.0] - 2026-08-28
### Added & Updated (Design Parity & Architectural Synchronization)
- **Visual Design Parity**: 100% matched design layouts, typography, and graphic assets against the official GS Gacuba / Sybella Systems mockups.
- **Top Header**: Implemented brand logo, live search bar with instant AI search query dispatch, navigation links (Home, About, Gallery, News, More dropdown with 8 sub-pages), Student/Parent Portal launcher, and "Ask" AI assistant button.
- **Landing Page (Home)**:
  - Hero with orange gradient, architectural motif, bold typography ("Shaping the leaders and thinkers of tomorrow"), "Call us anytime" pill badge, action CTAs, and framed student cutout photo.
  - Dark navy stats counter (800+ Students, NESA Accreditation, 23 Staff Members).
  - Stream cards with color-coded icons for MS2, Arts and Humanities, and Ordinary Level.
  - "Why Choose Us" section with students laptop photo, 4 verified checklist items, and "Know More About Us" CTA.
  - CTA Banner ("You were never late, you just hesitated!") with classroom study photo.
  - "Best performing students" showcase featuring Amina Uwase, Grace Mukamana, and featured quote card by Jean Paul Habimana.
  - "Ready to join us?" callout with "Register Today" registration trigger.
- **About Page**:
  - Hero with deep navy background, orange curved ribbon motif, and classroom photo with overlaid orange Headmaster (HABUMUGISHA Ernest) card.
  - "A foundation built for the future" section with campus aerial photo and 4 school highlights.
  - "The school leadership" section with halftone dot background, 4 arched leadership cards, and quick admission triggers.
- **Gallery Page**:
  - Hero with asymmetric orange curve, students peeking illustration, bold typography ("See it. Feel it. Live it."), floating quote, and "Get what you used to miss" subtitle.
  - Category filters: All, School life, Events, Academics, Sports.
  - Interactive gallery cards with like/dislike counters, responsive visual feedback, and pagination controls.
- **Academics, Admissions, News, Contact, Student Life, Facilities, Leadership, Careers & FAQ Pages**:
  - Complete, rich interactive implementations across all sub-pages with detailed curriculum breakdowns, required documentation, news archive, campus coordinates, club catalogs, and interactive accordions.
- **Interactive Modals**:
  - `AskModal`: Full AI Assistant for GS Gacuba II A answering questions about streams, admissions, fees, teachers, and campus life with pre-filled search support.
  - `AdmissionModal`: Multi-step online registration flow generating official application reference numbers.
  - `UserProfileModal`: Student, parent, and applicant portal with login, SMIS application status verification, and downloadable curriculum guides.
- **Source Synchronization**: Fully synchronized root `/src` and `/apps/web/src` directories and public asset trees.

## [2.1.0] - 2026-08-27
### Added
- Enterprise monorepo client project structure (`apps/web`, `apps/api`, `design/`, `doc/`, `infrastructure/`, `.github/`).
- Full UI component library: Button, Card, Badge, Modal, Input, Select, Textarea, Breadcrumbs, SectionHeading, Accordion.
- Interactive admissions multi-step application engine with validation and confirmation.
- Interactive contact inquiry system with department routing.
- Media gallery with lightbox preview modal and category filtering.
- RESTful API service with controllers, routes, middleware, validation schemas, and health checks.
- Comprehensive technical documentation across 15 engineering disciplines.
