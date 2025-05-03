// src/app/services/authorite.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Authorite {
  id?: number;
  username: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthoriteService {
  private apiUrl = 'http://localhost:8080/authorites';

  constructor(private http: HttpClient) {}

  getAuthorites(): Observable<Authorite[]> {
    return this.http.get<Authorite[]>(this.apiUrl);
  }

  createAuthorite(authorite: Authorite): Observable<Authorite> {
    return this.http.post<Authorite>(this.apiUrl, authorite);
  }

  deleteAuthorite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
