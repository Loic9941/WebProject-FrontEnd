import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-table-users',
	imports: [RouterModule, CommonModule, ToastModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css',
  providers: [MessageService]
})
export class TableUsersComponent {

    constructor(
      private userService: UserService,
      private messageService: MessageService,
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
        },
        error: (err) => {
          console.error('Error deleting user:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error deleting user',
          });
        }
      });
    }
}
