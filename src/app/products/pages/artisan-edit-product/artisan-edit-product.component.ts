import { Component, EventEmitter, Output } from '@angular/core';
import { EditProductComponent } from '../../components/edit-product/edit-product.component';

@Component({
  selector: 'app-artisan-edit-product',
  imports: [EditProductComponent],
  templateUrl: './artisan-edit-product.component.html',
  styleUrl: './artisan-edit-product.component.css'
})
export class ArtisanEditProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  showSuccessMessageEmit(message: string) {
    this.showSuccessMessage.emit(message);
  }
}
