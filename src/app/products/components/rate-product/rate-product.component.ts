import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, OutletContext, Router, RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { InvoiceItemService } from '../../../invoice-items/services/invoice-item.service';
import { RatingService } from '../../services/rating.service';
import { Invoice } from '../../../invoices/interfaces/invoice.interface';
import { InvoiceItem } from '../../../invoice-items/interfaces/invoice-item.interface';

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
  invoiceItemId!: number;
  invoiceItem: InvoiceItem = {
    id: 0,
    quantity: 0,
    unitPrice: 0,
    createdAt: '',
    productId: 0,
    status: '',
    productName: '',
    invoiceId: 0
  }

  productRateForm : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private invoiceItemService: InvoiceItemService,
    private ratingService: RatingService,
    private router: Router
  ) {  
    this.productRateForm = new FormGroup({
      text: new FormControl<string>(''),
      rating: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(5)]),
    });
      
  }

  ngOnInit(): void {
    this.invoiceItemId = +this.route.snapshot.paramMap.get('id')!;
    this.invoiceItemService.getInvoiceItemById(this.invoiceItemId).subscribe((data) => {
      this.invoiceItem = data;
    });
  }

  saveRatingProduct() {
    this.ratingService.rateInvoiceItem(
      this.invoiceItemId, 
      this.productRateForm.get('rating')!.value!,
      this.productRateForm.get('text')!.value!
    ).subscribe({
      next: (response) => {
        this.showSuccessMessage.emit('Produit noté avec succès');
        this.router.navigate(["/customer/invoices"]);
      },
      error: (error) => {
        if(error.status === 409) {
          this.showErrorMessage.emit('Vous avez déjà noté cette commande');
        }
        else{
          this.showErrorMessage.emit('Erreur lors de la notation du produit');
        }
      }
    });
          
  }
}
