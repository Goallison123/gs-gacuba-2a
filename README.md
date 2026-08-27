# G.S. Gacuba II A — Official Client Project

A modern, production-grade corporate school web portal and backend service built for **Groupe Scolaire Gacuba II A** (Rubavu District, Western Province, Rwanda).

---

## 🏛️ Project Structure

```text
g-s-gacuba-website/
│
├── apps/
│   ├── web/                              # Frontend web application (React 19 + Tailwind CSS + Vite)
│   │   ├── public/                       # Static assets, sitemaps, robots.txt, school imagery
│   │   ├── src/                          # TypeScript source code
│   │   │   ├── assets/                   # Vector & graphic asset maps
│   │   │   ├── components/               # UI, Navigation, Cards, Forms, Layout components
│   │   │   ├── layouts/                  # MainLayout, PageLayout
│   │   │   ├── pages/                    # 13 Dedicated full-featured pages
│   │   │   ├── sections/                 # Modular page sections
│   │   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── services/                 # API client services
│   │   │   ├── lib/                      # Client library utilities
│   │   │   ├── types/                    # Domain TypeScript schemas & interfaces
│   │   │   ├── utils/                    # Utility functions & formatters
│   │   │   ├── config/                   # Site config, navigation links, school profile
│   │   │   └── data/                     # Structured institutional data
│   │   └── tests/                        # Unit, integration, and E2E test suites
│   │
│   └── api/                              # Backend / API service
│       ├── src/
│       │   ├── controllers/              # Request handlers (Admissions, Contacts, News, Events)
│       │   ├── routes/                   # Express routing endpoints
│       │   ├── services/                 # Business logic & repository services
│       │   ├── middleware/               # Auth, validation, error handling, CORS
│       │   ├── database/                 # Structured in-memory / relational schema
│       │   ├── validators/               # Schema input validators
│       │   ├── types/                    # API request & response types
│       │   ├── config/                   # Server configuration & environment defaults
│       │   └── server.ts                 # API Server bootstrap
│       └── tests/                        # Endpoint & controller test suites
│
├── design/                               # Brand identity, design system & asset references
│   ├── original/                         # Historical design baseline references
│   ├── approved/                         # Approved design specifications
│   ├── assets/                           # Brand assets, color palettes, vectors
│   ├── brand/                            # Typography, color tokens, and logo guidelines
│   └── design-system.md                  # Comprehensive Design System specification
│
├── doc/                                  # Complete Technical & Institutional Documentation
│   ├── README.md                         # Documentation index
│   ├── requirements.md                   # Client functional & non-functional requirements
│   ├── architecture.md                   # System architecture & monorepo topology
│   ├── information-architecture.md       # Sitemap, routing hierarchy & user journeys
│   ├── design-system.md                  # Colors, typography, spacing, component specifications
│   ├── frontend.md                       # React architecture, state management & layout
│   ├── backend.md                        # API service structure & lifecycle
│   ├── database.md                       # Data dictionary & persistence layer
│   ├── api.md                            # OpenAPI / REST endpoint documentation
│   ├── testing.md                        # Quality assurance & test execution strategy
│   ├── accessibility.md                  # WCAG 2.2 AA compliance standards
│   ├── seo.md                            # Metadata, OpenGraph & schema.org structured data
│   ├── security.md                       # Threat model, input sanitization & data protection
│   ├── deployment.md                     # Build pipeline, containerization & hosting
│   ├── maintenance.md                    # Operational playbook & runbooks
│   └── changelog.md                      # Release & modification history
│
├── infrastructure/                       # Deployment, containerization, and monitoring
│   ├── deployment/                       # Dockerfiles, docker-compose, Nginx configuration
│   ├── environment/                      # Environment templates for staging/production
│   ├── monitoring/                       # Health check scripts & telemetry configs
│   └── README.md                         # Infrastructure setup guide
│
├── .github/                              # Continuous Integration & Automation
│   └── workflows/
│       ├── ci.yml                        # Automated linting, testing & type checking
│       └── production.yml                # Production build & deployment verification
│
├── .env.example                          # Environment variable specifications
├── .gitignore                            # VCS ignore rules
└── package.json                          # Workspace configuration & orchestration scripts
```

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 20+
- npm 10+

### 2. Installation
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 4. Build & Production
```bash
npm run build
npm run preview
```

### 5. Lint & Type Checking
```bash
npm run lint
```

---

## 🎨 Color Palette & Branding

| Token | Hex | Role |
|---|---|---|
| Primary Warm Orange | `#FF8C00` | Accent CTA, highlights, badges |
| Deep Navy | `#211F54` | Primary brand headers & dark surfaces |
| Dark Navy | `#19213D` | High-contrast backgrounds |
| Slate | `#353E5C` | Secondary text & subheadings |
| Muted Gray | `#6D758F` | Body typography & subtle borders |
| Warm Sand | `#C3B091` | Secondary accents & heritage badges |

---

## 📄 License & Ownership
Copyright © 2026 Groupe Scolaire Gacuba II A. All rights reserved.
