import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table-users',
	imports: [RouterModule, CommonModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css',
  providers: []
})
export class TableUsersComponent {
    @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
    @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();

    constructor(
      private userService: UserService,
    ) {
    }
    users: User[] = [];

    ngOnInit() {
      this.getUsers();
    }

    getUsers() {
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      });
    }

    deleteUser(id: number) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.getUsers();
          this.showSuccessMessage.emit('Utilisateur supprimé');
        },
        error: (err) => {
          this.showErrorMessage.emit('Erreur lors de la suppression de l\'utilisateur. Vous ne pouvez pas supprimer un utilisateur qui a des commandes ou un admin.');
        }
      });
    }

    blockUser(id: number) {
      this.userService.blockUser(id).subscribe({
        next: () => {
          this.getUsers();
          this.showSuccessMessage.emit('Utilisateur bloqué');
        },
        error: (err) => {
          this.showErrorMessage.emit('Erreur lors du blocage de l\'utilisateur');
        }
      });
    }

    unblockUser(id: number) {
      this.userService.unblockUser(id).subscribe({
        next: () => {
          this.getUsers();
          this.showSuccessMessage.emit('Utilisateur débloqué');
        },
        error: (err) => {
          this.showErrorMessage.emit('Erreur lors du déblocage de l\'utilisateur');
        }
      });
    }

    getRoleLabel(role: string): string {
      switch (role) {
        case 'Artisan':
          return 'Artisan';
        case 'DeliveryPartner':
          return 'Livreur';
        case 'Customer':
          return 'Client';
        case 'Administrator':
          return 'Administrateur';
        default:
          return 'Inconnu';
      }
    }
}
