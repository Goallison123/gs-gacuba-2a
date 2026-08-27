# System Architecture Specification

## 1. High-Level Architecture

The GS Gacuba II A system utilizes a decoupled, modern web architecture:

```text
[ Client Browser ]
        │
        ▼ (HTTPS / JSON)
[ Frontend: apps/web ] (React 19 + Tailwind CSS + Vite)
        │
        ├── UI & State Layer (React Hooks, Navigation State, Toast Notifications)
        ├── Reusable Design System (Cards, Navigation, Forms, Modals)
        ├── Asset Layer (Optimized SVGs, WebPs, Responsive Images)
        └── API Service Proxy Client (fetch / Axios client)
        │
        ▼ (RESTful API /api/*)
[ Backend: apps/api ] (Node.js + Express + TypeScript)
        │
        ├── Routing & Middleware (Auth, CORS, Rate Limit, Input Validation)
        ├── Controllers (Admissions, Inquiries, News, Events, Careers)
        ├── Domain Services & Business Logic
        └── Persistence Engine (In-Memory / SQLite / Structured Store)
```

## 2. Monorepo Organization
- `apps/web`: Standalone React Single Page Application containing all user-facing interfaces, responsive layouts, client validations, and view routing.
- `apps/api`: REST API service responsible for handling form submissions, data queries, administrative data feeds, and email notifications.
- `doc/`: Centralized single source of truth for technical, architectural, and design guidelines.
- `design/`: Design assets, color specifications, vector logos, and brand guidelines.
- `infrastructure/`: Container definitions, Nginx proxy configs, and operational scripts.
