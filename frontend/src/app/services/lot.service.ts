import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Lot {
  id?: number;
  nombre: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class LotService {
  private apiUrl = `${environment.apiUrl}/lots`;

  constructor(private http: HttpClient) {}

  getLots(): Observable<Lot[]> {
    return this.http.get<Lot[]>(this.apiUrl);
  }

  assignWaitingBadges(lotId: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/${lotId}/assign-waiting-badges`, {});
}


  createLot(lot: Lot): Observable<Lot> {
    return this.http.post<Lot>(this.apiUrl, lot);
  }

  deleteLot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
