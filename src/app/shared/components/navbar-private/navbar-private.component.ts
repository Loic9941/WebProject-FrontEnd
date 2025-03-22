import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-private',
  imports: [CommonModule],
  templateUrl: './navbar-private.component.html',
  styleUrl: './navbar-private.component.css'
})
export class NavbarPrivateComponent {
  /**
   *
   */
  constructor(
    private router : Router,
    private authService: AuthService
  ) {
    
  }
  logout() : void {
    sessionStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  showProducts() : boolean {
    return this.authService.isAdmin() || this.authService.isArtisan() || this.authService.isCustomer();
  }

  showUsers() : boolean {
    return this.authService.isAdmin();
  }
}
