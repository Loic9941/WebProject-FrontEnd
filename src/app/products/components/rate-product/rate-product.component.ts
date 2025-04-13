import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, OutletContext, Router, RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './rate-product.component.html',
  styleUrl: './rate-product.component.css'
})
export class RateProductComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  productId!: number;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    contactId: 0,
    image: undefined
  };
  productRateForm : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {  
    this.productRateForm = new FormGroup({
      comment: new FormControl<string>(''),
      rating: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(5)]),
    });
      
  }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  saveRatingProduct() {
    this.productService.rateProduct(
      this.productId, 
      this.productRateForm.get('rating')!.value!,
      this.productRateForm.get('comment')!.value!
    ).subscribe({
      next: (response) => {
        this.showSuccessMessage.emit('Produit noté avec succès');
        this.router.navigate(["/invoices"]);
      },
      error: (error) => {
        if(error.status === 409) {
          this.showErrorMessage.emit('Vous avez déjà noté ce produit');
        }
        else{
          this.showErrorMessage.emit('Erreur lors de la notation du produit');
        }
      }
    });
          
  }
}
