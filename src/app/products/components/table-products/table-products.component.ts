import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
	selector: 'app-table-products',
	imports: [RouterModule, CommonModule],
	templateUrl: './table-products.component.html',
})
export class TableProductsComponent {
  constructor(
    private productService: ProductService, 
    private authService: AuthService,
    private router: Router
  ) {
  }
  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  showAddButton() {
    return this.authService.isArtisan();
  }

  showEditButton() {
    return this.authService.isArtisan() || this.authService.isAdmin();
  }

  showDeleteButton() {
    return this.authService.isArtisan() || this.authService.isAdmin();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }

  goToProduct(id: number) {
    this.router.navigate(['/artisan/products', id, "edit"]);
  }
}