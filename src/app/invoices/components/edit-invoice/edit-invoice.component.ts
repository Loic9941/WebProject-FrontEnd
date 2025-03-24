import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../interfaces/invoice.interface';
import { ToastModule } from 'primeng/toast';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-invoice',
  imports: [ToastModule, FormsModule, CommonModule,],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css',
  providers: [MessageService]
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

  saveInvoice(invoiceForm: NgForm) {
    console.log(invoiceForm);
  }
}
