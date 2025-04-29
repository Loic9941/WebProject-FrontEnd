import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarWrapperComponent } from '../navbar-wrapper/navbar-wrapper.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-container',
  imports: [RouterOutlet, NavbarWrapperComponent, ToastModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers: [MessageService]
})
export class ContainerComponent {
  constructor(private messageService : MessageService) {
  }
  cartCount: number = 0;

  onActivate(component: any): void {
    if (component.showSuccessMessage) {
      component.showSuccessMessage.subscribe((message: string) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: message,
        });
      });
    }
    if (component.showErrorMessage) {
      component.showErrorMessage.subscribe((message: string) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: message,
        });
      });
    }
  }
}
