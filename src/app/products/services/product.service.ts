import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) {
  }

  getProducts():Observable<any> {
    return this.apiService.get(`Product`);
  }

  getProductById(id: number): Observable<any> {
    return this.apiService.get(`Product/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.apiService.putMedia(`Product/${id}`, product);
  }

  addProduct(product: any): Observable<any> {
    return this.apiService.postMedia(`Product`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.apiService.delete(`Product`, id);
  }

  addToInvoice(id: number): Observable<any> {
    return this.apiService.post(`Invoice/AddToInvoice/${id}`, {});
  }

  rateProduct(id: number, rate: number, comment: string): Observable<any> {
    return this.apiService.post(`Product/${id}/rate`, { rate, comment });
  }
}
