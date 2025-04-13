import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../interfaces/invoice.interface';
import { InvoiceItem } from '../../../invoice-items/interfaces/invoice-item.interface';
import { InvoiceItemService } from '../../../invoice-items/services/invoice-item.service';

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
    private invoiceItemService: InvoiceItemService,
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
  
  getInvoiceItemStatus(invoiceItem: InvoiceItem) {
    return this.invoiceItemService.getInvoiceItemStatus(invoiceItem);
  }

  rateArticle(invoice: Invoice, invoiceItem: InvoiceItem) {
      if (invoiceItem.status !== 'delivered') {
        this.showErrorMessage.emit('Vous ne pouvez pas noter un article qui n\'est pas livré');
        return;
      }
      this.router.navigate(['/products/rate', invoiceItem.productId]);
  }
}
