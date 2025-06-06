import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { Rating } from '../../interfaces/rating.interface';
import { RatingService } from '../../services/rating.service';
import { environment } from '../../../environment';


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
  apiUrlImage = environment.API_URL_IMAGE;
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
    });
  }

  addToInvoice(productId: number) {
    this.productService.addToInvoice(productId).subscribe((data) => {
      this.showSuccessMessage.emit("Produit ajouté au panier");
    });
  }

  showAddToInvoiceButton() {
    return this.authService.isCustomer();
  }
}