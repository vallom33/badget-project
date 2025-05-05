import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Badge {
  id?: number;
  username: string;
  prenom: string;
  status?: string;        // يمكنك إبقاؤه للعرض في الواجهة فقط
  badgeType?: string;
  issueDate?: string;
  expiryDate?: string;
  photoUrl?: string;
  status_id: number;      // ← الحقل الوحيد للمفتاح الأجنبي
  employe?: any;
  lot?: any;
  badgeStatus?: any; // ← نستخدمه بدل `status` لاحقًا

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
    const payload = {
      ...badge,
      badgeStatus: { id: badge.status_id } // ← نحول id إلى كائن
    };
    return this.http.post<Badge>(this.apiUrl, payload);
  }
  
  updateBadge(badge: Badge): Observable<Badge> {
    const payload = {
      ...badge,
      badgeStatus: { id: badge.status_id }
    };
    return this.http.put<Badge>(`${this.apiUrl}/${badge.id}`, payload);
  }
  

  deleteBadge(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
