import { Component, EventEmitter, Output } from '@angular/core';
import { ViewInvoiceComponent } from '../../components/view-invoice/view-invoice.component';

@Component({
  selector: 'app-customer-view-invoice',
  imports: [ViewInvoiceComponent],
  templateUrl: './customer-view-invoice.component.html',
  styleUrl: './customer-view-invoice.component.css'
})
export class CustomerViewInvoiceComponent {
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();

  showErrorMessageEmit(message: string) {
    this.showErrorMessage.emit(message);
  }
}
