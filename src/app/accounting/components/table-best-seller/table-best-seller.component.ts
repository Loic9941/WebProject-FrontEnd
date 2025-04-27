import { Component } from '@angular/core';
import { InvoiceItem } from '../../../invoice-items/interfaces/invoice-item.interface';

@Component({
  selector: 'app-table-best-seller',
  imports: [],
  templateUrl: './table-best-seller.component.html',
  styleUrl: './table-best-seller.component.css'
})
export class TableBestSellerComponent {
  invoiceItems : InvoiceItem[] = [];
}
