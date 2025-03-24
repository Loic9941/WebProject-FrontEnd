import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../interfaces/invoice.interface';

@Component({
  selector: 'app-edit-invoice',
  imports: [],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css'
})
export class EditInvoiceComponent {
  invoice: Invoice = {
    id: 0,
    invoiceItems: [],
  };
  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.invoiceService.getPendingInvoice().subscribe((data: any) => {
      console.log(data);
    });
  }
}
