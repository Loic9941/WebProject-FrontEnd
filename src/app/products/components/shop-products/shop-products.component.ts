import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environment';

@Component({
  selector: 'app-shop-products',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './shop-products.component.html',
  styleUrl: './shop-products.component.css'
})
export class ShopProductsComponent {
  constructor(
    private productService: ProductService, 
  )
  {}
  apiUrlImage = environment.API_URL_IMAGE;
  selectedCategory: string = '';
  minPrice: number = 0;
  maxPrice: number = 0;
  searchQuery: string = '';
  orderBy: string = 'name';
  
  products: Product[] = [];
  categories: string[] = [];

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  getCategories() {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getProducts() {
    this.productService.getProducts(
      this.minPrice,
      this.maxPrice,
      this.selectedCategory,
      this.searchQuery,
      this.orderBy
    ).subscribe((data) => {
      this.products = data;
    });
  }

  private filterTimeout: any;

  applyFilters() {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    this.filterTimeout = setTimeout(() => {
      this.getProducts();
    }, 500);
  }

  clearFilters() {
    this.selectedCategory = '';
    this.minPrice = 0;
    this.maxPrice = 0;
    this.searchQuery = '';
    this.orderBy = 'name';
    this.getProducts();
  }
}
