import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TableProductsService } from './table-products.service';

interface Product {
	id: number;
  name: string;
  price: number;
}

@Component({
	selector: 'ngbd-table-basic',
	imports: [DecimalPipe],
	templateUrl: './table-products.component.html',
})
export class TableProductsComponent {
  
  /**
   *
   */
  constructor(private tableProductsService: TableProductsService) {
  }
  products: Product[] = [];

  ngOnInit() {
    this.tableProductsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}