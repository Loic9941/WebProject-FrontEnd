import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (response) => {
          if(response.token){
            sessionStorage.setItem("jwt", response.token);
            this.router.navigate(["/"]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
