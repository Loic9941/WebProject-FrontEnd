import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) {
  }

  getProducts(
    minPrice: number = 0,
    maxPrice: number = 0,
    category: string = '',
    search: string = '',
    orderBy: string = 'name'
  ):Observable<any> {
    if (minPrice == null) minPrice = 0;
    if (maxPrice == null) maxPrice = 0;
    return this.apiService.get(`products?minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&search=${search}&orderBy=${orderBy}`);
  }

  getProductById(id: number): Observable<any> {
    return this.apiService.get(`products/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.apiService.putMedia(`products/${id}`, product);
  }

  addProduct(product: any): Observable<any> {
    return this.apiService.postMedia(`products`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.apiService.delete(`products`, id);
  }

  addToInvoice(id: number): Observable<any> {
    return this.apiService.post(`products/${id}/addToInvoice`, {});
  }

  getCategories(): Observable<any> {
    return this.apiService.get(`products/categories`);
  }
}
