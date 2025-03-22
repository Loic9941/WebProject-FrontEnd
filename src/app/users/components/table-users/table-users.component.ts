import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-table-users',
	imports: [RouterModule, CommonModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent {

    constructor(private userService: UserService, private authService: AuthService) {
    }
    users: User[] = [];

    ngOnInit() {
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      });
    }
}
