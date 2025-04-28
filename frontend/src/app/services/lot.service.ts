// src/app/services/lot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Lot {
  id?: number;
  nombre: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class LotService {
  private apiUrl = 'http://localhost:8080/lots';

  constructor(private http: HttpClient) {}

  getLots(): Observable<Lot[]> {
    return this.http.get<Lot[]>(this.apiUrl);
  }

  createLot(lot: Lot): Observable<Lot> {
    return this.http.post<Lot>(this.apiUrl, lot);
  }

  deleteLot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
