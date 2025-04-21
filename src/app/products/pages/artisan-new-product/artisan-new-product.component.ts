import { Component, EventEmitter, Output } from '@angular/core';
import { EditProductComponent } from '../../components/edit-product/edit-product.component';

@Component({
  selector: 'app-artisan-new-product',
  imports: [EditProductComponent],
  templateUrl: './artisan-new-product.component.html',
  styleUrl: './artisan-new-product.component.css'
})
export class ArtisanNewProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
}
