import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.API_ENDPOINT;

  constructor(private http:HttpClient) {
  }

  login(email: string, password: string):Observable<any> {
    return this.http.post(`${this.baseUrl}/Authentication/login`, {email, password});
  }

  register(email: string, password: string, role: string, firstname : string, lastname : string):Observable<any> {
    return this.http.post(`${this.baseUrl}/Authentication/register`, {email, password, role, firstname, lastname});
  }
}
