import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  constructor(private apiService: ApiService) {
  }

  rateInvoiceItem(id: number, rate: number, comment: string): Observable<any> {
    return this.apiService.post(`InvoiceItem/${id}/rate`, { rate, comment });
  }

  getRatings(): Observable<any> {
    return this.apiService.get(`ratings`);
  }

}
