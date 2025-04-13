import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: []
})
export class RegisterComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  registerForm: FormGroup;

  constructor(
    private authenticationService : AuthenticationService,
    private router: Router, 
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]),
      role: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
    });
  }

  register() {
    this.authenticationService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.role, this.registerForm.value.firstname, this.registerForm.value.lastname)
    .subscribe({
      next: () => {
        this.showSuccessMessage.emit("Utilisateur créé avec succès");
        this.router.navigate(["/login"]);
      },
      error: () => {
        this.showErrorMessage.emit("Erreur lors de la création de l'utilisateur");
      }
    });
  }
}
