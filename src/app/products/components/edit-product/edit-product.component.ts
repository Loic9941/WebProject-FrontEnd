import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';
import { environment } from '../../../environment';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  imports: [FormsModule, CommonModule],
  providers: []

})
export class EditProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  apiUrlImage = environment.API_URL_IMAGE;
  productId!: number;
  product: Product = {
    name: '',
    description: '',
    price: 0,
    image: undefined,
    artisteId: 0,
    id: 0,
    category: '',
    createdAt: ''
  };
  selectedFile: File | null = null;
  newCategoryName: string = '';
  categories: string[] = [];
  newCategory: string = '';

  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {    
    this.getCategories();
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    if (this.productId) {
      this.getProduct();
    }
  }

  getProduct(): void {
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  saveProduct(form: NgForm): void {
    if (form.valid) {
      const formData = new FormData();
      formData.append('name', this.product.name);
      formData.append('description', this.product.description || '');
      formData.append('price', this.product.price.toString());
      formData.append('category', this.product.category || '');
      formData.append('available', this.product.available ? 'true' : 'false');

      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
      if (this.productId) {
        this.productService.updateProduct(this.productId, formData).subscribe((data) => {
          this.showSuccess();
          this.redirectToProducts();
        });
      }
      else {
        this.productService.addProduct(formData).subscribe((data) => {
          this.showSuccess();
          this.redirectToProducts();
        });
      }
    }
  }

  getCategories(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.product.image = '';
      this.selectedFile = input.files[0];      
    }
  }

  showSuccess() {
    this.showSuccessMessage.emit("Produit sauvegardé");
  }

  addCategory() {
    if (this.newCategory.trim()) {
        // Add the new category to the categories array
        this.categories.push(this.newCategory.trim());

        // Automatically select the new category
        this.product.category = this.newCategory.trim();

        // Clear the input field
        this.newCategory = '';
    } else {
        alert('Veuillez entrer un nom pour la nouvelle catégorie.');
    }
  }

  redirectToProducts(){
    if (this.authService.isArtisan()){
      this.router.navigate(['/artisan/products']);
    }
    else if (this.authService.isAdmin()){
      this.router.navigate(['/admin/products']);
    }
  }
}