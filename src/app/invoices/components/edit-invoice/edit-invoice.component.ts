import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../interfaces/invoice.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-invoice',
  imports: [FormsModule, CommonModule,],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css',
  providers: []
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
    });
  }

  saveInvoice(invoiceForm: NgForm) {
    console.log(invoiceForm);
  }
}
