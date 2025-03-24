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
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      });
    }

    deleteUser(id: number) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter((user) => user.id !== id);
          this.showSuccessMessage.emit('Utilisateur supprimé');
        },
        error: (err) => {
          this.showErrorMessage.emit('Erreur lors de la suppression de l\'utilisateur');
        }
      });
    }
}
