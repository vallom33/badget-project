
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface BadgeStatus {
  id?: number;
  status: string;
  badgeId?: number | null; // لدعم اختيار badge
}

@Injectable({ providedIn: 'root' })
export class BadgeStatusService {
  private apiUrl = `${environment.apiUrl}/badgestatus`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<BadgeStatus[]> {
    return this.http.get<BadgeStatus[]>(this.apiUrl);
  }

  create(badgeStatus: BadgeStatus): Observable<BadgeStatus> {
    return this.http.post<BadgeStatus>(this.apiUrl, badgeStatus);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(badgeStatus: BadgeStatus): Observable<BadgeStatus> {
    return this.http.put<BadgeStatus>(`${this.apiUrl}/${badgeStatus.id}`, badgeStatus);
  }

  getById(id: number): Observable<BadgeStatus> {
    return this.http.get<BadgeStatus>(`${this.apiUrl}/${id}`);
  }
}
