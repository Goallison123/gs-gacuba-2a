# Frontend Architecture (`src` / `apps/web`)

## 1. Overview
The frontend is a high-performance React 19 Single Page Application bundled with Vite and styled via Tailwind CSS, designed for mobile-first precision and responsive desktop elegance.

## 2. Page Architecture & Routing State
The application state router in `src/App.tsx` coordinates smooth transitions across the following views:

- **Active Core Production Pages**:
  - `HomePage` (`src/pages/HomePage.tsx`): Flagship landing page featuring school branding, stats, streams, value proposition, student achievements, and CTAs.
  - `AboutPage` (`src/pages/AboutPage.tsx`): School heritage, headmaster address, strategic pillars, and faculty board with custom artwork background.
  - `GalleryPage` (`src/pages/GalleryPage.tsx`): Clean two-column layout with high-contrast typography (*"See it. Feel it. Live it."*), floating quote card, coral subtitle (*"Get what you used to miss."*), campus tour badge, category filters, interactive reaction buttons (Like / Dislike), and pagination.
  - `NewsPage` (`src/pages/NewsPage.tsx`): Full-width breaking news announcement bar, featured news story with award ceremony photo (`/assets/1c7aa.png`), interactive like and share functionality, category filter tabs, and responsive 3-column article cards.
  - `AcademicsPage` (`src/pages/AcademicsPage.tsx`): Split diagonal hero banner with classroom photography (`/assets/c1786.png`), two-tone headline (*"Excellence in every discipline"*), segmented switcher for Advanced level (MS2 & Arts) and Ordinary level (CBC & STEM), and golden-orange CTA banner.

- **Upcoming Routes**:
  - `ComingSoonPage` (`src/pages/ComingSoonPage.tsx`): Serves `admissions`, `student-life`, `facilities`, `leadership`, `careers`, `faq`, and `contact` with an informative status card and direct triggers for Admissions and Inquiries.

## 3. Responsive & Multi-Screen Layout Strategies
- **Fluid Grid Scaling**:
  - Grid layouts dynamically adapt between 1 column (mobile), 2 columns (tablet / medium screens), and 3 columns (desktop and wide viewports).
  - Main containers use `max-w-[1440px] mx-auto` and horizontal padding (`px-4 sm:px-8 lg:px-12`) to maintain clean proportions on ultra-wide screens.
- **Adaptive Hero Viewport Patterns**:
  - **Academics Hero**: Split layout pairing a left vibrant orange gradient text panel with a right photographic classroom visual separated by an angular geometric divider on desktop screens.
  - **Gallery Hero**: Clean two-column distribution with left typography and CTAs, and right circular tour emblem within an orange backdrop curve.
  - **News Hero**: Top announcement bar with responsive pill badge and two-column featured article grid.
- **Mobile Drawer Navigation**:
  - Dynamic drawer menu with viewport scroll constraints (`max-h-[calc(100dvh-64px)]`) ensuring all navigation links are accessible on small mobile screens.
- **Touch-First Accessibility**:
  - All interactive buttons, drawer links, carousel dots, reaction buttons, and modal triggers enforce a minimum touch target size of `44px` with clear active, focus, and hover states.

## 4. Interactive Modals, Search & Communication
- `SearchModal` (`src/components/SearchModal.tsx`): Fast spotlight search and command palette supporting real-time multi-token query filtering, category filters, hotkeys (`Ctrl+K` / `/`), and one-click action execution.
- `searchDatabase` (`src/data/searchDatabase.ts`): Comprehensive keyword and entity index mapping all school contacts, location, leadership, streams, facilities, fees, and FAQs.
- `ContactModal` (`src/components/ContactModal.tsx`): Direct administrative inquiry modal triggered by the navigation bar "Ask" button and general contact prompts.
- `AdmissionModal` (`src/components/AdmissionModal.tsx`): Multi-step digital enrollment application with client-side validation and step indicators.
- `UserProfileModal` (`src/components/UserProfileModal.tsx`): Student and parent portal modal for application tracking and school resources.

## 5. Component Structure
```text
src/
├── assets/          # Graphic assets, photographs, vector crests, backgrounds
├── components/      # UI components (Header, Footer, SearchModal, ContactModal, AdmissionModal, etc.)
├── pages/           # HomePage, AboutPage, GalleryPage, NewsPage, AcademicsPage, ComingSoonPage
├── types/           # Domain TypeScript schemas & interfaces
└── data/            # School metrics, stream definitions, faculty data, search database
```
