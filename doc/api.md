# REST API Documentation

Base URL: `/api`

## Endpoints Summary

### Health Check
- `GET /api/health` — Returns server health status, uptime, and timestamp.

### Admissions
- `GET /api/admissions/programs` — Returns available academic streams, requirements, and deadlines.
- `POST /api/admissions/apply` — Submits a student application.
  - Body: `{ studentName, dateOfBirth, gender, gradeLevel, previousSchool, parentName, parentPhone, parentEmail, residentialAddress }`
  - Response: `201 Created` with `{ success: true, applicationId: string, message: string }`

### Contact & Inquiries
- `POST /api/contact` — Submits a parent/student inquiry message.
  - Body: `{ fullName, email, phone, department, subject, message }`
  - Response: `200 OK` with `{ success: true, ticketId: string, message: string }`

### News & Announcements
- `GET /api/news` — Returns a paginated list of school news articles.
- `GET /api/news/:id` — Returns single article details.

### School Events
- `GET /api/events` — Returns upcoming events and calendar schedule.

### Newsletter
- `POST /api/newsletter/subscribe` — Subscribes an email to the school bulletin.
