import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Invoice } from '../../../invoices/interfaces/invoice.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { Rating } from '../../interfaces/rating.interface';

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
    invoiceItems: [],
  };

  ratings : Rating[] = [];
  rating: number = 0; // Initialize rating to 0
  numberOfRatings: number = 0; // Initialize numberOfRatings to 0
  @Output() cartUpdated = new EventEmitter<Number>(); // EventEmitter to notify parent
  @Output() showSuccessMessage = new EventEmitter<String>();


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
      if (this.product.image) {
        this.product.image = 'data:image/jpeg;base64,' + this.product.image
      }
      this.ratings = this.product.invoiceItems.map((item) => item.rating).filter((rating) => rating !== undefined) as Rating[];

      this.numberOfRatings = this.ratings.length;
      this.ratings.forEach((rating) => {
        this.rating += rating.rate;
      });
      this.rating = this.numberOfRatings > 0 ? this.rating / this.numberOfRatings : 0;
    });
  }

  addToInvoice(productId: number) {
    this.productService.addToInvoice(productId).subscribe((data) => {
      const invoice : Invoice = data;
      let sum = 0;
      for (let i = 0; i < invoice.invoiceItems.length; i++) {
        sum += invoice.invoiceItems[i].quantity;
      }
      this.cartUpdated.emit(sum);
      this.showSuccessMessage.emit("Produit ajouté au panier");
    });
  }
  showAddToInvoiceButton() {
    return this.authService.isCustomer();
  }
  
  getStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return Array(fullStars).fill(0);
  }
}