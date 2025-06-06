import { Component, Input } from '@angular/core';
import { NavbarPublicComponent } from '../navbar-public/navbar-public.component';
import { NavbarPrivateComponent } from '../navbar-private/navbar-private.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-wrapper',
  imports: [NavbarPublicComponent, NavbarPrivateComponent, CommonModule],
  templateUrl: './navbar-wrapper.component.html',
  styleUrl: './navbar-wrapper.component.css'
})
export class NavbarWrapperComponent {
  get isLoggedIn(): boolean {
    return sessionStorage.getItem("jwt") ? true : false;
  }
}
