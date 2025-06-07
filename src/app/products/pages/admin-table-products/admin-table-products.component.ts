import { Component, EventEmitter, Output } from '@angular/core';
import { TableProductsComponent } from "../../components/table-products/table-products.component";

@Component({
  selector: 'app-admin-table-products',
  imports: [TableProductsComponent],
  templateUrl: './admin-table-products.component.html',
  styleUrl: './admin-table-products.component.css'
})
export class AdminTableProductsComponent {
    @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
    
    ShowSuccessMessageEmit(message: string) {
      this.showSuccessMessage.emit(message);
    }
}
