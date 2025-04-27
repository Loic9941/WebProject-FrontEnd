import { Component } from '@angular/core';
import { InvoiceItem } from '../../../invoice-items/interfaces/invoice-item.interface';

@Component({
  selector: 'app-table-best-rated',
  imports: [],
  templateUrl: './table-best-rated.component.html',
  styleUrl: './table-best-rated.component.css'
})
export class TableBestRatedComponent {
    invoiceItems : InvoiceItem[] = [];

}
