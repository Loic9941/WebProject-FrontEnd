import { Component, EventEmitter, Output } from '@angular/core';
import { EditInvoiceItemComponent } from "../../../invoice-items/components/edit-invoice-item/edit-invoice-item.component";

@Component({
  selector: 'app-admin-edit-invoice-item',
  imports: [EditInvoiceItemComponent],
  templateUrl: './admin-edit-invoice-item.component.html',
  styleUrl: './admin-edit-invoice-item.component.css'
})
export class AdminEditInvoiceItemComponent {
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  showErrorMessageEmit(message: string) {
    this.showErrorMessage.emit(message);
  }

  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
}
