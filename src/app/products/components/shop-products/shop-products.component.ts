import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Product } from '../../interfaces/product.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-products',
  imports: [RouterModule, CommonModule],
  templateUrl: './shop-products.component.html',
  styleUrl: './shop-products.component.css'
})
export class ShopProductsComponent {
  constructor(
    private productService: ProductService, 
    private authService: AuthService) {
  }
  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
