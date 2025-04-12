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
    return this.apiService.get('invoice/getPendingInvoice');
  }

  getInvoices(): Observable<any> {
    return this.apiService.get('invoice');
  }

  getInvoiceById(id: number): Observable<any>  {
    return this.apiService.get(`invoice/${id}`);
  }

  deleteInvoiceItem(invoiceItemId: number) {
    return this.apiService.delete(`invoiceItem`,invoiceItemId);
  }

  markInvoiceAsPaid(invoiceId: number, deliveryPartnerId: number) {
    let data = {
      deliveryPartnerId: deliveryPartnerId
    };
    return this.apiService.put(`invoice/${invoiceId}/markAsPaid`, data);
  }

    getInvoiceStatus(invoice: Invoice) {
      if (invoice.status === 'pending') {
        return 'Dans le panier';
      } else if (invoice.status === 'paid') {
        return 'Payée';
      } else if (invoice.status === 'Shipped') {
        return 'En cours de livraison';
      } else if (invoice.status === 'delivered') {
        return 'Livrée';
      }
      return 'Statut inconnu';
    }

}
