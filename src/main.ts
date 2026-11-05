import { bootstrapApplication } from '@angular/platform-browser';
import { inject } from '@vercel/analytics';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Vercel Web Analytics: conta as visitas (inclusive as trocas de rota do Angular)
inject();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
