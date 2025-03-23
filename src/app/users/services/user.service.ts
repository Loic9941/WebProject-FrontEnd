import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUsers(): Observable<any> {
    return this.apiService.get('User');
  }

  deleteUser(id: number): Observable<any> {
    return this.apiService.delete(`User`,id);
  }
}
