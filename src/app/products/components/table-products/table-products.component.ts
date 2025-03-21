import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';



@Component({
	selector: 'ngbd-table-basic',
	imports: [RouterModule, CommonModule, ButtonModule],
	templateUrl: './table-products.component.html',
})
export class TableProductsComponent {
  
  /**
   *
   */
  constructor(private productService: ProductService) {
  }
  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}