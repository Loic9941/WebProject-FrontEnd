import { Component, EventEmitter, Output } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../interfaces/invoice.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-invoice',
  imports: [FormsModule, CommonModule,],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css',
  providers: []
})
export class EditInvoiceComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter
  @Output() cartUpdated: EventEmitter<number> = new EventEmitter<number>();
  invoiceId!: number;
  totalPrice!: number;
  invoice: Invoice = {
    id: 0,
    invoiceItems: [],
  };
  constructor(
    private invoiceService: InvoiceService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.invoiceId = +this.route.snapshot.paramMap.get('id')!;
    if (this.invoiceId) {
      this.getInvoice();
    }
  }

  getInvoice(): void {
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe((data) => {
      this.invoice = data;
      this.totalPrice = this.invoice.invoiceItems.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
      let sum = 0;
      for (let i = 0; i < this.invoice.invoiceItems.length; i++) {
        sum += this.invoice.invoiceItems[i].quantity;
      }
      this.cartUpdated.emit(sum);
    });
  }

  saveInvoice(invoiceForm: NgForm) {
    console.log(invoiceForm);
  }

  deleteItem(invoiceItemId : number) {
    this.invoiceService.deleteInvoiceItem(invoiceItemId)
    .subscribe(
      (response) => {
        this.getInvoice();
        this.showSuccessMessage.emit("Produit supprimé du panier");
       },
      (error) => {
        this.showErrorMessage.emit("Erreur lors de la suppression du produit");
      }
    );
  }
}
