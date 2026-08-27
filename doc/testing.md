# Quality Assurance & Testing Strategy

## 1. Testing Pyramid

```text
       ▲
      / \
     /E2E\      -> Critical flows (Apply for Admission, Contact Form, Page Routing)
    /-----\
   / Integ \    -> Form submission, API client responses, Modal toggles
  /---------\
 /   Unit    \  -> Pure functions, Formatters, Validation schemas, UI Components
/-------------\
```

## 2. Test Suites
- **Unit Tests (`apps/web/tests/unit/`)**: Verify string formatters, date helpers, validation functions, and component rendering.
- **Integration Tests (`apps/web/tests/integration/`)**: Test form submission workflows, error state displays, and API fallback handling.
- **E2E Scenarios (`apps/web/tests/e2e/`)**: Test responsive navigation, routing through all 13 pages, and submission confirmations.
- **API Tests (`apps/api/tests/`)**: Test endpoint request validations, status codes, and mock data consistency.
