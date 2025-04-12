import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../interfaces/invoice.interface';

@Component({
  selector: 'app-view-invoice',
  imports: [RouterLink, CommonModule],
  templateUrl: './view-invoice.component.html',
  styleUrl: './view-invoice.component.css'
})
export class ViewInvoiceComponent {
  invoiceId!: number;
  invoice: any = {
    id: 0,
    invoiceItems: [],
  };
  totalPrice!: number;

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    
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

  rateArticle(invoiceItem: any) {
    // Logic to rate the article
    console.log('Rate article:', invoiceItem);
  }
}
