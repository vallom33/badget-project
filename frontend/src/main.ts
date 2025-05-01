// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    // 1) HttpClient مع تفعيل fetch ودعم الـ interceptors المسجلين في DI
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    ),

    // 2) تسجيل AuthInterceptor في DI
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

    // 3) الراوتر
    provideRouter(routes),

    // 4) دعم FormsModule لـ ngModel في الـ standalone components
    importProvidersFrom(FormsModule)
  ]
})
.catch(err => console.error(err));
