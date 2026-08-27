# Frontend Architecture (`apps/web`)

## 1. Overview
The frontend is a high-performance React 19 Single Page Application bundled with Vite and styled via Tailwind CSS.

## 2. Directory Map
```text
apps/web/src/
├── assets/          # Static asset definitions & vector paths
├── components/      # Atomic UI building blocks
│   ├── ui/          # Primitive components (Button, Input, Badge, Card, Modal, etc.)
│   ├── navigation/  # Header, NavDropdown, MobileMenu, Breadcrumbs, QuickLinks
│   ├── cards/       # ProgramCard, NewsCard, EventCard, StaffCard, FacilityCard
│   ├── forms/       # AdmissionApplicationForm, ContactForm, NewsletterForm
│   └── layout/      # Container, Section, TopBar, Footer, PageHero
├── layouts/         # MainLayout (with Header & Footer), PageLayout
├── pages/           # Dedicated route page components
│   ├── Home/
│   ├── About/
│   ├── Academics/
│   ├── Admissions/
│   ├── StudentLife/
│   ├── Facilities/
│   ├── Leadership/
│   ├── News/
│   ├── Events/
│   ├── Gallery/
│   ├── Careers/
│   ├── FAQ/
│   └── Contact/
├── sections/        # Homepage and deep-page composition sections
├── hooks/           # Reusable hooks (useScrollPosition, useFormValidation, etc.)
├── services/        # Frontend API consumer layer
├── lib/             # Utility helpers & API client configuration
├── types/           # Complete TypeScript interface definitions
├── utils/           # String, date, and math formatters
├── config/          # Site metadata and global constants
└── data/            # Static dataset for school programs, staff, and facilities
```

## 3. State Management & Navigation
- Client-side navigation state with smooth scrolling to top and history updates.
- Centralized form state with immediate visual feedback, validation errors, and success state alerts.
