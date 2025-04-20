import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  getUserRoles(): string {
    let token = sessionStorage.getItem('jwt') ?? '';
    let decodeToken: any = jwtDecode(token);
     return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('jwt') != null;
  }

  isAdmin(): boolean {
    return this.isAuthenticated() &&  this.getUserRoles() == "Administrator";
  }

  isArtisan(): boolean {
    return this.isAuthenticated() && this.getUserRoles() == "Artisan";
  }

  isDeliveryPartner(): boolean {
    return this.isAuthenticated() && this.getUserRoles() == "DeliveryPartner";
  }

  isCustomer(): boolean {
    return this.isAuthenticated() && this.getUserRoles() == "Customer";
  }

  getUserId(): number {
    let token = sessionStorage.getItem('jwt') ?? '';
    let decodeToken: any = jwtDecode(token);
    return decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }
}
