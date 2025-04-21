import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Invoice } from '../../../invoices/interfaces/invoice.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { Rating } from '../../interfaces/rating.interface';
import { RatingService } from '../../services/rating.service';

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
    id: 0,
    artisteId: 0,
    category: '',
    createdAt: ''
  };

  ratings : Rating[] = [];
  rating: number = 0; 
  numberOfRatings: number = 0; 
  @Output() cartUpdated = new EventEmitter<number>();
  @Output() showSuccessMessage = new EventEmitter<string>();


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private ratingService: RatingService,
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.getProductById(this.productId);
    this.getRatings(this.productId);
  }

  getRatings(productId: number) {
    this.ratingService.getRatings(productId).subscribe((data) => {
      this.ratings = data;
      this.numberOfRatings = this.ratings.length;
      let sum = 0;
      for (let i = 0; i < this.ratings.length; i++) {
        sum += this.ratings[i].rate;
      }
      this.rating = sum / this.numberOfRatings;
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      if (this.product.image) {
        this.product.image = 'data:image/jpeg;base64,' + this.product.image
      }
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
}