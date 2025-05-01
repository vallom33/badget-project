// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withFetch,
  withInterceptors
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        (req, next) => {
          const token = localStorage.getItem('jwtToken');
          console.log('Intercepting request to:', req.url);
          console.log('Current JWT token:', token);
          if (token) {
            req = req.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
            });
            console.log('Added Authorization header');
          }
          return next(req);
        }
      ])
    ),
    importProvidersFrom(FormsModule)
  ],
};
