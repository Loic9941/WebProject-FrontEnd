import { Component, EventEmitter, Output } from '@angular/core';
import { EditProductComponent } from "../../components/edit-product/edit-product.component";

@Component({
  selector: 'app-admin-edit-product',
  imports: [EditProductComponent],
  templateUrl: './admin-edit-product.component.html',
  styleUrl: './admin-edit-product.component.css'
})
export class AdminEditProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
}
