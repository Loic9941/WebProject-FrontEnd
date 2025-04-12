import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../interfaces/invoice.interface';
import { InvoiceItem } from '../../interfaces/invoice-item.interface';

@Component({
  selector: 'app-view-invoice',
  imports: [RouterLink, CommonModule],
  templateUrl: './view-invoice.component.html',
  styleUrl: './view-invoice.component.css'
})
export class ViewInvoiceComponent {
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  
  invoiceId!: number;
  invoice: any = {
    id: 0,
    invoiceItems: [],
  };
  totalPrice!: number;

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.invoiceId = +this.route.snapshot.paramMap.get('id')!;
    
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe((data) => {
      this.invoice = data;
      this.totalPrice = 0;
      for (let i = 0; i < this.invoice.invoiceItems.length; i++) {
        this.totalPrice += this.invoice.invoiceItems[i].quantity * this.invoice.invoiceItems[i].unitPrice;
      }
    });
  }

  getInvoiceStatus(invoice: Invoice) {
    return this.invoiceService.getInvoiceStatus(invoice);
  }

  rateArticle(invoice: Invoice, invoiceItem: InvoiceItem) {
    if(invoice.status !== 'DELIVERED') { // FIx me : this will change
      this.showErrorMessage.emit("Vous devez attendre Id'avoir reçu l'article pour le noter");
    }
    else {
      this.router.navigate(['/products/rate', invoiceItem.productId]);
    }
  }
}
