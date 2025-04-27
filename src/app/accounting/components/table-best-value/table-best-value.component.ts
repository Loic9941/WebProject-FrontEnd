import { Component } from '@angular/core';
import { InvoiceItem } from '../../../invoice-items/interfaces/invoice-item.interface';

@Component({
  selector: 'app-table-best-value',
  imports: [],
  templateUrl: './table-best-value.component.html',
  styleUrl: './table-best-value.component.css'
})
export class TableBestValueComponent {
  invoiceItems : InvoiceItem[] = [];
}
