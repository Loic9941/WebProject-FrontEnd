import { Component, EventEmitter, Output } from '@angular/core';
import { TableRatingsComponent } from "../../components/table-rating/table-ratings.component";

@Component({
  selector: 'app-admin-table-ratings',
  imports: [TableRatingsComponent],
  templateUrl: './admin-table-ratings.component.html',
  styleUrl: './admin-table-ratings.component.css'
})
export class AdminTableRatingsComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  
  ShowSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
  

}
