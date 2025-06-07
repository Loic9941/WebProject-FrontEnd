import { Component, EventEmitter, Output } from '@angular/core';
import { TableProductsComponent } from '../../components/table-products/table-products.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artisan-table-products',
  imports: [TableProductsComponent, RouterLink],
  templateUrl: './artisan-table-products.component.html',
  styleUrl: './artisan-table-products.component.css'
})
export class ArtisanTableProductsComponent {
      @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
      
      ShowSuccessMessageEmit(message: string) {
        this.showSuccessMessage.emit(message);
      }
}
