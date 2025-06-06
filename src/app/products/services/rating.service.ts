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
    return this.apiService.post(`invoiceItems/${id}/rate`, { rate, text });
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
    return this.apiService.post(`ratings/${id}/comments`, { text });
  }

  updateComment(ratingId: number, commentId: number, text: string): Observable<any> {
    return this.apiService.put(`ratings/${ratingId}/comments/${commentId}`, { text });
  }

  deleteRating(ratingId: number ): Observable<any> {
    return this.apiService.delete(`ratings`, ratingId);
  }
}
