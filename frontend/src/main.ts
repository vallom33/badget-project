// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    // هنا نمرر withInterceptorsFromDi عشان Angular يعرف يطبّق الـ interceptors
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideRouter(routes),
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));
