import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  imports: [FormsModule, CommonModule],

})
export class EditProductComponent implements OnInit {
  productId!: number;
  product: Product = {
    name: '',
    description: '',
    price: 0,
    image: undefined,
    contactId: 0,
    id: 0,
  };
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {    
    this.productId = +this.route.snapshot.paramMap.get('id')!;
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

      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
        console.log('Selected file:', this.selectedFile);
      }

      console.log('Form data ready to be sent:', formData);
      this.productService.updateProduct(this.productId, formData).subscribe((data) => {
        console.log('Product updated:', data);
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('This Image : ', this.product.image);
      console.log('Selected file: ', this.selectedFile);
      this.product.image = this.selectedFile;
    }
  }
}
