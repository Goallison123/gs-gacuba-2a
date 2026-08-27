import express from 'express';
import cors from 'cors';
import { serverConfig } from './config/index.js';
import { apiRouter } from './routes/index.js';
import { errorHandler, requestLogger } from './middleware/errorHandler.js';

export function createServer() {
  const app = express();

  app.use(cors({ origin: serverConfig.corsOrigin }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestLogger);

  // Mount API routes
  app.use('/api', apiRouter);

  // Global Error Handler
  app.use(errorHandler);

  return app;
}

if (process.env.NODE_ENV !== 'test' && import.meta.url.endsWith(process.argv[1] || '')) {
  const app = createServer();
  app.listen(serverConfig.port, '0.0.0.0', () => {
    console.log(`[GS Gacuba API] Service running on http://0.0.0.0:${serverConfig.port}`);
  });
}
