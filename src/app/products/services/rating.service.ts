import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  constructor(private apiService: ApiService) {
  }

  rateInvoiceItem(id: number, rate: number, text: string): Observable<any> {
    return this.apiService.post(`InvoiceItem/${id}/rate`, { rate, text });
  }

  getRatings(): Observable<any> {
    return this.apiService.get(`ratings`);
  }

}
