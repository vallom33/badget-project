import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../models/page';
import { environment } from '../../environments/environment';

export interface Badge {
  id?: number;
  username: string;
  prenom: string;
  status_id: number;
  badgeType?: string;
  issueDate?: string;
  expiryDate?: string;
  photoUrl?: string;
  badgeStatus?: any;
  employe?: any;
  lot?: any;
}

@Injectable({ providedIn: 'root' })
export class BadgeService {
  private apiUrl = `${environment.apiUrl}/badges`;

  constructor(private http: HttpClient) {}

  getBadgesPaginated(page: number, size: number): Observable<Page<Badge>> {
    return this.http.get<Page<Badge>>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  getBadgeById(id: number): Observable<Badge> {
    return this.http.get<Badge>(`${this.apiUrl}/${id}`);
  }

  createBadge(badge: Badge): Observable<Badge> {
    const payload = { ...badge, badgeStatus: { id: badge.status_id } };
    return this.http.post<Badge>(this.apiUrl, payload);
  }

  updateBadge(badge: Badge): Observable<Badge> {
    const payload = { ...badge, badgeStatus: { id: badge.status_id } };
    return this.http.put<Badge>(`${this.apiUrl}/${badge.id}`, payload);
  }

  deleteBadge(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
