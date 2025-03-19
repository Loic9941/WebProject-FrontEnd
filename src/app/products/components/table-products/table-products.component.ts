import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';

interface Product {
	id: number;
  name: string;
  price: number;
}

@Component({
	selector: 'ngbd-table-basic',
	imports: [DecimalPipe, RouterModule],
	templateUrl: './table-products.component.html',
})
export class TableProductsComponent {
  
  /**
   *
   */
  constructor(private productsService: ProductsService) {
  }
  products: Product[] = [];

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}