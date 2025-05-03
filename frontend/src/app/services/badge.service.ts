import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Badge {
  id?: number;
  username: string;
  prenom: string;
  status: string;
  badgeType?: string;
  issueDate?: string;
  expiryDate?: string;
  photoUrl?: string;

  // ▪️ أضفنا badgeStatus ليكون مطلوباً
  badgeStatus: {
    id: number;
  };
  employe?: any;
  lot?: any;
}

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  private apiUrl = 'http://localhost:8080/badges';

  constructor(private http: HttpClient) {}

  getBadges(): Observable<Badge[]> {
    return this.http.get<Badge[]>(this.apiUrl);
  }

  getBadgeById(id: number): Observable<Badge> {
    return this.http.get<Badge>(`${this.apiUrl}/${id}`);
  }

  createBadge(badge: Badge): Observable<Badge> {
    const { id, ...data } = badge;
    return this.http.post<Badge>(this.apiUrl, data);
  }

  updateBadge(badge: Badge): Observable<Badge> {
    return this.http.put<Badge>(`${this.apiUrl}/${badge.id}`, badge);
  }

  deleteBadge(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
