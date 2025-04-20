import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';
import { Invoice } from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private apiService: ApiService) { }

  getPendingInvoice() {
    return this.apiService.get('invoices/getPendingInvoice');
  }

  getInvoices(): Observable<any> {
    return this.apiService.get('invoicse');
  }

  getInvoiceById(id: number): Observable<any>  {
    return this.apiService.get(`invoices/${id}`);
  }

  //should be moved to invoiceItem service
  deleteInvoiceItem(invoiceItemId: number) {
    return this.apiService.delete(`invoiceItems`,invoiceItemId);
  }

  markInvoiceAsPaid(invoiceId: number, deliveryPartnerId: number) {
    let data = {
      deliveryPartnerId: deliveryPartnerId
    };
    return this.apiService.put(`invoices/${invoiceId}/markAsPaid`, data);
  }

  getInvoiceStatus(invoice: Invoice) {
    if (invoice.status === 'pending') {
      return 'Dans le panier';
    } else if (invoice.status === 'paid') {
      return 'Payée';
    }
    return 'Statut inconnu';
  }
}
