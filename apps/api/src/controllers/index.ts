import { Request, Response } from 'express';
import { db } from '../database/index.js';
import { validateAdmissionPayload, validateContactPayload } from '../validators/index.js';

export const HealthController = {
  getHealth(_req: Request, res: Response) {
    res.json({
      success: true,
      status: 'operational',
      institution: 'Groupe Scolaire Gacuba II A',
      timestamp: new Date().toISOString(),
      version: '2.0.0',
    });
  },
};

export const AdmissionController = {
  apply(req: Request, res: Response) {
    const validation = validateAdmissionPayload(req.body);
    if (!validation.valid) {
      return res.status(400).json({ success: false, error: validation.message });
    }

    const application = db.addAdmission(req.body);
    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully. The admissions office will review your file.',
      data: application,
    });
  },

  getPrograms(_req: Request, res: Response) {
    res.json({
      success: true,
      data: [
        {
          id: 'olevel',
          name: 'Ordinary Level (S1 - S3)',
          description: 'Comprehensive general secondary curriculum providing rigorous foundational sciences, arts, and languages.',
        },
        {
          id: 'ms2',
          name: 'Advanced Level: MS2 (Maths, Chemistry, Biology / Physics)',
          description: 'Premier STEM stream preparing future engineers, physicians, and scientific researchers.',
        },
        {
          id: 'arts',
          name: 'Advanced Level: Arts & Humanities (HEG / MEG)',
          description: 'History, Economics, Geography, and Literature streams empowering civic leaders, economists, and legal minds.',
        },
      ],
    });
  },
};

export const ContactController = {
  submit(req: Request, res: Response) {
    const validation = validateContactPayload(req.body);
    if (!validation.valid) {
      return res.status(400).json({ success: false, error: validation.message });
    }

    const inquiry = db.addInquiry(req.body);
    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting GS Gacuba II A. We will respond within 24-48 business hours.',
      data: inquiry,
    });
  },
};

export const NewsController = {
  getAll(_req: Request, res: Response) {
    res.json({
      success: true,
      data: db.getNews(),
    });
  },

  getById(req: Request, res: Response) {
    const article = db.getNewsById(req.params.id);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    return res.json({ success: true, data: article });
  },
};

export const EventController = {
  getAll(_req: Request, res: Response) {
    res.json({
      success: true,
      data: db.getEvents(),
    });
  },
};
