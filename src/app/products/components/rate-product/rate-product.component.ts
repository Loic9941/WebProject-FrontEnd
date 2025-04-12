import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-rate-product',
  imports: [
    CommonModule, 
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './rate-product.component.html',
  styleUrl: './rate-product.component.css'
})
export class RateProductComponent {
  rating: number = 0;
  comment: string = '';
  productId!: number;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    contactId: 0,
    image: undefined
  };
  productRateForm : NgForm = new NgForm([], []);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {  
  }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  saveRatingProduct() {
    // Logic to submit the rating and comment
    console.log('Rating:', this.rating);
    console.log('Comment:', this.comment);
    // Reset the form after submission
    this.rating = 0;
    this.comment = '';
  }
}
