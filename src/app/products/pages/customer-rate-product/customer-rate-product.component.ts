import { Component, EventEmitter, Output } from '@angular/core';
import { RateProductComponent } from "../../components/rate-product/rate-product.component";

@Component({
  selector: 'app-customer-rate-product',
  imports: [RateProductComponent],
  templateUrl: './customer-rate-product.component.html',
  styleUrl: './customer-rate-product.component.css'
})
export class CustomerRateProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();

  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
  showErrorMessageEmit(message: string) {
    this.showErrorMessage.emit(message);
  }
}
