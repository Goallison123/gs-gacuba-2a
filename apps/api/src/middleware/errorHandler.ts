import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  console.error('[API Error]:', err.message);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: err.message || 'An unexpected error occurred.',
  });
}

export function requestLogger(req: Request, _res: Response, next: NextFunction) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
}
