import { Component } from '@angular/core';
import { TableInvoiceItemsComponent } from "../../../invoice-items/components/table-invoice-items/table-invoice-items.component";

@Component({
  selector: 'app-admin-table-invoice-items',
  imports: [TableInvoiceItemsComponent],
  templateUrl: './admin-table-invoice-items.component.html',
  styleUrl: './admin-table-invoice-items.component.css'
})
export class AdminTableInvoiceItemsComponent {

}
