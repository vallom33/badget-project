import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Authorite {
  id?: number;
  username: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthoriteService {
  private apiUrl = `${environment.apiUrl}/authorites`;

  constructor(private http: HttpClient) {}

  getAuthorites(): Observable<Authorite[]> {
    return this.http.get<Authorite[]>(this.apiUrl);
  }

  getAuthoriteById(id: number): Observable<Authorite> {
    return this.http.get<Authorite>(`${this.apiUrl}/${id}`);
  }

  createAuthorite(authorite: Authorite): Observable<Authorite> {
    return this.http.post<Authorite>(this.apiUrl, authorite);
  }

  updateAuthorite(id: number, authorite: Authorite): Observable<Authorite> {
    return this.http.put<Authorite>(`${this.apiUrl}/${id}`, authorite);
  }

  deleteAuthorite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
