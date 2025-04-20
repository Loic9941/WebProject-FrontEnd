import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUsers(): Observable<any> {
    return this.apiService.get('users');
  }

  deleteUser(id: number): Observable<any> {
    return this.apiService.delete(`users`,id);
  }

  getDeliveryPartners(): Observable<any> {
    return this.apiService.get('users/getDeliveryPartners');
  }
}
