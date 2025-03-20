import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  imports: [CommonModule, RouterLink]
})
export class ViewProductComponent implements OnInit {
  productId!: number;
  product: Product = {
    name: '',
    description: '',
    price: 0,
    image: undefined,
    contactId: 1, //Fix Me Later
    id: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
      if (this.product.image) {
        this.product.image = 'data:image/jpeg;base64,' + this.product.image
      }
    });

  }
}