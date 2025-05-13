import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// استورد التعريفات من models، لا تُعيد تعريف Profile هنا
import { Profile } from '../models/profile.model';
import { Page } from '../models/page';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrl = 'http://localhost:8080/profiles';

  constructor(private http: HttpClient) {}

  // للحصول على قائمة كاملة (غير مستخدمة الآن)
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }

  // الدالة الجديدة للـ pagination
  getProfilesPaginated(page: number, size: number): Observable<Page<Profile>> {
    return this.http.get<Page<Profile>>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  getProfileById(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/${id}`);
  }

  addProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.apiUrl, profile);
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiUrl}/${profile.id}`, profile);
  }

  deleteProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
