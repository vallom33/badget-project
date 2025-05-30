import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user.service';
import { AuthService } from './auth.service';

export interface Permission {
  id?: number;
  description: string;
  user?: Partial<User> | null;
}

export interface PermissionRequest {
  description: string;
  userId: number;
}


@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private apiUrl = `${environment.apiUrl}/permissions`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  getPermissionById(id: number): Observable<Permission> {
    return this.http.get<Permission>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  createPermission(permission: PermissionRequest): Observable<Permission> {
  return this.http.post<Permission>(this.apiUrl, permission, {
    headers: this.getAuthHeaders(),
  });
}

updatePermission(id: number, permission: PermissionRequest): Observable<Permission> {
  return this.http.put<Permission>(`${this.apiUrl}/${id}`, permission, {
    headers: this.getAuthHeaders(),
  });
}


  deletePermission(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
