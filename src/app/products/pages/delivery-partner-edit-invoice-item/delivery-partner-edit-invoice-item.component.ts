import { Component, EventEmitter, Output } from '@angular/core';
import { EditInvoiceItemComponent } from "../../../invoice-items/components/edit-invoice-item/edit-invoice-item.component";

@Component({
  selector: 'app-delivery-partner-edit-invoice-item',
  imports: [EditInvoiceItemComponent],
  templateUrl: './delivery-partner-edit-invoice-item.component.html',
  styleUrl: './delivery-partner-edit-invoice-item.component.css'
})
export class DeliveryPartnerEditInvoiceItemComponent {
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  showErrorMessageEmit(message: string) {
    this.showErrorMessage.emit(message);
  }

  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
}
