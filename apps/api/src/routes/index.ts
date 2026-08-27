import { Router } from 'express';
import {
  HealthController,
  AdmissionController,
  ContactController,
  NewsController,
  EventController,
} from '../controllers/index.js';

export const apiRouter = Router();

// Health check
apiRouter.get('/health', HealthController.getHealth);

// Admissions
apiRouter.get('/admissions/programs', AdmissionController.getPrograms);
apiRouter.post('/admissions/apply', AdmissionController.apply);

// Inquiries / Contact
apiRouter.post('/contact', ContactController.submit);

// News
apiRouter.get('/news', NewsController.getAll);
apiRouter.get('/news/:id', NewsController.getById);

// Events
apiRouter.get('/events', EventController.getAll);
