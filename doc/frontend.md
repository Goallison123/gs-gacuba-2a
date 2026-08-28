# Frontend Architecture (`src` / `apps/web`)

## 1. Overview
The frontend is a high-performance React Single Page Application bundled with Vite and styled via Tailwind CSS.

## 2. Page Architecture & Routing State
- **Active Core Pages**:
  - `HomePage` (`src/pages/HomePage.tsx`)
  - `AboutPage` (`src/pages/AboutPage.tsx`)
  - `GalleryPage` (`src/pages/GalleryPage.tsx`)
- **Upcoming Routes**:
  - `ComingSoonPage` (`src/pages/ComingSoonPage.tsx`) — Serves `news`, `academics`, `admissions`, `student-life`, `facilities`, `leadership`, `careers`, `faq`, and `contact` with a clean status card and direct CTAs.

## 3. Responsive & Multi-Screen Layout Strategies
- **Fluid Grid Scaling**:
  - Grid structures automatically adapt between 1 column (mobile), 2 columns (tablet / medium screens), and 3–4 columns (desktop and wide screens).
  - Containers are constrained with `max-w-[1440px] mx-auto` and fluid horizontal padding (`px-4 sm:px-8 lg:px-12`) to avoid uncontrolled edge-stretching on ultra-wide monitors.
- **Adaptive Hero Viewport Patterns**:
  - **Gallery Hero**: Desktop utilizes an asymmetric split canvas with a 48% width right-hand orange curve and a bottom-left peeking student foreground. On mobile screens, elements stack with high contrast on a white canvas and house the student and circular *"Visual Campus Tour"* badge inside an embedded curved banner card.
  - **Home & About Heroes**: Scaled imagery heights (`max-h-[380px]` mobile up to `max-h-[820px]` desktop) with bounded overflows prevent horizontal layout shift. Action buttons automatically switch from full-width mobile stacks to inline rows on larger viewports.
- **Mobile Drawer Navigation**:
  - Drawer menu uses dynamic viewport scroll constraints (`max-h-[calc(100dvh-64px)]`) to ensure reachability on small mobile devices without obstructing header actions.
- **Touch-First Accessibility**:
  - All interactive buttons, drawer links, carousel dots, and modal triggers enforce a minimum touch target size of `44px` with clear active and hover states.

## 4. Interactive Modals, Search & Communication
- `SearchModal` (`src/components/SearchModal.tsx`): Fast, lightweight spotlight search and command palette supporting real-time multi-token query filtering, category filters, hotkeys (`Ctrl+K` / `/`), and one-click action execution.
- `searchDatabase` (`src/data/searchDatabase.ts`): Comprehensive keyword and entity index mapping all school contacts, location, leadership, streams, facilities, fees, and FAQs.
- `ContactModal` (`src/components/ContactModal.tsx`): Direct administrative inquiry modal triggered by the navigation bar "Ask" button and general contact prompts.
- `AdmissionModal` (`src/components/AdmissionModal.tsx`): Multi-step digital enrollment application with responsive validation and responsive step indicators.
- `UserProfileModal` (`src/components/UserProfileModal.tsx`): Student and parent portal for application tracking and school resources.

## 5. Component Structure
```text
src/
├── assets/          # Graphic assets, student cutouts, school crests
├── components/      # UI components (Header, Footer, SearchModal, ContactModal, AdmissionModal, etc.)
├── pages/           # HomePage, AboutPage, GalleryPage, ComingSoonPage
├── types/           # Domain TypeScript schemas & interfaces
└── data/            # School metrics, stream definitions, faculty data, search database
```
