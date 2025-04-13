import { Component } from '@angular/core';
import { InvoiceItemService } from '../../services/invoice-item.service';
import { InvoiceItem } from '../../interfaces/invoice-item.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-invoice-items',
  imports: [
    CommonModule, 
    RouterLink
  ],
  templateUrl: './table-invoice-items.component.html',
  styleUrl: './table-invoice-items.component.css'
})
export class TableInvoiceItemsComponent {
  constructor(
    private invoiceItemService: InvoiceItemService,
  ) {
  }

  invoiceItems: InvoiceItem[] = [];
  

  ngOnInit() {
    this.invoiceItemService.getInvoiceItems().subscribe((data) => {
      this.invoiceItems = data;
      console.log(this.invoiceItems);

    });
  }

  getInvoiceItemStatus(invoiceItem: InvoiceItem) {
    return this.invoiceItemService.getInvoiceItemStatus(invoiceItem);
  }
}
