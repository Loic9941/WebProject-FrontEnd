import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { InvoiceItemService } from '../../services/invoice-item.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InvoiceItem } from '../../interfaces/invoice-item.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-edit-invoice-item',
  imports: [
    FormsModule, 
    CommonModule, 
    ReactiveFormsModule,
    RouterLink,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule, 
  ],
  templateUrl: './edit-invoice-item.component.html',
  styleUrl: './edit-invoice-item.component.css',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' } 

  ]
})
export class EditInvoiceItemComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  
  invoiceItemId!: number;
  invoiceItem: InvoiceItem = {
    id: 0,
    quantity: 0,
    unitPrice: 0,
    productId: 0,
    createdAt: '',
    status: '',
    productName: '',
    invoiceId: 0,
  };

  constructor(
    private invoiceItemService: InvoiceItemService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }
  

  ngOnInit() {
    this.invoiceItemId = +this.route.snapshot.paramMap.get('id')!;
    if (this.invoiceItemId) {
      this.getInvoiceItem();
    }
  }

  getInvoiceItem() {
    this.invoiceItemService.getInvoiceItemById(this.invoiceItemId).subscribe((data) => {
      this.invoiceItem = data;
    });
  }

  updateInvoiceItem() {
    console.log("coucou");
  }

  markAsReadyToBeShipped() {
    this.invoiceItemService.markAsReadyToBeShipped(this.invoiceItemId).subscribe({
      next: (response) => {
        this.getInvoiceItem();
        this.showSuccessMessage.emit("commande marquée comme prête à être expédiée");
      },
      error: (error) => {
        this.showErrorMessage.emit("Erreur lors de la mise à jour de la commande");
      }
    });
  }

  showMarkAsPickedUpButton() {
    return (this.invoiceItem.status === 'readyToBePickedUp' && 
      this.authService.isDeliveryPartner());
  }

  markAsPickedUp() {
    this.invoiceItemService.markAsPickedUp(this.invoiceItemId, this.invoiceItem.estimatedDeliveryDate).subscribe({
      next: (response) => {
        this.getInvoiceItem();
        this.showSuccessMessage.emit("commande marquée comme prise en charge par le transporteur");
      },
      error: (error) => {
        this.showErrorMessage.emit("Erreur lors de la mise à jour de la commande");
      }
    });
  }

  markAsInTransit() {
    this.invoiceItemService.markAsInTransit(this.invoiceItemId, this.invoiceItem.estimatedDeliveryDate).subscribe({
      next: (response) => {
        this.getInvoiceItem();
        this.showSuccessMessage.emit("commande marquée comme en transit");
      },
      error: (error) => {
        this.showErrorMessage.emit("Erreur lors de la mise à jour de la commande");
      }
    });
  }

  showMarkAsReadyToBeShippedButton(){
    return (this.invoiceItem.status === 'inPreparation' && 
      this.authService.isArtisan());
  }

  showMarkAsInTransitButton() {
    return (this.invoiceItem.status === 'pickedUp' && 
      this.authService.isDeliveryPartner());
  }

  showMarkAsDeliveredButton() {
    return (this.invoiceItem.status === 'inTransit' && 
      this.authService.isDeliveryPartner());
  }

  markAsDelivered() {
    this.invoiceItemService.markAsDelivered(this.invoiceItemId).subscribe({
      next: (response) => {
        this.getInvoiceItem();
        this.showSuccessMessage.emit("commande marquée comme livrée");
      },
      error: (error) => {
        this.showErrorMessage.emit("Erreur lors de la mise à jour de la commande");
      }
    });
  }

  shouldDisableDatePicker(){
    return (this.invoiceItem.status == 'delivered' || this.invoiceItem.status == 'inTransit');
  }


  showEstimatedDeliveryDate() {
    return this.authService.isDeliveryPartner();
  }

  showRealDeliveryDate() {
    return (this.invoiceItem.status == 'delivered');
  }

  getInvoiceItemStatus() {
    return this.invoiceItemService.getInvoiceItemStatus(this.invoiceItem);   
  }
}
