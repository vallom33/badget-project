// src/app/services/badge-status.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BadgeStatus {
  id?: number;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class BadgeStatusService {
  private apiUrl = 'http://localhost:8080/badgestatus';

  constructor(private http: HttpClient) {}

  getBadgeStatuses(): Observable<BadgeStatus[]> {
    return this.http.get<BadgeStatus[]>(this.apiUrl);
  }

  createBadgeStatus(badgeStatus: BadgeStatus): Observable<BadgeStatus> {
    return this.http.post<BadgeStatus>(this.apiUrl, badgeStatus);
  }

  deleteBadgeStatus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateBadgeStatus(badgeStatus: BadgeStatus): Observable<BadgeStatus> {
    return this.http.put<BadgeStatus>(`${this.apiUrl}/${badgeStatus.id}`, badgeStatus);
  }
  



}

