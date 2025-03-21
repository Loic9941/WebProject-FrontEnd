import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-private',
  imports: [],
  templateUrl: './navbar-private.component.html',
  styleUrl: './navbar-private.component.css'
})
export class NavbarPrivateComponent {
  /**
   *
   */
  constructor(private router : Router) {
    
  }
  logout() {
    sessionStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }
}
