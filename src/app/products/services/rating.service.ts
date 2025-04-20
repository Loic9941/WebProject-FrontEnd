import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  constructor(private apiService: ApiService) {
  }

  //Move this to invoiceItem service
  rateInvoiceItem(id: number, rate: number, text: string): Observable<any> {
    return this.apiService.post(`InvoiceItems/${id}/rate`, { rate, text });
  }

  getRatings(productId?: number): Observable<any> {
    if (productId) {
      return this.apiService.get(`ratings?productId=${productId}`);
    }
    return this.apiService.get(`ratings`);
  }

  getRatingById(id: number): Observable<any> {
    return this.apiService.get(`ratings/${id}`);
  }

  commentRating(id: number, text: string): Observable<any> {
    return this.apiService.post(`ratings/${id}/comment`, { text });
  }
}
