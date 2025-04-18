import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (response) => {
          if(response.token){
            sessionStorage.setItem("jwt", response.token);
            this.showSuccessMessage.emit("Connexion réussie");
            if (this.authService.isCustomer()) {
              this.router.navigate(["/shop"]);
            } else if (this.authService.isAdmin()) {
              this.router.navigate(["/users"]);
            } else if (this.authService.isDeliveryPartner()) {
              this.router.navigate(["/invoice-items"]);
            }
            else if (this.authService.isArtisan()) {
              this.router.navigate(["/products"]);
            }
          }
        },
        (error) => {
          this.showErrorMessage.emit("Erreur de connexion");
        }
      );
  }
}
