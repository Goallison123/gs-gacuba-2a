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

## 3. Interactive Modals & Communication
- `ContactModal` (`src/components/ContactModal.tsx`): Direct administrative inquiry modal triggered by the navigation bar "Ask" button and general contact prompts.
- `AdmissionModal` (`src/components/AdmissionModal.tsx`): Multi-step digital enrollment application.
- `UserProfileModal` (`src/components/UserProfileModal.tsx`): Student and parent portal for application tracking and school resources.

## 4. Component Structure
```text
src/
├── assets/          # Graphic assets, student cutouts, school crests
├── components/      # UI components (Header, Footer, ContactModal, AdmissionModal, etc.)
├── pages/           # HomePage, AboutPage, GalleryPage, ComingSoonPage
├── types/           # Domain TypeScript schemas & interfaces
└── data/            # School metrics, stream definitions, faculty data
```
