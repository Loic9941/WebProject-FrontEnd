import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-public',
  imports: [],
  templateUrl: './navbar-public.component.html',
  styleUrl: './navbar-public.component.css'
})
export class NavbarPublicComponent {
  constructor(
        private router : Router,
  ) {
    
  }

  navigateToLogin() {
    this.router.navigate(["login"]);
  }

  navigateToRegister() {
    this.router.navigate(["register"]);
  }
}
