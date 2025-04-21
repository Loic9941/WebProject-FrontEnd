import { Component, EventEmitter, Output } from '@angular/core';
import { ViewProductComponent } from '../../components/view-product/view-product.component';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-customer-view-product',
  imports: [ViewProductComponent],
  templateUrl: './customer-view-product.component.html',
  styleUrl: './customer-view-product.component.css'
})
export class CustomerViewProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }

  cartUpdatedEmit(cartCount: number) {
    this.cartUpdated.emit(cartCount);
  }
}
