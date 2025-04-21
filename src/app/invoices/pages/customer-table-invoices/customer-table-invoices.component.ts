import { Component } from '@angular/core';
import { TableInvoicesComponent } from '../../components/table-invoices/table-invoices.component';

@Component({
  selector: 'app-customer-table-invoices',
  imports: [TableInvoicesComponent],
  templateUrl: './customer-table-invoices.component.html',
  styleUrl: './customer-table-invoices.component.css'
})
export class CustomerTableInvoicesComponent {

}
