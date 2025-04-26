import { Component, EventEmitter, Output } from '@angular/core';
import { TableUsersComponent } from "../../components/table-users/table-users.component";

@Component({
  selector: 'app-admin-table-users',
  imports: [TableUsersComponent],
  templateUrl: './admin-table-users.component.html',
  styleUrl: './admin-table-users.component.css'
})
export class AdminTableUsersComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  emitShowSuccessMessage(message: string) {
    this.showSuccessMessage.emit(message);
  }

  emitShowErrorMessage(message: string) {
    this.showErrorMessage.emit(message);
  }
}
