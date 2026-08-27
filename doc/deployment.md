# Deployment & Infrastructure Guide

## 1. Production Build Workflow
The build process compiles both the React web application and the Node/Express backend:

```bash
# Build frontend
npm run build

# Preview build locally
npm run preview
```

## 2. Containerized Deployment
The platform includes container manifests in `infrastructure/deployment/`:
- `Dockerfile.web`: Multi-stage build compiling static Vite assets and serving via Nginx.
- `Dockerfile.api`: Minimal Node Alpine image running the Express API server.
- `docker-compose.yml`: Orchestrates both services with health checks and volume mounts.
