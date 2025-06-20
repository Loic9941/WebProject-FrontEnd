import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(
    private productService: ProductService, 
    private authService: AuthService,
    private router: Router
  ) {
  }
  products: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
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
      this.showSuccessMessage.emit('Produit supprimé');
      this.getProducts();
    });
  }

  goToProduct(id: number) {
    if (this.authService.isArtisan()) {
      this.router.navigate(['/artisan/products', id, 'edit']);
    }
    else if (this.authService.isAdmin()) {
      this.router.navigate(['/admin/products', id, 'edit']);
    }
  }
}