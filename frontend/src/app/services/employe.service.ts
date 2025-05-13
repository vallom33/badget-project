// src/app/services/employe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

export interface Employe {
  id?: number;
  username: string;
  email: string;
  password: string;
  badges?: any[];
}

@Injectable({ providedIn: 'root' })
export class EmployeService {
  private apiUrl = 'http://localhost:8080/employes';

  constructor(private http: HttpClient) {}

  // دالة pagination
  getEmployesPaginated(page: number, size: number): Observable<Page<Employe>> {
    return this.http.get<Page<Employe>>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  // يمكنك إبقاء هذه للعودة للقائمة الكاملة إن احتجت
  getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  createEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiUrl, employe);
  }

  deleteEmploye(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
