// src/app/services/auth.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // إن كنا في المتصفح ونشغل التطبيق من localhost
    if (isPlatformBrowser(this.platformId) && window.location.hostname === 'localhost') {
      this.baseUrl = 'http://localhost:8080/auth';
    } else {
      // رابط الـ backend المنشور على Render
      this.baseUrl = 'https://badget-project.onrender.com/auth/login';
    }
  }

  login(username: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post(
      `${this.baseUrl}/login`,
      { username, password },
      { observe: 'response' }
    );
  }

  saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('jwtToken', token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('jwtToken');
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUser() {
    const token = this.getToken();
    if (token) {
      const payload = this.decodeToken(token);
      return payload;
    }
    return null;
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch (e) {
      return null;
    }
  }
}
