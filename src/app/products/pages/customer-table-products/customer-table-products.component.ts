import { Component } from '@angular/core';
import { ShopProductsComponent } from '../../components/shop-products/shop-products.component';

@Component({
  selector: 'app-customer-table-products',
  imports: [ShopProductsComponent],
  templateUrl: './customer-table-products.component.html',
  styleUrl: './customer-table-products.component.css'
})
export class CustomerTableProductsComponent {

}
