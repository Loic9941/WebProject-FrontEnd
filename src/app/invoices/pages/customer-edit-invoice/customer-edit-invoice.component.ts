import { Component, EventEmitter, Output } from '@angular/core';
import { EditInvoiceComponent } from '../../components/edit-invoice/edit-invoice.component';

@Component({
  selector: 'app-customer-edit-invoice',
  imports: [EditInvoiceComponent],
  templateUrl: './customer-edit-invoice.component.html',
  styleUrl: './customer-edit-invoice.component.css'
})
export class CustomerEditInvoiceComponent {
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  showErrorMessageEmit(message: string) {
    this.showErrorMessage.emit(message);
  }
  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
  cartUpdatedEmit(cartCount: number) {
    this.cartUpdated.emit(cartCount);
  }
}
