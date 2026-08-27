# Security & Privacy Guidelines

## 1. Threat Model & Mitigation
- **XSS (Cross-Site Scripting)**: React automatic string escaping on all user-supplied rendered variables. Content-Security-Policy (CSP) headers applied via reverse proxy.
- **CSRF (Cross-Site Request Forgery)**: Strict SameSite cookie flags and header-based verification for non-GET API requests.
- **SQL / Injection Attacks**: Structured parameter validation on all incoming request schemas.
- **Input Sanitization**: Email format validation, telephone format checks, string length capping to avoid memory exhaustion attacks.
- **Sensitive Data**: No passwords, student personal identifiers, or API credentials stored in client-side code.
