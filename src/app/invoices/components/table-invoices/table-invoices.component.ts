import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Invoice } from '../../interfaces/invoice.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-invoices',
  imports: [CommonModule, RouterLink],
  templateUrl: './table-invoices.component.html',
  styleUrl: './table-invoices.component.css'
})
export class TableInvoicesComponent {
  constructor(
    private invoiceService: InvoiceService,
    private authService: AuthService
  ) {
  }

  invoices: Invoice[] = [];

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe((data) => {
      this.invoices = data;
      console.log(this.invoices);
    });
  }

  getPrice(invoice: Invoice) {
    let totalPrice = 0;
    invoice.invoiceItems.forEach((item) => {
      totalPrice += item.unitPrice * item.quantity;
    });
    return totalPrice;
  }

  getInvoiceStatus(invoice: Invoice) {
    return this.invoiceService.getInvoiceStatus(invoice);
  }
}
