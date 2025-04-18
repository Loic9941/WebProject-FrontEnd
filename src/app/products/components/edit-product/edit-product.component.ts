import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  imports: [FormsModule, CommonModule, RouterLink],
  providers: []

})
export class EditProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  productId!: number;
  product: Product = {
    name: '',
    description: '',
    price: 0,
    image: undefined,
    contactId: 1, //Fix Me Later
    id: 0,
    ratings: []
  };
  selectedFile: File | null = null;
  newCategoryName: string = '';
  categories: string[] = [];
  newCategory: string = '';

  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
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
      if (this.product.image) {
        this.product.image = 'data:image/jpeg;base64,' + this.product.image
      }
    });
  }

  saveProduct(form: NgForm): void {
    if (form.valid) {
      const formData = new FormData();
      formData.append('name', this.product.name);
      formData.append('description', this.product.description || '');
      formData.append('price', this.product.price.toString());
      formData.append('category', this.product.category || '');

      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
      if (this.productId) {
        this.productService.updateProduct(this.productId, formData).subscribe((data) => {
          this.showSuccess();
        });
      }
      else {
        this.productService.addProduct(formData).subscribe((data) => {
          this.showSuccess();
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
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.product.image = reader.result as string; // Update product.image with the preview URL
      };
      reader.readAsDataURL(this.selectedFile);
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
}
