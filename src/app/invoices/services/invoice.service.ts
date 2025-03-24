import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private apiService: ApiService) { }

  getPendingInvoice() {
    return this.apiService.get('invoice/getPendingInvoice');
  }

  getInvoiceById(id: number): Observable<any>  {
    return this.apiService.get(`invoice/${id}`);
  }

  deleteInvoiceItem(invoiceItemId: number) {
    return this.apiService.delete(`invoiceItem`,invoiceItemId);
  }
}
