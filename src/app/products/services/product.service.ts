import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.API_ENDPOINT;

  constructor(private http:HttpClient) {
  }

  getProducts():Observable<any> {
    return this.http.get(`${this.baseUrl}/Product`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Product/${id}`);
  }

}
