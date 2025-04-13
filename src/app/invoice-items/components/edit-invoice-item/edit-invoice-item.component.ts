import { Component } from '@angular/core';
import { InvoiceItemService } from '../../services/invoice-item.service';

@Component({
  selector: 'app-edit-invoice-item',
  imports: [],
  templateUrl: './edit-invoice-item.component.html',
  styleUrl: './edit-invoice-item.component.css'
})
export class EditInvoiceItemComponent {
  constructor(
    private invoiceItemService: InvoiceItemService,
  ) {
  }

  ngOnInit() {

  }

}
