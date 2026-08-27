# Backend & API Architecture (`apps/api`)

## 1. Overview
The backend is a Node.js + Express + TypeScript service providing structured REST API endpoints for school inquiries, admissions, news updates, event listings, and contact routing.

## 2. Directory Structure
```text
apps/api/
├── src/
│   ├── config/          # Environment variables & server settings
│   ├── controllers/     # Request handlers & HTTP responses
│   │   ├── admissionController.ts
│   │   ├── contactController.ts
│   │   ├── newsController.ts
│   │   ├── eventController.ts
│   │   └── healthController.ts
│   ├── routes/          # Express route declarations
│   │   ├── admissionRoutes.ts
│   │   ├── contactRoutes.ts
│   │   ├── newsRoutes.ts
│   │   ├── eventRoutes.ts
│   │   └── healthRoutes.ts
│   ├── services/        # Business logic & repository services
│   ├── database/        # In-memory store & database seeders
│   ├── middleware/      # CORS, RequestLogger, ErrorHandler, Auth
│   ├── validators/      # Payload schema validators
│   ├── types/           # Request/Response TypeScript types
│   └── server.ts        # Express entry point
├── tests/               # API endpoint unit & integration tests
├── package.json
└── tsconfig.json
```
