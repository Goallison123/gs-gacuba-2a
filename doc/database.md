# Database & Data Models

## 1. Data Schema Overview

The GS Gacuba backend is designed with schema contracts for:

### Admissions Applications (`admissions`)
- `id`: string (UUID)
- `studentName`: string
- `dateOfBirth`: string (ISO date)
- `gender`: 'male' | 'female' | 'other'
- `gradeLevel`: 'O-Level S1' | 'O-Level S2' | 'O-Level S3' | 'A-Level MS2' | 'A-Level Arts'
- `previousSchool`: string
- `parentName`: string
- `parentPhone`: string
- `parentEmail`: string
- `residentialAddress`: string
- `status`: 'pending' | 'reviewed' | 'accepted' | 'rejected'
- `submittedAt`: string (ISO timestamp)

### Inquiries & Contacts (`inquiries`)
- `id`: string (UUID)
- `fullName`: string
- `email`: string
- `phone`: string
- `department`: 'general' | 'admissions' | 'academics' | 'principal' | 'finance'
- `subject`: string
- `message`: string
- `status`: 'unread' | 'read' | 'resolved'
- `submittedAt`: string (ISO timestamp)

### News Articles (`news`)
- `id`: string
- `title`: string
- `slug`: string
- `summary`: string
- `content`: string
- `category`: 'Academic' | 'Sports' | 'Campus' | 'Achievement'
- `author`: string
- `publishedAt`: string
- `imageUrl`: string
- `featured`: boolean

### School Events (`events`)
- `id`: string
- `title`: string
- `description`: string
- `date`: string
- `time`: string
- `location`: string
- `category`: 'Academic' | 'Sports' | 'Ceremony' | 'Parent-Teacher' | 'Holiday'
